import { Carousel } from "flowbite-react";
import Header from "../components/Header";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const jsSkils = [
    "Node JS",
    "React JS",
    "Express JS",
    "React Vite",
    "Next JS",
    "Vue JS",
    "Nuxt JS",
    "Angular",
  ];
  const skill = [
    "HTML",
    "CSS",
    "Mysql",
    "Prisma",
    "TailwindCSS",
    "Material UI",
    "Ant Design",
    "Jest",
    "Vitest",
  ];
  const workExperience = [
    {
      status: "WORKING IN",
      companyName: "Indonesia Digital Ecosystem (INDICO)",
      date: "July 2023 - Present",
      desc: "Working as a Frontend Developer, working using the JavaScript programming language with the NextJS and React Vite frameworks",
    },
    {
      status: "WORKING IN",
      companyName: "Adyatma Cendekia Sinergi Abadi (ACSA)",
      date: "June 2022 - June 2024",
      desc: "Work as a Frontend Developer using JavaScript language and Nextjs Framework",
    },
    {
      status: "INTERNSHIP IN",
      companyName: "PT. Teknologi Otomatisasi Prima",
      date: "August 2020 - November 2020",
      desc: "Learn to build websites and build simple e-commerce websites using the PHP programming languageearn to build websites and build simple ecommerce websites",
    },
  ];

  const projectExperience = [
    {
      title: "CariParkir Mobile App",
      desc: "Mobile Application for searching and booking parking spaces in the Jakarta area",
      workAs: "Frontend Mobile Developer",
      company: "ACSA",
      stacked: ["Kotlin"],
    },
    {
      title: "CariParkir CMS Dashboard",
      desc: "Dashboard website to manage information systems and content in the CariParkir mobile application",
      workAs: "Frontend Developer",
      company: "ACSA",
      stacked: ["React JS", "TailwindCSS", "ANT Design"],
    },
    {
      title: "Garuda Eleven Game",
      desc: "Game website about football management which was built using the JavaScript programming language",
      workAs: "Frontend Developer",
      company: "ACSA",
      stacked: ["React JS", "TailwindCSS", "ANT Design"],
    },
    {
      title: "Ajari",
      desc: "Online learning website that provides video meet, private chat, and group chat features on 1 website",
      workAs: "Frontend Developer",
      company: "ACSA",
      stacked: ["Next JS", "TailwindCSS", "ANT Design"],
    },
    {
      title: "FDTech",
      desc: "Website profile landing page about crypto trading",
      workAs: "Frontend Developer",
      company: "ACSA",
      stacked: ["HTML", "TailwindCSS"],
    },
    {
      title: "TerusLaris",
      desc: "Ecommerce website for selling game vouchers",
      workAs: "Frontend Developer",
      company: "INDICO",
      stacked: ["Next JS", "Material UI", "Jest"],
    },
    {
      title: "DGW Dashboard",
      desc: "Dashboard management system for TerusLaris",
      workAs: "Frontend Developer",
      company: "INDICO",
      stacked: ["Next JS", "Material UI", "Jest"],
    },
    {
      title: "DFE Dashboard",
      desc: "Dashboad management system for dfe.farm",
      workAs: "Frontend Developer",
      company: "INDICO",
      stacked: ["React Vite", "Material UI", "Vitest"],
    },
    {
      title: "Adain Acara Website",
      desc: "Website providing event organizers",
      workAs: "Frontend Developer",
      company: "INDICO",
      stacked: ["Next JS", "TailwindCSS", "Pusher"],
    },
    {
      title: "Adain Acara Dashboard",
      desc: "Dashboard management system for Adain Acara Website",
      workAs: "Frontend Developer",
      company: "INDICO",
      stacked: ["Next JS", "TailwindCSS", "Pusher"],
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full lg:w-3/4 mx-auto h-screen flex justify-center items-start flex-col text-center px-6 lg:px-0">
        <p className="text-xs lg:text-sm text-primary-color font-medium">
          Hello, my name is
        </p>
        <h1 className="text-3xl text-start lg:text-6xl font-extrabold text-primary-white mt-3">
          Muhammad Zainuddin Basyar
        </h1>
        <h2 className="text-2xl lg:text-5xl font-extrabold text-secondary-white mb-2 lg:mb-4">
          Frontend Developer
        </h2>
        <p className="text-xs lg:text-base text-start w-[90%] lg:w-[70%] text-secondary-white font-medium">
          I have approximately two years of experience in the field of web
          programming with expertise in the JavaScript programming language
        </p>
      </div>
      <div className="w-full lg:w-3/4 h-screen lg:px-2 mx-auto flex flex-col justify-center items-start px-6">
        <div className="relative">
          <h1 className="text-xl lg:text-2xl font-bold text-primary-white">
            <span className="text-primary-color">01.</span> About Me
          </h1>
          <div className="absolute top-1/2 bottom-1/2 -translate-y-1/2 -right-[250px] lg:-right-[320px] border-b w-[240px] lg:w-[300px] border-primary-white"></div>
        </div>
        <div className="w-full lg:w-2/4 mt-4">
          <p className="text-secondary-white text-xs lg:text-sm">
            I am a web developer with experience for approximately 2 years.
            Experienced using the JavaScript programming language. I also have
            an interest in graphic design which is why I prefer to become a
            frontend developer
          </p>
          <p className="text-secondary-white text-xs lg:text-sm my-2 lg:my-4">
            I have experience in 2 companies and have some freelance experience
            that I have done while I was in the programming field
          </p>
          <p className="text-secondary-white text-xs lg:text-sm">
            As a basic programming language, namely JavaScript, I use several
            JavaScript frameworks
          </p>
          <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-y-2 my-4">
            {jsSkils.map((result) => (
              <p
                key={result}
                className="text-primary-white  text-xs lg:text-sm flex items-center gap-2"
              >
                <span className="text-primary-color text-xs">&gt;</span>{" "}
                {result}
              </p>
            ))}
          </div>
          <p className="text-secondary-white text-xs lg:text-sm">
            and I also use
          </p>
          <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-y-2 my-4">
            {skill.map((result) => (
              <p
                key={result}
                className="text-primary-white  text-xs lg:text-sm flex items-center gap-2"
              >
                <span className="text-primary-color text-xs">&gt;</span>{" "}
                {result}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-screen px-6 lg:px-0">
        <div className="h-full lg:w-2/4 mx-auto flex justify-center flex-col items-center">
          <div className="w-full relative">
            <h1 className="text-xl lg:text-2xl font-bold text-primary-white">
              <span className="text-primary-color">02.</span>Work Experience
            </h1>
            <div className="absolute w-[160px] lg:w-[400px] border-b -top-1/2 -bottom-1/2 -translate-y-1/2 right-0 lg:right-1 border-secondary-white"></div>
          </div>
          <div className="w-full h-80 sm:h-64 xl:h-80 2xl:h-96 mt-4">
            <Carousel
              slideInterval={1500}
              indicators={false}
              leftControl={
                <div className="text-secondary-white hover:text-primary-white duration-200">
                  <ArrowBackIosNewIcon
                    sx={{
                      fontSize: "30px",
                      height: "40px",
                    }}
                  />
                </div>
              }
              rightControl={
                <div className="text-secondary-white hover:text-primary-white duration-200 rotate-180">
                  <ArrowBackIosNewIcon
                    sx={{
                      fontSize: "30px",
                      height: "40px",
                    }}
                  />
                </div>
              }
            >
              {workExperience.map((result) => (
                <div
                  key={result.companyName}
                  className="flex flex-col justify-center items-center w-[85%]"
                >
                  <p className="text-secondary-white text-xs lg:text-sm font-semibold">
                    {result.status}
                  </p>
                  <h1 className="text-base lg:text-2xl font-bold text-primary-color my-2 text-center">
                    {result.companyName}
                  </h1>
                  <p className="text-[10px] lg:text-xs text-primary-white">
                    {result.date}
                  </p>
                  <p className="text-primary-white text-center w-[90%] mt-10 text-xs lg:text-sm">
                    {result.desc}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mt-10 mx-auto pb-10 px-6 lg:px-0">
          <div className="w-full lg:w-3/4 mx-auto flex justify-between">
            <div className="w-1/4 border-r border-secondary-white relative">
              <div className="absolute -top-1/2 -bottom-1/2 -translate-y-1/2 border-b w-[110px] lg:w-[200px] right-0"></div>
            </div>
            <div className="w-2/4 py-2">
              <h1 className="text-xl lg:text-2xl font-bold text-primary-white text-center">
                <span className="text-primary-color">03.</span> Work Experience
              </h1>
            </div>
            <div className="w-1/4 border-l border-secondary-white relative">
              <div className="absolute -top-1/2 -bottom-1/2 -translate-y-1/2 border-b w-[110px] lg:w-[200px] left-0"></div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projectExperience.map((result) => (
              <Card
                key={result.title}
                title={result.title}
                desc={result.desc}
                workAs={result.workAs}
                company={result.company}
                stacked={result.stacked}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/4 mx-auto flex flex-col justify-center items-center h-screen relative px-6 lg:px-0">
          <h1 className="text-xl lg:text-2xl font-bold text-primary-white">
            <span className="text-primary-color">04.</span> Contact Me
          </h1>
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="xl:text-xl lg:text-2xl font-bold text-primary-white my-4 text-center">
              Need of a Developer?{" "}
              <span className="text-primary-color">Contact me</span>
            </h1>
            <p className="w-3/4 mx-auto text-xs lg:text-sm text-secondary-white text-center">
              Contact me when you need a frontend developer I can work in long
              contracts or fast work. Click the button below to redirect to
              Gmail
            </p>
            <Link
              to={
                "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLWQTBwwFpRvhJddmlkpLslRbFkPcwqhtsxQCZQjRsJpHtqwkJRvlltQMVbrSjWjdfzbSrl"
              }
              target="_blank"
            >
              <button className="mt-8 border px-16 py-2 hover:bg-primary-color text-sm duration-200 text-primary-white hover:text-primary-dark hover:border-primary-dark font-medium">
                Mail Me
              </button>
            </Link>
          </div>
          <div className="w-full flex justify-center absolute bottom-0 py-4 underline underline-offset-4">
            <Link
              to={"https://www.linkedin.com/in/muhammad-zainuddin-basyar/"}
              className="text-primary-white text-sm"
            >
              Muhammad Zainuddin Basyar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
