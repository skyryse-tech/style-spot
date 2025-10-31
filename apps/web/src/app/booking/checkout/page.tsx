"use client";

import React, { useState } from "react";
import axios from "axios";

export default function CheckoutPage() {
  const [qrBase64, setQrBase64] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateQr = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/generate-qr`,
        {
          booking_ref: "BK123456",
          amount: 100,
        }
      );
      setQrBase64(res.data.qr_png_base64);
    } catch (error) {
      console.error("Error generating QR:", error);
      alert("Failed to generate QR code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Booking Summary</h2>
            <div className="border-t pt-4">
              <p className="text-gray-600">
                Booking Reference:{" "}
                <span className="font-semibold">BK123456</span>
              </p>
              <p className="text-gray-600">
                Amount: <span className="font-semibold">₹100</span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <button
              onClick={generateQr}
              disabled={loading}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 w-full"
            >
              {loading ? "Generating..." : "Pay via UPI"}
            </button>
          </div>

          {qrBase64 && (
            <div className="text-center border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">
                Scan QR Code to Pay
              </h3>
              <img
                src={`data:image/png;base64,${qrBase64}`}
                alt="UPI QR"
                className="mx-auto border-4 border-purple-600 rounded-lg"
              />
              <p className="mt-4 text-sm text-gray-600">
                Scan this QR code with any UPI app to complete the payment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
