import React from 'react'
import Title from '../../Components/Blocks/Title'
import { useGitRepos } from '../../context/GitRepos'
import GitRepoCard from '../../Components/Blocks/GitRepoCard';
import Paragraph from '../../Components/Blocks/Paragraph';

const Projects: React.FC = () => {
  const { repos } = useGitRepos();
  const pageTitle = "Projects";
  const pageDescription = "Here are some of the projects I have worked on. Feel free to check them out on my GitHub!";

  return (
    <>
      <Title context={pageTitle} />
      <Paragraph context={pageDescription} />
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 mt-10">
        {repos.map(repo => (
          <GitRepoCard repo={repo} />
        ))}
      </div>
    </>
  );
}

export default Projects