import { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

// import TextInput from './TextInput';
// import Button from './Button';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {

			const response = await axios.get('../../users.json');
			const users = response.data.users;

			const user = users.find(u => u.email === email && u.password === password);

			if (!user && !password) {
				setError('Email address and password are required.');
				setTimeout(() => {
					setError('');
				}, 3000);
				return;
			} else if (!user) {
				setError('Email address are required.');
				setTimeout(() => {
					setError('');
				}, 3000);
				return;
			} else if (!password) {
				setError('Password are required.');
				setTimeout(() => {
					setError('');
				}, 3000);
				return;
			}

			if (password.length < 6) {
				setError('The password must be at least 6 characters long');
				setTimeout(() => {
					setError('');
				}, 3000);
				return;
			}

			if (user) {
				setMessage("User Authenticated successfully.")
				setTimeout(() => {
					setMessage('')
					navigate('/Home');
				}, 3000)
				localStorage.setItem('user', user.email);
				console.log("Inicio sesion");
			} else if (!user) {
				setError('User not Found')
				setTimeout(() => {
					setError('')
				}, 3000)
			} else {
				setError('Invalid credentials');
				setTimeout(() => {
					setError('')
				}, 3000)
			}
		} catch (error) {
			setError('Error logging in');
			console.error('Error:', error);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-purple-950">

			<div className="bg-white rounded-xl shadow-md p-10 w-full md:w-1/2 max-w-md">
				<h2 className="text-2xl font-bold text-center mb-5 text-black">Login</h2>
				<form onSubmit={handleLogin}>
					{error && <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-sm mt-2  m-2">{error}</p>}
					{message && <p className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 text-sm mt-2  m-2">{message}</p>}

					<div className="mb-5">
						<label htmlFor="email" className="text-ls text-start block font-medium text-purple-700">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email address"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-5">
						<label htmlFor="password" className="text-ls text-start block font-medium text-purple-700">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter your password"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
					</div>
					<button type="submit" className="bg-purple-600 text-white w-full  px-5 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						Login
					</button>

				</form>
			</div>
			<footer className="mt-10 text-center text-gray-500">
				<div>
					© 2024 Dashboard
				</div>

				<div className='bg-white'>

				</div>
			</footer>
		</div>

	);
};

export default Login;
