import "./dashboard.css";
import Wave from "@/app/dashboard/components/Wave";
import Header from "@/app/dashboard/components/Header";
import Content from "@/app/dashboard/components/Content";
import Bottom from "@/app/dashboard/components/Bottom";

export default function DashBoard() {
  return (
    <section className="dashboard-wrapper">
      <Header />
      <Content />
      <Wave />
      <Bottom />
    </section>
  );
}
