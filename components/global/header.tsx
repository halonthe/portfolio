'use client'

import Link from "next/link";
import useCursorStore from "@/lib/zustand/cursor";

export default function Header() {
	const {setHovered} = useCursorStore()
	return (
		<>
		<header className="absolute top-0 left-0 flex items-center justify-between w-full bg-transparent p-10 md:px-20 z-50">
			<h1 className="flex items-center justify-between">
				<sup className="font-normal font-mono text-yellow-300">01.</sup>
				<Link href="/" className="text-3xl font-bold"
					  onMouseEnter={() => setHovered(true)}
					  onMouseLeave={() => setHovered(false)}>
					Restika
				</Link>
			</h1>

			<ul className="flex items-center gap-10">
				<li>
					<sup className="font-mono text-yellow-300">02.</sup>
					<Link href="#" className="text-xl font-medium"
						  onMouseEnter={() => setHovered(true)}
						  onMouseLeave={() => setHovered(false)}>
						About
					</Link>
				</li>
				<li>
					<sup className="font-mono text-yellow-300">03.</sup>
					<Link href="#" className="text-xl font-medium"
						  onMouseEnter={() => setHovered(true)}
						  onMouseLeave={() => setHovered(false)}>
						Projects
					</Link>
				</li>
				<li>
					<sup className="font-mono text-yellow-300">04.</sup>
					<Link href="#" className="text-xl font-medium"
						  onMouseEnter={() => setHovered(true)}
						  onMouseLeave={() => setHovered(false)}>
						Contact
					</Link>
				</li>
			</ul>

		</header>
		</>
	)
}