import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ item, reference }) => {

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="w-60 h-72 bg-zinc-900/90 rounded-[35px] text-white px-6 py-8 relative overflow-hidden shrink-0"
    >
      <FaRegFileLines className="text-lg" />
      <p className="text-sm mt-5 font-semibold leading-tight">{item.desc}</p>
      <div className="footer w-full absolute left-0 bottom-0">
        <div className="flex justify-between items-center py-3 px-6 mb-2">
          <h5>{item.fileSize}</h5>
          <span className="p-2 rounded-full bg-zinc-600 flex justify-center items-center">
            {item.close ? (
              <IoClose size="0.8em" color="#fff" />
            ) : (
              <LuDownload size="0.8em" color="#fff" />
            )}
          </span>
        </div>

        {item.tag.isOpen && (
          <div
            className={`tag w-full py-3.5 ${item.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"}`}
          >
            <h3 className="text-sm font-semibold flex justify-center items-center">
              {item.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
