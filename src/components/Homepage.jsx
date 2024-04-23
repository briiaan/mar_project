import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import logo from "../images/mar_logo.png"
import "../styles/homepage.scss"

export default function Homepage() {

    return (
        <>
        <div id='container'>
            <div id='interactive-container'>
            <div id='greeting-container'>
                <div id='circle-statement'>
                    <div id='oval'>
                        <p>Become Financially Stable Today.</p>
                    </div>
                </div>
            </div>
            <div id='company-slogan'>
                <div id='slogan-container-grid'>
                    <p>Save more by <p id='slogan_bold'>spending smarter</p> with <img src={logo}></img></p>
                </div>
            </div>
            <div id='buttons-container'>
                <div id='login'>
                    <p>Login</p>
                </div>
                <div id='signup'>
                    <p>Create an Account</p>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}