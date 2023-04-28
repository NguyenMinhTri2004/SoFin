import { Card, User } from "iconsax-react";
import React from "react";
import Image from "next/image";
import Button from "../Button";

const Sidebar = () => {
  const sidebarList = [
    {
      icon: <Card size="32" variant="Bold" />,
      text: "Medical card",
    },

    {
      icon: <Card size="32" variant="Bold" />,
      text: "Medical card",
    },

    {
      icon: <Card size="32" variant="Bold" />,
      text: "Medical card",
    },

    {
      icon: <Card size="32" variant="Bold" />,
      text: "Medical card",
    },

    {
      icon: <Card size="32" variant="Bold" />,
      text: "Medical card",
    },
  ];

  return (
    <div className="bg-[#C071FD] h-screen overflow-y-scroll ">
      <div className="flex  items-center gap-3 border-b-[#ccc] border-b-2 justify-center p-10">
        <Image
          src="/images/user.png"
          alt="Picture of the author"
          width={60}
          height={60}
        />
        <p className="text-lg font-bold">Kate Rewyako</p>
      </div>

      <div className="py-14 px-20 text-[#3E1D6C] ">
        <ul className="border-b-[#3E1D6C] border-b-2">
          {sidebarList.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center gap-3 mb-2 cursor-pointer"
              >
                {item.icon}
                <p>{item.text}</p>
              </li>
            );
          })}

          <p className="font-light my-5">Text</p>

          <li className="flex items-center gap-3 mb-2 cursor-pointer">
            <Card size="32" variant="Bold" />
            <p>Medical card</p>
          </li>

          <li className="flex items-center gap-3 mb-5 cursor-pointer">
            <Card size="32" variant="Bold" />
            <p>Medical card</p>
          </li>
        </ul>

        <ul className="py-10">
          {sidebarList.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center gap-3 mb-2 cursor-pointer"
              >
                {item.icon}
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>

        <Button content="New accountmen" />
      </div>
    </div>
  );
};

export default Sidebar;
