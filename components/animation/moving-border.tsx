"use client";
import React from "react";
import {
	motion,
	useAnimationFrame,
	useMotionTemplate,
	useMotionValue,
	useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Border({
						   children,
						   as: Component = "div",
						   containerClassName,
						   borderClassName,
						   duration,
						   className,
						   ...otherProps
					   }: {
	children: React.ReactNode;
	as?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	containerClassName?: string;
	borderClassName?: string;
	duration?: number;
	className?: string;
}) {
	return (
		<Component
			className={cn(
				"relative overflow-hidden bg-transparent p-[2px]",
				containerClassName,
			)}
			{...otherProps}
		>
			<div
				className="absolute inset-0"
			>
				<MovingBorder duration={duration} rx="0" ry="0">
					<div
						className={cn(
							"h-40 w-40 bg-[radial-gradient(#FFF,transparent_60%)] opacity-[0.8]",
							borderClassName,
						)}
					/>
				</MovingBorder>
			</div>

			<div
				className={cn(
					"relative flex h-full w-full items-center justify-center antialiased",
					className,
				)}
			>
				{children}
			</div>
		</Component>
	);
}

export const MovingBorder = ({
								 children,
								 duration = 3000,
								 rx,
								 ry,
								 ...otherProps
							 }: {
	children: React.ReactNode;
	duration?: number;
	rx?: string;
	ry?: string;
}) => {
	const pathRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
	const progress = useMotionValue<number>(0);

	useAnimationFrame((time) => {
		const length = pathRef.current?.getTotalLength();
		if (length) {
			const pxPerMillisecond = length / duration;
			progress.set((time * pxPerMillisecond) % length);
		}
	});

	const x = useTransform(
		progress,
		(val) => pathRef.current?.getPointAtLength(val).x,
	);
	const y = useTransform(
		progress,
		(val) => pathRef.current?.getPointAtLength(val).y,
	);

	const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className="absolute h-full w-full"
				width="100%"
				height="100%"
				{...otherProps}
			>
				<rect
					fill="none"
					width="100%"
					height="100%"
					rx={rx}
					ry={ry}
					ref={pathRef}
				/>
			</svg>
			<motion.div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "inline-block",
					transform,
				}}
			>
				{children}
			</motion.div>
		</>
	);
};
