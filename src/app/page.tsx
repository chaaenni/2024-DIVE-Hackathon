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
        

        {/** Section 3 */}
        <div className="h-[706px]">
          <div className="relative max-h-[706px] h-[300px] bg-[url('/1.jpg')] bg-auto">
            <div className="w-full flex relative pt-[153px] mx-auto my-0">
              <div className="border-[15px] border-solid bg-transparent">
                <div className="p-[28px] max-h-[574px] h-[574px] bg-cover bg-no-repeat bg-[url('/1.jpg')]">
                  <div className="py-[59px] px-[39px] h-full">
                    <div className="block text-center">
                      <span className="p-[5px] inline-block pt-[10px] min-w-[153px] border border-[#333] text-lg">레저 스포츠</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[15px] border-solid bg-transparent">
                <div className="p-[28px] max-h-[574px] h-[574px] bg-cover bg-no-repeat bg-[url('/1.jpg')]">
                  <div className="py-[59px] px-[39px] h-full">
                    <div className="block text-center">
                      <span className="p-[5px] inline-block pt-[10px] min-w-[153px] border border-[#333] text-lg">레저 스포츠</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[15px] border-solid bg-transparent">
                <div className="p-[28px] max-h-[574px] h-[574px] bg-cover bg-no-repeat bg-[url('/1.jpg')]">
                  <div className="py-[59px] px-[39px] h-full">
                    <div className="block text-center">
                      <span className="p-[5px] inline-block pt-[10px] min-w-[153px] border border-[#333] text-lg">레저 스포츠</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/** Section 4 */}
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h2 className="text-sm text-gray-600 mb-2">주요사업</h2>
            <h1 className="text-4xl font-bold mb-2">
              국내 관광업계 <span className="text-gray-400">활성화를 위해</span>
            </h1>
            <p className="text-2xl text-gray-700">다양한 사업을 추진합니다</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-96 bg-blue-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=384&width=288"
                alt="국제관광지원"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-semibold">국제관광지원</h3>
              </div>
            </div>

            <div className="relative col-span-1 md:col-span-2 h-96 bg-green-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=384&width=640"
                alt="국민관광지원"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-2xl font-semibold mb-2">국민관광지원</h3>
                <p className="text-white text-sm">
                  국내여행 활성화를 통한 국민의 삶의 질 향상 및 지역경제 발전을 위해 노력합니다.
                </p>
                <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded-full">
                  →
                </button>
              </div>
            </div>

            <div className="relative h-96 bg-purple-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=384&width=288"
                alt="관광산업지원"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-semibold">관광산업지원</h3>
              </div>
            </div>

            <div className="relative h-96 bg-indigo-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=384&width=288"
                alt="관광콘텐츠육성"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-semibold">관광콘텐츠육성</h3>
              </div>
            </div>
          </div>
        </div>
        {/** Section 5 */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hot Spring Section */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hot spring"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white text-sm mb-2 border border-white px-2 py-1 rounded w-fit">계절보양여행</span>
                <h2 className="text-white text-2xl font-bold mb-2">온천관광휴양지</h2>
                <p className="text-white text-sm">국내 유일 자연온천으로 유명한 울진의 온천관광특구를 소개합니다.</p>
              </div>
            </div>

            {/* Forest Trail Section */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Forest trail"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white text-sm mb-2 border border-white px-2 py-1 rounded w-fit">울진트래킹</span>
                <h2 className="text-white text-2xl font-bold mb-2">금강소나무 숲길</h2>
                <p className="text-white text-sm">호젓하고 낭만적인 울진에서 힐링스 기특한 여행코스를 추천해드립니다.</p>
              </div>
            </div>

            {/* Scenic View Section */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Scenic view"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white text-sm mb-2 border border-white px-2 py-1 rounded w-fit">일출 맛집</span>
                <h2 className="text-white text-2xl font-bold mb-2">울진 바다</h2>
                <p className="text-white text-sm">동해바다의 아름다운 해돋이 풍경을 만날 수 있는 울진해수욕장을 소개합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/** Section 6 */}
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col h-screen">
            <header className="mb-auto">
              <h1 className="text-white text-4xl font-bold">공사 창여</h1>
              <h2 className="text-white text-5xl font-bold mt-2">국민에게 신뢰받는<br />관광 선도기관</h2>
              <button className="mt-4 px-6 py-2 bg-white bg-opacity-20 text-white rounded-full flex items-center">
                조직도/직원검색 
              </button>
            </header>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-white text-2xl font-bold mb-2">윤리·인권 경영</h3>
                <h4 className="text-white text-xl mb-4">클린 케이티오(Clean KTO)</h4>
                <p className="text-white text-sm mb-4">관광산업의 Total Service Provider로써 한국관광의 새로운 성장을 구현하고 있습니다.</p>
                <div className="flex space-x-4">
                  <button className="text-white hover:underline">윤리 경영 </button>
                  <button className="text-white hover:underline">인권 경영 </button>
                </div>
              </div>
              <div className="bg-blue-600 rounded-lg p-6">
                <h3 className="text-white text-2xl font-bold mb-2">KTO ESG경영</h3>
                <p className="text-white text-sm mb-4">한국관광공사는 ESG경영을 통해 지속가능을 구현하겠습니다.</p>
                <div className="flex space-x-4">
                  <button className="text-white hover:underline">비전 및 전략체계 </button>
                  <button className="text-white hover:underline">ESG경영지표 </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 text-white">
                <span>똑똑한 문의</span>
              </button>
              <button className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 text-white">
                <span>똑똑한 제안</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 text-white">
                <span>관광불편신고</span>
              </button>
              <button className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 text-white">
                <span>관광정보 통틀/수정</span>
              </button>
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