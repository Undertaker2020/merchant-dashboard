import FormContainer from "@components/FormContainer/FormContainer.tsx";
import ProgressIndicator from "@components/ProgressIndicator/ProgressIndicator.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import FinalStep from "@components/FinalStep";

function App() {
    const step = useSelector((state: RootState) => state.step.step);
    return (
        <main className="w-full h-screen flex mx-auto">
            {step === 3 ?
                <FinalStep/>
            :
                <>
                    <ProgressIndicator/>
                    <FormContainer />
                </> }
        </main>
    )
}

export default App
