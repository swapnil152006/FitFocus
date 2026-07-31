import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/ui/StatCard";

import {
  FiCheckSquare,
  FiDroplet,
  FiActivity,
  FiTarget,
} from "react-icons/fi";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Here's a quick overview of your day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Today's Tasks"
          value="5"
          icon={<FiCheckSquare />}
          color="bg-blue-500"
        />

        <StatCard
          title="Water Intake"
          value="2.5 L"
          icon={<FiDroplet />}
          color="bg-cyan-500"
        />

        <StatCard
          title="Workout"
          value="60 min"
          icon={<FiActivity />}
          color="bg-green-500"
        />

        <StatCard
          title="Calories"
          value="1850"
          icon={<FiTarget />}
          color="bg-orange-500"
        />
      </div>
    </MainLayout>
  );
}