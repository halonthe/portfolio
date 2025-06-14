import Revealer from "@/components/animation/revealer";

export default function ContactPage() {
	return(
		<>
		<Revealer/>
			<section className={"w-screen h-screen relative flex items-center justify-center bg-[#111214] p-20"}>
			<div className={"w-3/4 h-3/4 border-b border-t border-yellow-300 py-5 flex flex-col justify-between"}>
				<div className={"w-full flex justify-between font-mono pointer-events-none"}>
					<div>ADDRESS</div>
					<div className={"text-right"}>
						<p>CAMPURSARI KERTEK</p>
						<p>WONOSOBO, CENTRAL JAVA</p>
						<p>INDONESIA - 56371</p>
					</div>
				</div>
				<div className={"w-full flex items-center justify-center text-8xl text-yellow-300 font-extrabold"}>
					<a href={"mailto:yudhadwi@restika.id"}>YUDHADWI@RESTIKA.ID<sup className={"text-white"}>&#8663;</sup></a>
				</div>
				<div className={"w-full flex justify-between font-mono items-end"}>
					<div className={"pointer-events-none"}>SOCIAL</div>
					<div className={"text-right flex gap-1"}>
						<a href={"https://github.com/halonthe"} className={"underline cursor-pointer"}>GITHUB<span className={"text-yellow-300"}>&#8663;</span></a>
						<a href={"https://github.com/halonthe"} className={"underline cursor-pointer"}>LINKEDIN<span className={"text-yellow-300"}>&#8663;</span></a>
					</div>
				</div>
			</div>
			</section>
		</>
	)
}