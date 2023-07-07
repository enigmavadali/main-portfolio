import { useContext } from 'react';
import ExperienceContext from '../../context/ExperienceContext';
import ExperienceSingle from './ExperienceSingle';
import ExperienceImage from '../../images/experience.svg'

const ExperienceTimeline = () => {
    const {experienceData, experienceHeading} = useContext(ExperienceContext);
    
    return (
        <div id='experience'>
            <div className="mt-10 sm:mt-20 text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					{experienceHeading}
				</p>
			</div>
            <div className="text-right float-right mt-10 sm:mt-2">
                <img width="350px" src={ExperienceImage} alt="experience-worker" />
            </div>
            <div className='float-left mt-10 sm:mt-10 gap-2 sm:gap-0'>
                {experienceData.map((experience) => (
                    <ExperienceSingle
                        company={experience.company}
                        position={experience.position}
                        duration={experience.duration}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default ExperienceTimeline;