import Header from "./header/Header"
import Footer from "./footer/Footer"
import About from "./content/About"
import Landing from "./content/Landing"
import Contact from "./content/Contact"
import Projects from "./content/Projects"
import useStore from '../store';

export default function Main() {
    const { page, landingVisible } = useStore();
    return (
        <div className="layout">
            <>
                {landingVisible &&
                    <Landing/> 
                }
                <Header/>
                <div className="main-content">
                    {page === "project" && <Projects/>}
                    {page === "contact" && <Contact/>}
                    {page === "about" && <About/>}
                </div>
                <Footer/>
            </>
        </div>
    )
}