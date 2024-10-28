import {JSX} from "react";


export default function Card({children, classWrapper}: { children: JSX.Element, classWrapper?: string }) {
    return (
        <div className={"w-[480px] h-fit bg-white rounded-lg flex flex-col drop-shadow-lg " + classWrapper}>
            {children}
        </div>
    );
}
