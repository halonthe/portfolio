'use client'
import {useRevealer} from "@/hooks/useRevealer";

export default function Revealer() {
	useRevealer()
	return (
		<div className="revealer absolute top-0 right-0 origin-top w-full h-full bg-black pointer-events-none z-50"/>
	)
}