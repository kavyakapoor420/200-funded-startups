import Bento from './components/landing/Bento'
import Hero from "./components/landing/Hero";
import Navbar from "./components/landing/Navbar";
import Image from "next/image";


export default function Home() {
  
  return (
    <div className="">
      <main className="">
       
        <Navbar/>
        <Hero/>
        <Bento/>
       

       
      </main>
    </div>
  );
}


