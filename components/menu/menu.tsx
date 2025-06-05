'use client'
import {useState} from "react";
import Cursor from "@/components/global/cursor";

export default function Menu(){
	const [isHovered, setHovered] = useState(false);
	return(
		<>
			<div className={"flex items-center justify-center w-full h-screen bg-black absolute top-0 left-0"}>
				<p onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={"text-4xl bg-blue-500"}>
					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at, blanditiis cum dicta dolores doloribus eligendi exercitationem expedita hic inventore itaque laborum pariatur quae, quibusdam ratione repudiandae sit, velit voluptates.</span><span>Ab alias, aperiam at aut beatae consequuntur dignissimos dolorum eius eligendi esse ex exercitationem explicabo fugit inventore ipsam iure mollitia odit perferendis placeat quae, quam recusandae repellat soluta tempore voluptatum.</span><span>Ab accusamus animi id nisi nulla numquam odio, porro quaerat quo quos tempora ut veniam veritatis voluptatem voluptates. Dolore ducimus eligendi eveniet maiores, minima rem? Deleniti iusto veritatis voluptas voluptates!</span><span>Architecto assumenda consequatur consequuntur culpa debitis dolor eligendi error excepturi exercitationem fugiat impedit ipsa iste modi nesciunt omnis quaerat quam quis recusandae repellat reprehenderit, repudiandae sed similique totam ut voluptate!</span><span>Aliquid at, atque doloribus ea earum eius excepturi, ipsum magnam minima minus neque perferendis quasi quidem sint sit velit veniam voluptates. Consequuntur dolores est ipsa laboriosam praesentium, quae quia temporibus.</span></p>
			</div>
			<Cursor isHovered={isHovered}/>
		</>
	)
}