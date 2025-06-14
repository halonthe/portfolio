'use client'

import useCursorStore from "@/lib/zustand/cursor";
import Revealer from "@/components/animation/revealer";

export default function Home() {
    const { setHovered} = useCursorStore()

  return (
      <>
          <Revealer/>
            <section className="bg-[url(/images/bg-sky.png)] bg-cover bg-center min-h-screen">
                <div className="absolute bottom-0 left-0 px-20 pb-40 w-1/2">
                    <p className="line-clamp-1">
                        <span className="font-[family-name:var(--font-geist-mono)] text-yellow-300"><sup>01.</sup> Hello - </span>
                        my name is Yuda Dwi Restika. I'm a fullstack web developer.
                    </p>
                    <p className="text-xl md:text-3xl xl:text-4xl font-bold">
                        I think people should look at the bigger picture when they
                        <span className="text-blue-900 bg-yellow-300 ml-1" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                            build something
                        </span>.<br/>
                        I like working in groups where everyone can voice their opinions and ideas.
                    </p>
                </div>
            </section>
      </>
  );
}
