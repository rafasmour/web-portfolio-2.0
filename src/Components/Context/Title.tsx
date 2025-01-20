import React from 'react'

const Title: React.FC<{context: string}> = ({ context }) => {

  return (
    <h2 className="text-3xl md:text-2xl text-light-primary dark:text-dark-primary font-bold">{ context }</h2>
  )
}

export default Title