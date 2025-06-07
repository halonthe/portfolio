'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

import useCursorStore from "@/lib/zustand/cursor";
import {NavLink} from "@/constants";


export default function Header() {
	const {setHovered} = useCursorStore()

	const pathname = usePathname()

	return (
		<>
		<header className="absolute top-0 left-0 flex items-center justify-between w-full bg-transparent p-10 md:px-20 z-50">
			<h1 className="flex items-center justify-between">
				<sup className="font-normal font-mono text-yellow-300">01.</sup>
				<Link href="/" className="text-3xl font-bold relative inline-block after:block after:h-1 after:bg-blue-900 after:transition-transform after:duration-300 after:delay-150 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
					  onMouseEnter={() => setHovered(true)}
					  onMouseLeave={() => setHovered(false)}>
					Restika
				</Link>
			</h1>

			<ul className="flex items-center gap-10">
				{NavLink.map((nav, index) => {
					const active = nav.link === pathname || (pathname.startsWith(nav.link) && nav.link !== "/");
					return (
						<li>
							<sup className="font-mono text-yellow-300">0{index + 2}.</sup>
							<Link href={nav.link} className={`text-xl font-medium relative inline-block after:block after:h-1 after:bg-blue-900 after:transition-transform after:duration-300 after:delay-150 ${active ? "after:scale-x-100" : "after:scale-x-0"} hover:after:scale-x-100 after:origin-left`}
								  onMouseEnter={() => setHovered(true)}
								  onMouseLeave={() => setHovered(false)}>
								{nav.name}
							</Link>
						</li>
					)
				})}
			</ul>

		</header>
		</>
	)
}