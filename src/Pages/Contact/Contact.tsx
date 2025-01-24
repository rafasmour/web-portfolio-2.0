import Title from '../../Components/Blocks/Title'

const Contact: React.FC = () => {
  return (
    <>
      <Title context="Contact" />
      <form>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="subject"/>
        
      </form>
    </>
  )
}

export default Contact