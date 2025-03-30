
import React, { useState } from "react";
import DestinationCard, { DestinationProps } from "./DestinationCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for destinations
const destinations: DestinationProps[] = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    location: "Central Province",
    description: "Ancient rock fortress with frescoes and stunning panoramic views. A UNESCO World Heritage site from the 5th century.",
    image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&q=80",
    category: ["Heritage", "Adventure"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Mirissa Beach",
    location: "Southern Province",
    description: "Pristine beach with turquoise waters, perfect for relaxation, surfing, and whale watching during the season.",
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80",
    category: ["Beach", "Nature"],
    rating: 4.6
  },
  {
    id: 3,
    name: "Ella Rock",
    location: "Uva Province",
    description: "Spectacular hiking destination with breathtaking views of valleys, tea plantations, and waterfalls.",
    image: "https://images.unsplash.com/photo-1586269415299-2eb396864eb6?auto=format&fit=crop&q=80",
    category: ["Nature", "Adventure", "Hiking"],
    rating: 4.7
  },
  {
    id: 4,
    name: "Galle Fort",
    location: "Southern Province",
    description: "Colonial-era fort built by the Portuguese and fortified by the Dutch, featuring charming streets and ocean views.",
    image: "https://images.unsplash.com/photo-1562613643-4789b0b6b5cd?auto=format&fit=crop&q=80",
    category: ["Heritage", "Culture"],
    rating: 4.9
  }
];

const DestinationsSection = () => {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Beach", "Heritage", "Nature", "Adventure", "Culture"];
  
  const filteredDestinations = filter === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category.includes(filter));

  return (
    <section id="destinations" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the most breathtaking locations across Sri Lanka, from ancient ruins to pristine beaches and lush tea plantations
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-srilanka-teal" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button variant="outline" size="lg" className="border-srilanka-teal text-srilanka-teal hover:bg-srilanka-teal hover:text-white">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
