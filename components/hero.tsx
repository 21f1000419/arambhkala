import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-[#050913]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(51,214,255,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(141,125,255,0.24),transparent_40%),linear-gradient(180deg,rgba(6,9,19,0.4),rgba(5,8,15,0.95))]" />
        {/* Animated Stars */}
        {/* Animated Stars */}
        <div className="absolute top-0 left-0 w-full h-full mt-10">
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "10%", left: "15%", animationDuration: "2s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-8 h-8 rounded-full animate-pulse"
            style={{ top: "20%", left: "25%", animationDuration: "2.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star3.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-8 h-8 rounded-full animate-pulse"
            style={{ top: "30%", left: "60%", animationDuration: "3s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-6 h-6 rounded-full animate-pulse"
            style={{ top: "50%", left: "70%", animationDuration: "3.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star2.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "10%", left: "80%", animationDuration: "4s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "60%", left: "90%", animationDuration: "4.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "70%", left: "20%", animationDuration: "5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "80%", left: "40%", animationDuration: "5.5s" }}
          >
            <img
              src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/star1.png"
              alt=""
            />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-pulse"
            style={{ top: "90%", left: "50%", animationDuration: "6s" }}
          ></div>
        </div>

        {/* Cloud Container */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            {[...Array(10)].map((_, i) => (
              <div className="cloud top-cloud" key={i}>
                <img
                  src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/2.png"
                  alt="Cloud"
                  className="w-32 h-16"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="reveal-section is-visible flex h-full w-full items-center justify-center text-center relative z-10">
          <div className=" rounded-[2rem] p-6 sm:p-8">
            <div className="mx-auto flex w-72 items-center justify-center rounded-full shadow-[0_0_35px_6px_rgba(51,214,255,0.38)] sm:w-80">
              <img
                src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/arambhakala-logo.png"
                alt="Aramhkala Foundation Logo"
                className="z-50"
              />
            </div>

            <h1 className="mt-4 bg-gradient-to-r from-cyan-200 via-slate-100 to-violet-200 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
              ARAMBHKALA FOUNDATION
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">House Of Arts & Technology</p>
          </div>
        </div>

        {/* Additional Clouds */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            {[...Array(10)].map((_, i) => (
              <div className="cloud bottom-cloud" key={i}>
                <img
                  src="https://ccdstest.b-cdn.net/Arambhakala/stars%20and%20clouds/3.png"
                  alt="Cloud"
                  className="w-32 h-16 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
