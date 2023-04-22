function Header() {
  return (
    <div className="flex w-full fixed top-0 right-0 h-10 items-center justify-center">
      <nav className="flex items-center w-full justify-between max-w-screen-xl m-auto py-7 px-8 bg-[#ffffffe3] backdrop-blur-sm">
        <div className="logo text-black font-bold gap-6 text-xl">
          <span>Nosth Web</span>
        </div>
        <div className="menu">
          <ul className="flex uppercase text-[#313b40] font-semibold gap-10 text-sm">
            <li>Servicios</li>
            <li>Acerca de</li>
            <li>Cotizar</li>
            <li>Contactar</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
