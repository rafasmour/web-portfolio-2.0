import React from 'react'

const SubTitle: React.FC<{context: string}> = ({ context }) => {

  return (
    <h2 className="text-xl md:text-lg text-light-secondary dark:text-dark-secondary font-bold text-center md:text-left ">{ context }</h2>
  )
}

export default SubTitle;