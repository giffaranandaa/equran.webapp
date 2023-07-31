import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSuratData } from "../api/listSurat";
import { detailSurat } from "../api/detailSurat";

const Home = () => {
  const [surat, setSurat] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSuratData();
        setSurat(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getSuratDetail = async (suratId) => {
    try {
      const suratDetail = await detailSurat(suratId);
      return suratDetail
    } catch (error) {
    }
  };

  if (isLoading) {
    return <div className="">Loading</div>;
  }
  
  return (
    <div className="p-5 pt-6 w-full bg-[#fff7e7]">
      <div className="mx-auto flex items-center">
        <div className="h-12 w-full min-w-[200px]">
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="peer h-full w-full rounded-md border-2 border-[#116A7B] bg-transparent px-3 py-2.5 text-[#]"
            placeholder="Cari Surat..."
          />
        </div>
      </div>
      <div className="py-5 grid grid-cols-3 text-white gap-5">
        {surat.data
          .filter((item) => {
            const searchTerm = search.toLowerCase();
            return Object.values(item).some((value) =>
              value.toString().toLowerCase().includes(searchTerm)
            );
          })
          .map((item) => (
            <Link
              to={`/ayat-surat/${item.nomor}`}
              key={item.nomor}
              onClick={() => getSuratDetail(item.nomor)}
              className="w-full bg-[#116A7B] hover:bg-[#0d4550] hover:duration-200 px-3 py-4 rounded-md relative"
            >
              <div className="flex items-center gap-x-3 font-medium">
                <p className="text-[15px]">{item.nomor}.</p>
                <h1>{item.namaLatin}</h1>
              </div>
              <div className="py-2 text-end">
                <p className="text-2xl font-semibold mb-2">{item.nama}</p>
                <p className="text-[14px] font-medium">
                  - {item.tempatTurun}
                  <span className="pl-2">( {item.arti} )</span>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;