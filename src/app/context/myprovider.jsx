"use client";
import { useState } from "react";
import { MyContext } from "./MyContext";

export default function MyProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setCategory] = useState("Burger");
  const [cart, setCart] = useState([]);
  return (
    <MyContext.Provider value={{ index, setIndex, selectedCategory, setCategory, cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
}