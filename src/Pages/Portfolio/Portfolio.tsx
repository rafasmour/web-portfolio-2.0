import React from "react";
import Title from "../../Components/Blocks/Title.tsx";
import SubTitle from "../../Components/Blocks/SubTitle.tsx";
import ExperienceDescription from "../../Components/Blocks/ExperienceDescription.tsx";

const Portfolio: React.FC = () => {
    return (
        <>
            <Title context="Portfolio" />
            <SubTitle context="Sites I developed on my own" />
            <div>
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-2">
                    <li><ExperienceDescription title={"WaterIQ"} website={"https://www.wateriq.gr"} company={"Omega Systems"} technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']}   /></li>
                    <li><ExperienceDescription title={"EngeoLab"} website={"https://www.engeolab.gr"} company={"Omega Systems"} technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']}   /></li>
                    <li><ExperienceDescription title={"Achaia Company"} website={"https://www.achaiacompany.gr"} company={"Datum Business Solutions"} technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']}   /></li>
                </ol>
            </div>
            <SubTitle context="Sites I have contributed to" />
            <div>
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-2">
                    <li><ExperienceDescription title={"Omega Systems"} website={"https://www.omegasystems.gr"} company={"Omega Systems"} technologies={['JavaScript', 'HTML', 'CSS']}   /></li>
                    <li><ExperienceDescription title={"Boel Beauty Eshop"} website={"https://www.shop.boelbeauty.gr"} company={"Datum Business Solutions"} technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']}   /></li>
                    <li><ExperienceDescription title={"Romanos Agencies"} website={"https://www.romanosagencies.gr"} company={"Datum Business Solutions"} technologies={['Wordpress', 'JavaScript', 'PHP', 'HTML', 'CSS']}   /></li>
                </ol>
            </div>
        </>
    );
}

export default Portfolio;