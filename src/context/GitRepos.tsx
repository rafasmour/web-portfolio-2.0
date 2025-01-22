import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, gql, ApolloLink, NormalizedCacheObject } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


export interface GitRepo {
  id: string;
  name: string;
  description: string | null;
  url: string;
  primaryLanguage: { name: string } | null;
  stargazerCount: number;
  createdAt: string;
}

interface GitPinnedReposContextType {
  repos: GitRepo[];
}

const GitReposContext = createContext<GitPinnedReposContextType | undefined>(undefined);

const httpLink: ApolloLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
    }
  }
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const GET_REPOS = gql`
{
  user(login: "rafasmour") {
    pinnedItems(first: 4) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            id
            url
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
}
`;

export const GitReposProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<GitRepo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { data } = await client.query({ query: GET_REPOS });
        setRepos(data.viewer.repositories.nodes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepos();
  }, []);

  return (
    <GitReposContext.Provider value={{ repos }}>
      {children}
    </GitReposContext.Provider>
  );
};

export const useGitRepos = () => {
  const context = useContext(GitReposContext);
  if (!context) {
    throw new Error('useGitRepos must be used within a GitReposProvider');
  }
  return context;
};
 

