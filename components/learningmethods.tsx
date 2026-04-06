import React from "react";
import Reveal from "./reveal";

const Home: React.FC = () => {
  return (
    <>
      <div className="mb-6 mt-10 flex flex-col items-center justify-center space-y-2 px-4 lg:px-44">
        <h3 className="bg-gradient-to-r from-cyan-200 via-slate-100 to-violet-200 bg-clip-text text-3xl font-black uppercase text-transparent lg:text-5xl">
          Learning Methods
        </h3>
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 lg:w-1/2" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 lg:hidden">
        {[
          {
            title: "Step 1",
            symbol: "चित्त",
            color: "from-amber-400 to-orange-500",
            text: "A thought is a fleeting whisper of the mind, shaping the contours of our reality.",
          },
          {
            title: "Step 2",
            symbol: "कला कृति",
            color: "from-fuchsia-500 to-rose-500",
            text: "Artwork infused with creativity transforms blank spaces into expressions that inspire awe.",
          },
          {
            title: "Step 3",
            symbol: "चलचित्र",
            color: "from-cyan-400 to-sky-500",
            text: "Motion art blends visuals and movement into immersive experiences that captivate audiences.",
          },
        ].map((card, index) => (
          <Reveal key={card.title} delay={index * 100}>
            <div className="site-panel flex h-full flex-col space-y-4 rounded-2xl p-4">
              <div className={`flex h-36 items-center justify-center rounded-2xl bg-gradient-to-r text-4xl font-black text-white ${card.color}`}>
                {card.symbol}
              </div>
              <h3 className="text-2xl font-bold text-slate-100">{card.title}</h3>
              <p className="text-slate-300">{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="relative hidden min-h-screen w-full overflow-hidden bg-[#050913] text-white lg:block">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,82,200,0.12),transparent_35%),radial-gradient(circle_at_20%_60%,rgba(51,214,255,0.14),transparent_45%)]" />
        {/* Circular Diagram and Text Steps */}
        <div className="relative z-10 flex w-full flex-col items-center lg:flex-row md:w-1/2">
          {/* Left Side: Circular Diagram */}
          <Reveal className="w-[1300px] h-full z-50" y={10}>
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/chakra.webp"
              alt=""
              className=" object-contain w-full h-full z-50"
            />
          </Reveal>

          {/* Right Side: Text Steps */}
          <div className="-ml-16 mt-8 space-y-12 text-lg z-50 lg:mt-0">
            <Reveal delay={80}>
              <div className="space-y-2 rounded-2xl border border-amber-300/30 bg-amber-400/10 p-5">
                <h3 className="text-4xl text-amber-300">Step 1</h3>
                <p className="text-2xl text-slate-200 z-50">
                A thought is a fleeting whisper of the mind, shaping the
                contours of our reality.
              </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-2 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 p-5">
                <h3 className="text-4xl text-fuchsia-300">Step 2</h3>
                <p className="text-2xl text-slate-200 z-50">
                Artwork design infused with creativity captures the essence of
                imagination, transforming blank spaces into vibrant expressions
                that stir the senses and inspire awe.
              </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="space-y-2 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5">
                <h3 className="text-4xl text-cyan-300">Step 3</h3>
                <p className="text-2xl text-slate-200 z-50">
                Motion art seamlessly blends visual elements with movement,
                creating an immersive experience that dances across the screen,
                captivating audiences with its dynamic allure.
              </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Side: Character and Background Elements */}
        <div className="absolute inset-y-0 right-0 flex items-center w-full">
          <div className="relative w-full h-full">
            {/* Character Image */}
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/illu2%20(1).webp" // Replace with your character image URL
              alt="Character"
              className="absolute bottom-0 right-32 w-1/3 z-50"
            />

            {/* Stars and Clouds */}
            <div className="absolute top-24 right-36 w-28 h-28 z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ccdstest.b-cdn.net/Arambhakala/Eye.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="absolute top-5 right-[600px] w-16 h-16 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
                className="animate-pulse"
              />
            </div>
            <div className="absolute top-20 right-10 w-14 h-14 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
                className="animate-pulse"
              />
            </div>
            <div className="absolute top-32 right-[600px] w-28 h-28 z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ccdstest.b-cdn.net/Arambhakala/Tube%202.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute top-10 right-96 w-16 h-16 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
              />
            </div>
            <div className="absolute top-44 right-24 w-12 h-12 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
              />
            </div>
            <div className="absolute bottom-36 right-[700px] w-12 h-12 z-50 animate-twinkle">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/st1%20(1).webp"
                alt="Star"
              />
            </div>
            <div className="absolute bottom-60 right-[600px] w-28 h-28 z-50">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ccdstest.b-cdn.net/Arambhakala/Tube%201.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* clouds */}
          <div className="absolute bottom-20 right-16 w-1/2 opacity-80 animate-moveClouds ">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/c1.webp"
              alt="Cloud"
              className="w-56 "
            />
          </div>
          <div className="absolute top-0 right-56 w-1/2 opacity-80 animate-moveClouds ">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/c1.webp"
              alt="Cloud"
              className="w-56 "
            />
          </div>
          <div className="absolute bottom-[350px] right-32 w-1/2 opacity-80 animate-moveClouds ">
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/c1.webp"
              alt="Cloud"
              className="w-56 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
