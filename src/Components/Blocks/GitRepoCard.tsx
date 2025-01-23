import { GitRepo } from "../../context/GitReposContext";
import Paragraph from "./Paragraph";
import SubTitle from "./SubTitle";
import Title from "./Title";
const GitRepoCard = ({ repo }: { repo: GitRepo }) => {
  return (
    <a href={repo.url} target="_blank" rel="noreferrer">
        <div className="w-2/3 min-h-full min-w-80 overflow-hidden mx-auto mb-4 grid grid-rows-12  border-2 text-left border-light-secondary dark:border-dark-secondary rounded-3xl hover:bg-light-accent hover:dark:bg-dark-accent hover:scale-105 transition-all duration-300">
            <div className="row-span-2 px-10 pt-2">
                <Title context={repo.name} />
            </div>
            <div className="row-span-2 px-10 py-1">
                <SubTitle context= {repo.primaryLanguage?.name ?? ''} />
            </div>
            <div className="row-span-6 px-10">
                <Paragraph context= {repo.description ?? ''} />
            </div>
            <div className="row-span-2">
                <button className="w-full h-full text-light-primary dark:text-dark-primary text-2xl font-bold">&gt; Go to Repo</button>
            </div>
            
            
        </div>
    </a>
  );
};

export default GitRepoCard;