import Image from "next/image";
import Header from "./component/header";
import NavBar from "@/app/component/NavBar";
import Banner1 from "@/app/component/banner1";
import Banner2 from "@/app/component/banner2";
import Deals from "@/app/component/deals";
import Category from "@/app/component/category";
import Popular from "@/app/component/popularRest";
import Partner from "@/app/component/partner";
import AboutUs from "@/app/component/aboutUs";
import CountBar from "@/app/component/countBar";
import Footer from "@/app/component/footer";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Header />
      <NavBar />
      <Banner1 />
      <Deals />
      <Category />
      <Popular heading="Popular Restaurants" />
      <Banner2 />
      <Partner />
      <AboutUs />
      <CountBar />
      <Footer />
    </div>
  );
}
