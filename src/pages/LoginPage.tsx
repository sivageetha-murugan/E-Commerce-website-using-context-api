import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="siva@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  className="btn btn-primary btn-block mt-3"
                  type="button"
                  onClick={() => navigate("/Home")}
                >
                  Sign in
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <form className="flex flex-col items-center mt-60">
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
      </form> */}
    </>
  );
}

export default LoginPage;
