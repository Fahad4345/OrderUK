"use client";
import { useState } from "react";
import { MyContext } from "./MyContext";

export default function MyProvider({ children }) {
  const [Restname, setRestname] = useState("");
  return (
    <MyContext.Provider value={{ Restname, setRestname }}>
      {children}
    </MyContext.Provider>
  );
}