import React from 'react'

const Paragraph: React.FC<{context: string}> = ({ context }) => {
  return (
    <p className="text-xl text-center md:text-left text-light-parimary dark:text-dark-primary">{context}</p>
  )
}

export default Paragraph