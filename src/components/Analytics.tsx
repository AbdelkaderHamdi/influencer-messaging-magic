import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", messages: 40 },
  { name: "Tue", messages: 30 },
  { name: "Wed", messages: 60 },
  { name: "Thu", messages: 45 },
  { name: "Fri", messages: 75 },
];

const Analytics = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-primary/5">
          <p className="text-sm text-gray-500">Total Messages</p>
          <p className="text-2xl font-semibold">250</p>
        </div>
        <div className="p-4 rounded-lg bg-accent/5">
          <p className="text-sm text-gray-500">Response Rate</p>
          <p className="text-2xl font-semibold">68%</p>
        </div>
      </div>
      
      <div className="h-[200px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="messages" fill="#0d9488" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;