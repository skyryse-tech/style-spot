"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react";
import api from "@/lib/api";
import axios from "axios";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bookingId = searchParams.get("booking_id");
  const amount = searchParams.get("amount");

  const [booking, setBooking] = useState<any>(null);
  const [qrBase64, setQrBase64] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (bookingId) {
      fetchBookingDetails();
    }
  }, [bookingId]);

  const fetchBookingDetails = async () => {
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

      const response = await api.get(`/bookings/${bookingId}`);
      setBooking(response.data);
    } catch (error) {
      console.error("Failed to fetch booking:", error);
      alert("Failed to load booking details");
    } finally {
      setLoading(false);
    }
  };

  const generateQr = async () => {
    setGenerating(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/generate-qr`,
        {
          booking_ref: booking?.booking_ref || `BK${bookingId}`,
          amount: parseInt(amount || "0"),
        }
      );
      setQrBase64(res.data.qr_png_base64);
    } catch (error) {
      console.error("Error generating QR:", error);
      alert("Failed to generate QR code");
    } finally {
      setGenerating(false);
    }
  };

  const handleCashPayment = () => {
    // Mark as cash payment
    setPaymentSuccess(true);
    setTimeout(() => {
      router.push("/customer/bookings");
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600">Redirecting to your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Checkout
          </h1>

          {/* Booking Summary */}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Booking Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Booking Reference:</span>
                <span className="font-semibold">{booking?.booking_ref}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Service:</span>
                <span className="font-semibold">{booking?.service?.name}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shop:</span>
                <span className="font-semibold">
                  {booking?.owner?.shop_name || booking?.owner?.full_name}
                </span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Date:</span>
                <span className="font-semibold">
                  {booking?.appointment_date &&
                    new Date(booking.appointment_date).toLocaleDateString(
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
              <div className="flex justify-between pt-3 border-t border-purple-200">
                <span className="font-semibold text-gray-900">Amount:</span>
                <span className="text-2xl font-bold text-purple-600">
                  ₹{amount || booking?.service?.base_price || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Select Payment Method
            </h3>
            <div className="space-y-3">
              <button
                onClick={generateQr}
                disabled={generating}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all shadow-md hover:scale-105"
              >
                <CreditCard className="w-5 h-5" />
                {generating ? "Generating..." : "Pay via UPI"}
              </button>

              <button
                onClick={handleCashPayment}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-purple-300 text-purple-700 px-6 py-4 rounded-xl hover:bg-purple-50 font-medium transition-all shadow-sm hover:shadow-md"
              >
                💵 Pay at Shop (Cash)
              </button>
            </div>
          </div>

          {/* QR Code Display */}
          {qrBase64 && (
            <div className="text-center border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Scan QR Code to Pay
              </h3>
              <div className="inline-block p-4 bg-white rounded-xl shadow-lg border-4 border-purple-600">
                <img
                  src={`data:image/png;base64,${qrBase64}`}
                  alt="UPI QR"
                  className="w-64 h-64"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Scan this QR code with any UPI app to complete the payment
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Payment will be verified automatically
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
