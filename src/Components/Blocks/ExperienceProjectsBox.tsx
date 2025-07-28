import { useState } from 'react'
import ExperienceDescription from './ExperienceDescription';

type Experience = {
    title: string;
    duration?: string;
    company: string;
    website: string;
    location?: string;
    technologies: string[];
    description?: string;
}
const workExperience : Experience[] = [
    {
        title: "Junior Software Engineer",
        duration: "Apr 2025 - Mar 2025",
        company: "Margera",
        website: "https://margera.co",
        location: "Larnaca, Cyprus (Remote)",
        technologies: ['MySQL', 'Docker', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'ShadCN', 'TailWindCSS', 'TypeScript', 'RadixUI', 'Python', 'Django', 'ReactHookForm', 'Zod', 'ReactQuery']
    },
    {
        title: "Junior Developer",
        duration: "Sep 2025 - Mar 2025",
        company: "Datum",
        website: "https://datum.gr",
        location: "Patras, Greece",
        technologies: ['MySQL', 'Docker','NodeJS', 'JavaScript', 'PHP', 'Wordpress', 'HTML', 'CSS']
    },
    {
        title: "Junior Developer",
        duration: "Aug 2023 - Oct 2023",
        company: "Omega Systems",
        website: "https://omegasystems.gr/",
        location: "Patras, Greece",
        technologies: ['MySQL', 'Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']
    },
    {
        title: "Wordpress Developer",
        duration: "2 weeks",
        company: "Football Team Rubens",
        website: "https://footballteam.store/",
        location: "Milan, Italy",
        technologies: ['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']
    },
    {
        title: "Wordpress Developer",
        duration: "Jul 2022 - Sep 2022",
        company: "POADEP",
        website: "https://poadep.gr/?lang=en",
        location: "Patras, Greece",
        technologies: ['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']
    },
]

const projectsExperience : Experience[] = [
    {
        title: "Campaign Monitor List",
        company: "Personal Project",
        website: "https://github.com/rafasmour/campaign-monitor-list.git",
        description: "A simple SPA that allows you to manage your Campaign Monitor subsribers connected via API",
        technologies: ['JavaScript', 'ReactJS', 'TailWindCSS', 'Docker', 'HTML', 'CSS'],
    },
    {
        title: "Git Auto Changelog",
        company: "Personal Project",
        website: "https://github.com/rafasmour/github-auto-changelog.git",
        description: "A single page application responsible for automating the generation of a CHANGELOG.md FILE",
        technologies: ['TypeScript', 'ReactJS', 'TailWindCSS', 'Docker', 'HTML', 'CSS'],
    },
    {
        title: "Task Simulator",
        company: "Personal Project",
        website: "https://github.com/rafasmour/task-simulator.git",
        description: "a simple algorithm that simulates a working day and returns reports based on the data given, useful for getting insights on your workload.",
        technologies: ["TypeScript", "NodeJS"],
    },
    {
           title: "Portfolio 2.0",
            company: "Personal Project",
            website: "https://github.com/rafasmour/web-portfolio-2.0.git",
        description: "the website you are currently viewing",
        technologies: ['ReactJS', 'TypeScript', 'TailWindCSS', 'Docker', 'Traefik', 'HTML', 'CSS'],
    },
    {
        title: "Todo Full Stack",
        company: "Personal Project",
        website: "https://github.com/rafasmour/web-portfolio-2.0",
        description: "a todo application with a complete stack",
        technologies: ['Traefik', 'Docker', 'QuasarJS', 'VueJS', 'NodeJS', 'TypeScript', 'Mongo', 'HTML', 'CSS'],
    },
    {
        title: "Ever Running Cube",
        company: "Personal Project",
        website: "https://github.com/rafasmour/ever-running-cube",
        description: "a simple endless running game made with javascript",
        technologies: ['JavaScript', 'NodeJS', 'HTML', 'CSS'],
    },
]
function ExperienceProjectsBox() {
    const [toggleExperience, setToggleExperience] = useState<boolean>(true);
    return (
        <div className='mx-auto  h-auto grid grid-cols-12 border-2 rounded-3xl  border-light-secondary dark:border-dark-secondary bg-light-background dark:bg-dark-background'>
            <div className="col-span-12 row-span-2 grid grid-cols-2 h-20">
                <div className="cursor-pointer h-20 col-span-1 flex items-center justify-center border rounded-tl-2xl  border-light-secondary dark:border-dark-secondary text-2xl text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-light-background dark:hover:text-dark-background" onClick={ () => setToggleExperience(true)}>Experience</div>
                <div className="cursor-pointer h-20 col-span-1 flex items-center justify-center border rounded-tr-2xl border-light-secondary dark:border-dark-secondary text-2xl text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-light-background dark:hover:text-dark-background" onClick={ () => setToggleExperience(false)}>Projects</div>
            </div>

            <div className={`no-scrollbar h-fit col-span-12 row-span-10 ${(toggleExperience) ? '' : 'hidden'}`}>
                {/* inspired by tailwind timeline component in docs */}
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-2">
                    {workExperience.map((experience: Experience, index: number) => (
                        <ExperienceDescription
                            title={experience.title}
                            website={experience.website}
                            technologies={experience.technologies}
                            description={experience.description ?? undefined}
                            duration={experience.duration}
                            company={experience.company}
                            location={experience.location}
                            key={index}
                        />
                    ))}
                </ol>
            </div>
            <div className={`no-scrollbar h-fit overflow-x-hidden col-span-12 row-span-10 ${(toggleExperience) ? 'hidden' : ''}`}>
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-4">
                    {projectsExperience.map((experience: Experience, index: number) => (
                        <ExperienceDescription
                            title={experience.title}
                            website={experience.website}
                            technologies={experience.technologies}
                            description={experience.description ?? undefined}
                            duration={experience.duration}
                            company={experience.company}
                            location={experience.location}
                            key={index}
                        />
                    ))}
                </ol>
            </div>

        </div>
    )
}

export default ExperienceProjectsBox