'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

import useCursorStore from "@/lib/zustand/cursor";
import {NavLink} from "@/constants";
import {useTransitionRouter} from "next-view-transitions";
import Cursor from "@/components/global/cursor";
import {usePageTransition} from "@/hooks/usePageTransition";
import React, {useEffect, useState} from "react";


export default function Header() {
	const {isHovered,setHovered} = useCursorStore()
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	},[])

	const router = useTransitionRouter()
	const pathname = usePathname()

	const handleNavigation = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()

		if(path === pathname) return

		router.push(path, {
			onTransitionReady: usePageTransition,
		})
	}

	return (
		<>
		<header className="fixed top-0 left-0 flex items-center justify-between w-full bg-transparent p-10 md:px-20 z-40">
			<h1 className="flex items-center justify-between">
				<sup className="font-normal font-mono text-yellow-300">01.</sup>
				<Link href="/" className="text-3xl font-bold relative inline-block after:block after:h-1 after:bg-blue-900 after:transition-transform after:duration-300 after:delay-150 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
					  onMouseEnter={() => setHovered(true)}
					  onMouseLeave={() => setHovered(false)}
					  onClick={handleNavigation("/")}
				>
					Restika
				</Link>
			</h1>

			<ul className="flex items-center gap-2 md:gap-10">
				{NavLink.map((nav, index) => {
					const active = nav.link === pathname || (pathname.startsWith(nav.link) && nav.link !== "/");
					return (
						<li key={index}>
							<sup className="font-mono text-yellow-300">0{index + 2}.</sup>
							<Link
								href={nav.link}
								onClick={handleNavigation(nav.link)}
								className={`text-md md:text-xl font-medium relative inline-block after:block after:h-1 after:bg-blue-900 after:transition-transform after:duration-300 after:delay-150 ${active ? "after:scale-x-100" : "after:scale-x-0"} hover:after:scale-x-100 after:origin-left`}
								  onMouseEnter={() => setHovered(true)}
								  onMouseLeave={() => setHovered(false)}>
								{nav.name}
							</Link>
						</li>
					)
				})}
			</ul>

		</header>
			{!isMobile && <Cursor isHovered={isHovered}/>}
		</>
	)
}