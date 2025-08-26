"use client";
import { useState, useEffect } from "react";
import { MyContext } from "./MyContext";

export default function MyProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setCategory] = useState("Burger");
  const [cart, setCart] = useState([]);
  const [popopen, setpopopen] = useState(false)

  useEffect(() => {

    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  return (
    <MyContext.Provider value={{ index, setIndex, selectedCategory, setCategory, cart, setCart, popopen, setpopopen }}>
      {children}
    </MyContext.Provider>
  );
}