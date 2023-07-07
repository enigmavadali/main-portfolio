import { useState, createContext } from 'react';
import { educationHeading as educationSectionHeading } from '../data/educationData';
import { educationData as educationDataJson } from '../data/educationData';

const EducationContext = createContext();

export const EducationProvider = ({children}) => {
    const [educationData, setEducationData] = useState(educationDataJson);

    const educationHeading = educationSectionHeading;

    return (
		<EducationContext.Provider
			value={{
				educationData,
				setEducationData,
				educationHeading,
			}}
		>
			{children}
		</EducationContext.Provider>
	);
};

export default EducationContext;