import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Title from "../../Components/Blocks/Title.tsx";

const cvFile: string = "/cv.pdf";

const Cv: React.FC = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-center md:justify-between gap-4 mb-4">
                <Title context="CV" />
                <a href={cvFile} download="CV Raphael Mourouzidis.pdf" className="no-underline flex items-center justify-center w-fit text-light-primary dark:text-dark-primary hover:text-light-accent hover:dark:text-dark-accent border-2 border-light-primary dark:border-dark-primary p-2 rounded-lg hover:border-light-accent hover:dark:border-dark-accent">
                    <span><FontAwesomeIcon icon={faDownload} /> Download</span>
                </a>
            </div>
            <object data={cvFile} type="application/pdf" className="w-full h-[85vh] rounded-lg border-2 border-light-secondary dark:border-dark-secondary">
                <p className="text-center text-light-primary dark:text-dark-primary p-4">
                    Your browser cannot display PDFs. <a href={cvFile} className="underline">Open the CV</a>.
                </p>
            </object>
        </>
    );
}

export default Cv;
