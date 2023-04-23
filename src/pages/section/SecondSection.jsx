import online from "../../assets/presencia.mp4";
function SecondSection() {
  return (
    <div className="container flex flex-row gap-14 pb-20">
      <div className="section-left flex flex-col items-start w-1/2 gap-8">
        <h1 className="font-semibold font-monserrat text-5xl text-black">Tu presencia online</h1>
        <video className="rounded-[30px] bg-none border-none w-full" src={online} autoPlay muted loop></video>
      </div>
      <div className="section-right w-1/2 pt-20 text-left flex flex-col gap-4">
        <h3 className="font-semibold text-5xl">
          <span className="text-black">Nuestra mision es</span><br />
          <span className="text-[#B7C0C0]"> ayudar a negocios y emprendedores</span>
        </h3>
        <span className="text-2xl text-[#707070]">
          a tener una presencia en linea exitosa y efectiva, proporcionando
          soluciones de diseño y desarrollo de sitios web personalizadas que
          sean atractivas, accesibles y funcionales
        </span>
        <a href="#" className="bg-black text-white w-40 flex items-center justify-center rounded-lg py-3 mt-5">SABER MÁS</a>
      </div>
    </div>
  );
}

export default SecondSection;
