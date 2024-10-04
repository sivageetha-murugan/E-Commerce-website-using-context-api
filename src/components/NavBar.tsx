import { Link, Outlet } from "react-router-dom";
import { contextProvider } from "../context/AppContext";
import NavLink from "./NavLink";
import { useMemo } from "react";

function NavBar() {
  const { cartItems, categories } = contextProvider();

  const totalItems = useMemo(() => {
    const noOfItems = cartItems.length;
    return { noOfItems };
  }, [cartItems]);

  return (
    <>
      <nav className="h-20 w-full">
        <div className="flex">
          <div className="flex w-1/3 h-20 gap-x-6 justify-center items-center">
            {categories.map((element, index) => (
              <NavLink
              index={index}
                classList={"text-md font-light"}
                toLink={`/category/${element.name}`}
              >
                {element.name}
              </NavLink>
            ))}
          </div>
          <div className="flex w-1/3 h-20 items-center justify-center">
            <Link to="/Home">
              <div className="flex flex-col items-center justify-center">
                <div className="text-xl font-medium">BLINGG</div>
                <div className="text-xs font-thin">JEWELRY STORE</div>
              </div>
            </Link>
          </div>
          <div className="flex w-1/3 h-20 gap-x-6 justify-center items-center">
            {[{ name: "Home" }, { name: "About" }, { name: "Contact" }].map(
              (element, index) => (
                <NavLink index={index} classList={"text-md font-light"} toLink={element.name}>
                  {element.name}
                </NavLink>
              )
            )}
            <div className="flex gap-x-6 justify-center items-center relative inline-block">
              <div>
                <Link to="/Home">
                  <i className="bi bi-search"></i>
                </Link>
              </div>
              <div>
                <Link to="/Cart">
                  <i className="bi bi-cart"></i>
                </Link>
                {totalItems.noOfItems > 0 && (
                  <span className="absolute top-[-5px] right-[-10px] bg-red-600 text-white rounded-full text-xs px-[6px] py-[2px]">
                    {totalItems.noOfItems}
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
