import React from 'react'
import Title from '../../Components/Blocks/Title'
import { GitRepo, useGitRepos } from '../../context/GitRepos'

const Projects: React.FC = () => {

  const repos = useGitRepos();
  return (
    <Title context="Projects" />
  )
}

export default Projects