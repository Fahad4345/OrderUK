import Image from "next/image";
import Header from "../component/header";
import NavBar from "@/component/NavBar";
import Banner1 from "@/component/banner1";
import Banner2 from "@/component/banner2";
import Deals from "@/component/deals";
import Category from "@/component/category";
import Popular from "@/component/popularRest";
import Partner from "@/component/partner";
import AboutUs from "@/component/aboutUs";
import CountBar from "@/component/countBar";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div className=" max-w-[1528px] w-full mx-auto">
      <Header />
      <NavBar />
      <Banner1 />
      <Deals />
      <Category />
      <Popular />
      <Banner2 />
      <Partner />
      <AboutUs />
      <CountBar />
      <Footer/>
    </div>
  );
}
