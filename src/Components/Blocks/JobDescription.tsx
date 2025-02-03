import React from 'react'
interface JobDescriptionProps {
    title: string;
    description?: string;
    location?: string ;
    technologies?: string[] ;
    website?: string ;
    company?: string ;
    duration?: string ;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ title, description, location, technologies, website, company, duration }) => {
  return (
    <li className="mb-10 ms-4 group">
      <div className="absolute w-3 h-3  rounded-full mt-2 -start-[7px] bg-light-secondary dark:bg-dark-secondary group-hover:bg-light-accent dark:group-hover:bg-dark-accent"></div>
      <a href={website} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2">
        <span className="text-xl text-left text-light-parimary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent">{title}</span>
        {
          (location && company && duration) 
          ? (<span className="text-base text-light-secondary dark:text-dark-secondary group-hover:text-light-accent dark:group-hover:text-dark-accent">{duration} - {company} - {location}</span>)
          : (<span className="text-base text-left text-light-secondary dark:text-dark-secondary group-hover:text-light-accent dark:group-hover:text-dark-accent">{description}</span>)
        }
      </a>
    </li>
  )
}

export default JobDescription