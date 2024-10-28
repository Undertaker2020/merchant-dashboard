import { useDispatch, useSelector } from "react-redux";
import { markDone, markSuccessful } from "@/store/progressSlice";
import {nextStep, setActiveComponent} from "@/store/stepSlice";
import { DATA_PROGRESS } from "@/data";
import { RootState } from "@/store/store.ts";
import google from "@assets/icon_google.svg";
import React from "react";

export default function SubmitButton({ text, link }: { text: string; link?: string }) {
    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.step.step);
    const activeComponent = useSelector((state: RootState) => state.step.activeComponent);

    const onSubmit = () => {

        if (activeComponent === 'Intermediate2') {
            dispatch(nextStep());
            dispatch(markDone(DATA_PROGRESS[step].title));
        }

        if (activeComponent === 'DefaultComponent') {
            dispatch(setActiveComponent({ component: 'Intermediate1', isIntermediate: false }));
        } else if (activeComponent === 'Intermediate1') {
            dispatch(markSuccessful(DATA_PROGRESS[step].title));
            dispatch(setActiveComponent({ component: 'Intermediate2', isIntermediate: false }));
        }
        if (activeComponent === 'Intermediate3'){
            dispatch(setActiveComponent({ component: 'Intermediate4', isIntermediate: false }));
        }
    };
    const onUnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (activeComponent === 'DefaultComponent') {
            dispatch(setActiveComponent({ component: 'Intermediate3', isIntermediate: false }));
        }
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <button
                className={`${step === 2 ? "text-white h-fit p-[1px] flex justify-start items-center gap-24 bg-[#5383EC] " +
                    "rounded-[2px]" : "w-full h-[43px] bg-[#32ABF2] rounded-lg text-white font-medium text-[14px] leading-[21px]"}`}
                onClick={onSubmit}
            >
                {step === 2 && (
                    <div className="size-12 flex justify-center items-center bg-white rounded-[1px]">
                        <img src={google} alt=""/>
                    </div>
                )}
                {text}
            </button>
            <a  href="" className="w-full text-center text-[#4F637D] text-[12px] leading-[18px]"
                onClick={onUnSubmit}>
                {link}
            </a>
        </div>
    );
}
