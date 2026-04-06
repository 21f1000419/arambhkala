// Home.js or Home.tsx
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Index from "../../pages/index";
import Hero from "../../components/hero";
import AboutUs from "../../components/aboutus";
import LearningMethods from "../../components/learningmethods";
import Courses from "../../components/courses";
import Feeds from "../../components/feeds";
import Reveal from "../../components/reveal";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#070b14]">
        <Navbar />
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={80}>
          <AboutUs />
        </Reveal>
        <Reveal delay={120}>
          <LearningMethods />
        </Reveal>
        <Reveal delay={160}>
          <Courses />
        </Reveal>
        <Reveal delay={200}>
          <Feeds />
        </Reveal>
        <Reveal delay={240}>
          <Footer />
        </Reveal>
      </section>
    </>
  );
}
