import Header from "./header/Header"
import Footer from "./footer/Footer"
import About from "./content/About"
import Landing from "./content/Landing"
import Contact from "./content/Contact"
import Projects from "./content/Projects"
import Project from "./common/Project"
import useStore from '../store';
import { fadeDuration } from "../constant"
import type { PageType } from "../types"
import { useState, useEffect } from 'react';

export default function Main() {
    const [displayedPage, setDisplayedPage] = useState<PageType | null>();
    const [contentVisible, setContentVisible] = useState<boolean>(false);
    const { page, project, landingVisible } = useStore();

    useEffect(() => {
        setContentVisible(true)
    }, []);

    useEffect(() => {
        if (page !== displayedPage) {
            setContentVisible(false)
            const timer = setTimeout(() => {
                setDisplayedPage(page);
                if (page) {
                    setContentVisible(true)
                }
            }, fadeDuration);
            return () => clearTimeout(timer);
        }
    }, [page, displayedPage]);
    return (
        <div className="layout">
            <>
                {landingVisible &&
                    <Landing/> 
                }
                <Header/>
                <div className={contentVisible ? "main-content visible" : "main-content"}>
                    {displayedPage === "project" && <Projects/>}
                    {displayedPage === "contact" && <Contact/>}
                    {displayedPage === "about" && <About/>}
                    {displayedPage === "none" && project && <Project id={project}/>}
                </div>
                <Footer/>
            </>
        </div>
    )
}