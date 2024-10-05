'use client'

import { useEffect, useState } from "react"

interface happyHouse{
    "유형": string;
    "지구명": string;
    "세대수": number;
    "동수": number;
    "층수": string;
    "입주개시": string;
    "관리방법": string;
    "소재지": string;
}

interface youngHouse{
    "연번": number;
    "구군": string;
    "주택명": string;
    "세대수": number;
}

export default function Housing(){
    const [isMarry, setIsMarry] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [happyHouse, setHappyHouse] = useState<happyHouse[] | null>(null)
    const [youngHouse, setYoungHouse] = useState<youngHouse[] | null>(null)

    const handleSubmit = () =>{
        setIsSubmit(true)
    }
    useEffect(()=>{
        fetch('/행복주택.json').then(res=>res.json())
        .then(data=>setHappyHouse(data))
        
        fetch('/청년임대주택.json').then(res=>res.json())
        .then(data=>setYoungHouse(data))
    }, [])

    return(
        <div>
            <div className="relative">
                <video autoPlay loop muted playsInline width="100%" className="brightness-[.7]">
                    <source src="housing/sea.mp4"/>
                </video>  
                <div className="absolute inset-0 flex flex-col text-center items-center justify-center">
                    <p className="text-[36px] font-bold text-[#ffffff]">부산에서의 워케이션이 <br/>당신에게 좋은 파장을 일으켰나요?</p>
                    <p className="mt-8 text-[16px] text-[#ffffff]">부산으로의 정착을 고민하시는 분들께, 현실적이고 직관적인 주택 정보를 제공합니다.</p>
                </div>
            </div>
            <div className="mt-12 px-10">
                {/* poll for selecting most reasonable housing type */}
                <div className="text-center"> 
                    <h2 className="text-[36px] font-bold">가장 <span className="text-[#237cfe]">합리적</span>이게, 가장 <span className="text-[#237cfe]">편리</span>하게.</h2>
                    <p>당신의 조건에 맞는 가장 합리적인 주택 유형을 추천해드립니다. 몇 가지 정보를 입력해주세요.</p>
                    <div className="mt-12">
                        <label>직업 <span className="text-[#237cfe]">•</span></label>
                        <input type="text" placeholder="직업을 입력하세요." className="mb-5"/>
                        <label>나이(만) <span className="text-[#237cfe]">•</span></label>
                        <input type="number" placeholder="나이를 입력하세요." className="mb-5"/>
                        <br/>
                        <div className="mb-6">
                            <label>결혼 여부 <span className="text-[#237cfe]">•</span></label>
                            <select
                                className="mb-5"
                                onChange={(e)=>{setIsMarry(e.target.value)}}
                                defaultChecked
                                >
                                <option value="yes">예</option>
                                <option value="no" selected>아니오</option>
                            </select>
                            {isMarry == "yes" && <span className="ml-7">
                                <label>결혼 년차 <span className="text-[#237cfe]">•</span></label>
                                <input type="number" placeholder="결혼 년차를 입력하세요." className="mb-5"/>
                            </span>}
                            <label className="ml-6">총 자산 <span className="text-[#237cfe]">•</span></label>
                            <select
                                >
                                <option value="under_100">100,000,000원 이내</option>
                                <option value="under_345">345,000,000원 이내</option>
                                <option value="above_345">345,000,000원 초과</option>
                            </select>
                        </div>
                        <br/>
                        <button onClick={handleSubmit} className="bg-black text-white rounded-[50px] px-5 py-3 mb-10">개인 맞춤형 주택 찾기</button>
                    </div>
                </div>
            </div>
            {/* recommended housing list */}
            {isSubmit &&
            <div className="mt-10 flex flex-col text-center items-center bg-black py-20">
                <p className="text-[24px] text-white font-bold mb-5">가장 합리적인 주택 유형은 '행복 주택, 청년 임대 매입 주택'입니다.</p>
                <div className="flex">
                    <a href="https://apply.bmc.busan.kr/co/coa/selectMainView.do">
                        <div className="mr-4 text-white">
                            <p>BMC 부산 도시 공사<br/>바로 가기‣</p>
                        </div>
                    </a>
                    <div className="border-l border-[#dddddd] h-16 mr-4"></div>
                    <a href="https://apply.lh.or.kr/lhapply/main.do">
                        <div className="text-white">
                            <p>LH 공사 공고문<br/>바로 가기‣</p>
                        </div>
                    </a>
                </div>
                {/* board of housing list(행복 주택) */}
                <div className="mt-20">
                    <p className="text-white font-bold font-[16px]">부산 소재 행복 주택 리스트</p>
                    <table className="min-w-full mt-5">
                        <thead>
                            <tr className="bg-black border-b border-white font-bold text-white w-[75%]">
                                <th className="px-8 py-4">유형</th>
                                <th className="px-8 py-4">지구명</th>
                                <th className="px-8 py-4">세대수</th>
                                <th className="px-8 py-4">입주 개시</th>
                                <th className="px-8 py-4">소재지</th>
                            </tr>
                        </thead>
                        <tbody>
                            {happyHouse && happyHouse.map((data, index)=>(
                                <tr className="bg-black border-b-[0.5px] border-white text-white">
                                    <th className="px-8 py-2 font-light">{data.유형}</th>
                                    <th className="px-8 py-2 font-light">{data.지구명}</th>
                                    <th className="px-8 py-2 font-light">{data.세대수}</th>
                                    <th className="px-8 py-2 font-light">{data.입주개시}</th>
                                    <th className="px-8 py-2 font-light">{data.소재지}</th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
            {isSubmit && <div className="mt-5 flex flex-col text-center items-center bg-white py-5">
                <div>
                    <p className="font-bold font-[16px]">부산 소재 청년 매입 임대 주택 리스트</p>
                    <table className="min-w-full mt-5">
                        <thead>
                            <tr className="bg-white border-b border-black font-bold text-black w-[75%]">
                                <th className="px-8 py-4">구군</th>
                                <th className="px-8 py-4">주택명</th>
                                <th className="px-8 py-4">세대수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {youngHouse && youngHouse.map((data, index)=>(
                                <tr className="bg-white border-b-[0.5px] border-black text-black">
                                    <th className="px-8 py-2 font-light">{data.구군}</th>
                                    <th className="px-8 py-2 font-light">{data.주택명}</th>
                                    <th className="px-8 py-2 font-light">{data.세대수}</th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    )
}