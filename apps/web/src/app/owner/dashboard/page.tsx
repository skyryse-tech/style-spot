"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Store,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Package,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Home,
  Plus,
  Eye,
} from "lucide-react";
import api from "@/lib/api";

interface DashboardStats {
  total_bookings: number;
  pending_bookings: number;
  confirmed_bookings: number;
  completed_bookings: number;
  total_revenue: number;
  today_revenue: number;
  average_rating: number;
  total_reviews: number;
  active_services: number;
}

interface RecentBooking {
  booking_id: number;
  booking_ref: string;
  customer_name: string;
  service_name: string;
  appointment_date: string;
  appointment_start: string;
  status: string;
  amount: number;
}

export default function OwnerDashboardPage() {
  const router = useRouter();
  const [owner, setOwner] = useState<any>(null);
  const [stats, setStats] = useState<DashboardStats>({
    total_bookings: 0,
    pending_bookings: 0,
    confirmed_bookings: 0,
    completed_bookings: 0,
    total_revenue: 0,
    today_revenue: 0,
    average_rating: 0,
    total_reviews: 0,
    active_services: 0,
  });
  const [recentBookings, setRecentBookings] = useState<RecentBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthAndFetchData();
  }, []);

  const checkAuthAndFetchData = async () => {
    try {
      // Check authentication
      const userData = localStorage.getItem("user");
      const token = localStorage.getItem("auth_token");

      if (!userData || !token) {
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);

      // Verify user is an owner
      if (user.role !== "owner") {
        alert("Access denied. This page is for shop owners only.");
        router.push("/");
        return;
      }

      const ownerId = user.id || user.owner_id;

      // Fetch owner details
      const ownerRes = await api.get(`/owners/shops/${ownerId}`);
      setOwner(ownerRes.data);

      // Fetch dashboard stats
      await Promise.all([fetchBookings(ownerId), fetchServices(ownerId)]);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async (ownerId: number) => {
    try {
      const response = await api.get("/bookings", {
        params: { owner_id: ownerId },
      });

      const bookings = response.data || [];

      // Calculate stats
      const pending = bookings.filter(
        (b: any) => b.status === "pending"
      ).length;
      const confirmed = bookings.filter(
        (b: any) => b.status === "confirmed"
      ).length;
      const completed = bookings.filter(
        (b: any) => b.status === "completed"
      ).length;

      const totalRevenue = bookings
        .filter((b: any) => b.status === "completed")
        .reduce((sum: number, b: any) => sum + (b.service?.base_price || 0), 0);

      const today = new Date().toISOString().split("T")[0];
      const todayRevenue = bookings
        .filter(
          (b: any) =>
            b.status === "completed" &&
            new Date(b.appointment_date).toISOString().split("T")[0] === today
        )
        .reduce((sum: number, b: any) => sum + (b.service?.base_price || 0), 0);

      setStats((prev) => ({
        ...prev,
        total_bookings: bookings.length,
        pending_bookings: pending,
        confirmed_bookings: confirmed,
        completed_bookings: completed,
        total_revenue: totalRevenue,
        today_revenue: todayRevenue,
      }));

      // Get recent bookings
      const recent = bookings.slice(0, 5).map((b: any) => ({
        booking_id: b.booking_id,
        booking_ref: b.booking_ref,
        customer_name:
          `${b.customer?.first_name || ""} ${b.customer?.last_name || ""}`.trim() ||
          "Customer",
        service_name: b.service?.name || "Service",
        appointment_date: b.appointment_date,
        appointment_start: b.appointment_start,
        status: b.status,
        amount: b.service?.base_price || 0,
      }));

      setRecentBookings(recent);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const fetchServices = async (ownerId: number) => {
    try {
      const response = await api.get("/services", {
        params: { owner_id: ownerId },
      });

      const services = response.data || [];

      setStats((prev) => ({
        ...prev,
        active_services: services.length,
      }));
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
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
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Shop Name */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  {owner?.shop_name || owner?.full_name}
                </h1>
                <p className="text-xs text-gray-500">Partner Dashboard</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => router.push("/owner/settings")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Bookings */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-cyan-500 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-cyan-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {stats.total_bookings}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">
              Total Bookings
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs text-cyan-600 font-semibold">
                {stats.pending_bookings} Pending
              </span>
            </div>
          </div>

          {/* Today's Revenue */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                ₹{stats.today_revenue}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">
              Today's Revenue
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600 font-semibold">
                Total: ₹{stats.total_revenue}
              </span>
            </div>
          </div>

          {/* Active Services */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {stats.active_services}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">
              Active Services
            </h3>
            <button
              onClick={() => router.push("/owner/services")}
              className="mt-2 text-xs text-purple-600 font-semibold hover:underline"
            >
              Manage Services →
            </button>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {stats.average_rating || "N/A"}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">
              Average Rating
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs text-yellow-600 font-semibold">
                {stats.total_reviews} Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => router.push("/owner/bookings")}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-bold mb-1">Manage Bookings</h3>
            <p className="text-sm text-cyan-50">
              View and manage all your appointments
            </p>
          </button>

          <button
            onClick={() => router.push("/owner/services")}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <Package className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-bold mb-1">My Services</h3>
            <p className="text-sm text-purple-50">
              Add or edit your service offerings
            </p>
          </button>

          <button
            onClick={() => router.push("/owner/analytics")}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <BarChart3 className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-bold mb-1">Analytics</h3>
            <p className="text-sm text-blue-50">
              View detailed business insights
            </p>
          </button>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Bookings</h3>
            <button
              onClick={() => router.push("/owner/bookings")}
              className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center gap-2"
            >
              View All
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {recentBookings.length > 0 ? (
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.booking_id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-cyan-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-lg">
                      <Users className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {booking.customer_name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {booking.service_name}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-500">
                          {new Date(
                            booking.appointment_date
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                        <span className="text-xs text-gray-500">
                          {booking.appointment_start.slice(0, 5)}
                        </span>
                        <span className="text-xs font-semibold text-gray-700">
                          ₹{booking.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {getStatusIcon(booking.status)}
                    <span className="capitalize">{booking.status}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No bookings yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
