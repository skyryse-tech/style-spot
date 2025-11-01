"use client";

import { SessionProvider } from "next-auth/react";
import { LocationProvider } from "@/contexts/LocationContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LocationProvider>{children}</LocationProvider>
    </SessionProvider>
  );
}
