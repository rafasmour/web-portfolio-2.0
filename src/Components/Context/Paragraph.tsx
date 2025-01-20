import React from 'react'

const Paragraph: React.FC<{context: string}> = ({ context }) => {
  return (
    <p className="text-large md:text-base text-light-secondary dark:text-dark-secondary">{context}</p>
  )
}

export default Paragraph