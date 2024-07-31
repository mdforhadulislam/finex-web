import Link from "next/link";
import React from "react";

const DashBoardHeaderButtonBox = ({ title, link, value }) => {
  return (
    <Link
      href={link}
      className="w-full h-auto shadow-3xl p-2 py-2 flex justify-center align-middle items-center flex-col rounded-md gap-2"
    >
      <span className="font-semibold text-3xl">{value}</span>

      <h1 className="font-medium text-sm text-gray-700">{title}</h1>
    </Link>
  );
};

export default DashBoardHeaderButtonBox;
