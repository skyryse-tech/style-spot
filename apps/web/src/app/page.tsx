"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Scissors,
  Sparkles,
  Heart,
  Home,
  Crown,
  Search,
  Calendar,
  CreditCard,
  CheckCircle,
  MapPin,
  Clock,
  Star,
  User,
  LogOut,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = () => {
      const token =
        localStorage.getItem("auth_token") || localStorage.getItem("token");
      const userData = localStorage.getItem("user");

      console.log("Main page - Checking auth:", { token: !!token, userData });

      setIsAuthenticated(!!token);
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          console.log("Main page - Parsed user:", parsedUser);
          setUser(parsedUser);
        } catch (e) {
          console.error("Main page - Failed to parse user data:", e);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkAuth();

    // Listen for storage changes
    window.addEventListener("storage", checkAuth);
    const interval = setInterval(checkAuth, 1000);

    return () => {
      window.removeEventListener("storage", checkAuth);
      clearInterval(interval);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                StyleSpot
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      if (user?.role === "owner") {
                        router.push("/owner/dashboard");
                      } else {
                        router.push("/customer/home");
                      }
                    }}
                    className="hidden sm:block text-gray-700 hover:text-cyan-600 font-medium transition-colors"
                  >
                    {user?.role === "owner"
                      ? "My Dashboard"
                      : "Browse Services"}
                  </button>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-medium text-gray-900">
                        {user?.full_name ||
                          user?.name ||
                          user?.email?.split("@")[0] ||
                          "User"}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {user?.role || "Member"}
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:shadow-xl text-sm sm:text-base font-medium transition-all shadow-md hover:scale-105"
                    >
                      <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Sign Out</span>
                      <span className="sm:hidden">Exit</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <a
                    href="/auth/signin"
                    className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm sm:text-base"
                  >
                    Sign In
                  </a>
                  <a
                    href="/auth/signup"
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg hover:shadow-xl font-medium transition-all shadow-md hover:scale-105 text-sm sm:text-base"
                  >
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Discover Beauty & Wellness
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services Near You
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
            Book appointments at top-rated salons, spas, and beauty services.
            Professional care, hassle-free booking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <a
              href="/customer/home"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              Find Services
            </a>
            {isAuthenticated && user?.role === "owner" ? (
              <button
                onClick={() => router.push("/owner/dashboard")}
                className="bg-white text-cyan-600 border-2 border-cyan-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                Go to Dashboard
              </button>
            ) : (
              <a
                href="/auth/signup"
                className="bg-white text-cyan-600 border-2 border-cyan-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Register Your Business</span>
                <span className="sm:hidden">Be a Partner</span>
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 px-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Pan India</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-cyan-400 text-cyan-400" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Instant Booking</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-20 px-2">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all border border-cyan-100 hover:scale-105 group">
            <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-all">
              <Scissors className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Haircut & Styling
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Professional hair care, cuts, coloring, and styling services
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all border border-blue-100 hover:scale-105 group">
            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-all">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Spa & Massage
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Relax and rejuvenate with therapeutic spa treatments
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all border border-indigo-100 hover:scale-105 group sm:col-span-2 md:col-span-1">
            <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-all">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Beauty & Makeup
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Expert makeup, facials, and beauty enhancement services
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-2xl mx-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="bg-white text-cyan-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-xl hover:scale-110 transition-transform">
                <Search className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
                Search
              </h4>
              <p className="text-cyan-50 text-xs sm:text-base hidden sm:block">
                Find services and professionals near you
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-xl hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
                Book
              </h4>
              <p className="text-cyan-50 text-xs sm:text-base hidden sm:block">
                Choose your preferred date and time slot
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-indigo-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-xl hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
                Pay
              </h4>
              <p className="text-cyan-50 text-xs sm:text-base hidden sm:block">
                Secure payment via UPI or cash on arrival
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-cyan-600 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-xl hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
                Enjoy
              </h4>
              <p className="text-cyan-50 text-xs sm:text-base hidden sm:block">
                Get professional service at your convenience
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-2">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              For Service Providers
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              Join StyleSpot and grow your business. Reach thousands of
              customers looking for quality beauty and wellness services.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Easy online booking management
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Direct UPI payments to your account
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Real-time notifications for bookings
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-sm sm:text-base text-gray-700">
                  Build your customer base organically
                </span>
              </li>
            </ul>
            <a
              href="/auth/signup"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl transition-all shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Started as Provider
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-cyan-200 shadow-xl">
            <div className="space-y-3 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-2 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                    Home Service Available
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Offer services at customer location
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                    Flexible Scheduling
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Set your own availability and holidays
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-2 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                    Build Your Reputation
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Get reviews and ratings from customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-12 sm:mt-24 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-1.5 rounded-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">StyleSpot</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Your trusted platform for beauty and wellness service bookings.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <a
                    href="/customer/home"
                    className="hover:text-white transition-colors"
                  >
                    Find Services
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/signup"
                    className="hover:text-white transition-colors"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/signin"
                    className="hover:text-white transition-colors"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                For Providers
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <a
                    href="/auth/signup"
                    className="hover:text-white transition-colors"
                  >
                    Register Your Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partner Benefits
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2025 StyleSpot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
