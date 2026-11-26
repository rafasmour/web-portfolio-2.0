import React from 'react';
import { IconType } from 'react-icons';
import {
  SiNodedotjs,
  SiTailwindcss,
  SiSymfony,
  SiQuasar,
  SiWordpress,
  SiNestjs,
  SiMongodb,
  SiCss3,
  SiMysql,
  SiTraefikproxy,
  SiHtml5,
  SiPhp,
  SiReact,
  SiVuedotjs,
  SiDocker,
  SiJavascript,
  SiTypescript,
  SiGithubactions,
  SiAnsible,
  SiShadcnui, SiRadixui, SiPython, SiDjango, SiReacthookform, SiReactquery, SiZod,
  SiLaravel, SiFilament, SiLivewire, SiInertia, SiPlesk, SiLinux, SiGit,
  SiGrafana, SiPrometheus, SiPostgresql, SiMariadb
} from 'react-icons/si';

interface TechnologyIconProps {
  technology: string;
}

const iconMapping: { [key: string]: IconType } = {
  'PHP': SiPhp,
  'ReactJS': SiReact,
  'VueJS': SiVuedotjs,
  'NodeJS': SiNodedotjs,
  'Docker': SiDocker,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'QuasarJS': SiQuasar,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Traefik': SiTraefikproxy,
  'Mongo': SiMongodb,
  'MySQL': SiMysql,
  'NestJS': SiNestjs,
  'Wordpress': SiWordpress,
  'Symfony': SiSymfony,
  'TailWindCSS': SiTailwindcss,
  'Github Actions': SiGithubactions,
  'Ansible': SiAnsible,
  'ShadCN': SiShadcnui,
  "RadixUI": SiRadixui,
  "Python": SiPython,
  "Django": SiDjango,
  'ReactHookForm': SiReacthookform,
  'ReactQuery': SiReactquery,
  'Zod': SiZod,
  'Laravel': SiLaravel,
  'FilamentPHP': SiFilament,
  'Livewire': SiLivewire,
  'InertiaJS': SiInertia,
  'Plesk': SiPlesk,
  'Linux': SiLinux,
  'Git': SiGit,
  'Grafana': SiGrafana,
  'Prometheus': SiPrometheus,
  'PostgreSQL': SiPostgresql,
  'MariaDB': SiMariadb,
  // Add more mappings as needed
};

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ technology }) => {
  const IconComponent: IconType = iconMapping[technology];

  if (!IconComponent) {
    return null; // Return null if no icon is found for the technology
  }

  return <IconComponent />;
};

export default TechnologyIcon;