import logo from "../../assets/logo-teste.svg";

function Navbar() {

  return (
    <nav className="fixed bg-gradient-to-r from-primaria to-secundaria shadow-3xl w-screen">
      <div className="max-w-8xl mx-auto px-6">
        <div className="relative flex items-center h-16">
          <img className="font-muli" src={logo}></img>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;