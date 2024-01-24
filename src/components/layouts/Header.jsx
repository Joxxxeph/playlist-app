import { PlayListIcon } from "../icons/Svgs";

const Header = () => {
  return (
    <header className="bg-primary-dark flex items-center justify-between p-4 px-6 uppercase">
      <h1 className="font-semibold text-lg">Axl Music</h1>
      <div className="flex gap-4 ">
        <button className="uppercase p-2 px-4 font-semibold border border-secundary rounded-full text-xs bg-transparent hover:bg-primary-light transition-colors duration-300">My Account</button>
        <button className="flex gap-2 items-center uppercase p-2 px-4 font-semibold border border-secundary rounded-full text-xs hover:bg-primary-light transition-colors duration-300"> <PlayListIcon/> <span className="hidden sm:inline">Recording</span> 1 </button>
      </div>
    </header>
  );
};

export default Header;
