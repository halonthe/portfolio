"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
									   words,
									   className,
									   filter = true,
									   duration = 0.5,
								   }: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			}
		);
	}, [scope.current]); // eslint-disable-line react-hooks/exhaustive-deps

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="text-whiteopacity-0"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold text-lg md:text-xl xl:text-2xl", className)}>
				<div className="line-clamp-6 text-white tracking-wide">
					{renderWords()}
				</div>
		</div>
	);
};
