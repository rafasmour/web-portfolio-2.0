import { Link } from 'react-router'
import Paragraph from '../../Components/Blocks/Paragraph'
import SubTitle from '../../Components/Blocks/SubTitle'
import Title from '../../Components/Blocks/Title'

const About: React.FC = () => {
  return (
    <>
    <section >
      <Title context="Rafael mourouzidis" />
      <Paragraph context="I’m a Junior Developer specializing in JavaScript, Node.js. 
        I've also completed projects using TypeScript, Nest.js, Quasar.js, Vue.js, React.js, MongoDB, PHP, Symfony, 
        MySQL, Traefik, Docker, WordPress, HTML, CSS, Express.js, and Tailwind CSS. I grew up in Patras.
        I have been mentored by my older brother which is a Senior Magento Developer, we have done code reviews
        to help me grow, while he never touched my code, we reviewed and we discussed about next step. I enjoy 
        collaborating and thrive both in team settings and solo development. 
        My focus includes problem-solving with algorithms, data structures, and an in-depth understanding 
        of web technologies." />
    </section>
    <section>
      <SubTitle context="Key Skills & Technologies" />
      <ul className="text-lg pl-4 text-center sm:text-left md:text-base text-light-parimary dark:text-dark-primary list-item" >
        <li>JavaScript (Node.js, Vue.js, Express.js, Tailwind CSS)</li>
        <li>Backend (Nest.js, PHP, Symfony, MongoDB, MySQL)</li>
        <li>DevOps (Traefik, Docker)</li>
        <li>Web (HTML, CSS, WordPress, Quasar.js)</li>
      </ul>
    </section>
    <section className="text-center md:text-left">
      <SubTitle context="Featured Projects" />
      <a href='/projects' className="md:pl-4 text-lg min-w-full text-white-primary dark:text-dark-primary hover:text-white-accent hover:dark:text-dark-accent">&gt; To Projects Page</a>
    </section>
    <section>
      <SubTitle context="More about me..." />
      <Paragraph context="will see.."/>
    </section>
    </>
      
  )
}

export default About