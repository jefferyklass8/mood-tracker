import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
  title: "Mood Mapper · Dashboard",
};

export default function DashboardPage() {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
