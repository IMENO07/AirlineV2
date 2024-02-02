import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const EditPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto px-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between max-w-[1406px] mx-auto md:px-5 w-full">
          <div className="bg-blue_gray-900_d6 flex md:flex-1 flex-col items-center justify-start pb-0.5 pr-0.5 rounded-br-[30px] rounded-tr-[30px] w-[23%] md:w-full">
            <div className="bg-indigo-900_cc flex flex-col items-start justify-end p-[84px] md:px-10 sm:px-5 rounded-tr-[30px] w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start mt-0.5 w-[83%] md:w-full">
                <div className="flex flex-col h-[105px] items-center justify-start lime_700_lime_700_35_border outline outline-[1.5px] p-[7px] rounded-[52px] w-[105px]">
                  <Img
                    className="h-[88px] md:h-auto rounded-[50%] w-[99%]"
                    src="images/img_tlchargement1.png"
                    alt="tlchargementOne"
                  />
                </div>
                <Text
                  className="text-base text-white-A700"
                  size="txtInterSemiBold16"
                >
                  Administrateur
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[27px] w-[44%] md:w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[103px] ml-2.5 md:ml-[0]"
                onClick={() => navigate("/")}
                leftIcon={
                  <div className="mb-px mr-[26px] w-[26px] border-lime-700 border-2 border-solid">
                    <Img src="images/img_home.svg" alt="home" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Home{" "}
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[110px] ml-2.5 md:ml-[0] mt-[26px]"
                onClick={() => navigate("/flights")}
                leftIcon={
                  <div className="mr-[21px] border-lime-700 border-2 border-solid">
                    <Img src="images/img_plane_logo.svg" alt="plane logo" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Flights
                </div>
              </Button>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[88px] mt-[27px]"
                leftIcon={<Img src="images/img_settings.svg" alt="settings" />}
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Edit
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[135px] ml-2.5 md:ml-[0] mt-[27px]"
                onClick={() => navigate("/statistics")}
                leftIcon={
                  <div className="mr-[22px] border-lime-700 border-2 border-solid">
                    <Img
                      src="images/img_statistic_logo.svg"
                      alt="statistic logo"
                    />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Statistics
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[113px] ml-2.5 md:ml-[0] mt-[37px]"
                onClick={() => navigate("/login")}
                leftIcon={
                  <div className="mb-0.5 mr-[21px] border-lime-700 border-2 border-solid">
                    <Img src="images/img_television.svg" alt="television" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Logout
                </div>
              </Button>
            </div>
            <div className="h-[146px] md:h-[438px] mb-[82px] mt-[210px] relative w-[83%]">
              <div className="h-[146px] m-auto w-full">
                <div className="h-[146px] m-auto w-full">
                  <div className="h-[146px] m-auto w-full">
                    <Img
                      className="h-[146px] m-auto object-cover rounded-[1px] w-full"
                      src="images/img_rectangle4.png"
                      alt="rectangleFour"
                    />
                    <div className="absolute flex flex-col justify-start left-[26%] top-[16%] w-2/5">
                      <Img
                        className="h-[39px] rounded-bl-[19px] rounded-br-[19px]"
                        src="images/img_settings_lime_700.svg"
                        alt="settings_One"
                      />
                      <Img
                        className="h-[52px] md:ml-[0] ml-[18px] rounded-[25px] w-[51px]"
                        src="images/img_vector3.svg"
                        alt="vectorThree"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[21%] h-[62px] right-[15%] rounded-[50%] w-[30%]"
                    src="images/img_settings_lime_700_62x75.svg"
                    alt="settings_Two"
                  />
                </div>
                <Img
                  className="absolute h-12 right-[18%] rounded-[24px] top-[13%]"
                  src="images/img_settings_lime_700_48x69.svg"
                  alt="settings_Three"
                />
              </div>
              <Img
                className="absolute h-[54px] left-1/4 rounded-[27px] top-[5%]"
                src="images/img_vector6.svg"
                alt="vectorSix"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[106px] w-[78%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[67%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterSemiBold24"
              >
                Add category
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterSemiBold24"
              >
                Class management
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between md:ml-[0] ml-[31px] mt-1.5 w-[98%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-7 sm:px-5 rounded-[15px] shadow-bs w-[42%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[31px] mt-[3px] w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Category name{" "}
                  </Text>
                  <Input
                    name="language_One"
                    placeholder="Enter category name ... "
                    className="!placeholder:text-gray-400 !text-gray-400 font-medium leading-[normal] p-0 text-left text-xs w-full"
                    wrapClassName="ml-2.5 md:ml-[0] mt-[13px] w-[62%]"
                    type="text"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <div className="flex flex-row items-end justify-between md:ml-[0] ml-[5px] mt-0.5 w-[99%] md:w-full">
                    <Text
                      className="mt-[22px] text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      category offer
                    </Text>
                    <Button className="bg-black-900 cursor-pointer font-semibold leading-[normal] mb-1 min-w-[89px] pb-[7px] pt-2.5 rounded-[10px] text-center text-white-A700 text-xs">
                      Add category
                    </Button>
                  </div>
                  <Input
                    name="catoffertextfie"
                    placeholder="Enter category offer ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="md:ml-[0] ml-[15px] mt-2 w-[62%]"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[25px] sm:px-5 rounded-[15px] shadow-bs w-[55%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-8 ml-1.5 md:ml-[0] w-[90%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-[77%] md:w-full">
                    <Text
                      className="mt-[5px] text-[13px] text-black-900"
                      size="txtInterMedium13"
                    >
                      Class Type
                    </Text>
                    <Text
                      className="mb-[5px] text-[13px] text-black-900"
                      size="txtInterMedium13"
                    >
                      Class Price (DA)
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[21px] w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      First Class
                    </Text>
                    <Input
                      name="zipcode"
                      placeholder="500000"
                      className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-[13px] text-black-900 text-left w-full"
                      wrapClassName="sm:flex-1 sm:ml-[0] ml-[183px] w-[11%] sm:w-full"
                    ></Input>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[47px] ml-28 sm:ml-[0] text-center text-xs"
                      shape="round"
                      color="black_900"
                      size="xs"
                      variant="fill"
                    >
                      Save
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-[82%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-2.5 w-full">
                    <Text
                      className="sm:mt-0 mt-1 text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Business Class
                    </Text>
                    <Input
                      name="zipcode_One"
                      placeholder="410000"
                      className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-[13px] text-black-900 text-left w-full"
                      wrapClassName="sm:flex-1 sm:ml-[0] ml-[153px] sm:mt-0 mt-0.5 w-[11%] sm:w-full"
                    ></Input>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[47px] sm:ml-[0] ml-[114px] text-center text-xs"
                      shape="round"
                      color="black_900"
                      size="xs"
                      variant="fill"
                    >
                      Save
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-[82%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-2.5 w-full">
                    <Text
                      className="sm:mt-0 mt-1 text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Economy Class
                    </Text>
                    <Input
                      name="zipcode_Two"
                      placeholder="200000"
                      className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-[13px] text-black-900 text-left w-full"
                      wrapClassName="sm:flex-1 sm:ml-[0] ml-[151px] sm:mt-0 mt-1 w-[11%] sm:w-full"
                    ></Input>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[47px] sm:ml-[0] ml-[113px] text-center text-xs"
                      shape="round"
                      color="black_900"
                      size="xs"
                      variant="fill"
                    >
                      Save
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-100 h-px mt-1 w-[82%]" />
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[167px] mt-[97px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              Add a plane
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-48 md:ml-[0] mr-[302px] mt-1.5 p-8 sm:px-5 rounded-[15px] shadow-bs w-[55%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[19px] mt-1.5 w-[99%] md:w-full">
                <div className="flex flex-row items-start justify-between md:ml-[0] ml-[5px] w-[74%] md:w-full">
                  <Text
                    className="mt-[3px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Category name{" "}
                  </Text>
                  <Text
                    className="mb-[3px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Plane Capacity
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-12 items-center justify-between mt-[7px] w-full">
                  <Input
                    name="language_Three"
                    placeholder="category name ... "
                    className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-medium leading-[normal] p-0 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    type="text"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="planecapacityte"
                    placeholder="Plane Capacity ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-row items-start justify-between ml-2 md:ml-[0] mt-[13px] w-[82%] md:w-full">
                  <Text
                    className="mt-[3px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    First Class Capacity
                  </Text>
                  <Text
                    className="mb-[3px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Business Class Capacity
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-12 items-center justify-between mt-3.5 w-full">
                  <Input
                    name="firstclasscapac_Three"
                    placeholder="First Class Capacity ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="businessclassca_Three"
                    placeholder="Business Class Capacity ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
                <Text
                  className="ml-1.5 md:ml-[0] mt-[17px] text-black-900 text-xs"
                  size="txtInterMedium12"
                >
                  Economy Class Capacity
                </Text>
                <div className="flex flex-row items-start justify-between mt-3.5 w-[87%] md:w-full">
                  <Input
                    name="economyclasscap_Three"
                    placeholder="Economy Class Capacity ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName=""
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[89px] text-center text-xs"
                    shape="round"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  >
                    Add plane
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
