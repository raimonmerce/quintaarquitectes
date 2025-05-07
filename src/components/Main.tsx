import Header from "./header/Header"
import Footer from "./footer/Footer"
import About from "./content/About"
import Contact from "./content/Contact"
import Projects from "./content/Projects"
import useStore from '../store';

type MainProps = {
    
}

export default function Main({}:MainProps) {
    const { page } = useStore();
    return (
        <>
            <Header/>
            <div>
                {page == "project" && <Projects/>}
                {page == "contact" && <Contact/>}
                {page == "about" && <About/>}
            </div>
            <Footer/>
        </>
    )
}