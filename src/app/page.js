import Image from "next/image";
import Header from "../component/header";
import NavBar from "@/component/NavBar";
import Banner from "@/component/banner";
import Deals from "@/component/deals";
import Category from "@/component/category";
import Popular from "@/component/popularRest";
import Partner from "@/component/partner";


export default function Home() {
  return (
    <div className=" max-w-[1528px] w-full mx-auto">
      <Header />
      <NavBar />
      <Banner />
      <Deals />
      <Category />
      <Popular />
      <Partner/>
     

      
    </div>
  );
}
