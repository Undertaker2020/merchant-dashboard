export const Onboarding = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex p-4 gap-4 text-[#96CAF7] bg-[#134267] rounded-lg">
                <span className=" text-[32px] font-bold">5X</span>
                <p className="text-[14px]">Acquiring a new customer is 5x more <br/> costly than making an unhappy customer <br/>happy
                </p>
            </div>
            <div className="dotts flex gap-3">
                <div className="dot size-2 bg-[#96CAF7] rounded-full"></div>
                <div className="dot size-2 bg-[#134267] rounded-full"></div>
                <div className="dot size-2 bg-[#134267] rounded-full"></div>
                <div className="dot size-2 bg-[#134267] rounded-full"></div>
                <div className="dot size-2 bg-[#134267] rounded-full"></div>
            </div>
        </div>
    )
}