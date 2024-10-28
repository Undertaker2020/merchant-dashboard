import ListItem from "@ui/ListItem.tsx";
import SubmitButton from "@ui/SubmitButton.tsx";
import { DataListItem } from "@/data"
import React from "react"

interface ListProps {
    dataItems: DataListItem;
}

export const List: React.FC<ListProps> = ({ dataItems }) => {
    return (
        <div className="flex flex-col justify-between">
            <ul className="w-full h-fit flex flex-col gap-4 my-8">
                {dataItems.list.map((item, index) => (
                    <ListItem {...item} key={index} />
                ))}
            </ul>
            <SubmitButton {...dataItems.button[0]} />
        </div>
    );
}




