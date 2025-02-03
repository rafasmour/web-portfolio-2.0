import { useState } from 'react'
import SubTitle from './SubTitle';
import JobDescription from './JobDescription';

function ExperienceProjectsBox() {
    const [toggleExperience, setToggleExperience] = useState<boolean>(true);
    return (
        <div className='w-[80%] mx-auto h-72 grid grid-rows-12 grid-cols-12 border-2 rounded-3xl overflow-hidden border-light-secondary dark:border-dark-secondary bg-light-background dark:bg-dark-background'>
            <div className="col-span-12 row-span-2 grid grid-cols-2">
                <div className="cursor-pointer col-span-1 flex items-center justify-center border border-light-secondary dark:border-dark-secondary text-2xl text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-light-background dark:hover:text-dark-background" onClick={ () => setToggleExperience(true)}>Experience</div>
                <div className="cursor-pointer col-span-1 flex items-center justify-center border border-light-secondary dark:border-dark-secondary text-2xl text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-light-background dark:hover:text-dark-background" onClick={ () => setToggleExperience(false)}>Projects</div>
            </div>
            
            <div className={`no-scrollbar overflow-x-hidden col-span-12 row-span-10 ${(toggleExperience) ? '' : 'hidden'}`}>
                {/* inspired by tailwind timeline component in docs */}
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-2">
                    <JobDescription title="Junior Developer" duration="Sep 2024 - Current" company="Datum" website="https://datum.gr" location="Patras, Greece" />
                    <JobDescription title="Junior Developer" duration="Aug 2023 - Oct 2023" company="Omega Systems" website="https://omegasystems.gr/" location="Patras, Greece" />
                    <JobDescription title="Wordpress Developer" duration="2 weeks" company="Football Team Rubens" website="https://footballteam.store/" location="Milan, Italy" />
                    <JobDescription title="Wordpress Developer" duration="Jul 2022 - Sep 2022" company="POADEP" website="https://poadep.gr/?lang=en" location="Patras, Greece" />
                </ol>
            </div>
            <div className={`col-span-12 row-span-10 ${(toggleExperience) ? 'hidden' : ''}`}><SubTitle context="Projects" /></div>

        </div>
    )
}

export default ExperienceProjectsBox