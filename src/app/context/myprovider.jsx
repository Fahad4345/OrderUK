"use client";
import { useState } from "react";
import { MyContext } from "./MyContext";

export default function MyProvider({ children }) {
  const [index, setIndex] = useState(0);
  return (
    <MyContext.Provider value={{ index, setIndex }}>
      {children}
    </MyContext.Provider>
  );
}