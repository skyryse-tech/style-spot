  import { create } from "zustand";

interface User {
  id: number;
  email: string;
  role: "customer" | "owner";
  name?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setAuth: (user, token) => {
    set({ user, token });
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  clearAuth: () => {
    set({ user: null, token: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    }
  },
}));
