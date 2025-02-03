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
      <Paragraph context=" I am 21 years old. I grew up in Patras, located at Western Greece. I’ve graduated from Patras' Vocational training institute as an IT application technician. I’ve fulfilled my army obligations with no penalties. I enjoy Software development, specifically the department of web applications. I am a fan of creativity, innovation and adaptation. I adapt to change easily and I am eager to learn more about web technologies. I also have a hobby of drawing and singing in my free time.
      "/>
    </>
      
  )
}

export default Home