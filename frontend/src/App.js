import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Car, Tent, Utensils, TelescopeIcon as Binoculars, Headphones, User, Plane, Clock, Calendar, Mail, Phone, MapPin, Quote } from 'lucide-react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import kumbhVideo from './assets/KumhVideo.mp4';
import priceTagImage from "./assets/pricetag.png"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [loading, setLoading] = useState(false);

  const services = [
    { icon: Car, name: 'Transportation', description: 'Comfortable travel arrangements' },
    { icon: Tent, name: 'Camps', description: 'Swiss Cottage accommodation' },
    { icon: Utensils, name: 'Food', description: 'Quality meals included' },
    { icon: Binoculars, name: 'Sightseeing', description: 'Guided tour experiences' },
    { icon: Headphones, name: 'Support 24/7', description: 'Round-the-clock assistance' },
    { icon: User, name: 'Tour Guide', description: 'Expert guidance throughout' },
  ]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, dates: date });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://travel-n90i.onrender.com/send-email", { formData });
      toast.success("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", dates: " " });
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="min-h-screen bg-gray-50 realtive scroll-smooth">
      <ToastContainer />
      {/* Navigation */}
      <nav className={`w-full text-white  top-0 z-50 transition-all duration-300 ${isScrolled ? 'm-auto py sticky  bg-black' : 'absolute'}`}>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold">
              PRAYAGRAJ KUMBH MELA
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Home</a>
                <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">About</a>
                <a href="#packUp" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Pack Up</a>
                <a href="#contact-us" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Contact</a>
                <a href="#booking" className="block px-3 py-2 rounded-md text-base font-medium hover:text-black bg-yellow-500">Get a call</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Home</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">About</a>
              <a href="#packUp" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Pack Up</a>
              <a href="#contact-us" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Contact</a>
              <a href="#booking" className="block px-3 py-2 rounded-md text-base font-medium hover:text-black bg-yellow-500">Get a call</a>
            </div>
          </div>
        )}
      </nav>


      {/* Hero Section */}
<div className="relative lg:h-screen">
  {/* Background video with gradient overlay */}
  <div className="absolute inset-0 overflow-hidden h-full w-full">
    <video className="background-video object-cover w-full h-full" autoPlay loop muted>
      <source src={kumbhVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>
  </div>

  {/* Content container with motion effects */}
  <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="md:pt-36 text-center"
    >
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl text-shadow-lg">
        KUMBH MELA 2025
      </h1>
      <p className="mt-6 text-xl text-yellow-400 max-w-3xl mx-auto font-semibold text-shadow-lg">
        Experience the world's largest spiritual gathering in Prayagraj
      </p>
      <div className="mt-6 text-xl text-yellow-400 flex items-center justify-center space-x-2">
        <Calendar className="w-6 h-6" />
        <span>Jan 13, 2025 to Feb 26, 2025</span>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
        <Clock className="w-6 h-6 text-yellow-400" />
        <span className="text-white font-semibold">LIMITED OFFER</span>
      </div>
      <div className="mt-10">
        <a
          href="#booking"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transform transition-all duration-300 ease-in-out"
        >
          Book Your Journey Now
        </a>
      </div>
    </motion.div>
  </div>
</div>


      {/* About Kumbh Mela Section */}
      <div className="bg-white py-16" id='about'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Kumbh Mela
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Kumbh Mela is the largest peaceful gathering of pilgrims on earth, during which participants bathe or dip in a sacred river. The festival is held every 12 years at one of four river bank pilgrimage sites: Prayagraj, Haridwar, Nashik, and Ujjain.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sacred Location</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Held at the confluence of three sacred rivers - the Ganga, Yamuna, and the mythical Saraswati.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                    <User className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Millions of Pilgrims</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Attracts millions of devotees from around the world for a holy dip in the sacred waters.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="bg-gray-50 py-16" id='packUp'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              TOUR PACKAGE
            </h2>
            <div
              className="relative mx-auto max-w-md py-7 px-8 "
              style={{
                backgroundImage: `url(${priceTagImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <p className=" text-2xl font-bold text-gray-800">
                Starts from Rs 14,999/- (Per Night)
              </p>
            </div>
            <p className="text-gray-700">
              Accommodation per Swiss Cottage
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-400 ring-4 ring-white">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              *AIRPORT PICKUP AVAILABLE
            </div>
          </div>
        </div>
      </div>

      {/* Kumbh Mela Ritual Details */}
<div className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 py-16" id="ritualDetails">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
        Spiritual Offerings at Kumbh Mela
      </h2>
      <p className="text-lg text-gray-700">
        Immerse yourself in divine rituals, holy baths, and serene Aarti ceremonies. 
        <span className="font-semibold"> Prices for these rituals are excluded.</span>
      </p>
    </div>

    {/* Rituals Section */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Poojas Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          {/* <img src="/icons/pooja-icon.png" alt="Pooja Icon" className="h-6 w-6 mr-2" /> */}
          Types of Poojas
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-semibold">Shivling Abhishekam:</span> Ritual bathing of the Shiva Linga with sacred items symbolizing devotion to Lord Shiva.</li>
          <li><span className="font-semibold">Navagraha Pooja:</span> Worship of the nine planetary deities for spiritual harmony.</li>
          <li><span className="font-semibold">Chandi Path and Havan:</span> Recitation of Durga Saptashati and fire offerings to seek blessings from Goddess Durga.</li>
          <li><span className="font-semibold">Ganga Pooja:</span> Offerings to River Ganga to express gratitude and seek blessings.</li>
          <li><span className="font-semibold">Maha Rudrabhishekam:</span> A grand ritual dedicated to Lord Shiva for peace and prosperity.</li>
          <li><span className="font-semibold">Kaal Sarpa Pooja:</span> Reduces planetary doshas and ensures spiritual well-being.</li>
        </ul>
      </div>

      {/* Snan Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          {/* <img src="/icons/snan-icon.png" alt="Snan Icon" className="h-6 w-6 mr-2" /> */}
          Types of Snan (Holy Baths)
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-semibold">Shahi Snan:</span> Royal bath taken by saints marking the opening of Kumbh Mela.</li>
          <li><span className="font-semibold">Parv Snan:</span> Holy baths on auspicious days like Makar Sankranti and Mauni Amavasya.</li>
          <li><span className="font-semibold">Amrit Snan:</span> Spiritual bath during Brahma Muhurta for divine energy.</li>
          <li><span className="font-semibold">Kalpavas Snan:</span> Daily baths for a month as penance and devotion.</li>
        </ul>
      </div>

      {/* Aarti Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          {/* <img src="/icons/Aarti-icon.png" alt="Aarti Icon" className="h-6 w-6 mr-2" /> */}
          Types of Aarti
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-semibold">Ganga Aarti:</span> Evening ceremony with lamps offered to River Ganga.</li>
          <li><span className="font-semibold">Maha Aarti:</span> Grand ritual performed on significant occasions.</li>
          <li><span className="font-semibold">Akhand Aarti:</span> Continuous Aarti symbolizing eternal devotion.</li>
          <li><span className="font-semibold">Sant Aarti:</span> Special Aarti offered by saints to unify spirituality.</li>
        </ul>
      </div>
    </div>
  </div>
</div>


      {/* Booking Form */}
      <div id="booking" className="bg-gray-50 py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white py-8 px-10 shadow-lg rounded-lg sm:px-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Book Your Journey Now
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Fill in your details to secure your spot for Kumbh Mela 2025!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label
                htmlFor="dates"
                className="block text-sm font-medium text-gray-700"
                >
                Preferred Dates
                </label>
                  <input
                    type="date"
                    name="dates"
                    id="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    required
                    min="2025-01-13"
                    max="2025-02-26"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
              </div>

              <div>
                <button
                  type="submit"
                  className={`send-email-btn ${loading ? 'opacity-50 cursor-not-allowed ' : 'w-full py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-200'}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2 w-full py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-200">
                      <span className="loading-spinner" />
                      Sending...
                    </span>
                  ) : (
                    <span className=''>
                      'Book Now'
                    </span>
                    
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Prepare for Your Spiritual Journey
            </h2>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">What to Pack</dt>
                <dd className="mt-2 text-base text-gray-500">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comfortable, modest clothing</li>
                    <li>Sunscreen and hat</li>
                    <li>Water bottle</li>
                    <li>Comfortable walking shoes</li>
                    <li>Personal medications</li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">Cultural Etiquette</dt>
                <dd className="mt-2 text-base text-gray-500">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Dress modestly, covering shoulders and knees</li>
                    <li>Remove shoes before entering temples</li>
                    <li>Ask permission before taking photographs of people</li>
                    <li>Be respectful of religious customs and practices</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center text-3xl font-semibold italic text-gray-900">
            <p>"The Kumbh Mela is not just a festival... it is the largest act of faith in the world."</p>
          </blockquote>
          <p className="mt-4 text-center text-lg text-gray-800">- Mark Twain</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white py-12" id='contact-us'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>+91 90088 67788</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>kumbh.mela25@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Kumbh Mela 2025</h3>
              <p className="text-sm">Experience the world's largest spiritual gathering</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#" className="hover:text-yellow-400">About</a></li>
                <li><a href="#" className="hover:text-yellow-400">Services</a></li>
                <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-center">
            <p>&copy; 2024 Kumbh Mela Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
