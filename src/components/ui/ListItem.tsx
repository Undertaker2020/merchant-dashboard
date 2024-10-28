import check from "@assets/icon_check_green.svg"

export default function ListItem({title, description}: {title: string; description: string}) {
    return (
        <div>
            <li className="flex gap-2 pr-[58px]">
                <img src={check} alt="" className="size-6 p-1"/>
                <div className="flex-col gap-1">
                    <h4 className="font-medium text-[#134267] text-[14px] leading-[21px]">{title}</h4>
                    <p className="text-[12px] leading-[18px] text-[#4F637D]">{description}</p>
                </div>
            </li>
        </div>
    );
}
