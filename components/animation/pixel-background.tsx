'use client'
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";
import usePixelBgStore from "@/lib/zustand/pixel-background";

const animate = {
	initial: {
		opacity: 0,
	},
	open: (i: number) => ({
		opacity: 1,
		transition: {
			duration: 0,
			delay: 0.05 * i,
		},
	}),
	close: (i: number) => ({
		opacity: 0,
		transition: {
			duration: 0,
			delay: 0.05 * i,
		},
	})
}

interface PixelBackground {
	color?: string;
}

export default function PixelBackground({color = 'white'}: PixelBackground) {
	const {isPixeled, setPixeled} = usePixelBgStore()

	const ref = useRef<HTMLDivElement>(null);

	const [isVisible, setIsVisible] = useState(true);
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)


	useEffect(() => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)

		const pixelTimeout = setTimeout(() => setPixeled(false), 1500)
		const removeTimeout = setTimeout(() => setIsVisible(false),4000)

		return () => {
			clearTimeout(pixelTimeout)
			clearTimeout(removeTimeout)
		}
	},[]) // eslint-disable-line react-hooks/exhaustive-deps


	function shuffle(a: number[]) {
		let j,x,i;
		for(i = a.length - 1; i > 0; i--){
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}

	function getBlocks(){
		if (width === 0 || height === 0) return null;

		const size = width * 0.05;
		const amount = Math.ceil(height / size);

		const delays = shuffle([...Array(amount)].map((_,i) => i))

		return delays.map((randomDelay: number, i: number) => {
			return (
				<motion.div
					key={i}
					className={"w-full h-[5vw]"}
					style={{
						backgroundColor: color,
					}}
					variants={animate}
					initial="initial"
					animate={isPixeled ? "open" : "close"}
					custom={randomDelay}
				>

				</motion.div>
			)
		})
	}

	if (!isVisible) return null;
	return (
		<div ref={ref} className={"absolute top-0 left-0 w-screen h-screen flex overflow-hidden pointer-events-none z-50"}>
			{ width !== 0 && height !== 0 &&
				[...Array(20)].map((_, i) => (
					<div key={i} className={"w-[5vw]"}>
						{
							getBlocks()
						}
					</div>
				))
			}
		</div>
	)
}