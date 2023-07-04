import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { aboutMeHeading as aboutMeSectionHeading } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const aboutMeHeading = aboutMeSectionHeading;

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				aboutMeHeading,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
