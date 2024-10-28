import CardHeader from "@ui/CardHeader.tsx";
import SubmitButton from "@ui/SubmitButton.tsx";
import {Dropdown} from "@ui/Dropdown.tsx";



export default function Select() {
    const options = ['Platform 1', 'Platform 2', 'Platform 3'];
    return (
        <>
            <CardHeader title="Don’t use Shopify?"
                        description="Chad Beta is currently only available on Shopify. We’ll send you an email
                        when Chad becomes available on your platform."/>
            <div className="py-9">
                <Dropdown options={options} label="Select platform"/>
            </div>
            <SubmitButton text="Submit" link="Actually use Shopify? Connect"/>
        </>

    );
}


