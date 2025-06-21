
import Image from "next/image";
import Revealer from "@/components/animation/revealer";
import {ProjectList} from "@/constants";
import {notFound} from "next/navigation";
import PixelBackground from "@/components/animation/pixel-background";

interface Props {
	params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({params}: Props) {

	const {id} = await params;
	const project = ProjectList.find((project) => project.id === parseInt(id));

	if(!project) return notFound()

	return(
		<>
			<Revealer/>
			<PixelBackground/>
			<section className={"w-screen h-full flex flex-col items-center justify-center text-[#02DFB6] bg-[#040737] px-5"}>

				<div className={"w-full flex items-center justify-center border-b border-[#02DFB6]/30 mt-10 py-20"}>
					<h1 className={"font-extrabold text-9xl uppercase"}>{project.name}</h1>
				</div>

				<div className={"w-full flex justify-between py-5"}>
					<a href={project.link.github} target={"_blank"}>
						SOURCE CODE
					</a>
					<div className={''}>
						<span className={"px-2 pointer-events-none bg-[#02DFB6] text-[#040737] font-bold rounded"}>{project.category}</span>
					</div>
					<a href={project.link.preview} target={"_blank"}>
						SEE IT LIVE
					</a>
				</div>

				<div className={"w-full h-auto border-b border-[#02DFB6]/30"}>
					<Image
						src={project.image.main}
						alt={project.name}
						width={1920}
						height={1080}
						className={"w-full h-full object-cover"}
						priority
					/>
					<p className={"py-5 text-center font-bold text-6xl"}>{project.details.slogan}</p>
				</div>

				<div className={"w-full flex justify-between py-5 gap-5"}>
					<div className={"w-1/3 flex flex-col gap-2"}>
						<h2 className={"font-extrabold text-xl"}>Overview</h2>
						<p className={"text-justify text-[#79EAD9]"}>{project.details.overview}</p>
					</div>
					<div className={"max-w-1/3 flex flex-col gap-2"}>
						<h2 className={"font-extrabold text-xl "}>Tech Stack</h2>
						<ul className={"text-[#79EAD9]"}>
							{project.tech.map((tech, index) => (
								<li key={index}>
									<a href={tech.link} target={"_blank"} className={"font-bold underline text-[#02DFB6]"}>{tech.name}</a>
									{tech.description}
								</li>
							))}
						</ul>
					</div>
					<div className={"w-1/3 flex flex-col gap-2"}>
						<h2 className={"font-extrabold text-xl"}>Outcome</h2>
						<p className={"text-justify text-[#79EAD9]"}>
							{project.details.outcome}
						</p>
					</div>
				</div>

				<div className={"bg-[#79EAD9] my-10 p-5"}>
					<Image
						src={project.image.showcase}
						alt={project.name} width={1920}
						height={1080}
						className={"w-full h-full object-center object-cover"}
						priority
					/>
				</div>
			</section>
		</>
	)
}