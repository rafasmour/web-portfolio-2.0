import React from 'react';
import { IconType } from 'react-icons';
import { SiNodedotjs, SiTailwindcss, SiSymfony, SiQuasar, SiWordpress, SiNestjs, SiMongodb, SiCss3, SiMysql, SiTraefikproxy, SiHtml5, SiPhp, SiReact, SiVuedotjs , SiDocker, SiJavascript, SiTypescript } from 'react-icons/si';

interface TechnologyIconProps {
  technology: string;
}

const iconMapping: { [key: string]: IconType } = {
  PHP: SiPhp,
  ReactJS: SiReact,
  VueJS: SiVuedotjs,
  NodeJS: SiNodedotjs,
  Docker: SiDocker,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  QuasarJS: SiQuasar,
  HTML: SiHtml5,
  CSS: SiCss3,
  Traefik: SiTraefikproxy,
  Mongo: SiMongodb,
  MySQL: SiMysql,
  NestJS: SiNestjs,
  Wordpress: SiWordpress,
  Symfony: SiSymfony,
  TailWindCSS: SiTailwindcss,
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