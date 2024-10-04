'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY > 0) {
      if(!sticky) {
        setSticky(true);
        console.log('sticky');
      }
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div className="m-0 p-0 block">
      {/** header */}
      <header className="relative w-full z-[999] align-top">
        <div className="h-[40px] border-b absolute top-0 left-0 w-full">
          <div className="float-left px-8 h-full flex items-center">
            <span className="text-white ">workation 을 통해서 Busan으로의 지속가능한 파동을 발생시키다.</span>
          </div>
          <nav className="relative px-8 h-full w-full">
            <div className="h-full float-right flex items-center">
              <div className="text-white px-3">ENG</div>
              <div className="text-white px-3">KOR</div>
            </div>
          </nav>
        </div>
        <div className={classNames(
                      (sticky ? 'h-[80px] fixed top-0 border-b bg-black bg-opacity-20' : 'h-[70px] absolute top-[40px]'),
                      "left-0 w-full",
                    )}>
          <div className="h-full border-b/// items-center flex justify-between px-4">
            {/** logo */}
            <div className="mx-4 flex">
              <Image src="/logo/logo_white.png" width={52} height={52} alt="logo"></Image>
              <div className="px-4 table">
                <span className="table-cell align-middle text-white text-4xl font-semibold">wayBusan</span>
              </div>
            </div>
            {/** menu */}
            <div className="mx-4">
              <nav>
                <ul className="flex font-bold text-lg gap-6">
                  <li className="px-4">
                    <a href="/myworkation" className="text-white">나만의 워케이션</a>
                  </li>
                  <li className="px-4">
                    <a href="/community" className="text-white">커뮤니티</a>
                  </li>
                  <li className="px-4">
                    <a href="#" className="text-white">부산이라 좋다</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/** main */}
      <div className="relative w-full block m-0 p-0">
        {/** Section 1 */}
        <div className="relative w-full overflow-hidden block">
          {/** background */}
          <div className="relative block m-0 p-0 z-0 align-top">
            <div className="relative top-0 left-0 block mx-auto">
              {/** content 1 */}
              <div className="w-full relative left-0 top-0 block float-left h-full">
                <div className="w-full inline-block  relative overflow-hidden h-[900px]">
                  <Image 
                    src="/bg1.jpg" 
                    alt="bg1"
                    fill={true}
                    className="w-auto max-w-none relative object-cover brightness-[.70]"></Image>
                </div>
              </div>
            </div>
          </div>
          {/** middle content */}
          <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-center">
            <h2 className="text-[52px] text-white font-bold leading-tight p-4 ">내 인생의 터닝포인트가 될 <br/>워케이션을 위해</h2>
            <span className="text-white text-xl">Workation-ing</span>
          </div>
          {/** bottom background */}
          <div className="left-auto right-auto absolute w-full h-[251px] bg-[url('/bottom_bg.png')] bg-center bottom-0">
            <div className="relative my-0 mx-auto w-full py-0 px-[10px] h-[251px]">
              <span className="absolute top-[-22px] left-[54%] w-[438px] h-[272px] block bg-[url('/bottom_bg2.png')] overflow-hidden -translate-x-2/4"></span>
            </div>
          </div>
        </div>

        {/** Section 2 */}
        <div className="relative w-full overflow-hidden block">
          {/** background */}
          <div className="relative block m-0 p-0 z-0 align-top">
            <div className="relative top-0 left-0 block mx-auto">
              {/** content 1 */}
              <div className="w-full relative left-0 top-0 block float-left h-full">
                <div className="w-full inline-block  relative overflow-hidden h-[900px]">
                  <Image 
                    src="/bg2.jpg" 
                    alt="bg2"
                    fill={true}
                    className="w-auto max-w-none relative object-cover brightness-75"></Image>
                </div>
              </div>
            </div>
          </div>
          {/** middle content */}
          <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-center">
            <h2 className="text-6xl text-white font-semibold">Workation-ing</h2>
            <span className="text-white text-xl pt-[12px] ">qmffkqfkfmqfkf</span>
          </div>
          {/** bottom background */}
          <div className="left-auto right-auto absolute w-full h-[251px] bg-[url('/bottom_bg.png')] bg-center bottom-0">
            <div className="relative my-0 mx-auto w-full py-0 px-[10px] h-[251px]">
              <span className="absolute top-[-22px] left-[54%] w-[438px] h-[272px] block bg-[url('/bottom_bg2.png')] overflow-hidden -translate-x-2/4"></span>
            </div>
          </div>
        </div>
      </div>
      {/** footer */}
      <footer className="relative w-full z-[999] bg-slate-300">
        <div className="container mx-auto py-4 px-4">
          <p className="text-sm font-light">Generated by create next app</p>
        </div>
      </footer>
    </div>
  );
}