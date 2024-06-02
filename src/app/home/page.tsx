import "./home.css";
import Wave from "@/app/home/components/Wave";
import Header from "@/app/home/components/Header";
import Content from "@/app/home/components/Content";
import Bottom from "@/app/home/components/Bottom";

export default function Home() {
  return (
    <section className="home-wrapper">
      <Header />
      <Content />
      <Wave />
      <Bottom />
    </section>
  );
}
