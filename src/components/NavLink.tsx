import { Link } from "react-router-dom";

function NavLink(props: {classList: string, toLink: string, children: string}) {
  return (
    <div className={`${props.classList} uppercase`}>
      <Link to={`${props.toLink}`}>{props.children}</Link>
    </div>
  );
}

export default NavLink;
