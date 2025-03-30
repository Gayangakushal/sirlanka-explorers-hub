
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar, MapPin } from "lucide-react";

interface ItineraryProps {
  id: number;
  title: string;
  duration: string;
  groupSize: string;
  season: string;
  highlights: string[];
  description: string;
  image: string;
  price: string;
}

const itineraries: ItineraryProps[] = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    groupSize: "2-10 people",
    season: "Year-round",
    highlights: ["Sigiriya", "Polonnaruwa", "Dambulla", "Kandy"],
    description: "Immerse yourself in Sri Lanka's rich cultural heritage with visits to ancient cities, temples, and historical sites.",
    image: "https://images.unsplash.com/photo-1593693344876-7f3e7c7a8137?auto=format&fit=crop&q=80",
    price: "From $799"
  },
  {
    id: 2,
    title: "Beach & Wildlife Safari",
    duration: "10 Days",
    groupSize: "2-8 people",
    season: "Dec-Apr",
    highlights: ["Yala National Park", "Mirissa", "Bentota", "Whale Watching"],
    description: "Combine relaxation on pristine beaches with thrilling wildlife safaris to spot leopards, elephants, and marine life.",
    image: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?auto=format&fit=crop&q=80",
    price: "From $1,199"
  },
  {
    id: 3,
    title: "Tea Country & Hill Stations",
    duration: "5 Days",
    groupSize: "2-6 people",
    season: "Year-round",
    highlights: ["Nuwara Eliya", "Ella", "Tea Plantations", "Train Journey"],
    description: "Journey through mist-covered mountains and verdant tea estates, experiencing colonial hill stations and panoramic views.",
    image: "https://images.unsplash.com/photo-1588246429777-baf00c0ae600?auto=format&fit=crop&q=80",
    price: "From $649"
  },
];

const ItineraryCard: React.FC<ItineraryProps> = ({
  title,
  duration,
  groupSize,
  season,
  highlights,
  description,
  image,
  price
}) => {
  return (
    <div className="itinerary-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
      <div className="md:w-2/5 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6 md:w-3/5">
        <h3 className="text-2xl font-bold mb-2 hidden md:block">{title}</h3>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-srilanka-teal" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-srilanka-teal" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-srilanka-teal" />
            <span>{season}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-srilanka-teal" />
            <span>Multiple locations</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Highlights:</div>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <Badge key={index} className="bg-srilanka-teal/10 text-srilanka-teal border-srilanka-teal/30">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="font-bold text-xl">{price}</div>
          <Button className="bg-srilanka-teal hover:bg-srilanka-teal/90">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

const ItinerarySection = () => {
  return (
    <section id="itineraries" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Curated Itineraries</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handcrafted travel experiences that showcase the best of Sri Lanka, tailored to different interests and time frames
          </p>
        </div>
        
        <div className="space-y-8">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} {...itinerary} />
          ))}
        </div>
        
        <div className="text-center mt-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Looking for something custom?</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Tell us your travel preferences and interests, and we'll create a personalized itinerary just for you
          </p>
          <Button size="lg" className="bg-srilanka-green hover:bg-srilanka-green/90">
            Plan Custom Trip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
