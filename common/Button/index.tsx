import { ArrowCircleRight2 } from 'iconsax-react';
import React from 'react'

const Button = (props: any) => {
  // const router = router();
  return (
    <button
      // onClick={() => {
      //   router.push("/app/investment");
      // }}
      className="button w-fit px-2 md:py-1 flex items-center justify-center gap-2 md:text-[16px] rounded-full bg-[#BBD0FF] border-[2px_2px_4px_2px] border-[#887EE3] md:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:z-10  text-[black] duration-300"
    >
      {props.content}
      <ArrowCircleRight2 size="32"/>
    </button>
  );
};

export const ButtonOpacity = (props: any) => {
  return (
    <button
      // onClick={() => {
      //   router.push("/app/investment");
      // }}
      className="button w-fit px-5 md:py-2 flex backdrop-opacity-10 items-center justify-center gap-2 md:text-[16px] rounded-full mix-blend-normal bg-slate-50/40 border border-[#3E1D6C] md:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:z-10  text-[#3E1D6C] font-bold duration-300"
    >
      {props.content}
    </button>
  );
}

export default Button