import { Link, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import NavLink from "./NavLink";
import { useMemo } from "react";
import { CARTPATH, HOMEPATH } from "../utils/constants";
import { navBarList } from "../data/ProductData";

function NavBar() {
  const { state } = useAppContext();

  const totalItems = useMemo(() => {
    const noOfItems = state.cartItems.length;
    return noOfItems;
  }, [state.cartItems]);

  return (
    <>
      <nav className="h-20 w-full">
        <div className="flex">
          <div className="flex w-1/3 h-20 gap-x-6 justify-center items-center">
            {state.categories.map((element, index) => (
              <NavLink
                index={index}
                className={"text-md font-light"}
                toLink={`/category/${element.name}`}
              >
                {element.name}
              </NavLink>
            ))}
          </div>
          <div className="flex w-1/3 h-20 items-center justify-center">
            <Link to={HOMEPATH}>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xl font-medium">BLINGG</div>
                <div className="text-xs font-thin">JEWELRY STORE</div>
              </div>
            </Link>
          </div>
          <div className="flex w-1/3 h-20 gap-x-6 justify-center items-center">
            {navBarList.map((element, index) => (
              <NavLink
                index={index}
                className={"text-md font-light"}
                toLink={element.name}
              >
                {element.name}
              </NavLink>
            ))}
            <div className="flex gap-x-6 justify-center items-center relative inline-block">
              <div>
                <Link to={HOMEPATH}>
                  <i className="bi bi-search"></i>
                </Link>
              </div>
              <div>
                <Link to={CARTPATH}>
                  <i className="bi bi-cart"></i>
                </Link>
                {totalItems > 0 && (
                  <span className="absolute top-[-5px] right-[-10px] bg-red-600 text-white rounded-full text-xs px-[6px] py-[2px]">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
