import React, { useState } from 'react';
import logo from "../images/mar_logo.png"
import "../styles/homepage.scss"
import Login from './Login';
import Signup from './Signup';
import { Outlet, Link } from 'react-router-dom';

export default function Homepage() {

    return (
        <>
        <div id='container-homepage'>
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
                <Link to="/login">
                <div id='login'>
                    <p>Login</p>
                </div>
                </Link>
                <Link to="/signup">
                <div id='signup'>
                    <p>Create an Account</p>
                </div>
                </Link>
            </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}