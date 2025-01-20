import React from 'react'

function Title({ context }: { context: string }) {

  return (
    <h2 className="text-3xl md:text-2xl text-light-primary dark:text-dark-primary font-bold">{ context }</h2>
  )
}

export default Title