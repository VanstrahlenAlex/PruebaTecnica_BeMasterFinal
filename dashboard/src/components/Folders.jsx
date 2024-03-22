import { useEffect, useState } from 'react';
import axios from 'axios';
import { Folder } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const Folders = ({ onFolderClick }) => {
	const [folders, setFolders] = useState([]);

	useEffect(() => {
		const getFolders = async () => {
			try {
				const response = await axios.get('../../folders.json');
				setFolders(response.data.folders);
			} catch (error) {
				console.log(error);
			}
		};
		getFolders();
	}, []);

	return (
		<div className="shadow-md mt-10 w-full">
			<table className='table-auto w-full'>
				<thead className='border-b-2 border-gray-200'>
					<tr>
						<th className="p-2 font-semibold tracking-wide text-left gap-4">
							<input type="checkbox" className="ml-2" /> <span>Nombre</span>
						</th>
						<th className="p-2 pl-10 font-semibold tracking-wide text-right">Videos</th>
						<th className="p-2 pl-10 font-semibold tracking-wide text-right">Tamaño</th>
						<th className="p-2 pl-10 font-semibold tracking-wide text-right">Última modificación</th>
					</tr>
				</thead>
				<tbody>
					{folders.map((folder, index) => (
						<tr key={index} onClick={() => onFolderClick(folder)} className='hover:bg-gray-100'>
							<td className="w-4/5 p-3 gap-3 flex flex-row ">
								<input type="checkbox" className="ml-2" />
								<a className="text-black flex flex-row">
									<Folder color="#B369F5" />
									<p className='hover:text-purple-800 pl-2 cursor-pointer'>{folder.Nombre}</p>
								</a>
							</td>
							<td className="p-3 w-1/10 text-right">{folder.Archivos.length}</td>
							<td className="p-3 w-1/10 text-right">{folder.Tamaño}</td>
							<td className="p-3 w-1/10 text-right">{folder["Ultima Modificacion"]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Folders;

