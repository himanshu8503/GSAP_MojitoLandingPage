import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
import NavBar from './Component/NavBar';
import Hero from './Component/Hero';
import Cocktails from './Component/Cocktails';
import About from './Component/About';
import Art from './Component/Art';
import Menu from './Component/Menu';
import Contact from './Component/Contact';


const App = () => {

gsap.registerPlugin(ScrollTrigger,SplitText);


  return (
    <main>
        <NavBar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
    </main>
  )
}

export default App