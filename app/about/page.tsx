'use client'

import Image from "next/image";
import Revealer from "@/components/animation/revealer";
import {AboutMe} from "@/constants";
import {FlipWords} from "@/components/animation/flip-word";
import ParticleBackground from "@/components/animation/particle-background";

export default function AboutPage(){

	const my = AboutMe

	return (
		<>
			<Revealer/>
			<ParticleBackground/>
			<section className="w-full min-h-screen relative p-20 overflow-x-hidden">
				<div className={"w-full flex flex-col xl:flex-row justify-between items-center gap-5 mt-40"}>
					<div className={"flex flex-col text-7xl md:text-8xl font-extrabold pointer-events-none"}>
						<FlipWords words={["YUDHA", "FULLSTACK"]}/>
						<FlipWords words={["DWI", "WEB"]} className={"text-yellow-300"}/>
						<FlipWords words={["RESTIKA.", "DEVELOPER."]}/>
					</div>

					<div className={"flex flex-col gap-10 pointer-events-none"}>
						<span className={"text-4xl font-bold text-center"}>SKILLS</span>
						<div className={"flex gap-10 text-xl"}>
							<div>
								<span className={"font-bold text-yellow-300"}>Basics & Languages</span>
								<ul>
									{my.skills.language.map((item: string, index: number) => (
										<li key={index}>
											{item}
										</li>
									))}
								</ul>
							</div>

							<div>
								<span className={"font-bold text-yellow-300"}>Frameworks & Library</span>
								<ul>
									{my.skills.framework.map((item: string, index: number) => (
										<li key={index}>
											{item}
										</li>
									))}
								</ul>
							</div>

							<div>
								<span className={"font-bold text-yellow-300"}>Tools & Others</span>
								<ul>
									{my.skills.tools.map((item: string, index: number) => (
										<li key={index}>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className={"w-full flex flex-col xl:flex-row justify-around mt-40 gap-10"}>
					<div className={"min-w-[400px] h-[450px]"}>
						<Image src={my.photo} alt={"photo"} width={400} height={400} className={"w-full h-full object-cover object-center"} priority/>
					</div>

					<div className={"w-full xl:max-w-1/2 flex flex-col gap-10"}>
						<p className={"text-3xl text-yellow-300 font-bold text-justify"}>{my.role}</p>
						<div className={"flex w-full xl:w-3/4 justify-between gap-10"}>
							<div className={"hidden lg:block"}>
								<sup className={"font-mono text-yellow-300"}>02.</sup>ABOUT
							</div>
							<div className={"text-xl"}>
								<p className={"mb-5"}>{my.vision}</p>
								<p>{my.mission}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}