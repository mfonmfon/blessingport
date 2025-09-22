import React from 'react';
import { Instagram, Mail, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-6 w-6 text-amber-500" />
          <span className="text-lg font-bold">Blessing Bello</span>
        </div>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Fashion stylist creating timeless looks that inspire confidence and elegance.
        </p>

        {/* Contact + Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
          <a href="mailto:belloblessing765@gmail.com" className="flex items-center space-x-2 hover:text-amber-500 transition">
            <Mail className="h-4 w-4" />
            <span>belloblessing765@gmail.com</span>
          </a>
          <a href="tel:07068610808" className="flex items-center space-x-2 hover:text-amber-500 transition">
            <Phone className="h-4 w-4" />
            <span>07068610808</span>
          </a>
          <a href="https://instagram.com/maxwell_blessing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-amber-500 transition">
            <Instagram className="h-4 w-4" />
            <span>@maxwell_blessing</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Blessing Bello. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
