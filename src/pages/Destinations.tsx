
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard, { DestinationProps } from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin } from "lucide-react";

// Extended sample data for destinations
const allDestinations: DestinationProps[] = [
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
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    description: "Sri Lanka's most visited wildlife park, famous for having one of the highest leopard densities in the world.",
    image: "https://images.unsplash.com/photo-1544535830-9df3f56ff587?auto=format&fit=crop&q=80",
    category: ["Nature", "Wildlife", "Safari"],
    rating: 4.7
  },
  {
    id: 6,
    name: "Kandy Temple of the Tooth",
    location: "Central Province",
    description: "Sacred Buddhist temple housing the relic of the tooth of Buddha, surrounded by beautiful gardens and architecture.",
    image: "https://images.unsplash.com/photo-1517234478914-e1b54e3ee797?auto=format&fit=crop&q=80",
    category: ["Heritage", "Culture", "Religious"],
    rating: 4.8
  },
  {
    id: 7,
    name: "Nine Arches Bridge",
    location: "Uva Province",
    description: "Iconic colonial-era railway bridge surrounded by lush tea plantations and jungle, perfect for photography.",
    image: "https://images.unsplash.com/photo-1591017576868-988651c38e8e?auto=format&fit=crop&q=80",
    category: ["Heritage", "Nature", "Photography"],
    rating: 4.8
  },
  {
    id: 8,
    name: "Arugam Bay",
    location: "Eastern Province",
    description: "One of the top surf spots in Asia with a laid-back vibe, beautiful beaches, and fantastic waves for all skill levels.",
    image: "https://images.unsplash.com/photo-1588396822145-991ef81dce9c?auto=format&fit=crop&q=80",
    category: ["Beach", "Surfing", "Adventure"],
    rating: 4.5
  }
];

const Destinations = () => {
  const [destinations, setDestinations] = useState<DestinationProps[]>(allDestinations);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = ["All", "Beach", "Heritage", "Nature", "Adventure", "Culture", "Wildlife", "Religious", "Photography", "Surfing", "Hiking", "Safari"];
  
  // Filter destinations based on category and search term
  useEffect(() => {
    let filtered = allDestinations;
    
    // Apply category filter
    if (filter !== "All") {
      filtered = filtered.filter(dest => dest.category.includes(filter));
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(term) || 
        dest.location.toLowerCase().includes(term) || 
        dest.description.toLowerCase().includes(term)
      );
    }
    
    setDestinations(filtered);
  }, [filter, searchTerm]);

  return (
    <>
      <Navbar />
      
      {/* Hero section */}
      <div className="relative pt-16 md:pt-24 pb-16 bg-gradient-to-r from-srilanka-teal/90 to-srilanka-blue/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Sri Lanka's Treasures</h1>
            <p className="text-lg md:text-xl mb-6">
              Explore our handpicked collection of destinations that showcase the diverse beauty and culture of Sri Lanka
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search destinations..." 
                className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-srilanka-teal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-srilanka-teal" : ""}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {destinations.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-3">No destinations found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search criteria or explore different categories
            </p>
            <Button onClick={() => { setFilter("All"); setSearchTerm(""); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{destinations.length} Destinations Found</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Sort by: Most Popular
                </Button>
                <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  View on Map
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} {...destination} />
              ))}
            </div>
          </>
        )}
      </div>
      
      <Footer />
    </>
  );
};

export default Destinations;
