import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
} from "react-icons/bs";

const PlayerAudio = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef(new Audio());
  const navigate = useNavigate();
  const [suratId, setSuratId] = useState(1);
  const totalSurat = 114; // Total surat dalam Al-Quran

  useEffect(() => {
    audioElement.current.src = audioSrc;

    return () => {
      audioElement.current.pause();
    };
  }, [audioSrc]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const pauseAudio = () => {
    audioElement.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    audioElement.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      audioElement.current.removeEventListener('ended', () => {
        setIsPlaying(false);
      });
    };
  }, []);

  const handleSkipStart = () => {
    setSuratId(null);
    navigate(`/ayat-surat/1`);
  };

  const handleSkipEnd = () => {
    setSuratId(totalSurat);
    navigate(`/ayat-surat/${totalSurat}`);
  };

  const handleSkipForward = () => {
    if (suratId < totalSurat) {
      const nextSuratId = suratId + 1;
      setSuratId(nextSuratId);
      navigate(`/ayat-surat/${nextSuratId}`);
    }
  };

  const handleSkipBackward = () => {
    if (suratId > 1) {
      const prevSuratId = suratId - 1;
      setSuratId(prevSuratId);
      navigate(`/ayat-surat/${prevSuratId}`);
    }
  };


  return (
    <div className="w-[82.2%] bg-[#e6e0d6] text-black flex flex-col justify-center items-center gap-x-5 p-4 fixed z-50 right-0 bottom-0">
      <div className="w-full flex items-center justify-center gap-x-10 mb-2">
        <BsFillSkipStartFill className="text-2xl" onClick={handleSkipBackward}/>
        {isPlaying ? (
          <BsFillPauseFill className="text-3xl" onClick={pauseAudio} />
        ) : (
          <BsFillPlayFill className="text-3xl" onClick={toggleAudio} />
        )}
       <BsFillSkipEndFill className="text-2xl cursor-pointer" onClick={handleSkipForward} />
      </div>
      <div className="w-2/3 h-[4px] bg-[#C2DEDC]">
        <div className="h-[4px] bg-[#116A7B] w-1/2"></div>
      </div>
    </div>
  );
};

export default PlayerAudio;
