import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-24 pb-24">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;
