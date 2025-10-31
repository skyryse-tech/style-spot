import {
  Scissors,
  Sparkles,
  Heart,
  Home,
  Crown,
  Search,
  Calendar,
  CreditCard,
  CheckCircle,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-purple-600">StyleSpot</h1>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/auth/signin"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Sign In
              </a>
              <a
                href="/auth/signup"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 font-medium transition-colors shadow-md"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Beauty & Wellness
            <br />
            <span className="text-purple-600">Services Near You</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Book appointments at top-rated salons, spas, and beauty services.
            Professional care, hassle-free booking.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="/search"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Find Services
            </a>
            <a
              href="/auth/signup"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              <Crown className="w-5 h-5" />
              Register Your Business
            </a>
          </div>

          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Pan India</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Instant Booking</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scissors className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Haircut & Styling</h3>
            <p className="text-gray-600">
              Professional hair care, cuts, coloring, and styling services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Spa & Massage</h3>
            <p className="text-gray-600">
              Relax and rejuvenate with therapeutic spa treatments
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border border-purple-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Beauty & Makeup</h3>
            <p className="text-gray-600">
              Expert makeup, facials, and beauty enhancement services
            </p>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Search</h4>
              <p className="text-purple-100">
                Find services and professionals near you
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Book</h4>
              <p className="text-purple-100">
                Choose your preferred date and time slot
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Pay</h4>
              <p className="text-purple-100">
                Secure payment via UPI or cash on arrival
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Enjoy</h4>
              <p className="text-purple-100">
                Get professional service at your convenience
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">For Service Providers</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join StyleSpot and grow your business. Reach thousands of
              customers looking for quality beauty and wellness services.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Easy online booking management
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Direct UPI payments to your account
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Real-time notifications for bookings
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Build your customer base organically
                </span>
              </li>
            </ul>
            <a
              href="/auth/signup"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
            >
              <Crown className="w-5 h-5" />
              Get Started as Provider
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 border-2 border-purple-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <Home className="w-10 h-10 text-purple-600" />
                <div>
                  <h4 className="font-semibold">Home Service Available</h4>
                  <p className="text-sm text-gray-600">
                    Offer services at customer location
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <Calendar className="w-10 h-10 text-purple-600" />
                <div>
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-600">
                    Set your own availability and holidays
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <Star className="w-10 h-10 text-purple-600" />
                <div>
                  <h4 className="font-semibold">Build Your Reputation</h4>
                  <p className="text-sm text-gray-600">
                    Get reviews and ratings from customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold">StyleSpot</h3>
              </div>
              <p className="text-gray-400">
                Your trusted platform for beauty and wellness service bookings.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/search"
                    className="hover:text-white transition-colors"
                  >
                    Find Services
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/signup"
                    className="hover:text-white transition-colors"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/signin"
                    className="hover:text-white transition-colors"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Providers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/auth/signup"
                    className="hover:text-white transition-colors"
                  >
                    Register Your Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partner Benefits
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 StyleSpot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
