"use client"

import React from "react";

import Header from "@/components/global/header";

export default function Template({children}: {children: React.ReactNode}) {

	return (
		<div className="font-[family-name:var(--font-geist-sans)] w-screen min-h-screen relative bg-white">
			<Header/>
			<main>
				{children}
			</main>
		</div>
	);
}
