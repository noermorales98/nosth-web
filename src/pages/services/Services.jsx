import Cards from "./Cards";

function Services() {
  return (
    <div className="container flex flex-col">
      <div className="section-top text-left flex flex-col gap-2">
        <h1 className="font-semibold font-monserrat text-5xl text-black">
          Servicios
        </h1>
        <span className="text-2xl text-[#707070]">
          Ayudamos a llevar tu negocio al siguiente nivel
        </span>
      </div>
      <div className="section-buttom">
        <div className="cards grid grid-cols-4 gap-4 py-20">
          <Cards/>
        </div>
      </div>
    </div>
  );
}

export default Services;
