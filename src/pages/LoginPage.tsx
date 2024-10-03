import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <form className="flex flex-col items-center mt-60">
        <div className="border rounded-md px-2 py-1 w-80">
          <label className="">Email id :</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="ml-3 outline-none"
          />
        </div>
        <div className="mt-4 border rounded-md px-2 py-1 w-80">
          <label className="">Password :</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="ml-3 outline-none"
          />
        </div>
        <div className="flex gap-20 mt-5">
          <div className="">
            <a href="#!">Forgot password?</a>
          </div>
          <div className="">
            <input className="" type="checkbox" />
            <label className=""> Remember me </label>
          </div>
        </div>
        <Button
          className="btn btn-primary btn-block mt-3"
          type="button"
          onClick={() => navigate("/Home")}
        >
          Sign in
        </Button>

        <div className="w-86 mt-3 flex gap-3">
          <p>
            Not a member? <a href="#!">Register</a>or sign up with :
          </p>
          <button>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className=""
          >
            <i className="fab fa-google"></i>
          </button>
          <button className="">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
