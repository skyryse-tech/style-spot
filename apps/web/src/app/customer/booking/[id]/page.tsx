"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  User,
  Home,
  Store,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import api from "@/lib/api";

type BookingType = "at_shop" | "home_service";

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const salonId = params.id;
  const preSelectedServiceId = searchParams.get("service");

  const [step, setStep] = useState(1);
  const [salon, setSalon] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [stylists, setStylists] = useState<any[]>([]);
  const [slots, setSlots] = useState<any[]>([]);

  const [selectedService, setSelectedService] = useState<number | null>(
    preSelectedServiceId ? parseInt(preSelectedServiceId) : null
  );
  const [selectedStylist, setSelectedStylist] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [bookingType, setBookingType] = useState<BookingType>("at_shop");
  const [homeAddress, setHomeAddress] = useState("");

  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

        // Fetch salon/owner details
        const salonRes = await api.get(`/owners/shops/${salonId}`);
        setSalon(salonRes.data);

        // Fetch services for this owner
        const servicesRes = await api.get(`/services`, {
          params: { owner_id: salonId },
        });
        setServices(servicesRes.data || []);

        // Fetch stylists for this owner (if available)
        try {
          const stylistsRes = await api.get(`/stylists`, {
            params: { owner_id: salonId },
          });
          setStylists(stylistsRes.data || []);
        } catch (err) {
          console.log("No stylists endpoint, using mock data");
          setStylists([]);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        alert("Failed to load salon details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [salonId]);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots();
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async () => {
    try {
      // Fetch available slots from API
      const response = await api.get(`/slots`, {
        params: {
          owner_id: salonId,
          date: selectedDate,
        },
      });
      setSlots(response.data || []);
    } catch (error) {
      console.error("Failed to fetch slots:", error);
      // Generate time slots based on service duration
      const selectedServiceData = services.find(
        (s) => s.service_id === selectedService
      );
      const duration = selectedServiceData?.duration_minutes || 60;
      const generatedSlots = generateTimeSlots(duration);
      setSlots(generatedSlots);
    }
  };

  const generateTimeSlots = (serviceDuration: number) => {
    const slots = [];
    const startHour = 10; // 10 AM
    const endHour = 20; // 8 PM

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += serviceDuration) {
        const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00`;
        slots.push({
          slot_id: slots.length + 1,
          start_time: time,
          end_time: calculateEndTime(time, serviceDuration),
          is_available: true,
        });
      }
    }

    return slots;
  };

  const calculateEndTime = (startTime: string, durationMinutes: number) => {
    const [hours, minutes] = startTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + durationMinutes;
    const endHours = Math.floor(totalMinutes / 60);
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, "0")}:${endMinutes.toString().padStart(2, "0")}:00`;
  };

  const formatTime = (time: string) => {
    // Convert 24-hour format to 12-hour format
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  const handleCreateBooking = async () => {
    setCreating(true);
    try {
      const selectedServiceData = services.find(
        (s) => s.service_id === selectedService
      );
      const selectedSlotData = slots.find((s) => s.slot_id === selectedSlot);

      // Get customer ID from auth
      const userData = localStorage.getItem("user");
      if (!userData) {
        alert("Please sign in to book an appointment");
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);
      const customerId = user.id || user.customer_id;

      // Prepare booking data according to schema
      const bookingData = {
        customer_id: customerId,
        owner_id: parseInt(salonId as string),
        service_id: selectedService,
        stylist_id: selectedStylist || undefined,
        date: selectedDate,
        start_time: selectedSlotData?.start_time || "10:00:00",
        is_home_visit: bookingType === "home_service",
        payment_mode: "upi", // Default payment mode
      };

      console.log("Creating booking with data:", bookingData);

      const response = await api.post("/bookings", bookingData);
      const booking = response.data;

      console.log("Booking created:", booking);

      // Redirect to payment page
      router.push(
        `/booking/checkout?booking_id=${booking.booking_id}&amount=${selectedServiceData?.base_price || 0}`
      );
    } catch (error: any) {
      console.error("Failed to create booking:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create booking";
      alert(errorMessage);
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  const currentService = services.find((s) => s.service_id === selectedService);
  const canProceed =
    step === 1
      ? selectedService !== null
      : step === 2
        ? true // Stylist is optional
        : step === 3
          ? selectedDate && selectedSlot
          : bookingType === "at_shop" || homeAddress.trim() !== "";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <h1 className="text-2xl font-bold text-gray-900">Book Appointment</h1>
          <p className="text-gray-600">{salon?.shop_name}</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Stylist" },
              { num: 3, label: "Date & Time" },
              { num: 4, label: "Confirm" },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s.num
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {s.num}
                  </div>
                  <div
                    className={`mt-2 text-sm font-medium ${
                      step >= s.num ? "text-purple-600" : "text-gray-600"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>
                {idx < 3 && (
                  <div
                    className={`h-1 flex-1 -mt-10 ${
                      step > s.num ? "bg-purple-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Select a Service
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <button
                    key={service.service_id}
                    onClick={() => setSelectedService(service.service_id)}
                    className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                      selectedService === service.service_id
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {service.name}
                        </h3>
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
                      <div className="text-xl font-bold text-purple-600 ml-4">
                        ₹{service.base_price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Stylist */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Choose Your Stylist (Optional)
              </h2>
              {stylists.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stylists.map((stylist) => (
                    <button
                      key={stylist.stylist_id}
                      onClick={() => setSelectedStylist(stylist.stylist_id)}
                      className={`p-4 border-2 rounded-lg transition-all text-left ${
                        selectedStylist === stylist.stylist_id
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {stylist.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {stylist.name}
                          </h3>
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
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    No specific stylists available. You can proceed without
                    selecting one.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedStylist(null);
                      setStep(3);
                    }}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Select Date & Time */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Select Date & Time
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>

                {selectedDate && slots.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {slots.map((slot) => (
                        <button
                          key={slot.slot_id}
                          onClick={() => setSelectedSlot(slot.slot_id)}
                          disabled={!slot.is_available}
                          className={`px-4 py-3 rounded-lg font-medium transition-all ${
                            selectedSlot === slot.slot_id
                              ? "bg-purple-600 text-white"
                              : slot.is_available
                                ? "bg-gray-100 text-gray-900 hover:bg-purple-50 hover:text-purple-600"
                                : "bg-gray-50 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {formatTime(slot.start_time)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Confirm Booking */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Confirm Booking
              </h2>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Booking Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium text-gray-900">
                      {currentService?.name}
                    </span>
                  </div>
                  {selectedStylist &&
                    stylists.find((s) => s.stylist_id === selectedStylist) && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stylist:</span>
                        <span className="font-medium text-gray-900">
                          {
                            stylists.find(
                              (s) => s.stylist_id === selectedStylist
                            )?.name
                          }
                        </span>
                      </div>
                    )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-900">
                      {new Date(selectedDate).toLocaleDateString("en-IN", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium text-gray-900">
                      {formatTime(
                        slots.find((s) => s.slot_id === selectedSlot)
                          ?.start_time || "00:00:00"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-900">
                      {currentService?.duration_minutes} minutes
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <span className="text-gray-900 font-semibold">Total:</span>
                    <span className="text-xl font-bold text-purple-600">
                      ₹{currentService?.base_price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Service Location
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setBookingType("at_shop")}
                    className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                      bookingType === "at_shop"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <Store className="w-8 h-8 text-purple-600" />
                    <span className="font-medium">At Salon</span>
                  </button>
                  {currentService?.is_home_visit && (
                    <button
                      onClick={() => setBookingType("home_service")}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        bookingType === "home_service"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <Home className="w-8 h-8 text-purple-600" />
                      <span className="font-medium">Home Service</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Home Address */}
              {bookingType === "home_service" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Address
                  </label>
                  <textarea
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    placeholder="Enter your complete address"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleCreateBooking}
                disabled={!canProceed || creating}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {creating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Confirm & Pay
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
