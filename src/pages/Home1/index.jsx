import React from "react";

import { useNavigate } from "react-router-dom";

import { Img } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto p-3.5 w-full">
        <Img
          className="common-pointer h-[59px] md:h-auto mb-[936px] object-cover w-[5%]"
          src="images/img_logo1.png"
          alt="logoOne"
          onClick={() => navigate("/login")}
        />
      </div>
    </>
  );
};

export default Home1Page;
