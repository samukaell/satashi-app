//styles
import { MainComponent } from "./styles";
import Image from "next/image";
import logo from "../assets/logo branco-preto.png";
import logoDnd from "../assets/logo dnd branco.png";
import Link from "next/link";

export default function Home() {
  return (
    <MainComponent>
      <Link href={"/monstros"}>
        <Image src={logo} alt="logo Satashi" className="logo" />
      </Link>
      <Link href={"/info"}>
        <Image src={logoDnd} alt="logo Dnd" className="logo-dnd" />
      </Link>
    </MainComponent>
  );
}
