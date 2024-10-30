import CardHeader from "@ui/CardHeader.tsx";
import {CARD_CONTENT, DATA_LIST_ITEMS} from "@/data";
import {List} from "@ui/List.tsx";
import Card from "@ui/Card.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import Select from "@ui/Select.tsx";
import Status from "@ui/Status.tsx";
import SpinnerLoading from "@ui/SpinnerLoading.tsx";

export default function ThirdStep() {
    const activeComponent = useSelector((state: RootState) => state.step.activeComponent);
    return (
        <Card classWrapper="p-[64px_40px]">
            {activeComponent === "DefaultComponent" ?
                <>
                    <CardHeader {...CARD_CONTENT[2]} />
                    <List dataItems={DATA_LIST_ITEMS[1]}/>
                </> :
                activeComponent === "Intermediate3" ?
                    <Select buttonText="Submit" link="Connect" linkText="Actually use Gmail?"
                            descriptionText="Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform."
                            titleText="Don’t use Gmail?"/>
                    : activeComponent === "Intermediate4" ?
                        <Status title="Response received"
                                text="Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform."
                                buttonText="Done"
                        />
                        : <SpinnerLoading/>
            }

        </Card>
    );
}
