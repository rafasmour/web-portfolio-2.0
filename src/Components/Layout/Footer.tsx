import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Title from '../Blocks/Title';

const Footer: React.FC = () => {
  const email: string = import.meta.env.VITE_EMAIL || 'example@example.com';
  const tel: string = import.meta.env.VITE_TEL || '+1234567890';
  const location: string = import.meta.env.VITE_LOCATION || 'Unknown Location';
  const googleMapsUrl: string = "https://www.google.com/maps/place/" + location;
  const linkedInUser: string = process.meta.env.VITE_LINKEDIN;
  const githubUser: string = process.meta.env.VITE_GITHUB;
  const linkedinUrl: string = `https://www.linkedin.com/in/${linkedInUser}`;
  const githubUrl: string = `https://github.com/github/${githubUser}`;

  return (
    <footer className="w-full">
      <div className="flex flex-row justify-around p-4">
        <div className="flex flex-col justify-between">
          <Title context="Contact" />
          <ul className="list-none">
            <li>
              <a href={`mailto:${email}`} className="no-underline flex items-center space-x-2 text-lg text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${tel.trim()}`} className="no-underline flex items-center space-x-2 text-lg text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faPhone} />
                <span>{tel}</span>
              </a>
            </li>
            <li>
              <a href={googleMapsUrl} className="no-underline flex items-center space-x-2 text-lg text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{location}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <Title context="Social" />
          <ul className="list-none">
            <li>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="no-underline flex items-center space-x-2 text-lg text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="no-underline flex items-center space-x-2 text-lg text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent">
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-center text-light-primary dark:text-dark-primary text-sm md:text-base">
        &copy; Rafail Mourouzidis 2025
      </h2>
    </footer>
  );
};

export default Footer;