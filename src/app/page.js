import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Shared/Navbar";
import TrendingCollection from "@/components/Home/TrendingCollection";
import Image from "next/image";
import Top_creators from "@/components/Home/Top_creators";
import Browse_Categories from "@/components/Home/Browse_Categories";
import Discover_More from "@/components/Home/Discover_More";
import Home_Banner from "@/components/Home/Home_Banner";
import How_It_Works from "@/components/Home/How_It_Works";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div className=" bg-[#3B3B3B]">
      
      
      <Hero/>
      <TrendingCollection/>
      <Top_creators/>
      <Browse_Categories/>
      <Discover_More/>
      <Home_Banner/>
      <How_It_Works/>
      <Contact/>
    </div>
  );
}
