import { Check, Star, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InfluencerCardProps {
  influencer: {
    id: number;
    name: string;
    niche: string;
    followers: string;
    selected: boolean;
    portfolioLink: string;
    socialPlatform: "Instagram" | "Pinterest";
  };
  onSelect: (id: number) => void;
}

const InfluencerCard = ({ influencer, onSelect }: InfluencerCardProps) => {
  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg ${
        influencer.selected
          ? "border-accent bg-accent/5 shadow-md"
          : "border-gray-200 hover:border-accent/50"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-3 flex-grow max-w-[70%]">
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
            <LinkIcon className="w-4 h-4 mr-2 flex-shrink-0" />
            <a
              href={`https://${influencer.portfolioLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-700 transition-colors truncate"
            >
              {influencer.portfolioLink}
            </a>
            <span className="ml-2 text-gray-500">({influencer.socialPlatform})</span>
          </div>
        </div>
        <Button
          variant={influencer.selected ? "default" : "outline"}
          size="lg"
          onClick={() => onSelect(influencer.id)}
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
  );
};

export default InfluencerCard;