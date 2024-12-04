import { useState } from "react";
import { Check, Star, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Influencer {
  id: number;
  name: string;
  niche: string;
  followers: string;
  selected: boolean;
  portfolioLink: string;
  socialPlatform: "Instagram" | "Pinterest";
}

const InfluencerList = () => {
  const [influencers, setInfluencers] = useState<Influencer[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      niche: "Fashion & Lifestyle",
      followers: "250K",
      selected: false,
      portfolioLink: "instagram.com/sarahjohnson",
      socialPlatform: "Instagram",
    },
    {
      id: 2,
      name: "Mike Chen",
      niche: "Tech Reviews",
      followers: "500K",
      selected: false,
      portfolioLink: "pinterest.com/mikechen",
      socialPlatform: "Pinterest",
    },
    {
      id: 3,
      name: "Emma Davis",
      niche: "Fitness",
      followers: "150K",
      selected: false,
      portfolioLink: "instagram.com/emmadavis",
      socialPlatform: "Instagram",
    },
  ]);

  const toggleInfluencer = (id: number) => {
    setInfluencers(
      influencers.map((inf) =>
        inf.id === id ? { ...inf, selected: !inf.selected } : inf
      )
    );
  };

  return (
    <div className="space-y-4">
      {influencers.map((influencer) => (
        <div
          key={influencer.id}
          className={`p-4 rounded-lg border transition-colors ${
            influencer.selected
              ? "border-accent bg-accent/5"
              : "border-gray-200 hover:border-accent/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{influencer.name}</h3>
              <p className="text-sm text-gray-500">{influencer.niche}</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm">{influencer.followers} followers</span>
              </div>
              <div className="flex items-center mt-1 text-sm text-blue-600">
                <LinkIcon className="w-4 h-4 mr-1" />
                <a
                  href={`https://${influencer.portfolioLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {influencer.portfolioLink}
                </a>
                <span className="ml-2 text-gray-500">({influencer.socialPlatform})</span>
              </div>
            </div>
            <Button
              variant={influencer.selected ? "default" : "outline"}
              size="sm"
              onClick={() => toggleInfluencer(influencer.id)}
            >
              {influencer.selected ? (
                <Check className="w-4 h-4 mr-1" />
              ) : null}
              {influencer.selected ? "Selected" : "Select"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfluencerList;