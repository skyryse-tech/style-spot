"use client";

import { MapPin, Star, Clock, Home } from "lucide-react";
import Link from "next/link";

interface SalonCardProps {
  salon: {
    owner_id: number;
    shop_name: string;
    shop_address: any;
    service_types: string[];
    is_freelancer: boolean;
    average_rating?: number;
    total_reviews?: number;
    distance?: number;
    is_home_service?: boolean;
  };
}

export default function SalonCard({ salon }: SalonCardProps) {
  const address = salon.shop_address;
  const addressText =
    typeof address === "string"
      ? address
      : `${address?.area || address?.city || "Location"}`;

  return (
    <Link href={`/customer/salon/${salon.owner_id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-cyan-100 hover:border-cyan-300 w-full">
        {/* Image placeholder */}
        <div className="h-40 sm:h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2">
            {salon.is_home_service && (
              <span className="bg-white text-cyan-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-0.5 sm:gap-1 shadow-lg">
                <Home className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                <span className="hidden xs:inline">Home Service</span>
                <span className="xs:hidden">Home</span>
              </span>
            )}
            {salon.is_freelancer && (
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg">
                Freelancer
              </span>
            )}
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-cyan-600 transition-colors line-clamp-1">
            {salon.shop_name}
          </h3>

          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate flex-1">{addressText}</span>
            {salon.distance !== undefined && salon.distance > 0 && (
              <span className="text-cyan-600 font-medium text-[10px] sm:text-xs whitespace-nowrap">
                {salon.distance.toFixed(1)} km
              </span>
            )}
          </div>

          {/* Service types */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {salon.service_types.slice(0, 3).map((type, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium border border-cyan-200"
              >
                {type}
              </span>
            ))}
            {salon.service_types.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium">
                +{salon.service_types.length - 3}
              </span>
            )}
          </div>

          {/* Rating and timing */}
          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-cyan-100">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                {salon.average_rating?.toFixed(1) || "New"}
              </span>
              {salon.total_reviews && (
                <span className="text-[10px] sm:text-sm text-gray-500">
                  ({salon.total_reviews})
                </span>
              )}
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm text-gray-600">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs">30-45 min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
