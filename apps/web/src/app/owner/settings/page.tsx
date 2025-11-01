"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Store,
  Phone,
  MapPin,
  Clock,
  CreditCard,
  User,
  Briefcase,
  Settings as SettingsIcon,
} from "lucide-react";
import api from "@/lib/api";

interface OwnerData {
  owner_id: number;
  full_name: string;
  phone: string;
  is_freelancer: boolean;
  shop_name?: string;
  shop_address?: any;
  service_types?: string[];
  bank_account?: string;
  upi_details?: string;
  business_hours?: any;
  holidays?: any;
}

export default function OwnerSettingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [ownerData, setOwnerData] = useState<OwnerData | null>(null);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    shop_name: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    pincode: "",
    service_types: [] as string[],
    is_freelancer: false,
    bank_account: "",
    upi_details: "",
    monday_open: "09:00",
    monday_close: "20:00",
    tuesday_open: "09:00",
    tuesday_close: "20:00",
    wednesday_open: "09:00",
    wednesday_close: "20:00",
    thursday_open: "09:00",
    thursday_close: "20:00",
    friday_open: "09:00",
    friday_close: "20:00",
    saturday_open: "09:00",
    saturday_close: "20:00",
    sunday_open: "09:00",
    sunday_close: "20:00",
    monday_closed: false,
    tuesday_closed: false,
    wednesday_closed: false,
    thursday_closed: false,
    friday_closed: false,
    saturday_closed: false,
    sunday_closed: false,
  });

  const serviceTypeOptions = [
    "Haircut",
    "Shaving",
    "Facial",
    "Hair Color",
    "Spa",
    "Massage",
    "Makeup",
    "Manicure",
    "Pedicure",
    "Waxing",
    "Threading",
    "Tattoo",
  ];

  useEffect(() => {
    fetchOwnerData();
  }, []);

  const fetchOwnerData = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);
      const ownerId = user.id || user.owner_id;

      const response = await api.get(`/owners/shops/${ownerId}`);
      const data: OwnerData = response.data;
      setOwnerData(data);

      // Parse address
      let address = { line1: "", line2: "", city: "", state: "", pincode: "" };
      if (data.shop_address) {
        if (typeof data.shop_address === "string") {
          try {
            address = JSON.parse(data.shop_address);
          } catch {
            address.line1 = data.shop_address;
          }
        } else {
          address = data.shop_address;
        }
      }

      // Parse business hours
      let hours: any = {};
      if (data.business_hours) {
        if (typeof data.business_hours === "string") {
          try {
            hours = JSON.parse(data.business_hours);
          } catch {}
        } else {
          hours = data.business_hours;
        }
      }

      setFormData({
        full_name: data.full_name || "",
        phone: data.phone || "",
        shop_name: data.shop_name || "",
        address_line1: address.line1 || "",
        address_line2: address.line2 || "",
        city: address.city || "",
        state: address.state || "",
        pincode: address.pincode || "",
        service_types: data.service_types || [],
        is_freelancer: data.is_freelancer || false,
        bank_account: data.bank_account || "",
        upi_details: data.upi_details || "",
        monday_open: hours.monday?.open || "09:00",
        monday_close: hours.monday?.close || "20:00",
        tuesday_open: hours.tuesday?.open || "09:00",
        tuesday_close: hours.tuesday?.close || "20:00",
        wednesday_open: hours.wednesday?.open || "09:00",
        wednesday_close: hours.wednesday?.close || "20:00",
        thursday_open: hours.thursday?.open || "09:00",
        thursday_close: hours.thursday?.close || "20:00",
        friday_open: hours.friday?.open || "09:00",
        friday_close: hours.friday?.close || "20:00",
        saturday_open: hours.saturday?.open || "09:00",
        saturday_close: hours.saturday?.close || "20:00",
        sunday_open: hours.sunday?.open || "09:00",
        sunday_close: hours.sunday?.close || "20:00",
        monday_closed: hours.monday?.closed || false,
        tuesday_closed: hours.tuesday?.closed || false,
        wednesday_closed: hours.wednesday?.closed || false,
        thursday_closed: hours.thursday?.closed || false,
        friday_closed: hours.friday?.closed || false,
        saturday_closed: hours.saturday?.closed || false,
        sunday_closed: hours.sunday?.closed || false,
      });
    } catch (error) {
      console.error("Failed to fetch owner data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleServiceTypeToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      service_types: prev.service_types.includes(service)
        ? prev.service_types.filter((s) => s !== service)
        : [...prev.service_types, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const shopAddress = {
        line1: formData.address_line1,
        line2: formData.address_line2,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      };

      const businessHours = {
        monday: {
          open: formData.monday_open,
          close: formData.monday_close,
          closed: formData.monday_closed,
        },
        tuesday: {
          open: formData.tuesday_open,
          close: formData.tuesday_close,
          closed: formData.tuesday_closed,
        },
        wednesday: {
          open: formData.wednesday_open,
          close: formData.wednesday_close,
          closed: formData.wednesday_closed,
        },
        thursday: {
          open: formData.thursday_open,
          close: formData.thursday_close,
          closed: formData.thursday_closed,
        },
        friday: {
          open: formData.friday_open,
          close: formData.friday_close,
          closed: formData.friday_closed,
        },
        saturday: {
          open: formData.saturday_open,
          close: formData.saturday_close,
          closed: formData.saturday_closed,
        },
        sunday: {
          open: formData.sunday_open,
          close: formData.sunday_close,
          closed: formData.sunday_closed,
        },
      };

      await api.patch(`/owners/${ownerData?.owner_id}`, {
        full_name: formData.full_name,
        phone: formData.phone,
        shop_name: formData.shop_name,
        shop_address: JSON.stringify(shopAddress),
        service_types: formData.service_types,
        is_freelancer: formData.is_freelancer,
        bank_account: formData.bank_account,
        upi_details: formData.upi_details,
        business_hours: JSON.stringify(businessHours),
      });

      alert("Settings saved successfully!");
      fetchOwnerData();
    } catch (error: any) {
      console.error("Failed to save settings:", error);
      alert(error.response?.data?.message || "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push("/owner/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 mb-4 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-3">
            <SettingsIcon className="w-8 h-8 text-cyan-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-1">
                Manage your shop details and business preferences
              </p>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-cyan-600" />
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_freelancer}
                onChange={(e) =>
                  setFormData({ ...formData, is_freelancer: e.target.checked })
                }
                className="w-5 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
              />
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">
                  I am a freelancer (no shop location)
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Shop Information */}
        {!formData.is_freelancer && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Store className="w-6 h-6 text-cyan-600" />
              Shop Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shop Name
                </label>
                <input
                  type="text"
                  value={formData.shop_name}
                  onChange={(e) =>
                    setFormData({ ...formData, shop_name: e.target.value })
                  }
                  placeholder="e.g., Royal Salon & Spa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    value={formData.address_line1}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address_line1: e.target.value,
                      })
                    }
                    placeholder="Street address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    value={formData.address_line2}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address_line2: e.target.value,
                      })
                    }
                    placeholder="Landmark (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Types */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Service Categories
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Select the types of services you offer
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceTypeOptions.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceTypeToggle(service)}
                className={`px-4 py-3 rounded-lg border-2 transition-all font-semibold ${
                  formData.service_types.includes(service)
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-cyan-400"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-cyan-600" />
            Business Hours
          </h2>

          <div className="space-y-4">
            {days.map((day) => (
              <div
                key={day}
                className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0"
              >
                <div className="w-32">
                  <span className="font-semibold text-gray-900 capitalize">
                    {day}
                  </span>
                </div>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={
                      formData[
                        `${day}_closed` as keyof typeof formData
                      ] as boolean
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [`${day}_closed`]: e.target.checked,
                      })
                    }
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-600">Closed</span>
                </label>

                {!formData[`${day}_closed` as keyof typeof formData] && (
                  <>
                    <input
                      type="time"
                      value={
                        formData[
                          `${day}_open` as keyof typeof formData
                        ] as string
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [`${day}_open`]: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    />
                    <span className="text-gray-600">to</span>
                    <input
                      type="time"
                      value={
                        formData[
                          `${day}_close` as keyof typeof formData
                        ] as string
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [`${day}_close`]: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-cyan-600" />
            Payment Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Account Number
              </label>
              <input
                type="text"
                value={formData.bank_account}
                onChange={(e) =>
                  setFormData({ ...formData, bank_account: e.target.value })
                }
                placeholder="For settlements"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                UPI ID
              </label>
              <input
                type="text"
                value={formData.upi_details}
                onChange={(e) =>
                  setFormData({ ...formData, upi_details: e.target.value })
                }
                placeholder="yourname@upi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-xl font-semibold transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
