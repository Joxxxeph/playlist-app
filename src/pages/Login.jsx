import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layouts/ContainerAuth";

import { loginMiddleware } from "../store/slices/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {

  const dispatch= useDispatch();

  const navigate = useNavigate();

  const token = useSelector((store) => store.user.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(loginMiddleware(data));
  };

  useEffect(() => {
    if (token !== '') {
      navigate('/')
    }
  }, [token]);
  

  return (
    <ContainerAuth>
      <div className="hidden md:block max-w-[400px] bg-center">
        <img src="/images/login.jpg" alt="" className="" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="[&>label]:grid [&>label]:gap-8 [&>label]:pt-3 grid gap-6
          w-[min(100%,300px)] mx-auto items-center"
      >
        <h1 className="text-[1.65rem] uppercase font-semibold text-center">
          Sign In
        </h1>

        <label>
          <span className="text-white/50 ">Email:</span>
          <input
            className="bg-transparent border-b border-secundary outline-none focus:border-[#886AE2] transition-all"
            type="email"
            name="email"
          />
        </label>

        <label>
          <span className="text-white/50 ">Password:</span>
          <input
            className="bg-transparent border-b border-secundary outline-none focus:border-[#886AE2] transition-all"
            type="password"
            name="password"
          />
        </label>

        <div className="grid gap-6 pt-8">
          <button
            type="submit"
            className="shadow-md shadow-[#886AE2] bg-primary-light rounded-full
            py-1 px-8 max-w-max uppercase text-sm font-semibold mx-auto"
          >
            Login
          </button>

          <Link to="/register" className="text-center underline">
            Create Account
          </Link>
        </div>
      </form>
    </ContainerAuth>
  );
};

export default Login;
