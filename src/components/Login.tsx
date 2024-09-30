import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={() => navigate("/Home")}>Sign in</button>
  )
}

export default Login