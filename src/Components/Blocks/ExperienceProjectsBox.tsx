import { useState } from 'react'
import ExperienceDescription from './ExperienceDescription';

function ExperienceProjectsBox() {
    const [toggleExperience, setToggleExperience] = useState<boolean>(true);
    return (
        <div className='mx-auto h-80 grid grid-rows-12 grid-cols-12 border-2 rounded-3xl overflow-hidden border-light-secondary dark:border-dark-secondary bg-light-background dark:bg-dark-background'>
            <div className="col-span-12 row-span-2 grid grid-cols-2">
                <div className="cursor-pointer col-span-1 flex items-center justify-center border border-light-secondary dark:border-dark-secondary text-2xl text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-light-background dark:hover:text-dark-background" onClick={ () => setToggleExperience(true)}>Experience</div>
                <div className="cursor-pointer col-span-1 flex items-center justify-center border border-light-secondary dark:border-dark-secondary text-2xl text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-light-background dark:hover:text-dark-background" onClick={ () => setToggleExperience(false)}>Projects</div>
            </div>
            
            <div className={`no-scrollbar overflow-x-hidden col-span-12 row-span-10 ${(toggleExperience) ? '' : 'hidden'}`}>
                {/* inspired by tailwind timeline component in docs */}
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-2">
                    <ExperienceDescription title="Junior Developer" duration="Sep 2024 - Current" company="Datum" website="https://datum.gr" location="Patras, Greece" technologies={['MySQL', 'Docker','NodeJS', 'JavaScript', 'PHP', 'Wordpress', 'HTML', 'CSS']} />
                    <ExperienceDescription title="Junior Developer" duration="Aug 2023 - Oct 2023" company="Omega Systems" website="https://omegasystems.gr/" location="Patras, Greece" technologies={['MySQL', 'Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']}/>
                    <ExperienceDescription title="Wordpress Developer" duration="2 weeks" company="Football Team Rubens" website="https://footballteam.store/" location="Milan, Italy" technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']} />
                    <ExperienceDescription title="Wordpress Developer" duration="Jul 2022 - Sep 2022" company="POADEP" website="https://poadep.gr/?lang=en" location="Patras, Greece" technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']} />
                </ol>
            </div>
            <div className={`no-scrollbar overflow-x-hidden col-span-12 row-span-10 ${(toggleExperience) ? 'hidden' : ''}`}>
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-4">
                    <ExperienceDescription title="Conf-CMS" website="https://github.com/rafasmour/conf-cms" description="a modern CMS still in development using the Symfony Framework."  technologies={['Docker', 'Symfony', 'TailWindCSS', 'MySQL', 'PHP', 'HTML', 'CSS']} />
                    <ExperienceDescription title="Portfolio 2.0" website="https://github.com/rafasmour/web-portfolio-2.0" description="the portfolio you're currently navigating."  technologies={['TypeScript', 'ReactJS', 'TailWindCSS', 'Docker', 'HTML', 'CSS']} />
                    <ExperienceDescription title="Todo Full Stack" website="https://github.com/rafasmour/web-portfolio-2.0" description="a todo application with a complete stack"  technologies={[ 'Traefik', 'Docker', 'QuasarJS', 'VueJS', 'NodeJS', 'TypeScript','Mongo', 'HTML', 'CSS']} />
                    <ExperienceDescription title="Ever Running Cube" website="https://github.com/rafasmour/ever-running-cube" description="a simple endless running game made with javascript"  technologies={['JavaScript', 'NodeJS', 'HTML', 'CSS']} />
                    
                </ol>
            </div>

        </div>
    )
}

export default ExperienceProjectsBox