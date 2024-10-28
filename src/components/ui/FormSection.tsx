import React, {useState} from "react";
import eyeOff from "@assets/icon_eye-off.svg"
import eye from "@assets/icon_eye.svg"

export const FormSection: React.FC<{
    id: string;
    typeInput: string;
    placeholder: string;
    labelText: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}> = ({id, typeInput, placeholder, labelText, value, onChange, error}) => {
    const [icon, setIcon] = useState(eyeOff);
    const [showPassword, setShowPassword] = useState(false)
    const handleToggle = () => {
        if (icon === eyeOff) {
            setShowPassword(!showPassword);
            setIcon(eye);
        } else {
            setShowPassword(!showPassword);
            setIcon(eyeOff)
        }
    }
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}
                   className="flex pr-1 items-center justify-between text-[12px] leading-[18px] font-medium text-[#4F637D]">
                {labelText}{error &&
                        <p className="text-red-500">{error}</p>}</label>
            <div className="pl-[17px] pr-2.5 w-full h-[45px] rounded-[4px] bg-[#F8F9FC] flex items-center
                            justify-between gap-2.5">
                <input id={id} name={id} placeholder={placeholder} type={showPassword ? "text" : typeInput} value={value}
                       onChange={onChange} className="outline-none w-full text-[16px] bg-transparent leading-6
                       input-autofill"
                       autoComplete="current-password"/>
                {
                    typeInput === "password" ?
                        <img src={icon} alt="" onClick={handleToggle} className="cursor-pointer"/>
                        : null
                }
            </div>

        </div>
    )
}