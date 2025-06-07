'use client'

import Cursor from "@/components/global/cursor";
import useCursorStore from "@/lib/zustand/cursor";
import Revealer from "@/components/animation/revealer";

export default function AboutPage(){
	const {isHovered} = useCursorStore()

	return (
		<>
			<Revealer/>
				<div className="min-h-screen flex flex-col">
					<section className="h-screen relative">
						<div className="h-1/4 bg-black">
							head
						</div>
						<div className="h-3/4 bg-blue-900"></div>
					</section>

				</div>
				<Cursor color={'#003366'} isHovered={isHovered}/>
		</>
	)
}