import React from 'react'

const SubTitle: React.FC<{context: string|null}> = ({ context }) => {

  return (
    <h2 className="text-2xl text-light-secondary dark:text-dark-secondary font-bold text-center md:text-left ">{ context }</h2>
  )
}

export default SubTitle;