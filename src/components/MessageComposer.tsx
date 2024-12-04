import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const MessageComposer = () => {
  const [message, setMessage] = useState("");
  const [senderInfo, setSenderInfo] = useState({
    name: "",
    socialHandle: "",
    platform: "instagram", // or pinterest
  });
  const { toast } = useToast();

  const handleSend = () => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive",
      });
      return;
    }

    if (!senderInfo.name || !senderInfo.socialHandle) {
      toast({
        title: "Error",
        description: "Please provide your name and social media handle",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Message scheduled for sending",
    });
    setMessage("");
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Your Information</h3>
        <div className="space-y-2">
          <Input
            placeholder="Your Name"
            value={senderInfo.name}
            onChange={(e) =>
              setSenderInfo({ ...senderInfo, name: e.target.value })
            }
          />
          <Input
            placeholder="Your Social Media Handle"
            value={senderInfo.socialHandle}
            onChange={(e) =>
              setSenderInfo({ ...senderInfo, socialHandle: e.target.value })
            }
          />
          <select
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={senderInfo.platform}
            onChange={(e) =>
              setSenderInfo({ ...senderInfo, platform: e.target.value })
            }
          >
            <option value="instagram">Instagram</option>
            <option value="pinterest">Pinterest</option>
          </select>
        </div>
      </div>
      
      <Textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[150px]"
      />
      
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <User className="w-4 h-4 mr-1" />
          <span>
            Sending as: {senderInfo.name} ({senderInfo.socialHandle})
          </span>
        </div>
        <Button onClick={handleSend} className="bg-accent hover:bg-accent/90">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default MessageComposer;