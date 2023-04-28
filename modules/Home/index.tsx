import React from "react";
import Image from "next/image";
import WalletCard from "./WalletCard";
import Button from "@/common/Button";
import { ButtonOpacity } from "@/common/Button";

const Home = () => {
  const walletList = [
    {
      subTitle: "Total Affiliate Investment Volume",
      title: "100,000 SF",
      time: "from last week",
    },

    {
      subTitle: "Total Affiliate Investment Volume",
      title: "100,000 SF",
      time: "from last week",
    },

    {
      subTitle: "Total Affiliate Investment Volume",
      title: "100,000 SF",
      time: "from last week",
    },

    {
      subTitle: "Total Affiliate Investment Volume",
      title: "100,000 SF",
      time: "from last week",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center  gap-5">
        <div className="bg-[#C072FD] rounded-full p-2">
          <Image
            src="/svg/Sofin.svg"
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </div>

        <div className="w-1/2 relative">
          <Image
            src="/images/search.png"
            alt="Picture of the author"
            width={20}
            height={20}
            className="absolute top-[25%] left-3"
          />
          <input
            className="bg-[#BF70FD] w-full p-2 rounded-r-3xl"
            type="text"
          />
        </div>

        <span className="bg-[#C072FD] rounded-full p-2 ml-20">
          <Image
            src="/images/bell.png"
            alt="Picture of the author"
            width={26}
            height={26}
          />
        </span>

        <span className="bg-[#C072FD] rounded-full p-2">
          <Image
            src="/images/login.png"
            alt="Picture of the author"
            width={26}
            height={26}
          />
        </span>

        <div className="flex items-center justify-between rounded-3xl border-[#BF70FD] border-2 w-[200px] font-normal text-lg overflow-hidden">
          <div className="text-center w-1/2 bg-[#BF70FD] h-fit py-2 px-4 rounded-r-3xl  ">
            LIGHT
          </div>

          <div className="text-center w-1/2">DARK</div>
        </div>
      </div>

      <div className="flex items-center mt-2 gap-3">
        <div className="w-[70%] bg-[#BBD0FF] rounded-[32px] p-12">
          <h1 className="text-[#3E1D6C]  mb-5 text-[50px] leading-[60px] main-title">
            Welcome back Phobebe, <br /> How are you feeling today?
          </h1>
          <p className="second-title text-[#1E1E1E] my-5 ml-3 text-[25px]">
            Boosting your income now
          </p>
        </div>

        <div className="bg-[#BBD0FF] rounded-[32px] w-[28%] p-10 flex flex-col items-center justify-center">
          <p className="main-title text-[25px] text-[#3F3F3F]">Ranking</p>
          <Image
            src="/svg/Oc.svg"
            alt="Picture of the author"
            width={182}
            height={182}
          />
        </div>
      </div>

      <div>
        <h1 className="text-[#3E1D6C] font-bold leading-[48px] mb-4 text-[40px] ml-10 main-title">
          YOUR WALLET
        </h1>
        <div className="flex items-center justify-center xs:flex-wrap md:flex-nowrap gap-5">
          {walletList.map((item, index) => {
            return <WalletCard />;
          })}
        </div>
      </div>

      <div className="flex items-center mt-20 gap-5">
        <div className="w-[62%]    flex flex-col gap-5">
          <div className="text-white bg-[#C072FD] p-12 rounded-[32px]">
            <div className="flex items-start justify-between">
              <p className="main-title text-[25px]">USER INFORMATION</p>
              <Image
                src="/images/user.png"
                alt="Picture of the author"
                width={60}
                height={60}
              />
            </div>

            <div className="mt-6">
              <p className="main-title text-[55px] leading-[50px]">The Maliz</p>
              <p className="text-[25px] mb-3 ">
                <span className="font-bold second-title ">User ID</span>:
                812127251733
              </p>
              <p className="text-[25px] mb-3 flex items-center">
                <span className="font-bold second-title ">Gmail</span>:
                themaliz968@gmail.com
                <Image
                  src="/svg/check.svg"
                  alt="Picture of the author"
                  width={16}
                  height={16}
                  className="ml-2 mt-2"
                />
              </p>
              <p className="text-[25px] mb-3  ">
                <span className="font-bold second-title ">Ranking</span>: Gold
              </p>
            </div>
          </div>

          <div className="bg-[#BBD0FF] rounded-[32px] px-10 py-5 flex items-center justify-center gap-5 text-[#3E1D6C]">
            <p className="second-title font-bold">
              Link ref: https://sofin.foundation?referralCode=812127251733
            </p>
            <Image
              src="/svg/media.svg"
              alt="Picture of the author"
              width={140}
              height={57}
            />
          </div>
        </div>

        <div className="bg-[#BBD0FF] rounded-[32px] w-[37%] p-10 flex flex-col items-center  justify-center h-[500px]">
          <p className="main-title text-[25px] text-[#3E1D6C]">
            GLOBAL AFFILIATE RANKING
          </p>
          <Image
            src="/svg/chart.svg"
            alt="Picture of the author"
            width={358}
            height={326}
          />
        </div>
      </div>

      <div className="flex items-center mt-14 gap-5">
        <div className="w-[58%] bg-[#C072FD] text-[#3E1D6C] flex flex-col gap-5  rounded-[32px] p-14 ">
          <p className="text-[40px] main-title">YOUR COMMUNITY</p>
          <ul className="flex items-center gap-5 border-[#3E1D6C] border w-fit cursor-pointer my-5   rounded-[10px] text-[#3E1D6C] font-bold">
            <li className=" w-[33%] border-r-black px-4 py-2 border-r flex items-center justify-center text-center">
              DAY
            </li>
            <li className=" w-[33%] border-r-black  border-r pr-4 py-2 text-center">
              WEEK
            </li>
            <li className=" text-center w-[33%] pr-2 ">MONTH</li>
          </ul>
          <Image
            src="/images/chart.png"
            alt="Picture of the author"
            width={800}
            height={60}
            className=""
          />
        </div>

        <div className="bg-[url('/svg/phone.svg')] bg-center bg-cover bg-black/30 flex flex-col items-start justify-end bg-blend-multiply rounded-[32px] w-[42%] p-10 h-[530px] relative overflow-hidden">
          {/* <div className="absolute  top-0 bottom-0 left-0 right-0 w-full h-full opacity-1" ></div> */}
          <div className="mt-auto">
            <p className=" text-[30px] text-white">
              Earn up to <br />{" "}
              <span className="main-title font-bold text-[40px]">20%</span>{" "}
              commission
            </p>
            <ButtonOpacity content="Getting Started" />
          </div>
        </div>
      </div>

      <div className="bg-[#C072FD] flex flex-col items-center text-[#3E1D6C] justify-center mt-8  rounded-[32px] p-5 ">
        <p className="main-title  text-[40px] text-center">Getting Started</p>
        <p className="text-center second-title text-[30px] mb-5">
          Trying to boost your income? <br /> With SOFIN, you can start
        </p>
        <ButtonOpacity content="Start Now" />
      </div>

      <div className="flex px-3 flex-col  gap-10">
        <div className="w-full  flex items-center gap-10 justify-center ">
          <h1 className="main-title text-[#3E1D6C] text-[40px]">
            LIST OF INVESTORS
          </h1>

          <div className="w-1/3 relative">
            <Image
              src="/images/search.png"
              alt="Picture of the author"
              width={20}
              height={20}
              className="absolute top-[28%] left-3"
            />
            <input
              className="bg-[#BBD0FF] w-full p-3 rounded-3xl"
              type="text"
            />
          </div>

          <span className="bg-[#3E1D6C] rounded-full p-4">
            <Image
              src="/svg/caledor.svg"
              alt="Picture of the author"
              width={31}
              height={34}
            />
          </span>

          <span className="bg-[#3E1D6C] rounded-full p-4">
            <Image
              src="/svg/air.svg"
              alt="Picture of the author"
              width={31}
              height={34}
            />
          </span>

          <span className="bg-[#3E1D6C] rounded-full p-4">
            <Image
              src="/svg/t.svg"
              alt="Picture of the author"
              width={31}
              height={34}
            />
          </span>
        </div>

        <ul className="flex items-center gap-5 border-[#C072FD] border w-[300px] cursor-pointer   rounded-[10px] text-[#3E1D6C] font-bold">
          <li className=" w-[33%] p-2 flex items-center justify-center text-center">
            Week
          </li>
          <li className=" w-[33%] p-2 text-center bg-[#3E1D6C] text-white">
            Month
          </li>
          <li className=" text-center w-[33%] p-2 ">Year</li>
        </ul>

        <table className="border border-black text-[#3E1D6C]">
          <tr className="bg-[#BBD0FF] second-title text-[20px] font-normal">
            <th>Date</th>
            <th>ID User</th>
            <th>Gói đầu tư</th>
            <th>Số lượng</th>
            <th>Volume</th>
            <th>Direct Bonus</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div className="text-white mt-10">
        <div className=" bg-[#C072FD] bg-[url('/svg/bgphone.svg')] rounded-[32px] bg-no-repeat bg-right-top py-24 px-14">
          <h1 className="main-title font-bold text-[60px] leading-[72px]">
            THANKS FOR <br /> JOINING WITH US!
          </h1>

          <div className="flex items-center gap-5 mt-14">
            <Image
              src="/svg/Sofin.svg"
              alt="Picture of the author"
              width={70}
              height={72}
            />

            <Image
              src="/svg/line.svg"
              alt="Picture of the author"
              width={69}
              height={30}
            />

            <Image
              src="/svg/social.svg"
              alt="Picture of the author"
              width={322}
              height={32.2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
