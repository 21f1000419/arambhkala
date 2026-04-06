"use client"; // Add this directive to make it a client component

import React, { useState } from "react";
import Reveal from "./reveal";

const feeds = [
  {
    id: 1,
    imageUrl: "https://placehold.co/350",
    video: true,
    videoUrl: "https://youtube.com/shorts/GyBpRLRzbmY?si=DUxg6PCf5cNygjFr",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/reel/C9cRR_kybws/?igsh=cWExMWlsMnQweWdi",
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/350",
    video: true,
    videoUrl: "https://youtube.com/shorts/GyBpRLRzbmY?si=DUxg6PCf5cNygjFr",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/reel/C_ONdSxSDsL/?igsh=MXVqb2l3MHJ0cXNqZQ==",
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/350",
    video: true,
    videoUrl: "https://youtube.com/shorts/GyBpRLRzbmY?si=DUxg6PCf5cNygjFr",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/reel/C_HupddyYnN/?igsh=MTBoaHlha2VmMTZvcA==",
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/350",
    video: true,
    videoUrl: "https://youtube.com/shorts/GyBpRLRzbmY?si=DUxg6PCf5cNygjFr",
    videoId: "OwR74xSMX_Y",
    instagramUrl: "https://www.instagram.com/reel/C8eQ-jzSqIX/?igsh=MW91MHJtaHJ3cXNkcQ==",
  },
  
  
];

const Feeds: React.FC = () => {
  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>({});

  const togglePlay = (id: number) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Instagram link copied to clipboard!");
  };

  return (
    <>
      <div className="bg-[#060b16] py-12">
        <h2 className="mb-8 bg-gradient-to-r from-cyan-200 via-slate-100 to-violet-200 bg-clip-text py-1 text-center text-2xl font-black text-transparent md:text-3xl">
          LIVE FEEDS
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4 lg:px-6">
          {feeds.map((feed, index) => (
            <Reveal key={feed.id} delay={index * 90}>
              <div className="site-panel relative h-64 w-full overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#0a1222] shadow-lg md:h-72">
              {feed.video ? (
                <>
                  {playingVideos[feed.id] ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={feed.videoUrl}
                      title={`Feed ${feed.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={feed.imageUrl}
                        alt={`Feed ${feed.id}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <button
                          className="rounded-full border border-cyan-200/40 bg-[#050913]/70 p-2 text-cyan-100"
                          onClick={() => togglePlay(feed.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-play"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <img
                  src={feed.imageUrl}
                  alt={`Feed ${feed.id}`}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Instagram Icon */}
              <a
                href={feed.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-fuchsia-300"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Copy Icon */}
              <button
                onClick={() => copyToClipboard(feed.instagramUrl)}
                className="absolute left-2 bottom-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-100"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feeds;
