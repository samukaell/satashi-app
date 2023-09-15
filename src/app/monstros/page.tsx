"use client";
import Main from "./Main";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Monstros() {
  const [fichaOpen, setFichaOpen] = useState(false);
  return (
    <>
      <Header setFichaOpen={setFichaOpen} />
      <Main />
      {fichaOpen ? <></> : <Footer />}
    </>
  );
}
