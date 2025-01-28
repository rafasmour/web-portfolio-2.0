import Paragraph from '../../Components/Blocks/Paragraph'
import SubTitle from '../../Components/Blocks/SubTitle'
import Title from '../../Components/Blocks/Title'

const Home: React.FC = () => {
  const resumeLink: string = import.meta.env.VITE_LINK_TO_RESUME;
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