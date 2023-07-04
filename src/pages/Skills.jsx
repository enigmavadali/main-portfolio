import { SkillsProvider } from "../context/SkillsContext";
import SkillsGrid from "../components/skills/SkillsGrid";
import { motion } from 'framer-motion';

const Skills = () => {
	return (
        <SkillsProvider>
            <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<SkillsGrid />
			</motion.div>
        </SkillsProvider>
	);
};

export default Skills;