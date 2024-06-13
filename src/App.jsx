import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProfileContextProvider from './store/profile-context.jsx';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='container'>
					<ProfileContextProvider>
						<Profile />
					</ProfileContextProvider>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
