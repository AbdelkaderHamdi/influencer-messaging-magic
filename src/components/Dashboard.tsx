import { Card } from "@/components/ui/card";
import InfluencerList from "./InfluencerList";
import MessageComposer from "./MessageComposer";
import Analytics from "./Analytics";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-white">Marketing Dashboard</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Influencer Selection</h2>
            <InfluencerList />
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Message Composer</h2>
            <MessageComposer />
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
            <Analytics />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;