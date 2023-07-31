import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { detailSurat } from "../api/detailSurat";
import BismillahHeader from "./BismillahHeader";
import border from "../assets/border.png";
import { FaInfoCircle } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import PlayerAudio from "./playerAudio";

const Surat = () => {
  const [openModal, setOpenModal] = useState(false);
  const { suratId } = useParams();
  const [suratDetail, setSuratDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchSurat = async () => {
      try {
        const data = await detailSurat(suratId);
        setSuratDetail(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchSurat();
  }, [suratId]);

  useEffect(() => {
    const handleModalScroll = () => {
      if (openModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleModalScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  function convertToArabicNumber(number) {
    const arabicNumbers = {
      0: "٠",
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
    };

    let arabicNumber = "";
    for (let i = 0; i < number.length; i++) {
      arabicNumber += arabicNumbers[number[i]];
    }

    return arabicNumber;
  }

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  function removeHtmlTags(text) {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.body.textContent || "";
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[100%] rounded-full">
        <div className="p-5 px-10 bg-[#C2DEDC] text-[#116A7B] flex items-center justify-between font-bold relative">
          <div className="text-start text-4xl hover:text-black/40 hover:transition duration-100 cursor-pointer">
            <FaInfoCircle onClick={handleOpen} />
          </div>
          {openModal && (
            <div className="absolute z-[50] inset-0 flex justify-center items-center h-screen bg-black/75 text-black">
              <div className="w-2/3 h-2/3 bg-slate-200 rounded-md relative overflow-y-auto text-center px-5 py-20 shadow-sm shadow-white scrollbar-modal">
                <div className="fixed top-[17%] right-[15%] text-4xl cursor-pointer">
                  <GrFormClose onClick={handleClose} />
                </div>
                <h1 className="text-2xl font-bold uppercase">
                  {suratDetail.namaLatin}
                </h1>
                <p className="mb-4 ">Surat Ke {suratDetail.nomor}</p>
                <p className="px-10 text-justify font-normal">
                  {removeHtmlTags(suratDetail.deskripsi)}
                </p>
              </div>
            </div>
          )}
          <div className="text-center">
            <p className="lg:text-3xl mb-1">{suratDetail.namaLatin}</p>
            <p className="">( {suratDetail.arti} )</p>
          </div>
          <div className="text-end">
            <p className="font-noto lg:text-2xl">{suratDetail.nama}</p>
            <p className="">{suratDetail.jumlahAyat} Ayat</p>
          </div>
          <PlayerAudio audioSrc={suratDetail.audioFull["01"]} />
        </div>
        {location.pathname !== "/ayat-surat/1" && <BismillahHeader />}
        {suratDetail.ayat.map((item, index) => (
          <div
            key={item.nomorAyat}
            className={`py-5 px-10 border-b-2 p-4 ${
              index % 2 === 0 ? "bg-white" : "bg-[#ece5c767]"
            }`}
          >
            <div className="flex justify-between">
              <div className="relative">
                <div>
                  <img
                    src={border}
                    alt="border ayat"
                    className="h-[55px] w-[55px]"
                  />
                </div>
                <p className="font-noto absolute top-4 start-1/2 translate-middle-y -translate-x-1/2">
                  {item.nomorAyat}
                </p>
              </div>
              <div className="w-[80%]">
                <p className="text-4xl mr-2 font-noto text-end leading-loose">
                  {item.teksArab}
                  <span className="mr-5 py-1 px-3 text-[16px] border-b-2 border-[#116A7B] text-[#116A7B] rounded-xl">
                    .{convertToArabicNumber(item.nomorAyat.toString())}
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-16 w-[70%] mt-2 py-2">
              <p className="mb-3 text-[#116A7B] font-bold">
                {item.teksLatin}
              </p>
              <p className="italic">{item.teksIndonesia}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surat;