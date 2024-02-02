import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, ReactTable, Text } from "components";

const FlightsPage = () => {
  const tableData = React.useRef([
    {
      flightnumber: "127",
      flightairplane: "Boeing 810",
      departure: "Alger",
      arrival: "Suisse",
      departuredate: "17/04/2024",
      departuretime: "01:00 AM",
    },
    {
      flightnumber: "511",
      flightairplane: "Boeing 174",
      departure: "Alger",
      arrival: "Meca",
      departuredate: "08/10/2024",
      departuretime: "22:10 PM",
    },
    {
      flightnumber: "127",
      flightairplane: "Boeing 810",
      departure: "Alger",
      arrival: "Suisse",
      departuredate: "17/04/2024",
      departuretime: "01:00 AM",
    },
    {
      flightnumber: "511",
      flightairplane: "Boeing 174",
      departure: "Alger",
      arrival: "Meca",
      departuredate: "08/10/2024",
      departuretime: "22:10 PM",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("flightnumber", {
        cell: (info) => (
          <Text
            className="pb-[26px] pl-3 pt-[29px] text-black-900 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[145px] text-[13px] text-black-900"
            size="txtInterMedium13"
          >
            Flight Number
          </Text>
        ),
      }),
      tableColumnHelper.accessor("flightairplane", {
        cell: (info) => (
          <Text
            className="pl-[11px] py-[27px] text-black-900 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[134px] text-[13px] text-black-900"
            size="txtInterMedium13"
          >
            Flight Airplane
          </Text>
        ),
      }),
      tableColumnHelper.accessor("departure", {
        cell: (info) => (
          <Text
            className="py-[27px] text-black-900 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[138px] text-[13px] text-black-900"
            size="txtInterMedium13"
          >
            Departure
          </Text>
        ),
      }),
      tableColumnHelper.accessor("arrival", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[23px] text-black-900 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[129px] pl-[7px] text-[13px] text-black-900"
            size="txtInterMedium13"
          >
            Arrival
          </Text>
        ),
      }),
      tableColumnHelper.accessor("departuredate", {
        cell: (info) => (
          <Text
            className="pb-[31px] pl-2 pt-6 text-black-900 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[154px] text-[13px] text-black-900"
            size="txtInterMedium13"
          >
            Departure Date
          </Text>
        ),
      }),
      tableColumnHelper.accessor("departuretime", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[23px] text-black-900 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[98px] text-[13px] text-black-900"
            size="txtInterMedium13"
          >
            Departure Time
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-end mx-auto px-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-start md:px-5 w-[93%] md:w-full">
          <div className="bg-blue_gray-900_d6 flex flex-col items-center justify-start pb-0.5 pr-0.5 rounded-br-[30px] rounded-tr-[30px] w-[24%] md:w-full">
            <div className="bg-indigo-900_cc flex flex-col items-start justify-end p-[84px] md:px-10 sm:px-5 rounded-tr-[30px] w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start mt-0.5 w-[83%] md:w-full">
                <div className="flex flex-col h-[105px] items-center justify-start lime_700_lime_700_35_border2 outline outline-[1.5px] p-[7px] rounded-[52px] w-[105px]">
                  <Img
                    className="h-[88px] md:h-auto rounded-[50%] w-[99%]"
                    src="images/img_tlchargement1.png"
                    alt="adminpicture"
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
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[110px] mt-[26px]"
                leftIcon={
                  <Img src="images/img_plane_logo.svg" alt="planelogo" />
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
          <div className="flex flex-col items-start justify-start md:mt-0 mt-[81px] w-[74%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              Flights List
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[29px] mt-[35px] p-4 rounded-[15px] shadow-bs w-[98%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[99px] md:ml-[0] ml-[26px] w-[87%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="md:mt-0 mt-2 text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      218
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[7px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Airbus 109
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[52px] md:mt-0 mt-[9px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Alger
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[103px] md:mt-0 mt-[7px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Las Veggas
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[57px] md:mt-0 mt-1.5 text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      01/09/2024
                    </Text>
                    <Text
                      className="mb-[9px] md:ml-[0] ml-[67px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      11:30 AM
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[134px] w-[94%] md:w-full">
                    <Text
                      className="md:mt-0 my-[3px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      127
                    </Text>
                    <Text
                      className="mb-[5px] md:ml-[0] ml-[113px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Boeing 810
                    </Text>
                    <Text
                      className="mb-[5px] md:ml-[0] ml-[60px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Alger
                    </Text>
                    <Text
                      className="mb-[7px] md:ml-[0] ml-[90px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      Suisse
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[95px] md:mt-0 mt-1.5 text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      17/04/2024
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[68px] md:mt-0 mt-[7px] text-black-900 text-sm"
                      size="txtInterMedium14"
                    >
                      01:00 AM
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              Add a flight
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[47px] mt-[18px] p-[25px] sm:px-5 rounded-[15px] shadow-bs w-[95%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[34px] md:ml-[0] ml-[3px] w-[92%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1 md:ml-[0] w-[79%] md:w-full">
                  <Text
                    className="md:mt-0 mt-1 text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Flight airplane
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[200px] md:mt-0 my-0.5 text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Depature City
                  </Text>
                  <Text
                    className="mb-1 md:ml-[0] ml-[200px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Arrival City
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[7px] w-full">
                  <Input
                    name="language"
                    placeholder="EnterFlight airplane ... "
                    className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-medium leading-[normal] p-0 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="departurecityte"
                    placeholder="Enter Depature City ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="arrivalcitytext"
                    placeholder="Enter Arrival City ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="sm:flex-1 sm:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-row gap-[193px] items-start justify-start md:ml-[0] ml-[3px] mt-5 w-[46%] md:w-full">
                  <Text
                    className="mt-[3px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Departure time
                  </Text>
                  <Text
                    className="mb-[3px] text-black-900 text-xs"
                    size="txtInterMedium12"
                  >
                    Departure Date
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-[86%] md:w-full">
                  <Input
                    name="departuretimete"
                    placeholder="Enter Departure time ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="md:mt-0 mt-[3px] w-[35%] md:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Input
                    name="departuredatete"
                    placeholder="Enter Departure Date ..."
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-xs w-full"
                    wrapClassName="md:ml-[0] ml-[49px] w-[35%] md:w-full"
                    shape="round"
                    color="blue_gray_100"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[57px] md:ml-[0] ml-[107px] text-center text-xs"
                    shape="round"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  >
                    Save
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

export default FlightsPage;
