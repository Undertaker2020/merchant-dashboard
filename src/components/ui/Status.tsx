import SubmitButton from "@ui/SubmitButton.tsx";
import img from "@assets/Shopify Avatar.png"
import check from "@assets/Check Mark.png"
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
export default function Status({title, text, buttonText, linkText}: {title: string, text?: string, buttonText: string, linkText?: string}) {
    const activeComponent = useSelector((state: RootState) => state.step.activeComponent);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <img src={activeComponent === "Intermediate4" ? check : img} alt="" className="w-fit h-fit mb-8"/>
            <h3 className="text-center font-semibold text-[20px] text-[#134267] leading-[100%] mb-2">{title}</h3>
            <p className="text-center text-[14px] text-[#4F637D] leading-[150%] mb-4">{text}</p>
            <SubmitButton text={buttonText} link={linkText}/>
        </div>
    );
}