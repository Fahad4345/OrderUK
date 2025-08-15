import React from "react";

import Header from "@/app/component/header";
import NavBar from "@/app/component/NavBar";
import SubNav from "@/app/component/reataurantDetailComponent/subNav";
import Footer from "@/app/component/footer";
import Maps from "@/app/component/reataurantDetailComponent/map";
import Deals from "@/app/component/reataurantDetailComponent/deal";
import Menu from "@/app/component/reataurantDetailComponent/menu";
import RestInfo from "@/app/component/reataurantDetailComponent/RestInfo";
import CustReview from "@/app/component/reataurantDetailComponent/custReview";
import SimilarRest from "@/app/component/reataurantDetailComponent/similarRest";
import Ordermenu from "@/app/component/orderComponent/Ordermenu";

export default function Order() {
  return (
    <div>
      <Header />
      <NavBar />
   
    
      <Ordermenu />
      <RestInfo />
      <Maps />
      <CustReview />
      <SimilarRest heading="Similar Restaurants" />
      <Footer />
    </div>
  );
}
