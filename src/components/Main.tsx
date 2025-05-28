import Header from "./header/Header"
import About from "./content/About"
import Landing from "./content/Landing"
import Contact from "./content/Contact"
import Projects from "./content/Projects"
import Project from "./common/Project"
import useStore from '../store';
import { fadeDuration } from "../constant"
import type { PageType } from "../types"
import { useState, useEffect } from 'react';
import Footer from "./footer/Footer"

export default function Main() {
    const [displayedPage, setDisplayedPage] = useState<PageType | null>();
    const [contentVisible, setContentVisible] = useState<boolean>(false);
    const { page, project, landingVisible, setIsMobile } = useStore();

    useEffect(() => {
        setContentVisible(true)
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (landingVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [landingVisible]);

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