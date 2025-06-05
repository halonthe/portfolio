"use client"

import React, {useState} from "react";

import Header from "@/components/global/header";
import Menu from "@/components/menu/menu";

export default function Template({children}: {children: React.ReactNode}) {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<div className="font-[family-name:var(--font-geist-sans)] w-screen min-h-screen relative bg-white">
			<Header onClick={() => setMenuOpen(!isMenuOpen)}/>
			{isMenuOpen && (
				<Menu/>
			)}
			<main>{children}</main>
		</div>
	);
}
