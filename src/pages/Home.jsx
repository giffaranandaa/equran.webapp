import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"


const Home = () => {
  return (
        <div className="flex items-center justify-center h-screen bg-[#fff7e7]">
        <div className="h-[350px] w-[90%] md:w-[50%]">
            <div className="flex flex-col items-center justify-center h-full gap-y-3">
                <img src={Logo} alt="logo.png" className="w-[50%] h-auto"/>
                <Link to="list-surat" className="border border-[#00a695] text-[#00a695] w-2/3 py-2 text-center font-semibold rounded-md">
                    BACA QUR'AN
                </Link>
                <Link to="asmaul-husna" className="border border-[#00a695] text-[#00a695] w-2/3 py-2 text-center font-semibold rounded-md">
                    ASMAUL HUSNA
                </Link>
                <Link to="list-surat" className="border border-[#00a695] text-[#00a695] w-2/3 py-2 text-center font-semibold rounded-md">
                    ABOUT
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home