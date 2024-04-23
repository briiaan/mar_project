import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
        <div style={{width: 408, height: 792, position: 'relative', background: '#4868CB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
        <div style={{left: 60, top: 209, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Username</div>
        <div style={{left: 60, top: 303, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Password</div>
        <div style={{width: 288, height: 42, left: 60, top: 415, position: 'absolute', background: '#0085FF', borderRadius: 35, overflow: 'hidden'}}>
        <div style={{left: 117, top: 16, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 49.85, letterSpacing: 0.30, wordWrap: 'break-word'}}>SIGN IN</div>
        </div>
        <div style={{left: 65, top: 513, position: 'absolute', color: '#888888', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Don’t have an account? </div>
        <div style={{left: 270, top: 513, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>SIGN UP</div>
        <div style={{width: 288, height: 42, left: 60, top: 235, position: 'absolute', background: '#FAFAFA', borderRadius: 30}} />
        <div style={{width: 288, height: 42, left: 59, top: 329, position: 'absolute', background: '#FAFAFA', borderRadius: 30, overflow: 'hidden'}}>
        <div style={{width: 24, height: 24, left: 247, top: 9, position: 'absolute'}}>
        <div style={{width: 22, height: 16, left: 1, top: 4, position: 'absolute', border: '2px #011729 solid'}}></div>
        <div style={{width: 6, height: 6, left: 9, top: 9, position: 'absolute', border: '2px #011729 solid'}}></div>
        </div>
        </div>
        <img style={{width: 150, height: 41, left: 128, top: 124, position: 'absolute'}} src="https://via.placeholder.com/150x41" />
        </div>
        </>
    )
}