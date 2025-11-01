"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Star,
  Clock,
  Phone,
  Home,
  ArrowLeft,
  Calendar,
  Users,
} from "lucide-react";
import api from "@/lib/api";

export default function SalonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const salonId = params.id;

  const [salon, setSalon] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [stylists, setStylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<"services" | "about">(
    "services"
  );

  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        // Check user role and redirect if owner
        const userData = localStorage.getItem("user");
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

        // Fetch salon details
        const salonRes = await api.get(`/owners/shops/${salonId}`);
        setSalon(salonRes.data);

        // Fetch services
        const servicesRes = await api.get(`/services`, {
          params: { owner_id: salonId },
        });
        setServices(servicesRes.data || []);

        // Try to fetch stylists (optional)
        try {
          const stylistsRes = await api.get(`/stylists`, {
            params: { owner_id: salonId },
          });
          setStylists(stylistsRes.data || []);
        } catch (err) {
          console.log("Stylists endpoint not available");
          setStylists([]);
        }
      } catch (error) {
        console.error("Failed to fetch salon details:", error);
        alert("Failed to load salon details");
      } finally {
        setLoading(false);
      }
    };

    fetchSalonDetails();
  }, [salonId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!salon) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Salon not found
          </h2>
          <button
            onClick={() => router.back()}
            className="text-purple-600 hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  const address = salon.shop_address;
  const addressText =
    typeof address === "string"
      ? address
      : `${address?.street || ""}, ${address?.area || ""}, ${
          address?.city || ""
        }`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-64 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {salon.shop_name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">
                        {salon.average_rating?.toFixed(1) || "4.5"}
                      </span>
                      <span>({salon.total_reviews || "100"}+ ratings)</span>
                    </div>
                    <span>•</span>
                    <span>₹₹₹</span>
                  </div>
                </div>
                {salon.is_freelancer && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Freelancer
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{addressText}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span>Open Now • 10:00 AM - 8:00 PM</span>
                </div>

                {salon.phone && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span>{salon.phone}</span>
                  </div>
                )}

                {salon.is_home_service && (
                  <div className="flex items-center gap-2 text-purple-700 bg-purple-50 px-3 py-2 rounded-lg w-fit">
                    <Home className="w-5 h-5" />
                    <span className="font-semibold">
                      Home Service Available
                    </span>
                  </div>
                )}
              </div>

              {/* Service Types */}
              <div className="mt-4 flex flex-wrap gap-2">
                {salon.service_types?.map((type: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setSelectedTab("services")}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                  selectedTab === "services"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Services & Pricing
              </button>
              <button
                onClick={() => setSelectedTab("about")}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                  selectedTab === "about"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </button>
            </div>
          </div>

          <div className="p-6">
            {selectedTab === "services" ? (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Available Services
                </h3>

                {services.length > 0 ? (
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <div
                        key={service.service_id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-md transition-all group"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {service.name}
                          </h4>
                          {service.description && (
                            <p className="text-sm text-gray-600 mb-2">
                              {service.description}
                            </p>
                          )}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{service.duration_minutes} min</span>
                            </div>
                            {service.gender_type && (
                              <span className="text-gray-600">
                                {service.gender_type}
                              </span>
                            )}
                            {service.is_home_visit && (
                              <span className="flex items-center gap-1 text-purple-600">
                                <Home className="w-4 h-4" />
                                Home Service
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600">
                              ₹{service.base_price}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              router.push(
                                `/customer/booking/${salonId}?service=${service.service_id}`
                              )
                            }
                            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-all opacity-0 group-hover:opacity-100 shadow-md hover:shadow-lg"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p>No services available at the moment.</p>
                  </div>
                )}

                {/* Stylists Section */}
                {stylists.length > 0 && (
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Our Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stylists.map((stylist) => (
                        <div
                          key={stylist.stylist_id}
                          className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {stylist.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">
                              {stylist.name}
                            </h4>
                            {stylist.specialties &&
                              stylist.specialties.length > 0 && (
                                <p className="text-sm text-gray-600">
                                  {stylist.specialties.join(", ")}
                                </p>
                              )}
                            {stylist.phone && (
                              <p className="text-xs text-gray-500 mt-1">
                                {stylist.phone}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    About {salon.shop_name}
                  </h3>
                  <p className="text-gray-700">
                    {salon.description ||
                      "A premium beauty and wellness destination offering a wide range of services including haircuts, styling, spa treatments, and more. Our experienced team of professionals is dedicated to providing you with the best service experience."}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Opening Hours
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">9:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Wi-Fi",
                      "Air Conditioned",
                      "Credit Card Accepted",
                      "Parking Available",
                    ].map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-20" />
    </div>
  );
}
