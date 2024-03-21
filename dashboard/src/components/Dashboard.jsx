import { useState } from "react";
import {
	LibraryBig,
	Trash2,
	Folder,
	CirclePlay

} from "lucide-react";
const navLinks = [
	{
		name: "Biblioteca",
		icon: LibraryBig,
	},
	{
		name: "Papelera",
		icon: Trash2,
	},

]

const Dashboard = () => {
	const [activeNavIndex, setActiveNavIndex] = useState(0);
	return (
		<div className="ml-4 bg-white rounded-xl h-screen">
			<div className="flex flex-row ">
				<div className="p-5 flex">
					<nav className="flex flex-row">
						<div className=" flex flex-row">
							{navLinks.map((item, index) => (
								<div key={index} className={`flex space-x-3 cursor-pointer p-2 rounded-md  +
							${activeNavIndex === index ? "underline underline-offset-8 decoration-purple-900 decoration-4 text-purple-900 " : " "}
						`} onClick={() => setActiveNavIndex(index)}>
									<item.icon />
									<span >{item?.name}</span>
								</div>
							))}
						</div>
					</nav>
					<div className="flex flex-grow m-2 gap-2 ">
						<h2>botones</h2>
						<button className="bg-gray-300 hover:bg-gray-500 text-black  py-2 px-4 rounded flex gap-2">
							<Folder />
							Nueva Carpeta
						</button>
						<button className="bg-purple-700 hover:bg-purple-900 text-white  py-2 px-4 rounded flex gap-2">
							<CirclePlay />
							Nuevo Video
						</button>
					</div>
				</div>

			</div>

		</div>
	)
}

export default Dashboard