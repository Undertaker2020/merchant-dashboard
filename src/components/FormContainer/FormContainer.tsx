import bg from "@assets/Tileable doodle.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FirstStep from "@components/FirstStep";
import SecondStep from "@components/SecondStep";
import ThirdStep from "@components/ThirdStep";


export default function FormContainer() {
    // Получаем текущее значение step из Redux
    const step = useSelector((state: RootState) => state.step.step);

    function handleStepChange(step: number) {
        switch (step) {
            case 0:
                return (
                    <FirstStep/>
                );
            case 1:
                return (
                    <SecondStep/>
                );
            case 2:
                return (
                    <ThirdStep/>
                );
        }
    }

    return (
        <div className="w-full h-screen relative flex justify-center items-center">
            <img src={bg} alt="bg" className="absolute w-full h-full object-cover -z-10" />
            {handleStepChange(step)}
        </div>
    );
}
