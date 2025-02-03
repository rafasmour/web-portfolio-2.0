import TechnologyIcon from './TechnologyIcon'

function TechnologyBox({technology}: {technology: string}) {
  return (
    <span className="text-base border border-light-secondary dark:border-dark-secondary flex flex-row items-center justify-center gap-2 rounded-md px-2 py-1 text-light-secondary dark:text-dark-secondary group-hover:text-light-accent dark:group-hover:text-dark-accent group-hover:border-light-accent dark:group-hover:border-dark-accent">
        <TechnologyIcon technology={technology} /> {technology}
    </span>
  )
}

export default TechnologyBox