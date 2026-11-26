import Paragraph from '../../Components/Blocks/Paragraph'
import SubTitle from '../../Components/Blocks/SubTitle'
import Introduction from '../../Components/Blocks/Introduction';
import ExperienceProjectsBox from '../../Components/Blocks/ExperienceProjectsBox';
import Skills from '../../Components/Blocks/Skills';

const Home: React.FC = () => {
  
  return (
    <>
    <section >
      <Introduction />
    </section>
    <section className="my-5">
      <ExperienceProjectsBox />
    </section>
      <SubTitle context="Skills and Technologies" />
      <Skills />
      <SubTitle context="More about me..." />
      <Paragraph context="I grew up in Patras, located at Western Greece, and graduated from Patras' Vocational Institute as an IT application engineer (GPA 9.3/10). I have a strong understanding of web technologies and I am thriving in both frontend and backend development, currently building full stack platforms with Laravel, React and FilamentPHP. I am now exploring DevOps technologies like CI/CD, containerization and reverse proxies, and I am eager to learn more. I also have a hobby of drawing and singing in my free time." />
    </>
      
  )
}

export default Home