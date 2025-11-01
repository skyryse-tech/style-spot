"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Clock,
  DollarSign,
  Home,
  X,
  Save,
} from "lucide-react";
import api from "@/lib/api";

interface Service {
  service_id: number;
  name: string;
  description: string;
  duration_minutes: number;
  base_price: number;
  gender_type: string;
  is_home_visit: boolean;
}

export default function OwnerServicesPage() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [ownerId, setOwnerId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration_minutes: 30,
    base_price: 0,
    gender_type: "unisex",
    is_home_visit: false,
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/auth/signin");
        return;
      }

      const user = JSON.parse(userData);
      const ownerIdValue = user.id || user.owner_id;
      setOwnerId(ownerIdValue);

      const response = await api.get("/services", {
        params: { owner_id: ownerIdValue },
      });

      setServices(response.data || []);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        description: service.description || "",
        duration_minutes: service.duration_minutes,
        base_price: service.base_price,
        gender_type: service.gender_type || "unisex",
        is_home_visit: service.is_home_visit,
      });
    } else {
      setEditingService(null);
      setFormData({
        name: "",
        description: "",
        duration_minutes: 30,
        base_price: 0,
        gender_type: "unisex",
        is_home_visit: false,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingService(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingService) {
        // Update existing service
        await api.patch(`/services/${editingService.service_id}`, formData);
      } else {
        // Create new service
        await api.post("/services", {
          ...formData,
          owner_id: ownerId,
        });
      }

      fetchServices();
      handleCloseModal();
    } catch (error: any) {
      console.error("Failed to save service:", error);
      alert(error.response?.data?.message || "Failed to save service");
    }
  };

  const handleDelete = async (serviceId: number) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      await api.delete(`/services/${serviceId}`);
      fetchServices();
    } catch (error) {
      console.error("Failed to delete service:", error);
      alert("Failed to delete service");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Services</h1>
              <p className="text-gray-600 mt-1">
                Manage your service offerings and pricing
              </p>
            </div>

            <button
              onClick={() => handleOpenModal()}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-xl font-semibold transition-all shadow-md hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              Add Service
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.service_id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {service.name}
                  </h3>
                  {service.gender_type && service.gender_type !== "unisex" && (
                    <span className="inline-block mt-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {service.gender_type}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  {service.description && (
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm">Duration</span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {service.duration_minutes} min
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Price</span>
                      </div>
                      <span className="font-bold text-green-600 text-lg">
                        ₹{service.base_price}
                      </span>
                    </div>

                    {service.is_home_visit && (
                      <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-3 py-2 rounded-lg">
                        <Home className="w-5 h-5" />
                        <span className="text-sm font-semibold">
                          Home Service Available
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="flex-1 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.service_id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-semibold transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="w-12 h-12 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No services yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start by adding your first service offering
            </p>
            <button
              onClick={() => handleOpenModal()}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-xl font-semibold transition-all shadow-md inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Your First Service
            </button>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingService ? "Edit Service" : "Add New Service"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="e.g., Men's Haircut, Facial, Spa Massage"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  placeholder="Brief description of the service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes) *
                  </label>
                  <input
                    type="number"
                    value={formData.duration_minutes}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        duration_minutes: parseInt(e.target.value),
                      })
                    }
                    required
                    min="5"
                    step="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.base_price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        base_price: parseInt(e.target.value),
                      })
                    }
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender Type
                </label>
                <select
                  value={formData.gender_type}
                  onChange={(e) =>
                    setFormData({ ...formData, gender_type: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                >
                  <option value="unisex">Unisex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg border border-purple-200">
                <input
                  type="checkbox"
                  id="is_home_visit"
                  checked={formData.is_home_visit}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      is_home_visit: e.target.checked,
                    })
                  }
                  className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor="is_home_visit"
                  className="text-sm font-medium text-gray-700 cursor-pointer flex items-center gap-2"
                >
                  <Home className="w-5 h-5 text-purple-600" />
                  Offer as home service
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingService ? "Update Service" : "Add Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
