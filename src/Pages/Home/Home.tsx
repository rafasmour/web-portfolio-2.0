import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from '../../Components/Blocks/Paragraph'
import SubTitle from '../../Components/Blocks/SubTitle'
import Title from '../../Components/Blocks/Title'
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import Introduction from '../../Components/Blocks/Introduction';
import ExperienceProjectsBox from '../../Components/Blocks/ExperienceProjectsBox';

const Home: React.FC = () => {
  const resumeLink: string = import.meta.env.VITE_LINK_TO_RESUME;
  
  return (
    <>
    <section >
      <Introduction />
    </section>
    <section>
      <ExperienceProjectsBox />
    </section>
    <section>
      <SubTitle context="Key Skills & Technologies" />
      <ul className="pl-4 text-center sm:text-left md:text-base text-light-parimary dark:text-dark-primary list-item" >
        <li className='text-xl'>JavaScript (Node.js, Vue.js, Express.js, Tailwind CSS)</li>
        <li className='text-xl'>Backend (Nest.js, PHP, Symfony, MongoDB, MySQL)</li>
        <li className='text-xl'>DevOps (Traefik, Docker)</li>
        <li className='text-xl'>Web (HTML, CSS, WordPress, Quasar.js)</li>
      </ul>
    </section>
    <section className="text-center md:text-left">
      <SubTitle context="Featured Projects" />
      <a href='/projects' className="md:pl-4 text-lg min-w-full text-white-primary dark:text-dark-primary hover:text-white-accent hover:dark:text-dark-accent">&gt; To Projects Page</a>
    </section>
    <section className='text-center md:text-left'>
      <SubTitle context="Resume" />
      <a href={resumeLink} className="md:pl-4 text-lg min-w-full text-white-primary dark:text-dark-primary hover:text-white-accent hover:dark:text-dark-accent">&gt; To Resume</a>
    </section>
    <section className='text-center md:text-left'>
      <SubTitle context="Contact" />
      <a href='/contact' className="md:pl-4 text-lg min-w-full text-white-primary dark:text-dark-primary hover:text-white-accent hover:dark:text-dark-accent">&gt; Send me a message</a>
    </section>
    <section>
      <SubTitle context="More about me..." />
      <Paragraph context=" I am 21 years old. I grew up in Patras, located at Western Greece. I’ve graduated from Patras' Vocational training institute as an IT application technician. I’ve fulfilled my army obligations with no penalties. I enjoy Software development, specifically the department of web applications. I am a fan of creativity, innovation and adaptation. I adapt to change easily and I am eager to learn more about web technologies. I also have a hobby of drawing and singing in my free time.
    "/>
    </section>
    </>
      
  )
}

export default Home