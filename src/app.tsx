import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
import NavBar from './Component/NavBar';
import Hero from './Component/Hero';
import Cocktails from './Component/Cocktails';


const App = () => {

gsap.registerPlugin(ScrollTrigger,SplitText);


  return (
    <main>
        <NavBar/>
        <Hero/>
        <Cocktails/>
    </main>
  )
}

export default App