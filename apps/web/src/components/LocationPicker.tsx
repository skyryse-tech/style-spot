"use client";

import { useState, useEffect } from "react";
import { MapPin, X, Crosshair, Search } from "lucide-react";
import { useLocation } from "@/contexts/LocationContext";

interface LocationPickerProps {
  onClose?: () => void;
}

export default function LocationPicker({ onClose }: LocationPickerProps) {
  const { location, requestLocation, setManualLocation, isLoading, error } =
    useLocation();
  const [showManual, setShowManual] = useState(false);
  const [manualPincode, setManualPincode] = useState("");
  const [previousLocation, setPreviousLocation] = useState<any>(null);

  // Auto-close when location is detected or set
  useEffect(() => {
    if (location && location !== previousLocation && !isLoading) {
      // Location was just updated, close the modal after a brief delay
      const timer = setTimeout(() => {
        onClose?.();
      }, 500);
      return () => clearTimeout(timer);
    }
    setPreviousLocation(location);
  }, [location, isLoading, onClose, previousLocation]);

  const handleDetectLocation = async () => {
    await requestLocation();
    // Modal will auto-close via useEffect
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setManualLocation(`Pincode ${manualPincode}`, "", "", manualPincode);
    // Modal will auto-close via useEffect
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pr-8">
          Select Location
        </h2>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4 text-sm">
            {error}
          </div>
        )}

        {!showManual ? (
          <div className="space-y-3 sm:space-y-4">
            <button
              onClick={handleDetectLocation}
              disabled={isLoading}
              className="w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-2 border-cyan-600 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all disabled:opacity-50 shadow-md hover:shadow-lg"
            >
              <Crosshair className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0" />
              <div className="text-left flex-1">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  {isLoading ? "Detecting..." : "Use Current Location"}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Enable location access for accurate results
                </div>
              </div>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <button
              onClick={() => setShowManual(true)}
              className="w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-cyan-400 transition-all shadow-sm hover:shadow-md"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
              <div className="text-left flex-1">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Enter Pincode Manually
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Enter your 6-digit pincode
                </div>
              </div>
            </button>

            {location && (
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl shadow-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-cyan-900 text-sm sm:text-base">
                      Current Location
                    </div>
                    <div className="text-xs sm:text-sm text-cyan-700">
                      {location.pincode
                        ? `Pincode: ${location.pincode}`
                        : location.area
                          ? `${location.area}${location.city ? `, ${location.city}` : ""}`
                          : location.address}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <form
            onSubmit={handleManualSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 text-center">
                Enter Your Pincode
              </label>
              <input
                type="text"
                placeholder="Enter 6-digit pincode"
                value={manualPincode}
                onChange={(e) =>
                  setManualPincode(e.target.value.replace(/\D/g, ""))
                }
                required
                maxLength={6}
                pattern="[0-9]{6}"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-center text-xl sm:text-2xl font-bold border-2 border-cyan-300 rounded-xl focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 shadow-md tracking-widest"
                autoFocus
              />
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-2">
                We'll find salons and services near your pincode
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setShowManual(false)}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium transition-all shadow-sm text-sm sm:text-base"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={manualPincode.length !== 6}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-xl font-medium transition-all shadow-md hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
              >
                Confirm
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
