import React from 'react'

function Paragraph({ context }: { context: string }) {
  return (
    <p className="text-large md:text-base text-light-secondary dark:text-dark-secondary">{context}</p>
  )
}

export default Paragraph