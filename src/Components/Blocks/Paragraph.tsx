import React from 'react'

const Paragraph: React.FC<{context: string}> = ({ context }) => {
  return (
    <p className="text-large text-center md:text-left md:text-base text-light-parimary dark:text-dark-primary">{context}</p>
  )
}

export default Paragraph