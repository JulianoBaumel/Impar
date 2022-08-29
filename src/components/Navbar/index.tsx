import logo from "../../assets/logo-teste.svg";

export default function Navbar() {

  return (
    <nav className="
      antialiased
      z-10
      fixed
      bg-gradient-to-r 
      from-primaria
      to-secundaria
      shadow-navbar-shadow
      w-screen">
      <div className="
        max-w-8xl
        mx-auto
        px-6">
        <div className="
          relative 
          flex 
          items-center 
          h-16">
          <img src={logo}></img>
            <div className="
              font-muli 
              text-24 
            text-white
              font-semibold
              select-none">
                <span className="mr-2">Teste</span>
                <span className="font-light">Ímpar</span>
            </div>
        </div>
      </div>
    </nav>
  );
}