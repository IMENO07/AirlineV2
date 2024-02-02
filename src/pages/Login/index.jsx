import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[156px] justify-start mx-auto p-3.5 w-full">
        <Img
          className="common-pointer h-[59px] md:h-auto object-cover w-[5%]"
          src="images/img_logo1.png"
          alt="logoOne"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-col items-center mb-[216px] mr-[210px] pl-[211px] md:px-5 w-[86%] md:w-full">
          <div className="h-[564px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col gap-[17px] h-max inset-[0] justify-center m-auto p-[82px] md:px-10 sm:px-5 rounded-[15px] shadow-bs w-full">
              <Text
                className="md:ml-[0] ml-[491px] mr-[230px] mt-8 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterMedium24"
              >
                Welcome{" "}
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[507px] mr-2 w-[38%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-base text-black-900"
                  size="txtInterMedium16"
                >
                  please enter your informations to sign in
                </Text>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-[62px] w-[61%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    User Name{" "}
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[98%] md:w-full">
                    <Input
                      name="enetryouruser"
                      placeholder="Enetr your user name ..."
                      className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-100 text-[15px] text-blue_gray-100 text-left w-full"
                      wrapClassName="w-[93%]"
                    ></Input>
                    <Line className="bg-blue_gray-100 h-px mt-1 w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-[31px] w-[61%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterMedium16"
                  >
                    Password
                  </Text>
                  <Input
                    name="groupTen"
                    placeholder="Enter the password ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-100 text-[15px] text-left w-full"
                    wrapClassName="md:ml-[0] ml-[5px] w-[98%]"
                    type="password"
                    color="blue_gray_100"
                    size="xs"
                    variant="underline"
                  ></Input>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[77px] md:ml-[0] ml-[72px] mt-[47px] rounded-[15px] text-base text-center"
                  onClick={() => navigate("/statistics")}
                  color="black_900"
                  size="xs"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[49%]">
              <Img
                className="h-[564px] md:h-auto object-cover rounded-bl-[15px] w-full"
                src="images/img_rectangle24.png"
                alt="rectangleTwentyFour"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
