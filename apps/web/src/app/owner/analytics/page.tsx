"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  Clock,
  Star,
  Award,
  BarChart3,
} from "lucide-react";
import api from "@/lib/api";

interface Booking {
  booking_id: number;
  appointment_date: string;
  appointment_start: string;
  status: string;
  service: { name: string; base_price: number };
  customer: { full_name: string };
  payment?: { amount: number; payment_status: string };
}

interface Analytics {
  totalRevenue: number;
  totalBookings: number;
  completedBookings: number;
  averageRating: number;
  topServices: { name: string; count: number; revenue: number }[];
  dailyRevenue: { date: string; amount: number }[];
  peakHours: { hour: number; count: number }[];
  statusBreakdown: { status: string; count: number }[];
}

export default function OwnerAnalyticsPage() {
  const router = useRouter();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<"week" | "month" | "year">("month");

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  const fetchAnalytics = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);
      const ownerId = user.id || user.owner_id;

      const [bookingsRes, servicesRes] = await Promise.all([
        api.get("/bookings", { params: { owner_id: ownerId } }),
        api.get("/services", { params: { owner_id: ownerId } }),
      ]);

      const bookings: Booking[] = bookingsRes.data || [];
      const services = servicesRes.data || [];

      // Calculate date range
      const now = new Date();
      const startDate = new Date();
      if (period === "week") {
        startDate.setDate(now.getDate() - 7);
      } else if (period === "month") {
        startDate.setMonth(now.getMonth() - 1);
      } else {
        startDate.setFullYear(now.getFullYear() - 1);
      }

      const filteredBookings = bookings.filter(
        (b) => new Date(b.appointment_date) >= startDate
      );

      // Calculate metrics
      const totalRevenue = filteredBookings
        .filter((b) => b.status === "completed")
        .reduce((sum, b) => {
          const amount = b.payment?.amount || b.service?.base_price || 0;
          return sum + amount;
        }, 0);

      const completedBookings = filteredBookings.filter(
        (b) => b.status === "completed"
      ).length;

      // Top services
      const serviceMap = new Map<string, { count: number; revenue: number }>();
      filteredBookings.forEach((b) => {
        const serviceName = b.service?.name || "Unknown";
        const existing = serviceMap.get(serviceName) || {
          count: 0,
          revenue: 0,
        };
        serviceMap.set(serviceName, {
          count: existing.count + 1,
          revenue:
            existing.revenue +
            (b.status === "completed"
              ? b.payment?.amount || b.service?.base_price || 0
              : 0),
        });
      });

      const topServices = Array.from(serviceMap.entries())
        .map(([name, data]) => ({ name, ...data }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Daily revenue
      const dailyRevenueMap = new Map<string, number>();
      filteredBookings
        .filter((b) => b.status === "completed")
        .forEach((b) => {
          const date = b.appointment_date.split("T")[0];
          const amount = b.payment?.amount || b.service?.base_price || 0;
          dailyRevenueMap.set(date, (dailyRevenueMap.get(date) || 0) + amount);
        });

      const dailyRevenue = Array.from(dailyRevenueMap.entries())
        .map(([date, amount]) => ({ date, amount }))
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(-30);

      // Peak hours
      const peakHoursMap = new Map<number, number>();
      filteredBookings.forEach((b) => {
        const hour = parseInt(b.appointment_start.split(":")[0]);
        peakHoursMap.set(hour, (peakHoursMap.get(hour) || 0) + 1);
      });

      const peakHours = Array.from(peakHoursMap.entries())
        .map(([hour, count]) => ({ hour, count }))
        .sort((a, b) => b.count - a.count);

      // Status breakdown
      const statusMap = new Map<string, number>();
      filteredBookings.forEach((b) => {
        statusMap.set(b.status, (statusMap.get(b.status) || 0) + 1);
      });

      const statusBreakdown = Array.from(statusMap.entries()).map(
        ([status, count]) => ({ status, count })
      );

      setAnalytics({
        totalRevenue,
        totalBookings: filteredBookings.length,
        completedBookings,
        averageRating: 4.5, // Placeholder - can be calculated from reviews
        topServices,
        dailyRevenue,
        peakHours,
        statusBreakdown,
      });
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  if (!analytics) {
    return null;
  }

  const maxDailyRevenue = Math.max(
    ...analytics.dailyRevenue.map((d) => d.amount),
    1
  );
  const maxPeakHour = Math.max(...analytics.peakHours.map((h) => h.count), 1);
  const conversionRate =
    analytics.totalBookings > 0
      ? (analytics.completedBookings / analytics.totalBookings) * 100
      : 0;

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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-cyan-600" />
                Business Analytics
              </h1>
              <p className="text-gray-600 mt-1">
                Insights and performance metrics
              </p>
            </div>

            <div className="flex gap-2">
              {["week", "month", "year"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p as any)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    period === p
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Total Revenue
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              ₹{analytics.totalRevenue.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Total Bookings
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {analytics.totalBookings}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Conversion Rate
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {conversionRate.toFixed(1)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              Average Rating
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {analytics.averageRating.toFixed(1)}
            </p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Revenue Trend
            </h3>
            <div className="space-y-2">
              {analytics.dailyRevenue.slice(-14).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 w-20">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all flex items-center justify-end pr-3"
                      style={{
                        width: `${(item.amount / maxDailyRevenue) * 100}%`,
                      }}
                    >
                      <span className="text-xs font-semibold text-white">
                        ₹{item.amount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Peak Hours */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-600" />
              Peak Hours
            </h3>
            <div className="space-y-2">
              {analytics.peakHours.slice(0, 10).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-24 font-medium">
                    {item.hour.toString().padStart(2, "0")}:00 -{" "}
                    {(item.hour + 1).toString().padStart(2, "0")}:00
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-600 h-full rounded-full transition-all flex items-center justify-end pr-3"
                      style={{ width: `${(item.count / maxPeakHour) * 100}%` }}
                    >
                      <span className="text-xs font-semibold text-white">
                        {item.count} bookings
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Services */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Top Services
            </h3>
            <div className="space-y-4">
              {analytics.topServices.map((service, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {service.name}
                    </h4>
                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                      #{idx + 1}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {service.count} bookings
                    </span>
                    <span className="font-semibold text-green-600">
                      ₹{service.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-600" />
              Booking Status
            </h3>
            <div className="space-y-4">
              {analytics.statusBreakdown.map((item, idx) => {
                const percentage = (item.count / analytics.totalBookings) * 100;
                const colors = {
                  pending: "from-yellow-400 to-yellow-600",
                  confirmed: "from-blue-400 to-blue-600",
                  completed: "from-green-400 to-green-600",
                  cancelled: "from-red-400 to-red-600",
                };

                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {item.status}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.count} ({percentage.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${colors[item.status as keyof typeof colors] || "from-gray-400 to-gray-600"} h-full rounded-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
