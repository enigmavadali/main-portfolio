import EducationTimeline from '../components/education/EducationTimeline';
import { EducationProvider } from '../context/EduationContext';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <EducationProvider>
            <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<EducationTimeline />
			</motion.div>
        </EducationProvider>
    );
    
};

export default Education;