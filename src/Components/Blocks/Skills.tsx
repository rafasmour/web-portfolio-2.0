import TechnologyBox from '../Utilities/TechnologyBox';
import Paragraph from './Paragraph';

function Skills() {
    const frontEnd: string[] = ['ReactJS', 'VueJS', 'InertiaJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'TailWindCSS', 'ShadCN', 'RadixUI', 'ReactQuery', 'ReactHookForm', 'Zod', 'QuasarJS', 'Wordpress'];
    const backEnd: string[] = ['PHP', 'Laravel', 'FilamentPHP', 'Livewire', 'Symfony', 'Python', 'Django', 'NodeJS', 'NestJS', 'MySQL', 'Mongo'];
    const devOps: string[] = ['Git', 'Docker', 'Traefik', 'Linux', 'SSH', 'Plesk', 'Ploi', 'Github Actions', 'Ansible'];
  return (
    <>
        <Paragraph context="Front-End" />
        <div className="flex flex-row gap-2 flex-wrap mb-2 items-center justify-center md:items-start md:justify-start w-[70%] md:w-full mx-auto">
            {frontEnd.map(technology => (
                <TechnologyBox technology={technology} />
            ))}
        </div>
        <Paragraph context="Back-End" />
        <div className="flex flex-row gap-2 flex-wrap mb-2 items-center justify-center md:items-start md:justify-start w-[70%] md:w-full mx-auto">
            {backEnd.map(technology => (
                <TechnologyBox technology={technology} />
            ))}
        </div>
        <Paragraph context="Dev-Ops" />

        <div className="flex flex-row gap-2 flex-wrap mb-2 items-center justify-center md:items-start md:justify-start w-[70%] md:w-full mx-auto">
            {devOps.map(technology => (
                <TechnologyBox technology={technology} />
            ))}
        </div>
    </>
  )
}

export default Skills