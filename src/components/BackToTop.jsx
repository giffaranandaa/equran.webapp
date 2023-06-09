import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <>
      {showButton && (
        <div
          className={`z-50 text-4xl bottom-4 right-10 bg-[#C2DEDC] rounded-full fixed cursor-pointer text-[#116A7B]`}
          onClick={scrollUp}
        >
          <AiOutlineArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
