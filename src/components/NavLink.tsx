import { Link } from "react-router-dom";

function NavLink(props: {classList: string, toLink: string, children: string, index: number}) {
  return (
    <div key={`${props.index} ${props.children}`} className={`${props.classList} uppercase`}>
      <Link to={`${props.toLink}`}>{props.children}</Link>
    </div>
  );
}

export default NavLink;
