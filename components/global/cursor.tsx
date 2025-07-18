"use client"

import {useEffect, useRef} from "react";
import gsap from "gsap";

interface Cursor {
	size?: number;
	color?: string;
	centeredCircle?: boolean;
	isHovered?: boolean;
}

export default function Cursor({color='white',size = 30, centeredCircle = true, isHovered}: Cursor) {

	const circleSize = isHovered ? size * 5 : size;

	const circle = useRef(null)
	const mouse = useRef({x:0,y:0})
	const delayedMouse = useRef({x:0,y:0})

	const manageMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		mouse.current = {x:clientX,y:clientY};

		moveCircle(mouse.current.x, mouse.current.y);
	}

	const lerp = (x: number,y: number,a: number) => x * (1 - a) + y * a

	const moveCircle = (x: number,y: number) => {
		if (!circle.current) return;
		const vars = {
			x,
			y,
			xPercent: centeredCircle ? -50 : 0,
			yPercent: centeredCircle ? -50 : 0
		}
		gsap.set(circle.current, vars);
	}

	const animate = () => {
		if (!circle.current) return;
		const {x,y} = delayedMouse.current;
		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.05),
			y: lerp(y, mouse.current.y, 0.05),
		}

		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
		window.requestAnimationFrame(animate);
	}

	useEffect(() => {
		animate();
		window.addEventListener("mousemove", manageMouseMove)
		return () => window.removeEventListener("mousemove", manageMouseMove)
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className={`fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none z-40`}
		style={{
			backgroundColor: color,
			width: circleSize,
			height: circleSize,
			filter: `blur(${isHovered ? size : 0}px)`,
			transition: `width 0.3s ease-out, height 0.3s ease-out, filter 0.3s ease-out`,
		}}
		ref={circle}/>
	)
}