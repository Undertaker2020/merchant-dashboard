import {useState} from "react";
import dropArrow from "@assets/icon_chevron-down.svg";

interface DropdownProps {
    options: string[];
    label: string;
}

export const Dropdown: React.FC<DropdownProps> = ({options, label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const filteredOptions = selectedValue
        ? options.filter(option => option !== selectedValue)
        : options;

    return (
        <div className="w-full relative inline-block text-left">
            <button id="dropdown"
                    className="w-full px-4 py-2 text-[#C3CAD5] bg-[#F8F9FC] text-left rounded-md flex items-center justify-between"
                    onClick={handleToggle}
            >
                {selectedValue || label}
                <img src={dropArrow} alt="drop arrow"/>
            </button>
            {isOpen && (
                <ul className="w-full absolute mt-2 border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                    {filteredOptions.map((option) => (
                        <li
                            key={option}
                            className="px-4 py-2 bg-white cursor-pointer text-[#C3CAD5] hover:bg-blue-100"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};