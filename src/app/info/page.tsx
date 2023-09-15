import Link from "next/link";
import { InfoComponent } from "./styles";
import Image from "next/image";
import logo from "../../assets/logo vermelho-branco.png";

export default function Info() {
  return (
    <InfoComponent>
      <div className="box-text">
        <p>Esta aplicação é um projeto pessoal sem nenhum fim lucrativo.</p>
        <p>
          O app é uma ficha dinâmica de um personagem de RPG no sistema D&D 3.5.
        </p>
        <p>
          O personagem em questão se chama Satashi e como um metamorfo possui
          uma dinâmica de transformações que precisão ser gerenciada com devido
          cuidado, por isso esta aplicação foi desenvolvida.
        </p>
      </div>
      <Link href={"/"}>
        <Image src={logo} alt="logo Satashi" className="logo" />
      </Link>
    </InfoComponent>
  );
}
