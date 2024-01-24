import { Link } from "react-router-dom";
import ContainerAuth from "../components/layouts/ContainerAuth";
import { axiosMusic } from "../utils/configAxios";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    axiosMusic
      .post('/api/auth/register', data)
      .then(({data}) => console.log(data))
      .catch((error) => console.log(error))

  }

  return (
    <ContainerAuth>
      <div className="hidden md:block">
        <img src="/images/register.jpg" alt="" className="" />
      </div>

      <form
      onSubmit={handleSubmit}
        className="[&>label]:grid [&>label]:gap-8 [&>label]:pt-3 grid gap-6
          w-[min(100%,300px)] mx-auto"
      >
        <h1 className="text-[1.65rem] uppercase text-center font-semibold">
          Create Account
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
          <span className="text-white/50 ">Username:</span>
          <input
            className="bg-transparent border-b border-secundary outline-none focus:border-[#886AE2] transition-all"
            type="text"
            name="name"
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
            Create
          </button>

          <Link to="/login" className="text-center underline">
            Sign-in
          </Link>
        </div>
      </form>
    </ContainerAuth>
  );
};

export default Register;
