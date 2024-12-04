import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface AddInfluencerDialogProps {
  onAdd: (influencer: Omit<Influencer, "id" | "selected">) => void;
}

interface Influencer {
  id: number;
  name: string;
  niche: string;
  followers: string;
  selected: boolean;
  portfolioLink: string;
  socialPlatform: "Instagram" | "Pinterest";
}

const AddInfluencerDialog = ({ onAdd }: AddInfluencerDialogProps) => {
  const { toast } = useToast();
  const [newInfluencer, setNewInfluencer] = useState<Omit<Influencer, "id" | "selected">>({
    name: "",
    niche: "",
    followers: "",
    portfolioLink: "",
    socialPlatform: "Instagram",
  });

  const handleAddInfluencer = () => {
    if (!newInfluencer.name || !newInfluencer.niche || !newInfluencer.followers || !newInfluencer.portfolioLink) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    onAdd(newInfluencer);
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
  );
};

export default AddInfluencerDialog;