'use client'

import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';

interface mapContainerStyle{
    width: string;
    height: string;
}



export default function Recommend(){
    const containerStyle:mapContainerStyle = {
        width: '700px',
        height: '900px'
    }
    const center = {
        lat: 35.14246667, //latitude(위도)
        lng: 129.115375, //longitude(경도)
    }
    const type = ['휴식이 필요한 뚜벅이 갓생러', '액티비티 지향 드라이버']
    // 뚜벅이일 경우 자전거 경로 표시 및 근처 자전거 대여소 위치 표시 
    // 드라이버일 경우 자동차 경로 표시
    const remain_day = [8, 10]

    const [leisure, setLeisure] = useState(false)
    const [food, setFood] = useState(false)
    const [culture, setCulture] = useState(false)
    const [shop, setShop] = useState(false)
    const [relax, setRelax] = useState(false)
    const [work, setWork] = useState(false)

    const clickLeisure = () => {
        setLeisure(!leisure)

    }
    
    return(
        <div className='bg-white flex'>
            <div>
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
                    <GoogleMap 
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        {leisure
                            // <MarkerF
                            //     position={}
                            //     icon={}

                            // />
                        }
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className='flex flex-col px-8 py-10'>
                <div>
                    <h2 className='text-[28px] font-bold'>{type[0]}, 채연님!</h2>
                    <h4 className='mt-3 text-[20px] font-bold text-[#999999]'>남은 워케이션 기간: {remain_day[0]} day</h4>
                    <div className='mt-5'></div>
                    <p>오늘은 어떤 하루를 보내고 싶으신가요? 채연님을 위한 워케이션 계획을 세워드립니다.</p>
                </div>
                <div className='flex mt-10'>
                    <button className={`mr-3 px-5 py-3 rounded-[10px] ${leisure? 'bg-[#ffffff] text-[#237cfe] font-bold border-[2px] border-[#237cfe]': 'bg-[#237cfe] text-[#ffffff] border-[#ffffff]'}`} onClick={clickLeisure}>레저 / 액티비티</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[10px] text-[#ffffff]'>맛집 탐방</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[10px] text-[#ffffff]'>문화 생활</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[10px] text-[#ffffff]'>쇼핑</button>
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[10px] text-[#ffffff]'>휴식 / 릴렉스</button>
                    {/* 휴식/릴렉스에는  */}
                    <button className='mr-3 px-5 py-3 bg-[#237cfe] rounded-[10px] text-[#ffffff]'>워커홀릭</button>
                </div> 
            </div>
        </div>
    )
}