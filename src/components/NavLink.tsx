import { Link } from "react-router-dom";
import { NavLinkProps } from "../type/Type";

function NavLink({className, toLink, children, index} : NavLinkProps) {
  return (
    <div key={`${index} ${children}`} className={`${className} uppercase`}>
      <Link to={`${toLink}`}>{children}</Link>
    </div>
  );
}

export default NavLink;
