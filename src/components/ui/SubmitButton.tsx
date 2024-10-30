import { useDispatch, useSelector } from "react-redux";
import {markActive, markDone, markSuccessful} from "@/store/progressSlice";
import {nextStep, setActiveComponent} from "@/store/stepSlice";
import { DATA_PROGRESS } from "@/data";
import { RootState } from "@/store/store.ts";
import google from "@assets/icon_google.svg";
import React from "react";

export default function SubmitButton({ text, link, linkText }: { text: string; link?: string; linkText?: string }) {
    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.step.step);
    const activeComponent = useSelector((state: RootState) => state.step.activeComponent);
    const onSubmit = () => {

        if (activeComponent === 'Intermediate2' && step === 1) {
            dispatch(nextStep());
            dispatch(markDone(DATA_PROGRESS[step].title));
            dispatch(setActiveComponent('DefaultComponent'));
            dispatch(markActive(DATA_PROGRESS[step+1].title))
        } else if (activeComponent === 'DefaultComponent' && step === 2) {
            dispatch(markSuccessful(DATA_PROGRESS[step].title));
            setTimeout(()=> dispatch(nextStep()), 7000)
            dispatch(markDone(DATA_PROGRESS[step].title));
        }

        if (activeComponent === 'DefaultComponent') {
            dispatch(setActiveComponent('Intermediate1'));
        } else if (activeComponent === 'Intermediate1') {
            dispatch(setActiveComponent('Spinner'));
            setTimeout(()=>{
                dispatch(setActiveComponent('Intermediate2'));
                dispatch(markSuccessful(DATA_PROGRESS[step].title));
            }, 5000)
        } else if (activeComponent === 'Intermediate3'){
            dispatch(setActiveComponent('Intermediate4'));
        } else if(activeComponent === 'Intermediate4'){
            dispatch(setActiveComponent('DefaultComponent'));
        }
    };
    const onUnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (activeComponent === 'DefaultComponent') {
            dispatch(setActiveComponent('Intermediate3'));
        } else if(activeComponent === 'Intermediate3' || activeComponent === 'Intermediate1' || activeComponent === 'Intermediate2'){
            dispatch(setActiveComponent('DefaultComponent'));
        }
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <button
                className={`cursor-pointer ${step === 2 && activeComponent === 'DefaultComponent' ? "text-white h-fit p-[1px] flex justify-start items-center gap-24 bg-[#5383EC] " +
                    "rounded-[2px]" : "w-full h-[43px] bg-[#32ABF2] rounded-lg text-white font-medium text-[14px] leading-[21px] "}`}
                onClick={onSubmit}
            >
                {step === 2 && activeComponent === 'DefaultComponent' && (
                    <div className="size-12 flex justify-center items-center bg-white rounded-[1px]">
                        <img src={google} alt=""/>
                    </div>
                )}
                {text}
            </button>
            <a  href="" className="w-full text-center text-[#4F637D] text-[12px] leading-[18px]"
                onClick={onUnSubmit}>
                {linkText}{link&&<span className="text-[#469FD2]">{` ${link}`}</span>}
            </a>
        </div>
    );
}
