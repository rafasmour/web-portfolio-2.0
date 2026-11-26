import React from "react";
import Title from "../../Components/Blocks/Title.tsx";
import SubTitle from "../../Components/Blocks/SubTitle.tsx";
import ExperienceDescription from "../../Components/Blocks/ExperienceDescription.tsx";

const Portfolio: React.FC = () => {
    return (
        <>
            <Title context="Portfolio" />
            <SubTitle context="Platforms I built at Yoltlabs" />
            <div>
                <ol className="relative border-l-2 border-light-secondary dark:border-dark-secondary ml-4 py-2">
                    <li><ExperienceDescription title={"My Training Spot"} website={"https://mytrainingspot.gr"} description={"Online booking platform for 5x5 football, basketball, padel, tennis courts and more, with pricing, availability and online payments"} technologies={['Laravel', 'FilamentPHP', 'ReactJS', 'InertiaJS', 'TypeScript', 'TailWindCSS', 'MySQL']}   /></li>
                    <li><ExperienceDescription title={"CV Tellers"} website={"https://cvtellers.gr"} description={"Platform to measure and certify soft skills and match candidates with jobs that fit them"} technologies={['Laravel', 'FilamentPHP', 'ReactJS', 'TypeScript', 'TailWindCSS', 'MySQL']}   /></li>
                    <li><ExperienceDescription title={"FoyerHost"} website={"https://foyerhost.com"} description={"Complete property management platform for short-term rental hosts"} technologies={['Laravel', 'FilamentPHP', 'Livewire', 'TailWindCSS', 'MySQL']}   /></li>
                </ol>
            </div>
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