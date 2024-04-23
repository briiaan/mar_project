import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import logo from "../images/mar_logo.png"
import "../styles/homepage.scss"

export default function Homepage() {

    return (
        <>
        <div id='container'>
            <div id='greeting-container'>
                <div id='greeting'></div>
                <div id='circle-statement'>
                    <div id='oval'>
                        <p>Become Financially Stable Today.</p>
                    </div>
                </div>
            </div>
            <div id='company-slogan'>
                <div id='slogan-container-grid'>
                    <p>Save more by <b>spending smarter</b> with <img src={logo}></img></p>
                </div>
            </div>
            <div id='button-container'>
                <div id='login'>
                    <p>Login</p>
                </div>
                <div>
                    <p>Create an Account</p>
                </div>
            </div>
        </div>
        </>
    )
}