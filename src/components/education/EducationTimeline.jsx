import { useContext } from 'react';
import EducationContext from '../../context/EduationContext';
import EducationSingle from './EducationSingle';
import EducationImage from '../../images/education.svg'

const EducationTimeline = () => {
    const {educationData, educationHeading} = useContext(EducationContext);
    
    return (
        <div id='education'>
            <div className="mt-10 sm:mt-20 text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					{educationHeading}
				</p>
			</div>
            <div className='float-right mt-10 sm:mt-10 gap-2 sm:gap-0'>
                {educationData.map((education) => (
                    <EducationSingle
                        institute={education.institute}
                        program={education.program}
                        dates={education.dates}
                    />
                ))}
            </div>
            <div className="text-left float-left mt-12 sm:mt-2">
                <img width="400px" src={EducationImage} alt="education-student" />
            </div>
        </div>
    );
};

export default EducationTimeline;