

export default function Header({onClick}: {onClick: any}) {
	return (
		<header className="absolute top-0 left-0 flex items-center justify-between w-full bg-transparent p-10 md:px-20 z-50">
			<h1 className="text-3xl font-bold">Restika</h1>

			<nav>
				<ul className="hidden md:flex items-center justify-between gap-10 text-lg font-medium">
					<li>Project</li>
					<li>Article</li>
					<li>About</li>
					<li>Contact</li>
					<li onClick={onClick}>Menu</li>
				</ul>
			</nav>
		</header>
	)
}