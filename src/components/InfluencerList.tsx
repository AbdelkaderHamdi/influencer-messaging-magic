import { useState } from "react";
import InfluencerCard from "./influencer/InfluencerCard";
import AddInfluencerDialog from "./influencer/AddInfluencerDialog";

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

  const handleAddInfluencer = (newInfluencer: Omit<Influencer, "id" | "selected">) => {
    const newId = Math.max(...influencers.map(inf => inf.id), 0) + 1;
    setInfluencers([...influencers, { ...newInfluencer, id: newId, selected: false }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Available Influencers</h2>
        <AddInfluencerDialog onAdd={handleAddInfluencer} />
      </div>

      <div className="grid gap-6">
        {influencers.map((influencer) => (
          <InfluencerCard
            key={influencer.id}
            influencer={influencer}
            onSelect={toggleInfluencer}
          />
        ))}
      </div>
    </div>
  );
};

export default InfluencerList;