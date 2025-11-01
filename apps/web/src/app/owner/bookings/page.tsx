"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter,
  Search,
  Home,
  Store,
} from "lucide-react";
import api from "@/lib/api";

interface Booking {
  booking_id: number;
  booking_ref: string;
  customer: {
    first_name: string;
    last_name: string;
    phone: string;
  };
  service: {
    name: string;
    duration_minutes: number;
    base_price: number;
  };
  stylist?: {
    name: string;
  };
  appointment_date: string;
  appointment_start: string;
  appointment_end: string;
  status: string;
  is_home_visit: boolean;
  payment?: {
    status: string;
    amount: number;
  };
}

export default function OwnerBookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    filterBookings();
  }, [bookings, statusFilter, searchQuery, selectedDate]);

  const fetchBookings = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);
      const ownerId = user.id || user.owner_id;

      const response = await api.get("/bookings", {
        params: { owner_id: ownerId },
      });

      setBookings(response.data || []);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterBookings = () => {
    let filtered = [...bookings];

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((b) => b.status === statusFilter);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (b) =>
          b.customer.first_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          b.customer.last_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          b.booking_ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.service.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Date filter
    if (selectedDate) {
      filtered = filtered.filter(
        (b) =>
          new Date(b.appointment_date).toISOString().split("T")[0] ===
          selectedDate
      );
    }

    setFilteredBookings(filtered);
  };

  const handleStatusUpdate = async (bookingId: number, newStatus: string) => {
    try {
      await api.post(`/bookings/${bookingId}/${newStatus}`);
      fetchBookings();
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Failed to update booking status");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push("/owner/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 mb-4 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Manage Bookings</h1>
          <p className="text-gray-600 mt-1">
            View and manage all your appointments
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by customer, service, or booking ref..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Date Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Stats Summary */}
          <div className="flex gap-6 mt-4 text-sm">
            <div>
              <span className="text-gray-600">Total: </span>
              <span className="font-bold text-gray-900">{bookings.length}</span>
            </div>
            <div>
              <span className="text-gray-600">Showing: </span>
              <span className="font-bold text-cyan-600">
                {filteredBookings.length}
              </span>
            </div>
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-lg">
                      <User className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {booking.customer.first_name}{" "}
                        {booking.customer.last_name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {booking.customer.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">
                          Ref: {booking.booking_ref}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {getStatusIcon(booking.status)}
                    <span className="capitalize">{booking.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Service</div>
                    <div className="font-semibold text-gray-900">
                      {booking.service.name}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {booking.service.duration_minutes} min • ₹
                      {booking.service.base_price}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Date & Time
                    </div>
                    <div className="font-semibold text-gray-900">
                      {new Date(booking.appointment_date).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {booking.appointment_start.slice(0, 5)} -{" "}
                      {booking.appointment_end.slice(0, 5)}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-1">Location</div>
                    <div className="flex items-center gap-2">
                      {booking.is_home_visit ? (
                        <>
                          <Home className="w-4 h-4 text-purple-600" />
                          <span className="font-semibold text-purple-700">
                            Home Service
                          </span>
                        </>
                      ) : (
                        <>
                          <Store className="w-4 h-4 text-cyan-600" />
                          <span className="font-semibold text-cyan-700">
                            At Shop
                          </span>
                        </>
                      )}
                    </div>
                    {booking.stylist && (
                      <div className="text-xs text-gray-600 mt-1">
                        Stylist: {booking.stylist.name}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                {booking.status === "pending" && (
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        handleStatusUpdate(booking.booking_id, "confirm")
                      }
                      className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Confirm Booking
                    </button>
                    <button
                      onClick={() =>
                        handleStatusUpdate(booking.booking_id, "cancel")
                      }
                      className="flex-1 bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-5 h-5" />
                      Cancel Booking
                    </button>
                  </div>
                )}

                {booking.status === "confirmed" && (
                  <button
                    onClick={() =>
                      handleStatusUpdate(booking.booking_id, "complete")
                    }
                    className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 font-semibold transition-all"
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No bookings found
            </h3>
            <p className="text-gray-600">
              {searchQuery || statusFilter !== "all" || selectedDate
                ? "Try adjusting your filters"
                : "You don't have any bookings yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
