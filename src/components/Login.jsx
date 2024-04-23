import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
        
        </>
    )
}