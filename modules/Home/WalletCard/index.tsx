import React from "react";
import Image from "next/image";

const WalletCard = () => {
  return (
    <div className="bg-[#C072FD] rounded-[32px] pl-10 py-5 w-[25%]">
      <p className="second-title text-[#1E1E1E] text-[18px]">
        Total Affiliate <br /> Investment Volume
      </p>
      <h1 className="main-title text-[30px]">100,000 SF</h1>
      <span className="flex items-center gap-2">
        <p className="text-[#1E1E1E] text-[20px] second-title">
          from last week
        </p>
        <Image
          src="/svg/Vector.svg"
          alt="Picture of the author"
          width={13}
          height={14}
        />
      </span>
    </div>
  );
};

export default WalletCard;
