import React from 'react'

const Title: React.FC<{context: string}> = ({ context }) => {

  return (
    <h1 className="text-3xl text-light-primary dark:text-dark-primary font-bold text-center md:text-left ">{ context }</h1>
  )
}

export default Title