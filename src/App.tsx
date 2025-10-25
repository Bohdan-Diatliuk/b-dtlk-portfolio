import './styles/app.scss'
import { useState } from 'react'
import { skills } from './data/skills'
import { projects } from './data/projects'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [activeSection, setActiveSection] = useState<string>('home');

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className='bg-gray-900 text-gray-100 min-h-screen'>
            <Navigation 
                activeSection={activeSection} 
                onNavigate={scrollToSection} 
            />
            <Hero onNavigate={scrollToSection} />
            <About skills={skills} />
            <Projects projects={projects} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App