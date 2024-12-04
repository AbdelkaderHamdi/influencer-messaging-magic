import { useState } from "react";
import { Check, Star, Link as LinkIcon, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
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

  const [newInfluencer, setNewInfluencer] = useState<Omit<Influencer, "id" | "selected">>({
    name: "",
    niche: "",
    followers: "",
    portfolioLink: "",
    socialPlatform: "Instagram",
  });

  const toggleInfluencer = (id: number) => {
    setInfluencers(
      influencers.map((inf) =>
        inf.id === id ? { ...inf, selected: !inf.selected } : inf
      )
    );
  };

  const handleAddInfluencer = () => {
    if (!newInfluencer.name || !newInfluencer.niche || !newInfluencer.followers || !newInfluencer.portfolioLink) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newId = Math.max(...influencers.map(inf => inf.id), 0) + 1;
    setInfluencers([...influencers, { ...newInfluencer, id: newId, selected: false }]);
    setNewInfluencer({
      name: "",
      niche: "",
      followers: "",
      portfolioLink: "",
      socialPlatform: "Instagram",
    });
    
    toast({
      title: "Success",
      description: "Influencer added successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Available Influencers</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
              <Plus className="w-4 h-4" />
              Add Influencer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Influencer</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="Name"
                value={newInfluencer.name}
                onChange={(e) => setNewInfluencer({ ...newInfluencer, name: e.target.value })}
              />
              <Input
                placeholder="Niche (e.g., Fashion, Tech)"
                value={newInfluencer.niche}
                onChange={(e) => setNewInfluencer({ ...newInfluencer, niche: e.target.value })}
              />
              <Input
                placeholder="Followers (e.g., 100K)"
                value={newInfluencer.followers}
                onChange={(e) => setNewInfluencer({ ...newInfluencer, followers: e.target.value })}
              />
              <Input
                placeholder="Portfolio Link (e.g., instagram.com/username)"
                value={newInfluencer.portfolioLink}
                onChange={(e) => setNewInfluencer({ ...newInfluencer, portfolioLink: e.target.value })}
              />
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={newInfluencer.socialPlatform}
                onChange={(e) => setNewInfluencer({ ...newInfluencer, socialPlatform: e.target.value as "Instagram" | "Pinterest" })}
              >
                <option value="Instagram">Instagram</option>
                <option value="Pinterest">Pinterest</option>
              </select>
              <Button onClick={handleAddInfluencer}>Add Influencer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {influencers.map((influencer) => (
          <div
            key={influencer.id}
            className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg ${
              influencer.selected
                ? "border-accent bg-accent/5 shadow-md"
                : "border-gray-200 hover:border-accent/50"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-3 flex-grow">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-gray-900">{influencer.name}</h3>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-600">
                    {influencer.niche}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-base">{influencer.followers} followers</span>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  <a
                    href={`https://${influencer.portfolioLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-700 transition-colors"
                  >
                    {influencer.portfolioLink}
                  </a>
                  <span className="ml-2 text-gray-500">({influencer.socialPlatform})</span>
                </div>
              </div>
              <Button
                variant={influencer.selected ? "default" : "outline"}
                size="lg"
                onClick={() => toggleInfluencer(influencer.id)}
                className={`min-w-[120px] transition-all duration-200 ${
                  influencer.selected 
                    ? "bg-accent hover:bg-accent/90" 
                    : "hover:border-accent hover:text-accent"
                }`}
              >
                {influencer.selected ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Selected
                  </>
                ) : (
                  "Select"
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerList;