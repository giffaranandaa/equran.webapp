import React from "react";
import asmaulHusna from "../api/asmaulHusna.json";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-10 px-5" 
    style={{ direction: 'rtl' }}>
    {asmaulHusna.map(({ latin, arab, arti }, i) => (
      <div
        tabIndex={1}
        key={i}
        className="text-black w-[100] px-5 py-3 rounded-md"
        style={{ direction: 'ltr', textAlign: 'right' }}
      >
        <p className="text-center text-[40px] font-noto">{arab}</p>
        <p className="text-center text-[20px] font-conver text-[#116A7B] font-semibold">( {latin} )</p>
        <p className="text-center text-[14px] mb-5">{arti}</p>
      </div>
    ))}
  </div>
  
  );
};

export default Card;
