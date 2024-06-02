import Projects from "@/app/home/components/Projects";
import RecommendedReading from "@/app/home/components/RecommendedReading";

export default function Content() {
  return (
    <div className="home-content">
      <main className="block-bg">
        <section className="section-content">
          <h1>Doing Something UseFul</h1>
          <h2>
            I built this site to help myself learn efficiently and realise some
            of my ideas
          </h2>
          <Projects />
          <RecommendedReading />
        </section>
      </main>
    </div>
  );
}
