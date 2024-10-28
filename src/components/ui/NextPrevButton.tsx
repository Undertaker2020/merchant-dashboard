import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "@/store/stepSlice";

export default function NextPrevButton() {
    const dispatch = useDispatch();
    return (
        <div className="absolute -bottom-[81px] w-full h-[33px] flex justify-between items-center text-[#93A8C1]">
            <button
                className="w-[83px] bg-[#134267] h-full rounded flex justify-center items-center gap-2"
                onClick={() => dispatch(prevStep())}
            >
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9.5L1 5.5L5 1.5" stroke="#93A8C1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </button>
            <button
                className="w-[83px] bg-[#134267] h-full rounded flex justify-center items-center gap-2"
                onClick={() => dispatch(nextStep())}
            >
                Next
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9.5L5 5.5L1 1.5" stroke="#5D7FA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
