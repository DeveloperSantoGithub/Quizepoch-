import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Styles/Global.css';
import { AuthProvider } from './Contexts/AuthContext';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/quiz" element={<Quiz />} />
							<Route path="/result" element={<Result />} />
						</Routes>
					</Layout>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
