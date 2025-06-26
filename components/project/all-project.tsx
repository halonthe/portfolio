'use client'
import Revealer from "@/components/animation/revealer";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {ProjectList} from "@/constants";


export default function AllProjects() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [thumbnail, setThumbnail] = useState<string | null>(null)

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		}
	}, []);

	return (
		<>
			<Revealer/>
			<section ref={ref} className={"absolute top-0 left-0 w-full bg-black min-h-screen pt-30 px-10"}>
				<div className={"w-full h-full relative"}>
					<h1 className={"font-bold border-b"}><sup className={"mr-1 text-yellow-300 font-mono"}>03.</sup>PROJECTS</h1>
					{ProjectList.map((project) => (

						<Link
							key={project.id}
							href={project.link.page}
							onMouseEnter={() => setThumbnail(project.image.thumbnail)}
							onMouseLeave={() => setThumbnail(null)}
							className={"border-b flex items-center justify-between font-bold text-7xl uppercase cursor-pointer hover:bg-white hover:text-black"}
						>
							<span>{project.name}</span>
							<span>{project.category}</span>
						</Link>

					))}

					{thumbnail && (
						<div className={"w-1/4 h-1/3 fixed bottom-0 right-0 m-10"}>
							<Image
								src={thumbnail}
								alt={"project preview"}
								width={500}
								height={500}
								className={"w-full h-full object-cover object-center"}
							/>
						</div>
					)}
				</div>
			</section>
		</>
	)
}