import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

const MessageComposer = () => {
  const [message, setMessage] = useState("");
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

    toast({
      title: "Success",
      description: "Message scheduled for sending",
    });
    setMessage("");
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[150px]"
      />
      <div className="flex justify-end">
        <Button onClick={handleSend} className="bg-accent hover:bg-accent/90">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default MessageComposer;