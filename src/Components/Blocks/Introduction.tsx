import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Introduction() {
    const location: string = import.meta.env.VITE_LOCATION || 'Unknown Location';
    const googleMapsUrl: string = "https://www.google.com/maps/place/" + location;
    const resumeLink: string = import.meta.env.VITE_LINK_TO_RESUME;
    const linkedInUser: string = import.meta.env.VITE_LINKEDIN;
    const githubUser: string = import.meta.env.VITE_GITHUB;
    const linkedinUrl: string = `https://www.linkedin.com/in/${linkedInUser}`;
    const githubUrl: string = `https://github.com/${githubUser}`;
    const email: string = import.meta.env.VITE_EMAIL;
    const fullName: string = import.meta.env.VITE_FULL_NAME;
  return (
    <>  
        <Title context={fullName} />
        <p className="no-underline flex items-center justify-center md:justify-start   text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
            <span className="text-center md:text-left">Junior full-stack developer</span>
        </p>
        <a href={googleMapsUrl} className="no-underline flex items-center justify-center md:justify-start  text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</span>
        </a>
        <div className="flex flex-row gap-4 justify-center md:justify-start mt-2">
            <a href={resumeLink} className="no-underline flex items-center justify-center  w-fit  text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent border-2 border-light-primary dark:border-dark-primary p-2 rounded-lg hover:border-light-accent hover:dark:border-dark-accent">
                <span><FontAwesomeIcon icon={faDownload} /> Resume</span>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="no-underline flex p-2 items-center justify-center text-3xl  text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="no-underline flex p-2 items-center justify-center text-3xl    text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={`mailto:${email}`} target="_blank" className="no-underline flex p-2 items-center justify-center text-3xl    text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    </>
  )
}

export default Introduction