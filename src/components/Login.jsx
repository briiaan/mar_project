import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from "../images/mar_logo.png"
import "../styles/login.scss";

export default function Login() {
    const { register } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
          <div class="container">
            <div>
            <div class="logo">
                <img src={logo} alt="Logo"/>
            </div>
        <form action="#">
         <div class="form-group">
            <p for="username">Email</p>
            <input type="email" id="username" placeholder="Enter your email"/>
        </div>
        <div class="form-group">
          <p for="password">Password</p>
          <input type="password" id="password" placeholder="Enter your password"/>
        </div>
            <button type="submit" class="btn">Sign In</button>
        </form>
            <div class="signup-link">
            <p>Don't have an account?</p>
        <button type="button" class="signup-btn">Sign Up</button>
            </div>
            </div>
        </div>
        </>
    )
}