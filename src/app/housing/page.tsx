export default function Housing(){
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
            <div className="mt-10 px-8 px-10">
                안녕
            </div>
        </div>
    )
}