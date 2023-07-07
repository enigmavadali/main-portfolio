import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import { ExperienceProvider } from '../context/ExperienceContext';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <ExperienceProvider>
            <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<ExperienceTimeline />
			</motion.div>
        </ExperienceProvider>
    );
    
};

export default Experience;