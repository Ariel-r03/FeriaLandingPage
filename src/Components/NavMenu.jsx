import React from "react";
import { MenuLinks } from "../cons";
import { useState } from "react";
import NavRender from "../Components/NavRender";
import { DiagramaContexto } from "../assets";
function NavMenu() {
  const [propMenu, setPropMenu] = useState({
    id: "D-Contexto",
    titulo: "Diagrama de contexto",
    imagen: DiagramaContexto,
  });
  return (
    <>
      <aside className="flex flex-row">
        <ul className="text-[#002261] bg-white w-[30%] rounded-2xl p-5 m-5 flex flex-col shadow-lg shadow-slate-500">
          {MenuLinks.map((menu) => (
            <li
            onClick={()=>{setPropMenu(menu)}}
              className="font-mono font-black hover:cursor-pointer hover:text-[#00d4ff] text-[20px] mb-5
            self-center"
            >
              {menu.titulo}
            </li>
          ))}
        </ul>

        <div className="w-[70%]">
          <NavRender props={propMenu} />
        </div>
      </aside>
    </>
  );
}

export default NavMenu;
