import Bento from './components/landing/Bento'
import { FaqSection } from './components/landing/FaqSection';
import Hero from "./components/landing/Hero";
import Image from "next/image";


export default function Home() {
  
  return (
    <div className="">
      <main className="">
       

        <Hero/>
        <Bento/>
        <FaqSection/>
       

       
      </main>
    </div>
  );
}


