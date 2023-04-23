import design from "../../assets/svg/design.svg";
import right from "../../assets/svg/right.svg";

function Services() {
  return (
    <div className="container flex flex-col">
      <div className="section-top text-left">
        <h1 className="font-semibold font-monserrat text-5xl text-black">
          Servicios
        </h1>
        <span className="text-2xl text-[#707070]">
          Ayudamos a llevar tu negocio al siguiente nivel
        </span>
      </div>
      <div className="section-buttom">
        <div className="cards grid grid-cols-4">
          <div className="card bg-slate-100 flex items-center justify-center flex-col">
            <img src={design} width={60} alt="" />
            <p className="font-semibold text-base">Diseños de <br /> sitios web <br /> personalizados</p>
            <div className="bg-[#3454d1]">
            <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
