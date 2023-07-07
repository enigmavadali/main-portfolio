import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const Skills = lazy(() => import('./pages/Skills'));
const Education = lazy(() => import('./pages/Education'));
const Experience = lazy(() => import('./pages/Experience'));

function App() {
	return (
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Home />
						<About />
						<Skills />
						<Education />
						<Experience />
						<Projects />
						<Contact />
						{/* <Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route path="projects/single-project" element={<ProjectSingle />}/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes> */}
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
