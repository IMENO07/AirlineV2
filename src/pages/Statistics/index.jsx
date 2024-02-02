import React from "react";

import { default as Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

import { BarChartData } from "./chartData.js";

const StatisticsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto px-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between max-w-[1419px] mx-auto md:px-5 w-full">
          <div className="bg-blue_gray-900_d6 flex md:flex-1 flex-col items-center justify-start pb-0.5 pr-0.5 rounded-br-[30px] rounded-tr-[30px] w-[22%] md:w-full">
            <div className="bg-indigo-900_cc md:h-[129px] h-[310px] p-[84px] md:px-10 sm:px-5 relative rounded-tr-[30px] w-full">
              <div className="absolute h-[105px] left-[27%] lime_700_lime_700_35_border3 outline outline-[1.5px] rounded-[52px] top-[28%] w-[105px]"></div>
              <div className="absolute flex flex-col gap-[21px] h-max inset-y-[0] justify-start left-[27%] my-auto w-[38%]">
                <Img
                  className="h-[88px] md:h-auto md:ml-[0] ml-[7px] rounded-[50%] w-[78%]"
                  src="images/img_tlchargement1.png"
                  alt="tlchargementOne"
                />
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
                    <Img src="images/img_plane_logo.svg" alt="Vector" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Flights
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[88px] ml-2.5 md:ml-[0] mt-[27px]"
                onClick={() => navigate("/edit")}
                leftIcon={
                  <div className="mr-[23px] border-lime-700 border-2 border-solid">
                    <Img src="images/img_settings.svg" alt="settings" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                  Edit
                </div>
              </Button>
              <div className="flex flex-col items-center justify-start mt-[27px] w-full">
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[135px]"
                  leftIcon={
                    <Img src="images/img_statistic_logo.svg" alt="vector" />
                  }
                >
                  <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                    Statistics
                  </div>
                </Button>
              </div>
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
                        alt="settings"
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
                    alt="settings_One"
                  />
                </div>
                <Img
                  className="absolute h-12 right-[18%] rounded-[24px] top-[13%]"
                  src="images/img_settings_lime_700_48x69.svg"
                  alt="settings_Two"
                />
              </div>
              <Img
                className="absolute h-[54px] left-1/4 rounded-[27px] top-[5%]"
                src="images/img_vector6.svg"
                alt="vectorSix"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[68px] items-center justify-start w-[76%] md:w-full">
            <div className="md:gap-10 gap-[124px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[87%] md:w-full">
              <div className="bg-lime-700_c4 flex flex-col items-center justify-start mb-1 p-[22px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start mb-[9px] w-[99%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtInterMedium18"
                  >
                    First Class
                  </Text>
                  <div className="flex flex-row items-end justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      10%
                    </Text>
                    <Img
                      className="h-[15px] ml-[71px] mt-3.5"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] mt-3.5"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[5px] mt-3.5"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900_cc flex flex-col items-center justify-start mt-1 p-[15px] rounded-[20px] w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start mb-[7px] mt-[3px] w-[99%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtInterMedium18"
                  >
                    Business Class
                  </Text>
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[3px] w-[99%] md:w-full">
                    <Text
                      className="mb-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      20%
                    </Text>
                    <Img
                      className="h-[30px] mt-[9px]"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900_ed flex flex-col items-start justify-start my-0.5 p-[15px] rounded-[20px] w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start my-2 w-[94%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtInterMedium18"
                  >
                    Economy Class
                  </Text>
                  <div className="flex flex-row items-end justify-between ml-1 md:ml-[0] w-[98%] md:w-full">
                    <Text
                      className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      70%
                    </Text>
                    <Img
                      className="h-[25px] mt-[7px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700_77 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-2.5 rounded-[20px] shadow-bs w-[74%] md:w-full">
              <div className="flex flex-col gap-[21px] justify-start mb-2.5 md:ml-[0] ml-[30px] w-[88%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[267px] text-black-900 text-xl"
                  size="txtInterMedium20"
                >
                  Passengers Breakdown
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[25px]"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Text
                    className="ml-3 md:ml-[0] md:mt-0 mt-[3px] text-black-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Adults
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[21px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    65%
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[115px] md:mt-0 mt-0.5 text-black-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Kids
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    25%
                  </Text>
                  <Img
                    className="h-[25px] md:ml-[0] ml-[136px] md:mt-0 mt-0.5 w-[25px]"
                    src="images/img_settings_black_900.svg"
                    alt="settings_Three"
                  />
                  <Text
                    className="md:ml-[0] ml-[13px] md:mt-0 mt-[3px] text-black-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Babies
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    10%
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-[131px] p-5 rounded-[20px] w-[56%] md:w-full">
                <div className="flex flex-col gap-[45px] items-start justify-start mb-1.5 mt-[9px] w-[90%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-full">
                    <Input
                      name="datedebut"
                      placeholder="DD / MM / YY"
                      className="font-medium leading-[normal] p-0 placeholder:text-gray-500_d6 sm:pr-5 text-gray-500_d6 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:mt-0 mt-[3px] pl-[11px] pr-[35px] py-[5px] w-[31%] sm:w-full"
                    ></Input>
                    <Input
                      name="datefin"
                      placeholder="DD / MM / YY"
                      className="font-medium leading-[normal] p-0 placeholder:text-gray-500_d6 sm:pr-5 text-gray-500_d6 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:ml-[0] ml-[46px] sm:mt-0 mt-1 pl-[11px] pr-[35px] py-[5px] w-[31%] sm:w-full"
                    ></Input>
                    <Button
                      className="border border-black-900 border-solid cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[71px] sm:ml-[0] ml-[76px] rounded-[5px] text-[15px] text-center"
                      color="black_900"
                      size="xs"
                      variant="fill"
                    >
                      Search
                    </Button>
                  </div>
                  <div className="h-[315px] md:h-[undefinedpx] relative w-[94%] sm:w-full">
                    <Chart
                      width="100%"
                      height="100%"
                      chartType="ColumnChart"
                      data={BarChartData}
                      options={{ isStacked: false }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[20px] w-[42%] md:w-full">
                <div className="flex flex-col gap-[38px] items-center justify-start mb-[204px] mt-7 w-full">
                  <div className="flex flex-col gap-[13px] justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Input
                        name="datedebut_One"
                        placeholder="DD / MM / YY"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-500_d6 sm:pr-5 text-gray-500_d6 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100 border-solid pl-[11px] pr-[31px] py-1.5"
                      ></Input>
                      <Input
                        name="datefin_One"
                        placeholder="DD / MM / YY"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-500_d6 sm:pr-5 text-gray-500_d6 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100 border-solid pl-[11px] pr-[33px] py-1.5"
                      ></Input>
                      <Input
                        name="occupancy"
                        placeholder="occupancy"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-500_d6 text-gray-500_d6 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100 border-solid px-[11px] py-1.5"
                      ></Input>
                    </div>
                    <Button
                      className="border border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[273px] md:ml-[0] ml-[86px] mr-[67px] rounded-[5px] text-[15px] text-center"
                      color="black_900"
                      size="xs"
                      variant="fill"
                    >
                      Search
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[27px] items-start justify-start w-[79%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[90%] md:w-full">
                      <Text
                        className="mt-[3px] text-base text-black-900"
                        size="txtInterMedium16"
                      >
                        Filght Number{" "}
                      </Text>
                      <Text
                        className="mb-[3px] text-base text-black-900"
                        size="txtInterMedium16"
                      >
                        Occupancy
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] w-[99%] md:w-full">
                      <List
                        className="flex flex-col gap-7 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            Filght 100{" "}
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            40% occupancy
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            Filght 111{" "}
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            59% occupancy
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            Filght 210{" "}
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            67% occupancy
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            Filght 404{" "}
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16"
                          >
                            72% occupancy
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
