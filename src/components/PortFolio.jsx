import React from "react";
import java from "../../public/java.png";
import reactjs from "../../public/reactjs.png";
import springBoot from "../../public/springBoot.jpg";
import javascript from "../../public/javascript.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Hospital Managment System",
    },
    {
      id: 2,
      logo: reactjs,
      name: "TODO",
    },
    {
      id: 3,
      logo: springBoot,
      name: "Book Store Managment System",
    },
    {
      id: 4,
      logo: javascript,
      name: "Rock_paper_Scissor",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a
                  href="https://github.com/Vijay-Wagh123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
