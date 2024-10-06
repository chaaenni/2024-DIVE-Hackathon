'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
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
    <header className="relative w-full z-[99] align-top">
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
                    (sticky ? 'h-[70px] fixed top-0 border-b border-gray-200 shadow-md bg-black bg-opacity-15 backdrop-blur-sm' : 'h-[70px] absolute top-[40px]'),
                    "left-0 w-full",
                  )}>
        <div className="h-full border-b/// items-center flex justify-between px-4">
          {/** logo */}
          <Link href="/" className="mx-4 flex">
            <Image src="/logo/logo_white.png" width={52} height={52} alt="logo"></Image>
            <div className="px-4 table">
              <span className="table-cell align-middle text-white text-3xl font-semibold">wayBusan</span>
            </div>
          </Link>
          {/** menu */}
          <div className="mx-4">
            <nav>
              <ul className="flex font-bold text-lg gap-6">
                <li className="px-4">
                  <Link href="/recommend" className="text-white hover:border-b pb-1 hover:font-extrabold">나만의 워케이션</Link>
                </li>
                <li className="px-4">
                  <Link href="/community" className="text-white hover:border-b pb-1 hover:font-extrabold">네트워킹</Link>
                </li>
                <li className="px-4">
                  <Link href="#" className="text-white hover:border-b pb-1 hover:font-extrabold">매거진</Link>
                </li>
                <li className="px-4">
                  <Link href="/housing" className="text-white hover:border-b pb-1 hover:font-extrabold">부산이라 좋다</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}