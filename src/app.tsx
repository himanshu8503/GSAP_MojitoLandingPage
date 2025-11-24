import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
import NavBar from './Component/NavBar';
import Hero from './Component/Hero';


const App = () => {

gsap.registerPlugin(ScrollTrigger,SplitText);


  return (
    <main>
        <NavBar/>
        <Hero/>
        <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App