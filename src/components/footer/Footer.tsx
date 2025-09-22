import React from 'react';
import { Instagram, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">Blessing Bello</span>
                <span className="text-xs text-gray-400 tracking-wider">FASHION STYLIST</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating distinctive style experiences for individuals and brands worldwide.
              Elevating fashion through personalized styling services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                About Me
              </Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                Portfolio
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Services</h3>
            <nav className="space-y-2">
              <span className="block text-gray-300 text-sm">White Wedding Styling</span>
              <span className="block text-gray-300 text-sm">Traditional Wedding Styling</span>
              <span className="block text-gray-300 text-sm">Bridal Party Coordination</span>
              <span className="block text-gray-300 text-sm">Fashion & Editorial</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Get In Touch</h3>
            <div className="space-y-3">
              <a href="mailto:hello@sophiastylist.com" className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>belloblessing765@gmail.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                <Phone className="h-4 w-4" />
                <span>07068610808</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Lagos Nigeria</span>
              </div>
              <a href="https://instagram.com" className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm">
                <Instagram className="h-4 w-4" />
                <span>@maxwell_blessing</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Blessing Bello Fashion Stylist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;