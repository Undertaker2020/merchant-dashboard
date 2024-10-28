import LogoChad from "@assets/Chad.svg";
import React from "react";

export default function CardHeader({title, description}: {title: string, description: string}) {
    return (
        <React.Fragment>
            <div className="logo h-fit flex items-center gap-0.5">
                <img src={LogoChad} alt="LogoChad"/>
                <span className="font-bold text-[24px] leading-8 text-[#20496C]">Chad</span>
            </div>
            <h2 className="pt-6 text-[24px] text-[#20496C] font-semibold w-full">
                {title}
            </h2>
            <p className="text-[14px] text-[#4F637D] pt-2">
                {description}
            </p>
        </React.Fragment>
    );
}