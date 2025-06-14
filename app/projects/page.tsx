'use client'

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Revealer from "@/components/animation/revealer";
import {ProjectList} from "@/constants";
import FadeInOnScroll from "@/components/project/fadeIn-on-scroll";
import Link from "next/link";
import AllProjects from "@/components/project/all-project";

export default function AboutPage(){
	const projectTotal = ProjectList.length
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showProjects, setShowProjects] = useState(false);

	const sectionsRef = useRef<HTMLElement[] | undefined [] | null []>([]);
	const isScrolling = useRef(false);
	const isOpen = useRef(false);

	useEffect(() => {
		const handleScroll = (e: any) => {
			if (isScrolling.current) return;

			if (isOpen.current) return;

			e.preventDefault();

			const direction = e.deltaY > 0 ? 1 : -1;
			let newIndex = currentIndex + direction;

			// Batasi agar tidak keluar dari indeks array
			newIndex = Math.max(0, Math.min(ProjectList.length - 1, newIndex));

			isScrolling.current = true;
			setCurrentIndex(newIndex);
			// Scroll ke section berikutnya
			sectionsRef.current[newIndex]?.scrollIntoView({ behavior: 'smooth'});
			// Delay agar tidak terlalu cepat scroll antar section
			setTimeout(() => {
				isScrolling.current = false;
			}, 500); // 0.5 detik jeda antar scroll
		};

		window.addEventListener("wheel", handleScroll, { passive: false });
		return () => window.removeEventListener("wheel", handleScroll);
	}, [currentIndex]);

	return (
		<>
			<Revealer/>
			<section className="w-screen min-h-screen relative">
				{ProjectList.map((project, index) => (

					<div key={index}
						 ref={(el) => {
							 if (el) {sectionsRef.current[index] = el;}
						 }}
						 className={"relative overflow-hidden w-screen h-screen"}>
						<div className={"absolute top-0 left-0 w-full h-full"}>
							<div className={"absolute top-0 left-0 w-full h-full"}>
								<Image
									src={project.image.bg}
									alt={project.name}
									width={1920}
									height={1080}
									className={"w-full h-screen object-cover"}
									priority
								/>
							</div>
							<div className={"absolute top-0 left-0 w-full h-full backdrop-blur-sm"}/>

							<div className={"absolute top-1/2 left-1/2 -translate-1/2 w-1/4 h-1/2"}>

								<div className={"min-w-[330px] flex item-center"}>
									<FadeInOnScroll>
									<Link href={project.link.page}>
										<Image
											src={project.image.thumbnail}
											alt={project.name}
											width={500}
											height={500}
											className={"w-full h-full object-cover"}
											priority
										/>
									</Link>
									</FadeInOnScroll>
								</div>

								<div className={"mt-5 min-w-[330px] flex flex-col md:flex-row md:items-end justify-between"}>
									<FadeInOnScroll delay={0.4}>
										<h1 className={"text-4xl font-bold"}>
											<Link href={project.link.page}>{project.name}<sup className={"text-sm font-normal align-text-top text-yellow-300"}>[&#10532;]</sup></Link>
										</h1>
									</FadeInOnScroll>
									<FadeInOnScroll delay={1}>
										<p className={"text-xl text-slate-300"}>{project.category}</p>
									</FadeInOnScroll>
								</div>

							</div>

						</div>
					</div>

				))}

				<div className="fixed bottom-0 left-0 py-10 w-full h-auto flex items-center justify-between px-20 md:px-40">
					<div className={"w-1/3 cursor-pointer"} onClick={() => {
						isOpen.current = true
						setShowProjects(true)
					}}>&#9783; ALL PROJECT</div>
					<div className={"w-1/3 flex items-center justify-center text-center"}>{(currentIndex + 1) < projectTotal ? (
						<>
							<span>scroll</span>
							<Image src={"/images/scroll-down.gif"} alt={"scroll down"} width={20} height={20} className={"w-auto h-[30px]"}/>
							<span>down</span>
						</>
					) : ""}</div>
					<div className={"w-1/3 text-right"}>0{currentIndex + 1}/0{projectTotal}</div>
				</div>
			</section>

			{showProjects && (
				<AllProjects/>
			)}
		</>
	)
}