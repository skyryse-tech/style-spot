"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  ChevronDown,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Award,
  Clock,
  Filter,
  User,
  SearchX,
} from "lucide-react";
import { useLocation } from "@/contexts/LocationContext";
import LocationPicker from "@/components/LocationPicker";
import SalonCard from "@/components/SalonCard";
import api from "@/lib/api";

const categories = [
  { id: "all", name: "All", gradient: "from-cyan-500 to-blue-500" },
  { id: "salon", name: "Salon", gradient: "from-blue-500 to-indigo-500" },
  { id: "spa", name: "Spa", gradient: "from-indigo-500 to-purple-500" },
  { id: "makeup", name: "Makeup", gradient: "from-pink-500 to-rose-500" },
  { id: "nails", name: "Nails", gradient: "from-orange-500 to-amber-500" },
  { id: "facial", name: "Facial", gradient: "from-teal-500 to-cyan-500" },
  { id: "waxing", name: "Waxing", gradient: "from-violet-500 to-purple-500" },
];

const quickFilters = [
  { id: "top_rated", label: "Top Rated", icon: Star },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "award_winning", label: "Award Winning", icon: Award },
  { id: "open_now", label: "Open Now", icon: Clock },
];

export default function CustomerHomePage() {
  const router = useRouter();
  const { location } = useLocation();
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [salons, setSalons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"distance" | "rating" | "popular">(
    "distance"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status and redirect owners
  useEffect(() => {
    const checkAuth = () => {
      const token =
        localStorage.getItem("auth_token") || localStorage.getItem("token");
      const userData = localStorage.getItem("user");

      setIsAuthenticated(!!token);

      // If user is a shop owner, redirect to owner dashboard
      if (userData) {
        try {
          const user = JSON.parse(userData);
          if (user.role === "owner") {
            console.log("Owner detected, redirecting to dashboard...");
            router.push("/owner/dashboard");
            return;
          }
        } catch (e) {
          console.error("Failed to parse user data:", e);
        }
      }
    };

    // Check on mount
    checkAuth();

    // Listen for storage changes (when user signs in/out in same browser)
    window.addEventListener("storage", checkAuth);

    // Check periodically in case localStorage changes
    const interval = setInterval(checkAuth, 1000);

    return () => {
      window.removeEventListener("storage", checkAuth);
      clearInterval(interval);
    };
  }, [router]);

  // Show location picker on first visit
  useEffect(() => {
    if (!location) {
      setShowLocationPicker(true);
    }
  }, []);

  // Calculate distance between two pincodes (simplified)
  const calculatePincodeDistance = (
    pincode1: string,
    pincode2: string
  ): number => {
    if (!pincode1 || !pincode2) return 999;
    const diff = Math.abs(parseInt(pincode1) - parseInt(pincode2));
    // Approximate distance based on pincode difference
    // This is a simplified approach - in production, use a proper geocoding service
    return diff / 100; // Rough estimation
  };

  // Fetch and sort salons based on location and filters
  useEffect(() => {
    const fetchSalons = async () => {
      if (!location) return;

      setLoading(true);
      try {
        const params: any = {};

        // Pass location data to API
        if (location.pincode) {
          params.pincode = location.pincode;
        } else if (location.latitude && location.longitude) {
          params.lat = location.latitude;
          params.lng = location.longitude;
        }

        if (selectedCategory !== "all") {
          params.service_type = selectedCategory;
        }

        if (searchQuery) {
          params.q = searchQuery;
        }

        const response = await api.get("/owners/shops", { params });
        let fetchedSalons = response.data || [];

        // Apply filters
        if (selectedFilters.includes("top_rated")) {
          fetchedSalons = fetchedSalons.filter(
            (s: any) => s.average_rating >= 4.5
          );
        }
        if (selectedFilters.includes("open_now")) {
          // Filter salons that are currently open (mock implementation)
          fetchedSalons = fetchedSalons.filter((s: any) => s.is_open !== false);
        }

        // Sort salons
        if (sortBy === "distance") {
          fetchedSalons.sort((a: any, b: any) => a.distance - b.distance);
        } else if (sortBy === "rating") {
          fetchedSalons.sort(
            (a: any, b: any) => b.average_rating - a.average_rating
          );
        } else if (sortBy === "popular") {
          fetchedSalons.sort(
            (a: any, b: any) => b.total_reviews - a.total_reviews
          );
        }

        setSalons(fetchedSalons);
      } catch (error) {
        console.error("Failed to fetch salons:", error);
        setSalons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSalons();
  }, [location, selectedCategory, searchQuery, selectedFilters, sortBy]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-gray-50">
      {/* Modern Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-1 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent hidden xs:block">
                StyleSpot
              </span>
            </div>

            {/* Location Selector - Prominent */}
            <button
              onClick={() => setShowLocationPicker(true)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 rounded-lg sm:rounded-xl transition-all border border-cyan-200 shadow-md hover:shadow-lg flex-1 max-w-[140px] sm:max-w-none"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
              <div className="font-bold text-xs sm:text-base text-gray-900 flex items-center gap-0.5 sm:gap-1 truncate overflow-hidden">
                <span className="truncate">
                  {location ? (
                    <>
                      {location.pincode
                        ? `${location.pincode}`
                        : location.area
                          ? location.area
                          : "Location"}
                    </>
                  ) : (
                    "Select"
                  )}
                </span>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 flex-shrink-0" />
              </div>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
              <button
                onClick={() => {
                  if (isAuthenticated) {
                    router.push("/customer/bookings");
                  } else {
                    router.push("/auth/signin");
                  }
                }}
                className="hidden md:block text-gray-700 hover:text-cyan-600 font-medium transition-colors cursor-pointer text-sm"
              >
                My Bookings
              </button>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("auth_token");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setIsAuthenticated(false);
                  }}
                  className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:shadow-xl transition-all font-medium shadow-md hover:scale-105 text-xs sm:text-sm"
                >
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Exit</span>
                </button>
              ) : (
                <a
                  href="/auth/signin"
                  className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:shadow-xl transition-all font-medium shadow-md hover:scale-105 text-xs sm:text-sm"
                >
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Login</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Search Section */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
            Discover Your Perfect Style
          </h1>
          <p className="text-cyan-50 mb-4 sm:mb-6 text-sm sm:text-base">
            Book appointments at the best salons, spas & beauty parlours near
            you
          </p>

          {/* Search Bar */}
          <div className="relative max-w-3xl">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search salons, spas, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border-0 shadow-2xl focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-400 text-sm sm:text-lg"
            />
          </div>
        </div>
      </div>

      {/* Category Chips - Swiggy Style */}
      <div className="bg-white border-b sticky top-[56px] sm:top-16 z-40 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto py-2 sm:py-4 scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full font-semibold transition-all whitespace-nowrap text-xs sm:text-base ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-md scale-105`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Filters & Sort */}
      {location && (
        <div className="bg-white border-b overflow-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0">
              {/* Quick Filters */}
              <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                {quickFilters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => toggleFilter(filter.id)}
                      className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg border transition-all flex-shrink-0 ${
                        selectedFilters.includes(filter.id)
                          ? "bg-cyan-100 border-cyan-600 text-cyan-700 shadow-md"
                          : "bg-white border-gray-300 text-gray-700 hover:border-cyan-400"
                      }`}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                        {filter.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-auto">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 hidden sm:block" />
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as "distance" | "rating" | "popular"
                    )
                  }
                  className="px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:border-cyan-400 focus:ring-2 focus:ring-cyan-600 focus:border-transparent cursor-pointer"
                >
                  <option value="distance">Nearest</option>
                  <option value="rating">Top Rated</option>
                  <option value="popular">Popular</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        {!location ? (
          <div className="text-center py-12 sm:py-20 bg-white rounded-xl sm:rounded-2xl shadow-lg mx-2 sm:mx-0">
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
              Choose Your Location
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-4">
              Please set your location to discover nearby salons, spas, and
              beauty services
            </p>
            <button
              onClick={() => setShowLocationPicker(true)}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:shadow-2xl transition-all font-semibold shadow-lg hover:scale-105 text-sm sm:text-base"
            >
              Set Location Now
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl sm:rounded-2xl shadow-md h-80 sm:h-96 animate-pulse overflow-hidden"
              >
                <div className="h-44 sm:h-52 bg-gradient-to-r from-gray-200 to-gray-300" />
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <div className="h-5 sm:h-6 bg-gray-200 rounded-lg w-3/4" />
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2" />
                  <div className="flex gap-2">
                    <div className="h-7 sm:h-8 bg-gray-200 rounded-lg w-20 sm:w-24" />
                    <div className="h-7 sm:h-8 bg-gray-200 rounded-lg w-20 sm:w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : salons.length > 0 ? (
          <>
            <div className="mb-4 sm:mb-6 flex items-center justify-between px-2 sm:px-0">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {selectedCategory === "all"
                    ? "All Services Near You"
                    : `${categories.find((c) => c.id === selectedCategory)?.name} Services`}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                  {salons.length} result{salons.length !== 1 ? "s" : ""} found
                  {location.pincode && ` near Pincode ${location.pincode}`}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {salons.map((salon, index) => (
                <div
                  key={salon.owner_id || index}
                  className="transform transition-all hover:scale-105"
                >
                  <SalonCard salon={salon} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 sm:py-20 bg-white rounded-xl sm:rounded-2xl shadow-lg mx-2 sm:mx-0">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <SearchX className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
              No Results Found
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto px-4">
              We couldn't find any salons matching your criteria. Try adjusting
              your filters or location.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedFilters([]);
                setSearchQuery("");
              }}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 font-medium"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>

      {/* Location Picker Modal */}
      {showLocationPicker && (
        <LocationPicker onClose={() => setShowLocationPicker(false)} />
      )}
    </div>
  );
}
