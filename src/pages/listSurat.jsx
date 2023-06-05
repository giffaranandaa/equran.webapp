import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSuratData } from "../api/listSurat";
import border from "../assets/border.png";

const ListSurat = () => {
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

  const detailSurat = async (suratId) => {
    try {
      const suratDetail = await detailSurat(suratId);
      console.log(suratDetail);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(search);

  if (isLoading) {
    return <div className="">Loading</div>;
  }

  return (
    <div className="flex items-center justify-center bg-[#fff7e7]">
      <div className="my-10 w-[90%] lg:px-40">
        <div className="mx-auto flex items-center justify-center">
          <div className="h-12 w-full min-w-[200px]">
            <input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              className="peer h-full w-full rounded-md border border-black bg-transparent px-3 py-2.5"
              placeholder="Cari Surat..."
            />
          </div>
        </div>
        <div className="py-5">
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
                onClick={() => detailSurat(item.nomor)}
              >
                <div className="flex items-center justify-between mb-4 border-b-2 p-4">
                  <div className="flex items-center relative">
                    <div className="relative">
                      <img
                        src={border}
                        alt="border ayat"
                        className="w-[50px]"
                      />
                      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {item.nomor}
                      </p>
                    </div>
                    <div className="pl-5">
                      <p>{item.namaLatin}</p>
                      <p>
                        {item.tempatTurun} |
                        <span> {item.jumlahAyat} Ayat</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <h1 className="text-2xl">{item.nama}</h1>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListSurat;
