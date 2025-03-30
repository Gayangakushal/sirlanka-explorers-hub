
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-srilanka-teal font-serif">Sirlanka</span>
              <span className="text-xs bg-srilanka-orange px-2 py-1 rounded-full text-white font-medium">EXPLORERS HUB</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover the beauty and wonder of Sri Lanka with our curated travel experiences, expert guides, and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <a href="#itineraries" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Itineraries
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Plan Your Trip
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Travel Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Top Destinations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Sigiriya & Cultural Triangle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Kandy & Hill Country
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Southern Beaches
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Yala & Wildlife Parks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-srilanka-teal transition-colors">
                  Colombo & Western Province
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-srilanka-teal shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  42 Temple Road, Colombo 3, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-srilanka-teal shrink-0" />
                <span className="text-gray-400">
                  +94 112 345 678
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-srilanka-teal shrink-0" />
                <span className="text-gray-400">
                  info@sirlanka.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2023 Sirlanka Explorers Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-srilanka-teal text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-srilanka-teal text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-srilanka-teal text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
