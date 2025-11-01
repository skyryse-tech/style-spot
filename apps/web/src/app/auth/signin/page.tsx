"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Sparkles } from "lucide-react";
import { useAuthStore } from "@/store/auth";
import axios from "axios";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
        {
          email,
          password,
        }
      );

      if (response.data && response.data.user && response.data.token) {
        const role = response.data.role;

        // Properly map user data based on role
        const user =
          role === "customer"
            ? {
                id: response.data.user.customer_id,
                email: response.data.user.email,
                name: response.data.user.first_name,
                full_name:
                  `${response.data.user.first_name} ${response.data.user.last_name || ""}`.trim(),
                role: "customer" as const,
              }
            : {
                id: response.data.user.owner_id,
                owner_id: response.data.user.owner_id,
                email: response.data.user.user_email,
                name: response.data.user.full_name,
                full_name: response.data.user.full_name,
                role: "owner" as const,
              };

        console.log("Setting auth with user:", user);
        setAuth(user, response.data.token);

        // Redirect based on role
        setTimeout(() => {
          if (user.role === "owner") {
            router.push("/owner/dashboard");
          } else {
            router.push("/customer/home");
          }
        }, 100);
      } else {
        alert("Sign in failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      alert("Sign in failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your StyleSpot account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                New to StyleSpot?
              </span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/auth/signup"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Create an account →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
