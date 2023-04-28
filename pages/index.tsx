import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/common/Sidebar";
import HomePage from "@/modules/Home";

export default function Home() {
  return (
    <div className="w-screen flex items-start relative overflow-hidden">
      <div className="w-[25vw] fixed">
        <Sidebar />
      </div>

      <div className="w-[75vw] py-10 px-5 ml-[26vw]  h-fit ">
        <HomePage />
      </div>
    </div>
  );
}
