'use client'

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function FadeInOnScroll({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	)
}
