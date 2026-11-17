import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, recusandae!",
      fileSize: "0.4 Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, recusandae!",
      fileSize: "0.4 Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, recusandae!",
      fileSize: "0.4 Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full absolute top-0 left-0 z-20 flex gap-8 flex-wrap p-5 overflow-hidden"
    >
      {data.map((item, index) => (
        <Card item={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
