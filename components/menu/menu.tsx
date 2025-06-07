'use client'
import {useState} from "react";
import Cursor from "@/components/global/cursor";

export default function Menu({isMenuOpen}:{isMenuOpen:boolean}){
	const [isHovered, setHovered] = useState(false);
	return(
		<>
			<div className={`flex flex-col items-center justify-around w-screen h-screen bg-[#0D0E13] absolute py-40 transition-all ease-in-out top-0 left-0`}>
				<p onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
				className={"text-4xl font-bold cursor-pointer"}>
					Projects
				</p>
				<p onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
				   className={"text-4xl font-bold cursor-pointer"}>
					Articles
				</p>
				<p onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
				   className={"text-4xl font-bold cursor-pointer"}>
					About
				</p>
				<p onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
				   className={"text-4xl font-bold cursor-pointer"}>
					Contact
				</p>
			</div>
			<div className={"flex items-center justify-center w-full absolute bottom-0 left-0 mb-10 gap-20"}>
				<a href={""}>Twitter</a>
				<a href={""}>Github</a>
				<a href={""}>LinkedIn</a>
			</div>
			<Cursor isHovered={isHovered}/>
		</>
	)
}