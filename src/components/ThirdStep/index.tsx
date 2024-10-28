import CardHeader from "@ui/CardHeader.tsx";
import {CARD_CONTENT, DATA_LIST_ITEMS} from "@/data";
import {List} from "@ui/List.tsx";
import Card from "@ui/Card.tsx";

export default function ThirdStep() {
    return (
        <Card classWrapper="p-[64px_40px]">
            <>
                <CardHeader {...CARD_CONTENT[2]} />
                <List dataItems={DATA_LIST_ITEMS[1]}/>
            </>
        </Card>
    );
}
