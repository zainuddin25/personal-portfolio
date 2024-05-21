import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary-dark text-secondary-white fixed w-screen top-0 z-50">
      <div className="flex justify-between items-center container mx-auto py-6 px-6 lg:px-2 bg-primary-dark">
        <h1 className="text-xl lg:text-2xl font-bold text-primary-color">
          MuhZaan
        </h1>
        <div className="hidden lg:flex justify-end items-center gap-6">
          <Link to={"#about"} className="text-xs group font-medium">
            <span className="text-primary-color">01.</span>{" "}
            <span className="group-hover:text-primary-color duration-200">
              About Me
            </span>
          </Link>
          <Link to={"#about"} className="text-xs group font-medium">
            <span className="text-primary-color">02.</span>{" "}
            <span className="group-hover:text-primary-color duration-200">
              Work Experience
            </span>
          </Link>
          <Link to={"#about"} className="text-xs group font-medium">
            <span className="text-primary-color">03.</span>{" "}
            <span className="group-hover:text-primary-color duration-200">
              Project Experience
            </span>
          </Link>
          <Link to={"#about"} className="text-xs group font-medium">
            <span className="text-primary-color">04.</span>{" "}
            <span className="group-hover:text-primary-color duration-200">
              Contact Me
            </span>
          </Link>
          <button className="text-primary-color border border-secondary-white text-xs px-8 py-2 font-medium hover:bg-primary-color hover:text-primary-dark hover:border-primary-dark duration-200">
            Download My CV
          </button>
          <button className="text-primary-color border border-secondary-white text-xs px-8 py-2 bg-[#112240] font-medium hover:bg-primary-color hover:text-primary-dark hover:border-primary-dark duration-200">
            Mail Me
          </button>
        </div>
        {/* <div className="fixed top-0 w-screen h-screen bg-primary-dark flex justify-center items-center lg:hidden"></div> */}
      </div>
    </div>
  );
};

export default Header;
