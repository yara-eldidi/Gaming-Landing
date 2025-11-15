import { useState } from "react";
import logoImg from "../assets/img/logo.png";
import Limg from "../assets/img/League of Legends 18.svg";
import Vimg from "../assets/img/valorant-logo-FAB2CA0E55-seeklogo 2.svg";

function HeaderComp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="d-flex align-items-center justify-content-between">

        {/* LEFT LOGO */}
        <div className="d-flex align-items-center gap-2 ">
          <img src={logoImg} alt="TrackX Logo" />
          <h4 className="m-0 me-4">TRACKX</h4>
        </div>

        {/* HAMBURGER - mobile only */}
        <button className="mobile-btn d-lg-none" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* NAV */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <ul className="d-flex list-unstyled align-items-center m-0 flex-wrap">
            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">League Of Legend</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">Counter-Strike2</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Vimg} alt="" width="24px" height="24px" />
              <a href="#">Valorant</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">Team fight</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">Apex Legend</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">Destiny 2</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">Fortnite</a>
            </li>

            <li className="d-flex align-items-center gap-1">
              <img src={Limg} alt="" />
              <a href="#">Escape</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default HeaderComp;
