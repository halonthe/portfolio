'use client'

import useCursorStore from "@/lib/zustand/cursor";
import Revealer from "@/components/animation/revealer";
import {useEffect, useRef} from "react";
import {TextGenerateEffect} from "@/components/animation/text-generate-effect";
import ParticleBackground from "@/components/animation/particle-background";

export default function Home() {
    const { setHovered} = useCursorStore()
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; // 0.5x speed = slow motion
        }
    }, []);

  return (
      <>
          <Revealer/>
          <ParticleBackground/>
            <section className="bg-cover bg-center min-h-screen">
                <div className="absolute bottom-0 left-0 px-20 pb-40 w-full md:w-1/2">
                    <p className="font-[family-name:var(--font-geist-mono)] text-yellow-300"><sup>01.</sup> Hello_</p>
                    <div className="text-lg md:text-xl xl:text-2xl font-bold">
                        <p>My Name is Yuda Dwi Restika, a Self-taught{" "}
                        <span
                            className="text-blue-900 bg-yellow-300 ml-1"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}>
                            web developer
                        </span>.
                        </p>
                    </div>
                        <TextGenerateEffect words={"I think people should look at the bigger picture when they build something. I like working in groups where everyone can voice their opinions and ideas."} />
                </div>
            </section>
      </>
  );
}
