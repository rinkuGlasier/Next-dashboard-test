"use client";
import { IoMdCodeDownload, IoMdCodeWorking } from "react-icons/io";
import { useState } from "react";
import React from "react";

const FaqList = [
  {
    question: "1st question",
    ans: "Default open question ans",
  },
  {
    question: "1st question",
    ans: "first ans",
  },
];

export default function FaqFunction() {
  const [isFaqOpen, setIsFaqOpen] = useState<number>(0);

  const toggleOpen = (index: number) => {
    setIsFaqOpen(isFaqOpen === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-20">
      {FaqList.map((item, index) => (
        <div
          key={index}
          className={`"bg-blue-400 p-5 mb-5 ${
            isFaqOpen === index ? " bg-blue-700" : "bg-blue-400"
          }`}
        >
          <div
            className="flex justify-between items-center  cursor-pointer pb-2 animate__animated animate__fadeInUp"
            onClick={() => toggleOpen(index)}
          >
            <h1
              className={`text-2xl  ${
                isFaqOpen === index ? "text-white" : "text-black"
              } `}
            >
              {item.question}{" "}
            </h1>{" "}
            {isFaqOpen === index ? (
              <IoMdCodeWorking
                className={`text-3xl ${
                  isFaqOpen === index ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <IoMdCodeDownload className={`text-3xl `} />
            )}
          </div>
          {isFaqOpen === index && (
            <p
              className={`text-2xl  animate__animated animate__fadeInUp ${
                isFaqOpen === index ? "text-white" : "text-black"
              } `}
            >
              {item.ans}{" "}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
