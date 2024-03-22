
import NavigationBar from './NavigationBar';
import Dashboard from './Dashboard';
const Home = () => {
	return (
		<>
			<div className='bg-gray-100 p-5 w-full flex'>
				{/* Navigation bar */}
				<NavigationBar />

				<main className='grow'>
					<Dashboard />
				</main>
			</div>


		</>
	)
}

export default Home