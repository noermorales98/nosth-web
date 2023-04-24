import design from "../../assets/svg/design.svg";
import radar from "../../assets/svg/radar.svg";
import refresh from "../../assets/svg/refresh.svg";
import code from "../../assets/svg/code.svg";
import React from "react";
function Cards() {
  return (
    <React.Fragment>
      <div className="card bg-white border-2 border-slate-300 flex gap-8 justify-between items-center flex-col rounded-xl py-8 hover:border-blue-500">
        <img src={design} width={60} className="pt-8" alt="" />
        <p className="font-semibold text-lg">
          Diseños de <br /> sitios web <br /> personalizados
        </p>
        <div className="cursor-pointer hover:bg-[#3454d1] fill-gray-600 hover:fill-white w-10 h-10 flex items-center justify-center rounded-[20px_20px_7px_7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </div>
      </div>
      <div className="card bg-white border-2 border-slate-300 flex gap-8 justify-between items-center flex-col rounded-xl py-8 hover:border-blue-500">
        <img src={code} width={60} className="pt-8" alt="" />
        <p className="font-semibold text-lg">
          Desarrollo de<br /> sitios web
        </p>
        <div className="cursor-pointer hover:bg-[#3454d1] fill-gray-600 hover:fill-white w-10 h-10 flex items-center justify-center rounded-[20px_20px_7px_7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </div>
      </div>
      <div className="card bg-white border-2 border-slate-300 flex gap-8 justify-between items-center flex-col rounded-xl py-8 hover:border-blue-500">
        <img src={radar} width={60} className="pt-8" alt="" />
        <p className="font-semibold text-lg">
          Optimización<br />para motores <br /> de búsqueda
        </p>
        <div className="cursor-pointer hover:bg-[#3454d1] fill-gray-600 hover:fill-white w-10 h-10 flex items-center justify-center rounded-[20px_20px_7px_7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </div>
      </div>
      <div className="card bg-white border-2 border-slate-300 flex gap-8 justify-between items-center flex-col rounded-xl py-8 hover:border-blue-500">
        <img src={refresh} width={60} className="pt-8" alt="" />
        <p className="font-semibold text-lg">
          Mantenimiento <br /> y actualización <br /> de sitios web
        </p>
        <div className="cursor-pointer hover:bg-[#3454d1] fill-gray-600 hover:fill-white w-10 h-10 flex items-center justify-center rounded-[20px_20px_7px_7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
