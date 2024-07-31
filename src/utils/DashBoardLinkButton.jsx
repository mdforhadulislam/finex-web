import Link from "next/link";
import React from "react";

const DashBoardLinkButton = ({ link, title }) => {
  return (
    <div className=" inline-block">
      <div className="p-3">
        <Link
          className={"w-auto px-4 py-2 bg-defult-button text-white rounded-md"}
          href={link}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default DashBoardLinkButton;
