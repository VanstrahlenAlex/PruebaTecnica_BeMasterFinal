

import { useState } from "react";
import { LibraryBig, Trash2, Folder, CirclePlay, Search, ArrowLeft } from "lucide-react";
import Folders from "./Folders";

const navLinks = [
	{
		name: "Biblioteca",
		icon: LibraryBig,
	},
	{
		name: "Papelera",
		icon: Trash2,
	},
];

const Dashboard = () => {
	const [activeNavIndex, setActiveNavIndex] = useState(0);
	const [selectedFolder, setSelectedFolder] = useState(null);

	const handleFolderClick = (folder) => {
		setSelectedFolder(folder);
	};

	const handleGoBack = () => {
		setSelectedFolder(null);
	};
	return (
		<div className="ml-4 bg-white rounded-xl h-screen">
			{!selectedFolder && (
				<div>
					<div className="flex flex-row">
						<div className="p-5 flex justify-between w-full">
							<nav className="flex flex-row">
								<div className="flex flex-row">
									{navLinks.map((item, index) => (
										<div
											key={index}
											className={`flex space-x-3 cursor-pointer p-2 rounded-md ${activeNavIndex === index
												? "underline underline-offset-8 decoration-purple-900 decoration-4 text-purple-900"
												: ""
												}`}
											onClick={() => setActiveNavIndex(index)}
										>
											<item.icon />
											<span>{item?.name}</span>
										</div>
									))}
								</div>
							</nav>
							<div className="flex m-2 gap-2">
								<button className="bg-gray-300 hover:bg-gray-500 text-black py-2 px-4 rounded flex gap-2">
									<Folder />
									Nueva Carpeta
								</button>
								<button className="bg-purple-700 hover:bg-purple-900  text-white py-2 px-4 rounded flex gap-2">
									<CirclePlay />
									Nuevo Video
								</button>
							</div>
						</div>
					</div>
					<div className="ml-3">
						<div className="relative max-w-sm ml-10 pl-[10.1px]">
							<button className="absolute inset-y-0 ml-2 -left-10 flex items-center px-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:purple-blue-500">
								<Search />
							</button>
							<input className="w-full py-2 px-4 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-blue-500" type="search" placeholder="Buscar Video" />
						</div>
					</div>
				</div>
			)}
			<div className="">
				{selectedFolder ? (
					<div className="p-5">
						<div className="flex items-center pb-10">
							<button className="text-white bg-purple-900  rounded-md p-2" onClick={handleGoBack}>
								<ArrowLeft />
							</button>
							<h1 className="text-xl pl-2">
								Home/ <span className="font-bold">{selectedFolder.Nombre}</span>
							</h1>
						</div>

						<table className='table-auto w-full '>
							<thead className='border-b-2 border-gray-200'>
								<tr>
									<th className="p-2 font-semibold tracking-wide text-left gap-4">
										<input type="checkbox" className="ml-2" /> <span>Nombre</span>
									</th>
									<th className="p-2 pl-10 font-semibold tracking-wide text-right">Tamaño</th>
									<th className="p-2 pl-10 font-semibold tracking-wide text-right">Duración</th>
									<th className="p-2 pl-10 font-semibold tracking-wide text-right">Última modificación</th>
								</tr>
							</thead>
							<tbody>
								{selectedFolder.Archivos.map((archivo, index) => (
									<tr key={index} className='hover:bg-gray-100'>
										<td className="w-4/5 p-3 gap-3 flex flex-row ">
											<input type="checkbox" className="ml-2" />
											<CirclePlay color="#B369F5" />
											<p className='hover:text-purple-800 pl-2'>{archivo.Nombre}</p>
										</td>
										<td className="p-3 w-1/10 text-right">{archivo.Tamaño}</td>
										<td className="p-3 w-1/10 text-right">{archivo.Duracion}</td>
										<td className="p-3 w-1/10 text-right">{archivo["Ultima Modificacion"]}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<Folders onFolderClick={handleFolderClick} />
				)}
			</div>
		</div>
	);
};

export default Dashboard;


