import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link, Routes } from 'react-router-dom';
import logo from "../images/mar_logo.png"
import "../styles/404.scss"

export default function NotFound() { 
    return ( 
        <>
        <div id='container'>
            <p>404</p>
            <p>Apologies</p>
            <p>We could not find the page you were looking for.</p>
        </div>
        </>
    )
}