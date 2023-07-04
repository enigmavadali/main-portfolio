import { useState, createContext } from 'react';
import { skillsHeading as skillsSectionHeading } from '../data/skillsData';
import { skillsData as skillsDataJson } from '../data/skillsData';

const SkillsContext = createContext();

export const SkillsProvider = ({children}) => {
    const [skillsData, setSkillsData] = useState(skillsDataJson);

    const skillsHeading = skillsSectionHeading;

    return (
		<SkillsContext.Provider
			value={{
				skillsData,
				setSkillsData,
				skillsHeading,
			}}
		>
			{children}
		</SkillsContext.Provider>
	);
};

export default SkillsContext;