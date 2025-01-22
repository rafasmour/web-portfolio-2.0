import React from 'react'

const Title: React.FC<{context: string}> = ({ context }) => {

  return (
    <h2 className="text-2xl md:text-xl text-light-primary dark:text-dark-primary font-bold text-center md:text-left ">{ context }</h2>
  )
}

export default Title