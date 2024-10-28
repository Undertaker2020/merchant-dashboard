import "./ProgressIndicator.css"
import {Progress} from "@ui/Progress.tsx";
import {Onboarding} from "@ui/Onboarding.tsx";


export default function ProgressIndicator() {
    return (
        <div className="w-[568px] h-screen bg-gradient-to-br from-[#19476C] to-[#0D3251]
                        flex flex-col items-center justify-end gap-[253px] pb-14">
            <Progress />
            <Onboarding/>
        </div>
    );
}





