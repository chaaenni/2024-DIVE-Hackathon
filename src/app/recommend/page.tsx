'use client'

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';

interface mapContainerStyle{
    width: string;
    height: string;
}

interface leisureData{
    "id": number;
    "name": string;
    "category": string;
    "district": string;
    "detail_district": string;
    "longitude": number;
    "latitude": number;
    "toilet": string;
    "nursing": string;
    "locker": string;
}



export default function Recommend(){
    const containerStyle:mapContainerStyle = {
        width: '700px',
        height: '950px'
    }
    const center = {
        lat: 35.172418, //latitude(위도)
        lng: 129.147461, //longitude(경도)
    }
    const type = ['휴식이 필요한 뚜벅이 갓생러', '액티비티 지향 드라이버']
    // 뚜벅이일 경우 자전거 경로 표시 및 근처 자전거 대여소 위치 표시 
    // 드라이버일 경우 자동차 경로 표시
    const remain_day = [8, 10]

    //for toggle category button
    const [isLeisure, setIsLeisure] = useState(false)
    const [isFood, setIsFood] = useState(false)
    const [isCulture, setIsCulture] = useState(false)
    const [isShop, setIsShop] = useState(false)
    const [isRelax, setIsRelax] = useState(false)
    const [isWork, setIsWork] = useState(false)

    const clickLeisure = () => {
        setIsLeisure(!isLeisure)
    }

    //for save data for each category: for persona0(enterprise employee with need of relax)
    const [leisure0, setLeisure0] = useState<leisureData[] | null>(null)
    const [food0, setFood0] = useState(null)
    const [culture0, setCulture0] = useState(null)
    const [shop0, setShop0] = useState(null)
    const [relax0, setRelax0] = useState(null)
    const [work0, setWork0] = useState(null)

    //for save data for each category: for persona1(freelancer with need of activity and networking)
    const [leisure1, setLeisure1] = useState<leisureData[] | null>(null)
    const [food1, setFood1] = useState(null)
    const [culture1, setCulture1] = useState(null)
    const [shop1, setShop1] = useState(null)
    const [relax1, setRelax1] = useState(null)
    const [work1, setWork1] = useState(null)



    useEffect(()=>{
        fetch('/leisure_data0.json').then(res=>res.json())
        .then(data=>setLeisure0(data))
    }, [])
    
    return(
        <div className='bg-white flex'>
            <div className='fixed float-left w-[50%] top-0 left-0 inline'>
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
                    <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}>
                        {isLeisure && leisure0 && leisure0.map((data, index)=>(
                            <MarkerF 
                                position={{lat:data.latitude, lng:data.longitude}}
                            />      
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className='w-[50%]'></div>
            <div className='float-right w-[55%] flex flex-col px-8 py-10'>
                <div className='clear-both'> {/*title*/}
                    <h2 className='text-[28px] font-bold'>{type[0]}, 채연님!</h2>
                    <h4 className='mt-3 text-[20px] font-bold text-[#999999]'>남은 워케이션 기간: {remain_day[0]} day</h4>
                    <div className='mt-5'></div>
                    <p>오늘은 어떤 하루를 보내고 싶으신가요? 채연님을 위한 워케이션 계획을 세워드립니다.</p>
                </div>
                <div className='flex mt-10'>  {/*category button*/}
                    <button className={`mr-3 px-5 py-3 rounded-[20px] ${isLeisure? 'bg-[#ffffff] text-[#237cfe] font-bold border-[2px] border-[#237cfe]': 'bg-[#237cfe] text-[#ffffff] border-[#ffffff]'}`} onClick={clickLeisure}>레저 / 액티비티</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[20px] text-[#ffffff]'>맛집 탐방</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[20px] text-[#ffffff]'>문화 생활</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[20px] text-[#ffffff]'>쇼핑</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[20px] text-[#ffffff]'>휴식 / 릴렉스</button>
                    {/* 휴식/릴렉스에는  */}
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[20px] text-[#ffffff]'>워커홀릭</button>
                </div> 
                {isLeisure && <div className='mt-10 text-[20px] font-bold text-[#237cfe]'>추천 장소</div>}
                <div className='grid grid-cols-2 gap-3 mt-5'> {/*detail places*/}
                    {isLeisure && leisure0 && leisure0.map((data, index)=>(
                        <div className='rounded-[20px] shadow overflow-hidden'>
                            <img className='w-full h-[200px] object-cover' src={`/detail_place/leisure_data0/${data.id}.jpg`}/>
                            <div className='mt-2 px-8 py-3'>
                                <h2 className='text-[20px] font-bold'>{data.name}</h2>
                                <p className='text-[14px] text-[#237cfe]'>{data.category}</p>
                                <p className='text-[14px]'><span>{data.district}</span> {data.detail_district}</p>
                                <div className='mt-3 mb-5'><span className='bg-[#59B0FF] rounded-[50px] text-[9px] text-white px-3 py-2 font-bold'>화장실: {data.toilet}</span> <span className='bg-[#59B0FF] rounded-[50px] text-[9px] text-white px-3 py-2 font-bold'>수유실: {data.nursing}</span> <span className='bg-[#59B0FF] rounded-[50px] text-[9px] text-white px-3 py-2 font-bold'>물품보관소: {data.locker}</span></div>

                            </div>
                        </div>
                    ))
                    }
                </div>
                {isLeisure && <div className='mt-10 text-[20px] font-bold text-[#237cfe]'>비추천 장소</div>}

            </div>
        </div>
    )
}