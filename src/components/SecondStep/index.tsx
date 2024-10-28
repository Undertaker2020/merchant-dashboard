import CardHeader from "@ui/CardHeader.tsx";
import {CARD_CONTENT, DATA_LIST_ITEMS} from "@/data";
import {List} from "@ui/List.tsx";
import Card from "@ui/Card.tsx";
import Status from "@ui/Status.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import Select from "@ui/Select.tsx";

export default function SecondStep() {
    // Отримання активного компонента з Redux
    const activeComponent = useSelector((state: RootState) => state.step.activeComponent);

    return (
        <Card classWrapper={`p-[64px_40px] ${activeComponent !== 'DefaultComponent' ? "p-[126px_85px]" : ""} 
        ${activeComponent === 'Intermediate3' ? "p-[43px_40px]" : ""} ${activeComponent === 'Intermediate4' ? "p-[126px_85px]" : ""}`}>
            {activeComponent === 'DefaultComponent' ? (
                <>
                    <CardHeader {...CARD_CONTENT[1]} />
                    <List dataItems={DATA_LIST_ITEMS[0]}/>
                </>
            ) : activeComponent === 'Intermediate1' ? (
                <>
                    <Status title="[STORE-NAME] already connected" buttonText="Continue"
                            linkText="Not your store? Connect another one"/>
                </>
            ) : activeComponent === 'Intermediate2' ? (
                <>
                    <Status title="Store connected"
                            text="Chad is now able to manage customer support requests for [STORE-NAME]."
                            buttonText="Continue" linkText="Wrong store? Connect another one"/>
                </>
            ) : activeComponent === 'Intermediate3' ? (
                <Select/>
            ) : activeComponent === 'Intermediate4' ?
                <Status title="Response received"
                        text="Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform."
                        buttonText="Done"
                />
                : <></>}
        </Card>
    );
}