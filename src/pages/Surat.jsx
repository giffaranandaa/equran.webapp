import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { detailSurat } from "../api/detailSurat";
import BismillahHeader from "../components/BismillahHeader";
import border from "../assets/border.png";

const Surat = () => {
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

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[100%] rounded-full">
        <div className="p-5 px-10 bg-[#00a695] text-white flex items-center justify-between font-bold">
          <div className="text-start">
            <p>{suratDetail.tempatTurun}</p>
            <p>{suratDetail.jumlahAyat} Ayat</p>
          </div>
          <div className="text-center">
            <p className="lg:text-3xl">{suratDetail.namaLatin}</p>
            <p className="">( {suratDetail.arti} )</p>
          </div>
          <div className="text-end">
            <p className="font-noto lg:text-2xl">{suratDetail.nama}</p>
            <p className="">Surat Ke {suratDetail.nomor}</p>
          </div>
        </div>
        {location.pathname !== "/ayat-surat/1" && <BismillahHeader />}
        {suratDetail.ayat.map((item, index) => (
          <div
            className={`py-5 px-10 border-b-2 p-4 ${
              index % 2 === 0 ? "bg-white" : "bg-[#fff7e7]"
            }`}
          >
            <div className="flex justify-between">
              <div className="relative">
                <div>
                  <img
                    src={border}
                    alt="border ayat"
                    className="h-[60px] w-[60px]"
                  />
                </div>
                <p className="font-noto absolute top-5 start-1/2 translate-middle-y -translate-x-1/2">
                  {item.nomorAyat}
                </p>
              </div>
              <div className="w-[80%]">
                <p className="text-4xl mr-2 font-noto text-end leading-loose">
                  {item.teksArab}
                  <span className="mr-5 py-1 px-3 text-[16px] border-b-2 border-[#00a695] text-[#00a695] rounded-xl">
                    .{convertToArabicNumber(item.nomorAyat.toString())}
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-16 w-[70%] mt-2 py-2">
              <p className="mb-3 text-[#00a695] font-bold">{item.teksLatin}</p>
              <p className="italic">{item.teksIndonesia}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surat;
