"use client"
import { useEffect, useRef } from "react"

export default function WaterEffect() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const animationRef = useRef<number>(0)
	const ripples = useRef<
		{ x: number; y: number; radius: number; alpha: number }[]
	>([])

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext("2d")
		if (!ctx) return

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const handleResize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		window.addEventListener("resize", handleResize)

		const handleMouseMove = (e: MouseEvent) => {
			ripples.current.push({
				x: e.clientX,
				y: e.clientY,
				radius: 0,
				alpha: 0.5,
			})
		}

		window.addEventListener("mousemove", handleMouseMove)

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			ripples.current.forEach((ripple, i) => {
				ripple.radius += 1.5
				ripple.alpha -= 0.005

				const gradient = ctx.createRadialGradient(
					ripple.x,
					ripple.y,
					0,
					ripple.x,
					ripple.y,
					ripple.radius
				)
				gradient.addColorStop(0, `rgba(0, 200, 255, ${ripple.alpha})`)
				gradient.addColorStop(1, `rgba(0, 200, 255, 0)`)

				ctx.beginPath()
				ctx.fillStyle = gradient
				ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
				ctx.fill()

				if (ripple.alpha <= 0) {
					ripples.current.splice(i, 1)
				}
			})

			animationRef.current = requestAnimationFrame(draw)
		}

		draw()

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
			window.removeEventListener("resize", handleResize)
			cancelAnimationFrame(animationRef.current!)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
				pointerEvents: "none",
				filter: "blur(1px)",
			}}
		/>
	)
}
