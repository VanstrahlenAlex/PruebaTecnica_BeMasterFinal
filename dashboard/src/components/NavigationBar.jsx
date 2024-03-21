import { useState } from "react";
import {
	LayoutDashboard,
	Folder,
	CirclePlay,
	BarChart3,
	Settings,
	ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
	{
		name: "Dashboard",
		icon: LayoutDashboard,
	},
	{
		name: "Videos",
		icon: Folder,
	},
	{
		name: "Player",
		icon: CirclePlay,
	},
	{
		name: "Analytics",
		icon: BarChart3,
	},
	{
		name: "Configuration",
		icon: Settings,
	},
]

const variants = {
	expanded: { width: "20%" },
	nonExpanded: { width: "5%" }

}

const NavigationBar = () => {
	const [activeNavIndex, setActiveNavIndex] = useState(0);
	const [isExpanded, setIsExpanded] = useState(true);

	return (
			<motion.div
				animate={isExpanded ? "expanded" : "nonExpanded"}
				variants={variants}
				className={` py-12 flex flex-col border border-r-1 w-1/5 h-screen rounded-xl bg-white relative + ${isExpanded ? "px-10" : "px-2"} `} >
				<div className='logo-div flex space-x-4 items-center'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-20 h-20 bg-purple-900 rounded-lg">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
					</svg>
					<span className={isExpanded ? "block font-bold" : "hidden"}>Video Tool</span>
				</div>
				<div onClick={() => setIsExpanded(!isExpanded)} className="w-5 h-5 bg-purple-700 rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center">
					<ArrowRight color="#FFFFFF" />
				</div>

				<div className="mt-10 flex flex-col space-y-8 pb-16">
					{navLinks.map((item, index) => (
						<div key={index} className={`flex space-x-3 cursor-pointer p-2 rounded-md +
						${activeNavIndex === index ? "bg-purple-900 text-white font-semibold" : " "}
					`} onClick={() => setActiveNavIndex(index)}>
							<item.icon />
							<span className={isExpanded ? "block" : "hidden items-center"}>{item?.name}</span>
						</div>
					))}
				</div>


				<div className={isExpanded ? "block" : "hidden"}>
					<div className="bg-gray-200 rounded-lg mt-auto">
						<div className="p-4">
							<div className="mb-4">
								<span className="font-bold">Mi Plan Plus</span>
								<p className="text-gray-700 text-sm">El uso se renueva el: 3-May-24</p>
							</div>
							<div>
								<div className="flex flex-col items-center">
									<div className="flex my-2">
										<span className="pr-2">Almacenamiento</span>
										<p className="text-sm">23.5GB/1TB</p>
									</div>
									<div className="w-full h-2 bg-blue-200 rounded-full">
										<div className="w-3/4 h-full text-center text-xs text-white bg-purple-900 rounded-full">
										</div>
									</div>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex my-2">
										<span className="pr-2">Banda Mensual</span>
										<p className="text-sm">3.4GB/5TB</p>
									</div>
									<div className="w-full h-2 bg-blue-200 rounded-full">
										<div className="w-2/3 h-full text-center text-xs text-white bg-purple-900 rounded-full">
										</div>
									</div>
								</div>
								<button className="bg-purple-900 text-white p-2 items-center mt-6 rounded-full hover:bg-purple-700">Administrar Plan</button>
							</div>
						</div>

					</div>
				</div>
			</motion.div >
		
	)
}

export default NavigationBar
