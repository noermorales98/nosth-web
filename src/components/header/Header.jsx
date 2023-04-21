function Header() {
  return (
    <div className="flex w-full bg-black fixed top-0 right-0">
      <nav className="flex items-center w-full justify-between">
        <div className="logo">
          <span>Nosth Web</span>
        </div>
        <div className="menu">
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
