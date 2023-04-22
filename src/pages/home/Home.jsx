import item1 from "../../assets/items/item1.png";
import item2 from "../../assets/items/item2.png";
import item3 from "../../assets/items/item3.png";
import item4 from "../../assets/items/item4.png";
import triangle from "../../assets/triangle.svg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container flex flex-row m-auto justify-center items-start pt-32 pb-20 max-[768px]:flex-col">
        <div className="section-left text-left text-black w-1/2 flex flex-col gap-4 pt-2 max-[768px]:w-full  max-[768px]:pb-20">
          <span className="font-semibold font-monserrat text-xs">DESARROLLO DE SITIOS WEB</span>
          <h1 className="monserrat-title">
            Desarrollo de sitios web con confianza y facilidad
          </h1>
          <p className="text-[#747e83] text-xl">
            Consigue el sitio web que necesitas para alcanzar tus objetivos
            comerciales de forma sencilla, veloz y económica.
          </p>
          <a
            href="#"
            className="mt-10 text-semibold uppercase px-4 py-4 bg-black text-white w-56 flex items-center justify-center rounded-lg"
          >
            Agendar llamada
          </a>
        </div>
        <div className="section-right w-1/2 flex items-center justify-end max-[768px]:w-full max-[768px]:justify-center">
          <div className="grid grid-cols-2 items-center justify-center gap-4">
            <img className="m-0" width={270} src={item1} alt="" />
            <img className="m-0" width={270} src={item2} alt="" />
            <img className="m-0" width={270} src={item3} alt="" />
            <img className="m-0" width={270} src={item4} alt="" />
          </div>
        </div>
      </div>
      <div className="container text-center flex flex-col justify-center items-center gap-8 pb-32">
        <img src={triangle} width={80} alt="" />
        <h1 className="monserrat-title text-black text-5xl">
          Crea tu negocio en linea
        </h1>
        <p className="text-[#747e83] text-xl">
          Creamos un diseño personalizado único de las páginas y secciones <br />  de su
          sitio web principal, hecho para adaptarse a su negocio y contenido.<br />
          Trabajamos incansablemente con nuestros clientes hasta lograr el
          diseño ideal.
        </p>
      </div>
    </div>
  );
}

export default Home;
