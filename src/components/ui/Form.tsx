import React, { useEffect, useState, useCallback } from "react";
import { FormSection } from "@ui/FormSection.tsx";
import { DATA_FORM } from "@data/index.ts";
import { useDispatch } from 'react-redux';
import {markActive, markDone, markSuccessful} from '@/store/progressSlice';
import { nextStep } from "@/store/stepSlice.ts";

type FormFields = {
    email: string;
    name: string;
    password: string;
};

export default function Form() {
    const [formValues, setFormValues] = useState<FormFields>({
        email: "",
        name: "",
        password: ""
    });
    const [errors, setErrors] = useState<Partial<FormFields>>({});
    const dispatch = useDispatch();
    dispatch(markActive("Welcome"))
    const validate = useCallback((): boolean => {
        const newErrors: Partial<FormFields> = {};
        if (!formValues.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formValues.name) {
            newErrors.name = "Name cannot be empty.";
        }
        if (formValues.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formValues]);

    useEffect(() => {
        const isFormReady = formValues.email !== "" &&
            formValues.name !== "" &&
            formValues.password.length >= 8;

        if (isFormReady && validate()) {
            dispatch(markSuccessful("Welcome"));
        }
    }, [formValues, dispatch, validate]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validate()) {
            dispatch(markDone("Welcome"));
            dispatch(nextStep());
            console.log(JSON.stringify(formValues, null, 2));
            dispatch(markActive("Connect your Shopify store"))
        } else {
            console.log("Validation failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 mt-8">
            {
                DATA_FORM.map((item, index) => (
                    <FormSection {...item} value={formValues[item.id]} error={errors[item.id]}
                                 onChange={handleChange} key={index}/>
                ))
            }
            <button className="w-full h-[43px] bg-[#32ABF2] text-white rounded-lg">Continue</button>
            <span className="w-full text-center text-[12px] text-[#4F637D] leading-[18px]">
                Already have an account? <a href="#" className="text-[#32ABF2]">Login</a>
            </span>
        </form>
    )
}
