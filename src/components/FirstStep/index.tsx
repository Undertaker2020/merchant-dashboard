import CardHeader from "@ui/CardHeader.tsx";
import {CARD_CONTENT} from "@/data";
import Form from "@ui/Form.tsx";
import Card from "@ui/Card.tsx";

export default function FirstStep() {
    return (
        <Card classWrapper="p-[64px_40px]">
            <>
                <CardHeader {...CARD_CONTENT[0]} />
                <Form/>
            </>
        </Card>
    );
}
