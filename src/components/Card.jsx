import React from "react";
import asmaulHusna from "../api/asmaulHusna.json";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-10 px-5">
        {asmaulHusna.map(({ urutan, latin, arab, arti } ,i) => (
            <div tabIndex={1} className="text-white bg-[#00a695] w-[100%] my-4 px-4 py-2 rounded-md font-noto">
        <div className="bg-[#116b62] w-[40px] py-3 mb-5 rounded-full">
          <p className="text-center text-[14px]">{urutan}</p>
        </div>
        <p className="text-center text-[20px] font-noto">( {latin} )</p>
        <p className="text-center mb-5 text-[40px] font-noto">{arab}</p>
        <p className="text-center mb-5">{arti}</p>
      </div>
          ))}
    </div>
  );
};

export default Card;
