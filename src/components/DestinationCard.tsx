
import React from "react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface DestinationProps {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string[];
  rating: number;
}

const DestinationCard: React.FC<DestinationProps> = ({
  name,
  location,
  description,
  image,
  category,
  rating
}) => {
  return (
    <div className="destination-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/90 text-gray-800">
            ★ {rating.toFixed(1)}
          </Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {category.map((cat, index) => (
            <Badge key={index} variant="outline" className="bg-srilanka-cream/20 text-xs">
              {cat}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-srilanka-teal hover:bg-srilanka-teal/90">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
