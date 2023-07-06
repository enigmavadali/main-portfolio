import { useContext } from 'react';
import SkillsContext from '../../context/SkillsContext';
import SkillSingle from './SkillSingle';
import SkillProgrammer from '../../images/skills-programmer.svg';

const SkillsGrid = () => {
    const {skillsData, skillsHeading} = useContext(SkillsContext);

    return (
        <div id='skills'>
            <div className="mt-10 sm:mt-20 text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    {skillsHeading}
                </p>
            </div>
            <div className="text-right float-right mt-8 sm:mt-2">
                <img width="350px" src={SkillProgrammer} alt="skill-programmer" />
            </div>
            <div className='grid grid-cols-4 sm:grid-cols-4 mt-10 sm:mt-10 gap-2 sm:gap-0'>
                {skillsData.map( (skill) => (
                    <div className='w-36 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-light'>
                        <SkillSingle
                        title={skill.title}
                        image={skill.img}
                        key={skill.id}
                        />
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default SkillsGrid;