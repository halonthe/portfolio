export const NavLink = [
	{name: "About", link: "/about"},
	{name: "Project", link: "/projects"},
	{name: "Contact", link: "/contact"},
]

export const ProjectList = [
	{
		id: 1,
		name: "Chill",
		category: 'Fullstack Web App',
		image: {
			bg: "/images/chill.png",
			main: "/images/chill-detail.png",
			thumbnail: "/images/chill.png",
			showcase: "/images/chill.gif",
		},
		link: {
			page: "/projects/1",
			github: "https://github.com/chill/chill",
			preview: "https://github.com/chill/chill",
		},
		details: {
			slogan: "Light, Fast, and User Friendly Movie Streaming Platform",
			overview: "chill is a web-based application designed to give users access to a vast library of movies and TV shows from their device. Chill offers a user-friendly interface that allows users to search for movies and TV shows, and start watching instantly. Chill offers personalized recommendations based on users’ viewing habits, helping users discover new movies and TV shows that they may not have otherwise discovered. In addition, Chill also offers original content, including movies and TV shows, that can only be found on the chill app, making it a unique and valuable resource for users.",
			outcome: "Chill was successfully launched as a portfolio project and has been well-received for its clean design, speed, and usability. It stands as a solid demonstration of my full-stack capabilities and my ability to adopt emerging web technologies with confidence."
		},
		tech: [
			{
				name: "React 19",
				description: " - Javascript library for building user interfaces.",
				link: "https://react.dev",
			},{
				name: "Tailwind CSS",
				description: " - Utility-first styling for modern UIs.",
				link: "https://tailwindcss.com/",
			},{
				name: "Zustand",
				description: " - Small, fast, and scalable bearbones state management.",
				link: "https://zustand-demo.pmnd.rs/",
			},{
				name: "Zod",
				description: " - Schema validation.",
				link: "https://zod.dev/",
			},{
				name: "Node.js",
				description: " - Javascript runtime environment for building backend.",
				link: "https://nodejs.org/",
			},{
				name: "Express",
				description: " - Node.js framework for building RESTFULL API.",
				link: "https://expressjs.com/",
			},{
				name: "MySQL",
				description: " - Relational database management system (RDBMS).",
				link: "https://www.mysql.com/",
			},{
				name: "JSON Web Token",
				description: " - Securely Authorization and transmitting information.",
				link: "https://jwt.io/",
			},
		]
	},{
		id: 2,
		name: "Better Day",
		category: 'Vanilla Javascript',
		image: {
			bg: "/images/chill.png",
			main: "/images/chill.png",
			thumbnail: "/images/chill.png",
			showcase: "/images/chill.png",
		},
		link: {
			page: "/projects/2",
			github: "https://github.com/chill/chill",
			preview: "https://github.com/chill/chill",
		},
		details: {
			slogan: "Light, Fast, and User Friendly Movie Streaming Platform",
			overview: "chill is a web-based application designed to give users access to a vast library of movies and TV shows from their device. Chill offers a user-friendly interface that allows users to search for movies and TV shows, and start watching instantly. Chill offers personalized recommendations based on users’ viewing habits, helping users discover new movies and TV shows that they may not have otherwise discovered. In addition, Chill also offers original content, including movies and TV shows, that can only be found on the chill app, making it a unique and valuable resource for users.",
			outcome: "Chill was successfully launched as a portfolio project and has been well-received for its clean design, speed, and usability. It stands as a solid demonstration of my full-stack capabilities and my ability to adopt emerging web technologies with confidence."
		},
		tech: [
			{
				name: "React 19",
				description: " - Javascript library for building user interfaces.",
				link: "https://react.dev",
			},{
				name: "Tailwind CSS",
				description: " - Utility-first styling for modern UIs.",
				link: "https://tailwindcss.com/",
			},{
				name: "Zustand",
				description: " - Small, fast, and scalable bearbones state management.",
				link: "https://zustand-demo.pmnd.rs/",
			},{
				name: "Zod",
				description: " - Schema validation.",
				link: "https://zod.dev/",
			},{
				name: "Node.js",
				description: " - Javascript runtime environment for building backend.",
				link: "https://nodejs.org/",
			},{
				name: "Express",
				description: " - Node.js framework for building RESTFULL API.",
				link: "https://expressjs.com/",
			},{
				name: "MySQL",
				description: " - Relational database management system (RDBMS).",
				link: "https://www.mysql.com/",
			},{
				name: "JSON Web Token",
				description: " - Securely Authorization and transmitting information.",
				link: "https://jwt.io/",
			},
		]
	},
]

export const AboutMe = {
	name: "Yuda Dwi Restika",
	photo: "/images/profile.jpg",
	role: "I'm a fullstack developer driven by a passion for turning ideas into clean, intuitive digital experiences.",
	vision: "I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.",
	mission: "Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.",
	skills: {
		language: ["HTML", "CSS", "Javascript", "Typescript","MySQL"],
		framework: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"],
		tools: ["Git", "Postman", "Docker","Linux"]
	}
}