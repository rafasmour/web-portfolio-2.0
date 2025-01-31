import { useState } from 'react'
import SubTitle from './SubTitle';
import Paragraph from './Paragraph';

function ExperienceProjectsBox() {
    const [toggleExperience, setToggleExperience] = useState<boolean>(true);
    return (
        <div className='w-full h-72 grid grid-rows-12 grid-cols-12 border-2 rounded-xl overflow-hidden border-light-secondary dark:border-dark-secondary bg-light-background dark:bg-dark-background'>
            <div className="col-span-12 row-span-2 grid grid-cols-2">
                <div className="col-span-1 flex items-center justify-center border border-light-secondary dark:border-dark-secondary " onClick={ () => setToggleExperience(true)}><SubTitle context="Experience" /></div>
                <div className="col-span-1 flex items-center justify-center border border-light-secondary dark:border-dark-secondary " onClick={ () => setToggleExperience(false)}><SubTitle context="Projects" /></div>
            </div>
            <div className={`col-span-12 row-span-10 ${(toggleExperience) ? '' : 'hidden'}`}>
                <ul className="h-full list-disc list-inside text-3xl text-light-primary dark:text-dark-primary ml-10 border-l-2 border-l-light-accent dark:border-l-dark-accent py-4">
                    <li className="-ml-1.5">
                        <Paragraph context="Junior Developer - Datum Business Solutions - Patras, Greece" />
                    </li>
                    <li className="-ml-1.5">a</li>
                    <li className="-ml-1.5">a</li>
                    <li className="-ml-1.5">a</li>
                    <li className="-ml-1.5">a</li>
                </ul>
            </div>
            <div className={`col-span-12 row-span-10 ${(toggleExperience) ? 'hidden' : ''}`}><SubTitle context="Projects" /></div>

        </div>
    )
}

export default ExperienceProjectsBox