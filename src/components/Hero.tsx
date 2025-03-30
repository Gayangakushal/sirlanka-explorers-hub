
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
          alt="Sri Lanka Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Discover the Pearl of the Indian Ocean
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Explore pristine beaches, ancient temples, lush tea plantations, and breathtaking wildlife in the tropical paradise of Sri Lanka
        </p>
        
        {/* Search form */}
        <div 
          className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 max-w-4xl mx-auto animate-fade-in border border-white/20"
          style={{animationDelay: "0.4s"}}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-white/70" />
              <select className="w-full bg-white/20 rounded-md py-3 pl-10 pr-3 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-srilanka-teal appearance-none">
                <option value="">Select Destination</option>
                <option value="colombo">Colombo</option>
                <option value="kandy">Kandy</option>
                <option value="galle">Galle</option>
                <option value="ella">Ella</option>
              </select>
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-white/70" />
              <input 
                type="text" 
                placeholder="Check-in Date" 
                className="w-full bg-white/20 rounded-md py-3 pl-10 pr-3 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-srilanka-teal"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-white/70" />
              <input 
                type="text" 
                placeholder="Check-out Date" 
                className="w-full bg-white/20 rounded-md py-3 pl-10 pr-3 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-srilanka-teal"
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-white/70" />
              <select className="w-full bg-white/20 rounded-md py-3 pl-10 pr-3 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-srilanka-teal appearance-none">
                <option value="">Travelers</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4+ People</option>
              </select>
            </div>
          </div>
          <Button className="w-full mt-4 bg-srilanka-teal hover:bg-srilanka-teal/90 text-white">
            Search Trips
          </Button>
        </div>
        
        {/* Scroll down indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
        >
          <ChevronDown className="h-10 w-10 text-white/80" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
