"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { useAuthStore } from "@/store/auth";
import {
  User,
  Store,
  Mail,
  Phone,
  Lock,
  MapPin,
  Briefcase,
  CreditCard,
} from "lucide-react";

interface ShopOwnerFormData {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  shop_name: string;
  shop_address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    latitude?: number;
    longitude?: number;
  };
  is_freelancer: boolean;
  service_types: string[];
  bank_account: {
    account_holder_name: string;
    account_number: string;
    ifsc_code: string;
    bank_name: string;
  };
  upi_details: {
    vpa: string;
  };
}

export default function SignUpPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [role, setRole] = useState<"customer" | "owner">("customer");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [ownerFormData, setOwnerFormData] = useState<ShopOwnerFormData>({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    shop_name: "",
    shop_address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    is_freelancer: false,
    service_types: [],
    bank_account: {
      account_holder_name: "",
      account_number: "",
      ifsc_code: "",
      bank_name: "",
    },
    upi_details: {
      vpa: "",
    },
  });

  const serviceTypeOptions = [
    "Haircut & Styling",
    "Hair Coloring",
    "Spa & Massage",
    "Facial & Skin Care",
    "Makeup & Bridal",
    "Nail Care & Manicure",
    "Waxing & Threading",
    "Body Treatment",
    "Hair Treatment",
    "Tattoo & Piercing",
  ];

  const toggleServiceType = (service: string) => {
    setOwnerFormData((prev) => ({
      ...prev,
      service_types: prev.service_types.includes(service)
        ? prev.service_types.filter((s) => s !== service)
        : [...prev.service_types, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload =
        role === "customer"
          ? { ...formData, role }
          : { ...ownerFormData, role };

      console.log("Sending signup request:", payload);

      const res = await api.post("/auth/signup", payload);

      console.log("Signup response:", res.data);

      if (res.data.token) {
        setAuth(res.data.user, res.data.token);
        router.push(
          role === "customer" ? "/customer/home" : "/dashboard/owner"
        );
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      console.error("Error response:", error.response?.data);
      const errorMessage =
        error.response?.data?.message || "Signup failed. Please try again.";
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Join StyleSpot and start your journey</p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setRole("customer")}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              role === "customer"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <User className="w-5 h-5" />
            Customer
          </button>
          <button
            onClick={() => setRole("owner")}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              role === "owner"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Store className="w-5 h-5" />
            Shop Owner
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {role === "customer" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={(e) =>
                        setFormData({ ...formData, first_name: e.target.value })
                      }
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <Store className="w-5 h-5" />
                  Business Owner Registration
                </h3>
                <p className="text-sm text-purple-700">
                  Please provide complete details to set up your business
                  profile
                </p>
              </div>

              {/* Personal Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  Personal Information
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={ownerFormData.full_name}
                      onChange={(e) =>
                        setOwnerFormData({
                          ...ownerFormData,
                          full_name: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="business@example.com"
                          value={ownerFormData.email}
                          onChange={(e) =>
                            setOwnerFormData({
                              ...ownerFormData,
                              email: e.target.value,
                            })
                          }
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="+91 9876543210"
                          value={ownerFormData.phone}
                          onChange={(e) =>
                            setOwnerFormData({
                              ...ownerFormData,
                              phone: e.target.value,
                            })
                          }
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={ownerFormData.password}
                        onChange={(e) =>
                          setOwnerFormData({
                            ...ownerFormData,
                            password: e.target.value,
                          })
                        }
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Store className="w-5 h-5 text-purple-600" />
                  Business Information
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shop/Business Name *
                    </label>
                    <input
                      type="text"
                      placeholder="StyleSpot Salon & Spa"
                      value={ownerFormData.shop_name}
                      onChange={(e) =>
                        setOwnerFormData({
                          ...ownerFormData,
                          shop_name: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <input
                      type="checkbox"
                      id="is_freelancer"
                      checked={ownerFormData.is_freelancer}
                      onChange={(e) =>
                        setOwnerFormData({
                          ...ownerFormData,
                          is_freelancer: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label
                      htmlFor="is_freelancer"
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      I am a freelancer (without shop)
                    </label>
                  </div>
                </div>
              </div>

              {/* Shop Address */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  Business Address
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      placeholder="Shop No. 123, ABC Complex"
                      value={ownerFormData.shop_address.street}
                      onChange={(e) =>
                        setOwnerFormData({
                          ...ownerFormData,
                          shop_address: {
                            ...ownerFormData.shop_address,
                            street: e.target.value,
                          },
                        })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="Mumbai"
                        value={ownerFormData.shop_address.city}
                        onChange={(e) =>
                          setOwnerFormData({
                            ...ownerFormData,
                            shop_address: {
                              ...ownerFormData.shop_address,
                              city: e.target.value,
                            },
                          })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        placeholder="Maharashtra"
                        value={ownerFormData.shop_address.state}
                        onChange={(e) =>
                          setOwnerFormData({
                            ...ownerFormData,
                            shop_address: {
                              ...ownerFormData.shop_address,
                              state: e.target.value,
                            },
                          })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        placeholder="400001"
                        value={ownerFormData.shop_address.pincode}
                        onChange={(e) =>
                          setOwnerFormData({
                            ...ownerFormData,
                            shop_address: {
                              ...ownerFormData.shop_address,
                              pincode: e.target.value,
                            },
                          })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  Services Offered *
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceTypeOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleServiceType(service)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        ownerFormData.service_types.includes(service)
                          ? "bg-purple-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {ownerFormData.service_types.length === 0 && (
                  <p className="text-sm text-red-600 mt-2">
                    Please select at least one service type
                  </p>
                )}
              </div>

              {/* Bank Account Details */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Bank Account Details
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder Name *
                    </label>
                    <input
                      type="text"
                      placeholder="As per bank records"
                      value={ownerFormData.bank_account.account_holder_name}
                      onChange={(e) =>
                        setOwnerFormData({
                          ...ownerFormData,
                          bank_account: {
                            ...ownerFormData.bank_account,
                            account_holder_name: e.target.value,
                          },
                        })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Name *
                      </label>
                      <input
                        type="text"
                        placeholder="HDFC Bank"
                        value={ownerFormData.bank_account.bank_name}
                        onChange={(e) =>
                          setOwnerFormData({
                            ...ownerFormData,
                            bank_account: {
                              ...ownerFormData.bank_account,
                              bank_name: e.target.value,
                            },
                          })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IFSC Code *
                      </label>
                      <input
                        type="text"
                        placeholder="HDFC0001234"
                        value={ownerFormData.bank_account.ifsc_code}
                        onChange={(e) =>
                          setOwnerFormData({
                            ...ownerFormData,
                            bank_account: {
                              ...ownerFormData.bank_account,
                              ifsc_code: e.target.value.toUpperCase(),
                            },
                          })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number *
                    </label>
                    <input
                      type="text"
                      placeholder="123456789012"
                      value={ownerFormData.bank_account.account_number}
                      onChange={(e) =>
                        setOwnerFormData({
                          ...ownerFormData,
                          bank_account: {
                            ...ownerFormData.bank_account,
                            account_number: e.target.value,
                          },
                        })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* UPI Details */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  UPI Details *
                </h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UPI ID / VPA
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@paytm"
                    value={ownerFormData.upi_details.vpa}
                    onChange={(e) =>
                      setOwnerFormData({
                        ...ownerFormData,
                        upi_details: {
                          ...ownerFormData.upi_details,
                          vpa: e.target.value,
                        },
                      })
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This UPI ID will be used for receiving payments from
                    customers
                  </p>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 font-semibold text-lg shadow-md transition-colors"
          >
            {role === "customer"
              ? "Create Customer Account"
              : "Register Business"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/signin"
            className="text-purple-600 hover:underline font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
