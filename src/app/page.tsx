'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Input, Description, Textarea } from "@headlessui/react";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'

import { TextGenerateEffect } from "@/components/ui/textgen";

import { ChevronDown, RefreshCw, ArrowRight, X, CircleCheck } from "lucide-react"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
interface UserData {
  name: string
  email: string
  company: string
  role: string
  experience: string
  interests: string[]
  notifications: boolean
  username: string
  password: string
}

const initialUserData: UserData = {
  name: "",
  email: "",
  company: "",
  role: "",
  experience: "",
  interests: [],
  notifications: false,
  username: "",
  password: "",
}

interface StepProps {
  userData: UserData
  updateUserData: (field: keyof UserData, value: any) => void
}

const tabsData = [
  {
    id: 'tab1',
    label: '#바라만 보아도 힐링 푸켓',
    content: [
      {
        imgSrc: '/images/phuket1.jpg',
        description: '푸켓 특급 리조트',
        price: '869,000원',
      },
      {
        imgSrc: '/images/phuket2.jpg',
        description: '푸켓 요트 투어',
        price: '1,129,000원',
      },
      {
        imgSrc: '/images/phuket3.jpg',
        description: '푸켓 마사지 패키지',
        price: '809,000원',
      },
    ],
  },
  {
    id: 'tab2',
    label: '#낭만과 휴양이 함께 세부',
    content: [
      {
        imgSrc: '/images/cebu1.jpg',
        description: '세부 특급 리조트',
        price: '799,000원',
      },
      {
        imgSrc: '/images/cebu2.jpg',
        description: '세부 요트 투어',
        price: '1,049,000원',
      },
      {
        imgSrc: '/images/cebu3.jpg',
        description: '세부 마사지 패키지',
        price: '759,000원',
      },
    ],
  },
  // 추가 탭 데이터
];


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

  const [activeTab, setActiveTab] = useState('tab1');

  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState<number>(1)
  const [userData, setUserData] = useState<UserData>(initialUserData)

  const updateUserData = (field: keyof UserData, value: any) => {
    setUserData((prev) => ({ ...prev, [field]: value }))
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 5));
    setCurrentIndex(0);
  }
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 userData={userData} updateUserData={updateUserData} />
      case 2:
        return <Step2 userData={userData} updateUserData={updateUserData} />
      case 3:
        return <Step3 userData={userData} updateUserData={updateUserData} />
      case 4:
        return <Step4 userData={userData} updateUserData={updateUserData} />
      default:
        return null
    }
  }

  
  
  const messages = [
    "맞춤형 워케이션 스타일을 분석 중입니다.",
    "맞춤형 워케이션 스타일을 분석 중입니다..",
    "맞춤형 워케이션 스타일을 분석 중입니다...",
    "맞춤형 워케이션 스타일을 분석 중입니다....",
    "맞춤형 워케이션 스타일을 분석 중입니다.....",
    "맞춤형 워케이션 스타일을 분석 중입니다......",
    "완료되었습니다!",
  ];

  useEffect(() => {
    if (currentIndex >= messages.length - 1) {
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 700); // 3초마다 실행

    // 컴포넌트가 언마운트되면 setInterval을 정리
    return () => clearInterval(intervalId);
  }, [currentIndex, messages.length]);

  const [my_style, setMyStyle] = useState(0);
  const my_profit_style = [
    {f: "온전한 휴식", s: "바다", t: "여유를 느끼며"},
    {f: "재밌는 액티비티", s:"바다", t: "서핑을 하며"}
  ]

  return (
    <div className="m-0 p-0 block">
      {/** header */}
      

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
                  {/* <video autoPlay loop muted playsInline width="100%" className="brightness-[.6]">
                    <source src="housing/wave.mp4"/>
                </video>   */}
                </div>
              </div>
            </div>
          </div>
          {/** middle content */}
          <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-center">
            <h2 className="text-[48px] text-white font-bold leading-tight p-4 ">당신의 인생에서 터닝포인트가 될 <br/>워케이션을 위해,</h2>
            <span className="text-white text-xl">Workation-ing</span>
          </div>
          {/** bottom background */}
          <div className="left-auto right-auto absolute w-full h-[251px] bg-[url('/bottom_bg.png')] bg-center bottom-0">
            <div className="relative my-0 mx-auto w-full py-0 px-[10px] h-[251px]">
              <span className="absolute top-[-22px] left-[54%] w-[438px] h-[272px] block bg-[url('/bottom_bg2.png')] overflow-hidden -translate-x-2/4"></span>
            </div>
          </div>
        </div>

        {/** 워케이션 취향 섹션 */}
        <div className="container mx-auto px-4 py-20 mt-8 mb-6">
          {loading && (
            <>
              <div className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
                {/**<div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" />*/}
                <div className="z-[999] text-white w-[500px]">
                  {renderStep()}
                  <div className="items-center p-6 flex justify-between">
                    {(step > 1) && (step < 4) && (
                      <button onClick={prevStep} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Previous
                      </button>
                    )}
                    {step < 4 && <button onClick={nextStep} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Next</button>}
                    {step === 4 && <button onClick={nextStep} className="backdrop-blur-lg inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Done</button>}
                    {step === 5 && <div className="text-2xl font-bold">{messages[currentIndex]}</div>}
                  </div>
                  
                </div>
                <div className="inset-x-0 z-20 bottom-0 h-full absolute lbg-[url('/survey/bg.jpg')] brightness-[.8] bg-cover" style={{ backgroundImage: "url('/survey/bg.jpg')", }}></div>
              </div>
            </>
          )}
          {loading && (
            <button
              className="fixed top-4 right-4 text-black dark:text-white z-[120]"
              onClick={() => {
                setLoading(false);
                setMyStyle(1);
              }}
            >
              <X className="h-10 w-10 stroke-white" />
            </button>
          )}
          <header className="text-center mb-16">
            <h1 className="text-3xl font-semibold mb-4 inline-flex">
              나는 {' '}{ my_style ? <span className="underline font-extrabold decoration-wavy decoration-yellow-400"><TextGenerateEffect className="font-extrabold text-3xl pl-2" words={my_profit_style[0].f}/></span> : 
              <span className="underline font-extrabold decoration-wavy decoration-yellow-400">{my_profit_style[1].f}</span> }이{`(가)`} 있는 워케이션을 원해요.
            </h1>
            <h2 className="text-xl mb-6">
              <span className="underline decoration-wavy decoration-blue-400 font-bold inline-flex">{my_style ? <span><TextGenerateEffect className="pl-1" words={my_profit_style[0].s}/></span> : <span>{my_profit_style[1].s}</span>}</span>에서{" "}
              <span className="underline decoration-wavy decoration-green-400 font-bold inline-flex">{my_style ? <span><TextGenerateEffect className="pl-1" words={my_profit_style[0].t}/></span> : <span>{my_profit_style[1].t}</span>}</span> 지내고 싶어요
            </h2>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
                다른 취향 보기 <RefreshCw className="ml-2 h-4 w-4" />
              </button>
              <button onClick={() => {
                setLoading(true);
                setStep(1);
              }} className="//bg-black bg-blue-600 text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full">
                나의 워케이션 로망은? <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </header>

          <div className="relative mx-auto max-w-7xl">
            <div className="flex gap-6 overflow-x-auto justify-between pb-4">
              {[
                {
                  hover_text: "퇴근 후 바다를 바라보며 맥주 한 잔 어떠세요?",
                  description: "바다와 함께 힐링을",
                  image: "/sec2/1.jpg",
                },
                {
                  hover_text: "출근하기 전에 나는 서핑 동호회에 나간다!",
                  description: "레저를 즐기는 나는 멋쟁이",
                  image: "/sec2/2.png",
                },
                {
                  hover_text: "Movie is my life...",
                  description: "영화와 함께하는 문화생활",
                  image: "/sec2/3.jpg",
                },
              ].map((card, index) => (
                <div key={index} className="w-[400px] h-[480px] flex-shrink-0 relative group">
                  <div className="p-0 overflow-hidden h-full w-full mx-auto">
                    <Image src={card.image} alt={card.description} width={400} height={450} className="w-full h-full rounded-lg object-cover brightness-[.9] group-hover:scale-105 transition-all overflow-hidden" />
                    <div className="absolute inset-0 flex items-end justify-start group-hover:opacity-0 rounded-lg">
                      <p className="text-white text-lg font-semibold whitespace-nowrap inline-flex p-6 items-center justify-center">{card.description} <ArrowRight className="ml-2 h-4 w-4" /></p>
                    </div>
                    <Link href="/recommend" className="rounded-lg absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                      <p className="text-lg">{card.hover_text}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/** 
        <div className="flex">

      <div className="w-1/4 p-4">
        <ul className="space-y-4">
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              className={`tab-item cursor-pointer ${
                activeTab === tab.id ? 'font-bold text-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* 오른쪽 콘텐츠 영역 
      <div className="w-3/4 p-4">
        {tabsData
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div key={tab.id} className="grid grid-cols-3 gap-4">
              {tab.content.map((item, index) => (
                <div key={index} className="relative">
                  <img src={item.imgSrc} alt={item.description} className="w-full h-auto" />
                  <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white">
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
*/}

        {/** Section 2 */}
        <div className="container mx-auto px-4 py-8 relative">
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
        
        {/** review 섹션 */}
        <div className="container mx-auto px-4 py-8 relative h-full">
          <div className="grid grid-cols-3 gap-8 h-[800px] overflow-x-scroll">
            {/* content */}
            <div className="relative overflow-hidden min-h-[350px]">
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-black text-2xl font-bold mb-2">Workation Lifestyle in Busan</h2>
                <p className="text-black text-sm">개성있는 워케이션 라이프스타일을 소개합니다.</p>
                <button className="mt-8 text-black text-sm  py-0 rounded-full inline-flex items-center justify-start">
                  <span></span>직접 경험해보기 <ArrowRight className="ml-2 h-4 w-4 flex" />
                </button>
              </div>
            </div>
            {/* review 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[350px]">
              <Image
                src="/review/1.jpg"
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

            {/* review 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[350px]">
              <Image
                src="/review/2.avif"
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

            {/* review 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[350px]">
              <Image
                src="/review/3.jpeg"
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
            {/* review 4 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[350px]">
              <Image
                src="/review/4.jpeg"
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
            {/* review 5 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[350px]">
              <Image
                src="/review/5.jpeg"
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
          <div className="flex justify-end">
            <button className="mt-8 text-black text-sm px-6 py-0 rounded-full inline-flex">
              더 많은 리뷰 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/** Bottom 섹션 */}
        <div className="relative min-h-[600px]">
          <div className="absolute inset-0 //bg-gradient-to-b //from-transparent //to-black //opacity-50 brightness-[.6] bg-cover bg-bottom" style={{ backgroundImage: "url('/bottom_1.jpg')", }}></div>
          <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col h-[700px]">
            <header className="mb-auto">
              <h1 className="text-white text-4xl font-bold pt-3"></h1>
              <h2 className="text-white text-5xl font-bold mt-2 leading-snug">부산에서의 라이프스타일에<br />빠져들었나요?</h2>
              <button className="mt-4 px-6 py-2 bg-white bg-opacity-20 text-white rounded-full flex items-center">
                New lifestyle in Busan <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </header>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Business in Busan</h3>
                <p className="text-white text-sm mb-8">부산은 여러분들의 비즈니스 성장을 시작하기에 최적입니다.</p>
                <div className="flex space-x-4">
                  <button className="text-white hover:underline">바다 전망의 사무실이 있다?</button>
                </div>
              </div>
              <div className="bg-blue-600 rounded-lg p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Life in Busan</h3>
                <p className="text-white text-sm mb-8">부산에서 한번 살아보는 거 어때</p>
                <div className="flex space-x-4">
                  <Link href="/housing">
                    <button className="text-white hover:underline">어디서 지내? </button>
                  </Link>
                  <button className="text-white hover:underline">어떻게 살아? </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 text-white">
                <span>문의 바로가기</span>
              </button>
              <button className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 text-white">
                <span>정보 알아보기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/** footer */}
      <footer className="relative w-full z-[999] bg-white h-[80px] flex items-center">
        <div className="container mx-auto py-4 px-4">
          <p className="text-md font-light">Generated by 곤지곤지</p>
        </div>
      </footer>
    </div>
  );
}

const Step1:React.FC<StepProps> = ({ userData, updateUserData}) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto backdrop-blur-lg">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">기본 정보</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4" >
          <Field>
          <Label className="text-sm/6 font-medium text-white">이름</Label>
            <Input
              className={classNames(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <div className="pt-4">
              <Field>
                <Label className="text-sm/6 font-medium text-white">숙박 장소</Label>
                <Description className="text-sm/6 text-white/50">혹은 메인 근무지를 입력해 주세요.</Description>
                <Textarea
                  className={classNames(
                    'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                  )}
                  rows={3}
                />
              </Field>
            </div>
          </Field>
        </div>
      </div>
      <div className="items-center p-6 flex justify-between"></div>
    </div>
  )
}

const workation_type = [
  {name: "레저 및 스포츠", des: "푸켓 특급 리조트"},
  {name: "문화 체험", des: "푸켓 요트 투어"},
  {name: "힐링", des: "푸켓 마사지 패키지"},
  {name: "휴양", des: "푸켓 특급 리조트"},
  {name: "기타", des: "푸켓 요트 투어"},
]

const Step2:React.FC<StepProps> = ({ userData, updateUserData}) => {
  let [selected, setSelected] = useState(workation_type[0])

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto backdrop-blur-lg">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">여행 유형</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4" >
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {workation_type.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{plan.name}</p>
                  <div className="flex gap-2 text-white/50">
                    <div>{plan.des}</div>
                    <div aria-hidden="true">&middot;</div>
                  </div>
                </div>
                <CircleCheck color="#FFFFFF" className="size-6 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
        </div>
      </div>
      <div className="items-center p-6 flex justify-between"></div>
    </div>
  )
}

const work_type = [
  {name: "기업", des: "푸켓 특급 리조트"},
  {name: "프리랜서", des: "푸켓 요트 투어"},
  {name: "기타", des: ""},
]

const Step3:React.FC<StepProps> = ({ userData, updateUserData}) => {
  let [selected, setSelected] = useState(work_type[0])

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto backdrop-blur-lg">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">비즈니스 유형</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4" >
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {work_type.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{plan.name}</p>

                </div>
                <CircleCheck color="#FFFFFF" className="size-6 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
        </div>
      </div>
      <div className="items-center p-6 flex justify-between"></div>
    </div>
  )
}

const drive_type = [
  {name: "자차", des: "푸켓 특급 리조트"},
  {name: "뚜벅이", des: "푸켓 요트 투어"},
  {name: "자전거", des: ""},
]

const Step4:React.FC<StepProps> = ({ userData, updateUserData}) => {
  let [selected, setSelected] = useState(drive_type[0])

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto backdrop-blur-lg">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">기타</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4" >
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {drive_type.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{plan.name}</p>
                </div>
                <CircleCheck color="#FFFFFF" className="size-6 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
        </div>
      </div>
      <div className="items-center p-6 flex justify-between"></div>
    </div>
  )
}