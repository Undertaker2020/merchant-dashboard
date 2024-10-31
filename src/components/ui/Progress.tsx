import {ProgressItem} from "@ui/ProgressItem.tsx";
import {useEffect} from "react";
import NextPrevButton from "@ui/NextPrevButton.tsx";
import {useSelector, useDispatch} from "react-redux";
import { setStep } from "@/store/stepSlice";
import { RootState } from "@/store/store.ts";



export const Progress = () => {
    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.step.step);
    const progress = useSelector((state: RootState) => state.progress);

    useEffect(() => {
        dispatch(setStep(step));
    }, [step, dispatch]);
    return (
        <div className="relative flex flex-col">
            <ul className="w-fit flex flex-col gap-12">
                {
                    progress.map((item, index) => (
                        <ProgressItem {...item} key={index}  />
                    ))
                }
            </ul>
            {step >= 1 || progress[step+1].active ? <NextPrevButton/> : null}
        </div>
    );
}
