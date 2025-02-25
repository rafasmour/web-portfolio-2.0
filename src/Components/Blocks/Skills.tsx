import TechnologyBox from '../Utilities/TechnologyBox';
import Paragraph from './Paragraph';
import {useSkills} from "../../context/SkillsContext.tsx";

function Skills() {
    const hey = useSkills();
    console.log(hey);
    const frontEnd: string[] = ['ReactJS', 'VueJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'TailWindCSS'];
    const backEnd: string[] = ['NodeJS', 'NestJS', 'PHP', 'Symfony', 'MySQL', 'Mongo'];
    const devOps: string[] = ['Docker', 'Traefik', 'Github Actions', 'Ansible'];
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