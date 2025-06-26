'use client'

import { useEffect, useRef, useState } from 'react'

interface Circle {
	x: number
	y: number
	translateX: number
	translateY: number
	size: number
	alpha: number
	targetAlpha: number
	dx: number
	dy: number
}

interface Props {
	quantity?: number
	size?: number
	color?: "white" | "black"
	vx?: number
	vy?: number
}

export default function ParticleBackground({quantity = 500, size = 0.4, color = "white", vx = 0, vy = 0,}: Props) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
	const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 })
	const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

	const circlesRef = useRef<Circle[]>([])
	const rafIDRef = useRef<number | null>(null)

	const createCircleParams = (): Circle => {
		const { w, h } = canvasSize
		return {
			x: Math.floor(Math.random() * w),
			y: Math.floor(Math.random() * h),
			translateX: 0,
			translateY: 0,
			size: Math.max(1, Math.floor(Math.random() * 2) + size),
			alpha: 0,
			targetAlpha: Number((Math.random() * 0.5 + 0.1).toFixed(1)),
			dx: (Math.random() - 0.5) * 0.2,
			dy: (Math.random() - 0.5) * 0.2,
		}
	}

	const drawCircle = (circle: Circle, update = false) => {
		const ctx = context
		if (!ctx) return

		ctx.save()
		ctx.translate(circle.translateX, circle.translateY)
		ctx.beginPath()
		ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
		ctx.fillStyle = color === "white" ? `rgba(255, 255, 255, ${circle.alpha})` : `rgba(0, 0, 0, ${circle.alpha})`
		ctx.fill()
		ctx.restore()

		if (!update) circlesRef.current.push(circle)
	}

	const initCanvas = () => {
		const canvas = canvasRef.current
		const container = containerRef.current
		if (!canvas || !container) return

		circlesRef.current = []

		const newSize = {
			w: container.offsetWidth,
			h: container.offsetHeight,
		}
		setCanvasSize(newSize)

		canvas.width = newSize.w * dpr
		canvas.height = newSize.h * dpr
		canvas.style.width = `${newSize.w}px`
		canvas.style.height = `${newSize.h}px`

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		ctx.scale(dpr, dpr)
		setContext(ctx)

		for (let i = 0; i < quantity; i++) {
			const circle = createCircleParams()
			drawCircle(circle)
		}
	}

	const animate = () => {
		const ctx = context
		if (!ctx) return

		ctx.clearRect(0, 0, canvasSize.w, canvasSize.h)

		for (let i = circlesRef.current.length - 1; i >= 0; i--) {
			const circle = circlesRef.current[i]

			const edgeDistances = [
				circle.x + circle.translateX - circle.size,
				canvasSize.w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				canvasSize.h - circle.y - circle.translateY - circle.size,
			]

			const closestEdge = Math.min(...edgeDistances)
			const alphaModifier = Math.max(Math.min(closestEdge / 20, 1), 0)

			circle.alpha += alphaModifier > 0.5
				? circle.alpha < circle.targetAlpha
					? 0.02
					: 0
				: circle.targetAlpha * alphaModifier

			circle.x += circle.dx + vx
			circle.y += circle.dy + vy

			drawCircle(circle, true)

			const outOfBounds =
				circle.x < -circle.size ||
				circle.x > canvasSize.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.h + circle.size

			if (outOfBounds) {
				circlesRef.current.splice(i, 1)
				const newCircle = createCircleParams()
				drawCircle(newCircle)
			}
		}

		rafIDRef.current = window.requestAnimationFrame(animate)
	}

	useEffect(() => {
		initCanvas()
		animate()

		const handleResize = () => initCanvas()
		window.addEventListener('resize', handleResize)

		return () => {
			setContext(null)
			if (rafIDRef.current != null) {
				cancelAnimationFrame(rafIDRef.current)
				rafIDRef.current = null
			}
			window.removeEventListener('resize', handleResize)
		}
	}, [canvasSize.w, canvasSize.h]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div
			ref={containerRef}
			className="pointer-events-none absolute top-0 left-0 h-full w-full bg-black -z-10"
			aria-hidden="true"
		>
			<canvas ref={canvasRef} className="w-full h-full"/>
		</div>
)
}
