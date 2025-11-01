"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Loader,
  CalendarX,
} from "lucide-react";
import api from "@/lib/api";

type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface Booking {
  booking_id: number;
  service_name: string;
  shop_name: string;
  stylist_name: string;
  booking_date: string;
  slot_time: string;
  total_amount: number;
  status: BookingStatus;
  is_home_service: boolean;
  customer_address?: string;
}

export default function CustomerBookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"active" | "past">("active");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      // Get customer ID from localStorage
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);
      const customerId = user.id || user.customer_id;

      const response = await api.get("/bookings", {
        params: { customer_id: customerId },
      });

      // Transform data to match component interface
      const transformedBookings = (response.data || []).map((booking: any) => ({
        booking_id: booking.booking_id,
        service_name: booking.service?.name || "Service",
        shop_name:
          booking.owner?.shop_name || booking.owner?.full_name || "Shop",
        stylist_name: booking.stylist?.name || "Not assigned",
        booking_date: booking.appointment_date,
        slot_time: booking.appointment_start,
        total_amount: booking.service?.base_price || 0,
        status: booking.status,
        is_home_service: booking.is_home_visit,
        customer_address: booking.customer_address,
      }));

      setBookings(transformedBookings);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId: number) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    try {
      await api.post(`/bookings/${bookingId}/cancel`);
      // Refresh bookings
      fetchBookings();
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      alert("Failed to cancel booking");
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "active") {
      return ["pending", "confirmed"].includes(booking.status);
    } else {
      return ["completed", "cancelled"].includes(booking.status);
    }
  });

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: BookingStatus) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Loader className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push("/customer/home")}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>

          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setFilter("active")}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                filter === "active"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Active Bookings
            </button>
            <button
              onClick={() => setFilter("past")}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                filter === "past"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Past Bookings
            </button>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredBookings.length > 0 ? (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.booking_id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {booking.service_name}
                        </h3>
                        <p className="text-gray-600">{booking.shop_name}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {getStatusIcon(booking.status)}
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span>
                          {new Date(booking.booking_date).toLocaleDateString(
                            "en-IN",
                            {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span>{booking.slot_time}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-purple-600" />
                        <span>{booking.stylist_name}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span>
                          {booking.is_home_service
                            ? "Home Service"
                            : "At Salon"}
                        </span>
                      </div>
                    </div>

                    {booking.is_home_service && booking.customer_address && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                        <strong>Address:</strong> {booking.customer_address}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-purple-600">
                      ₹{booking.total_amount}
                    </div>

                    {booking.status === "pending" && (
                      <button
                        onClick={() => handleCancelBooking(booking.booking_id)}
                        className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 font-medium transition-colors"
                      >
                        Cancel Booking
                      </button>
                    )}

                    {booking.status === "confirmed" && (
                      <div className="text-sm text-green-700 font-medium">
                        ✓ Confirmed
                      </div>
                    )}

                    {booking.status === "completed" && (
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
                        Book Again
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarX className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {filter} bookings
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === "active"
                ? "You don't have any active bookings"
                : "You haven't completed any bookings yet"}
            </p>
            <button
              onClick={() => router.push("/customer/home")}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 font-semibold"
            >
              Browse Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
