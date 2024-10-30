import CardHeader from "@ui/CardHeader.tsx";
import SubmitButton from "@ui/SubmitButton.tsx";
import {Dropdown} from "@ui/Dropdown.tsx";


export default function Select({titleText, descriptionText, buttonText, linkText, link}: {
    link: string,
    buttonText: string,
    linkText?: string,
    titleText: string,
    descriptionText: string,
}) {
    const options = ['Platform 1', 'Platform 2', 'Platform 3'];
    return (
        <>
            <CardHeader title={titleText}
                        description={descriptionText}/>
            <div className="py-9 flex flex-col gap-2">
                <p className="font-medium text-[#4F637D] text-[12px] leading-[18px]">
                    Platform
                </p>
                <Dropdown options={options} label="Select platform"/>
            </div>
            <SubmitButton text={buttonText} linkText={linkText} link={link}/>
        </>

    );
}


