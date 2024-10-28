import React from "react";
import check from "@assets/icon_check.svg";

export const ProgressItem: React.FC<{ title: string, active: boolean, successful: boolean, done: boolean }> =
    ({
       title,
       active,
       successful,
       done
    }) => {

    return (
        <li className="flex items-center gap-4">
            <div
                className={`flex justify-center items-center progress-line ${active ? "active" : ""} ${successful ? "successful" : ""} ${done ? "done" : ""}`}>
                {successful || done ? <img src={check} alt="check"/> : null}
            </div>
            <span className={active || done ? "active" : "text-[#5D7FA3]"}>{title}</span>
        </li>
    )
}