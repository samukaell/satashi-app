"use client";
import { HeaderComponent } from "./styles";
//
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header(props: any) {
  const { setFichaOpen } = props;
  const [open, setOpen] = useState(false);
  let altura = "0px";
  if (open) {
    altura = "100vh";
  } else {
    altura = "40px";
  }
  //function
  function openMenu() {
    setOpen(!open);
    setFichaOpen(!open);
  }
  return (
    <HeaderComponent altura={altura}>
      {!open ? (
        <div className="circle">
          <IoChevronDownOutline className="icon" onClick={openMenu} />
        </div>
      ) : (
        <div className="circle-donw">
          <IoChevronUpOutline className="icon" onClick={openMenu} />
        </div>
      )}
    </HeaderComponent>
  );
}
