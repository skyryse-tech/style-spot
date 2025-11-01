"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  area?: string;
  pincode?: string;
}

interface LocationContextType {
  location: LocationData | null;
  setLocation: (location: LocationData | null) => void;
  isLoading: boolean;
  error: string | null;
  requestLocation: () => Promise<void>;
  setManualLocation: (
    address: string,
    city: string,
    area: string,
    pincode: string
  ) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocationState] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load location from localStorage on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("stylespot_location");
    if (savedLocation) {
      try {
        setLocationState(JSON.parse(savedLocation));
      } catch (e) {
        console.error("Failed to parse saved location:", e);
      }
    }
  }, []);

  const setLocation = (newLocation: LocationData | null) => {
    setLocationState(newLocation);
    if (newLocation) {
      localStorage.setItem("stylespot_location", JSON.stringify(newLocation));
    } else {
      localStorage.removeItem("stylespot_location");
    }
  };

  const requestLocation = async () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          });
        }
      );

      const { latitude, longitude } = position.coords;

      // Try to get address details using reverse geocoding
      let pincode = "";
      let address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      let city = "";
      let area = "";

      try {
        // Use OpenCage, Nominatim, or Google Maps Geocoding API
        // For now using a simple Nominatim API (free, but rate-limited)
        const geocodeResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        if (geocodeResponse.ok) {
          const geocodeData = await geocodeResponse.json();
          pincode = geocodeData.address?.postcode || "";
          city =
            geocodeData.address?.city ||
            geocodeData.address?.town ||
            geocodeData.address?.village ||
            "";
          area =
            geocodeData.address?.suburb ||
            geocodeData.address?.neighbourhood ||
            "";
          address = geocodeData.display_name || address;
        }
      } catch (geocodeError) {
        console.error("Geocoding error:", geocodeError);
        // Continue with coordinates only
      }

      const locationData: LocationData = {
        latitude,
        longitude,
        address,
        city,
        area,
        pincode,
      };

      setLocation(locationData);
    } catch (err: any) {
      let errorMessage = "Unable to retrieve your location";
      if (err.code === 1) {
        errorMessage =
          "Location access denied. Please enable location services.";
      } else if (err.code === 2) {
        errorMessage = "Location unavailable. Please try again.";
      } else if (err.code === 3) {
        errorMessage = "Location request timeout. Please try again.";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const setManualLocation = (
    address: string,
    city: string,
    area: string,
    pincode: string
  ) => {
    // In production, geocode the address to get lat/lng
    // For now, use default coordinates
    const locationData: LocationData = {
      latitude: 0,
      longitude: 0,
      address,
      city,
      area,
      pincode,
    };
    setLocation(locationData);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        isLoading,
        error,
        requestLocation,
        setManualLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
