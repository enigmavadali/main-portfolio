import { useState, createContext } from 'react';
import { experienceHeading as experienceSectionHeading } from '../data/experienceData';
import { experienceData as experienceDataJson } from '../data/experienceData';

const ExperienceContext = createContext();

export const ExperienceProvider = ({children}) => {
    const [experienceData, setExperienceData] = useState(experienceDataJson);

    const experienceHeading = experienceSectionHeading;

    return (
		<ExperienceContext.Provider
			value={{
				experienceData,
				setExperienceData,
				experienceHeading,
			}}
		>
			{children}
		</ExperienceContext.Provider>
	);
};

export default ExperienceContext;