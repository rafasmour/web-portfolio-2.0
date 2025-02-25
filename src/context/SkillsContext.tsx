import {createContext, ReactNode, useContext, useEffect, useState} from "react";
type SkillsContextProviderProps = {
    children: ReactNode;
}

type SkillsContextType = {
    skills: Object[] | undefined;
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);


export const SkillsProvider = ({ children }: SkillsContextProviderProps) => {
    const [skills, setSkills] = useState<Object[] | undefined>(undefined);
    useEffect(() => {
        const fetchSkills: ()=> Promise<void> = async () => {
            try {
                const response: Response = await fetch('/json/skills.json');
                const data: any = await response.json();
                setSkills(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSkills();
    }, [])

    return (
        <SkillsContext.Provider value={{ skills }}>
            {children}
        </SkillsContext.Provider>
    );
}

export const useSkills = () => {
    const context: SkillsContextType | undefined = useContext(SkillsContext);
    if (!context) {
        throw new Error('useSkills must be used within a SkillsProvider');
    }
    return context;
}