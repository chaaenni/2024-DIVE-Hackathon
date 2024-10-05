
import Image from "next/image"

export default function Magazine() {
  
  return (
    <>
      <div>
        <div className="relative w-full h-[700px]">
          <Image src="/community2.png" layout="fill" objectFit="cover" alt="sea" className="brightness-[.7]" />
          <div className="absolute inset-0 flex flex-col text-center items-center justify-center">
            <p className="text-[36px] font-bold text-[#ffffff]">부산에서의 워케이션이 <br/>당신에게 좋은 파장을 일으켰나요?</p>
            <p className="mt-8 text-[16px] text-[#ffffff]">부산으로의 정착을 고민하시는 분들께, 현실적이고 직관적인 주택 정보를 제공합니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}