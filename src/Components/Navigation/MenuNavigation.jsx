import { NavLink } from "react-router-dom";
import { BiCookie } from "react-icons/bi";
import { GiPopcorn } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

function MenuNavigation() {
  return (
    <div className="dishes-row">
      <ul className="flex gap-6 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link__active" : "menu-link__not-active"
          }
          to="menu/jewelery"
        >
          <span>
            <GiPopcorn />
          </span>
          Popcorn
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link__active" : "menu-link__not-active"
          }
          to="menu/electronics"
        >
          <span>
            <BiDrink />
          </span>
          Chilled Drinks
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link__active" : "menu-link__not-active"
          }
          to="menu/men's clothing"
        >
          <span>
            <BiCookie />
          </span>
          Pastries
        </NavLink>
      </ul>
    </div>
  );
}

export default MenuNavigation;