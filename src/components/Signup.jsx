import React, { useState } from 'react';

export default function Signup() {

    return (
        <>
        <div style={{width: 408, height: 792, position: 'relative', background: '#4868CB', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
  <div style={{left: 63, top: 123, position: 'absolute', color: 'white', fontSize: 26.72, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 111.58, letterSpacing: 0.53, wordWrap: 'break-word'}}>Create your account</div>
  <div style={{left: 96, top: 650, position: 'absolute', color: '#888888', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Have an account? </div>
  <div style={{left: 257, top: 650, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>SIGN IN</div>
  <div style={{width: 288, height: 42, left: 69, top: 587, position: 'absolute', background: '#0085FF', borderRadius: 35, overflow: 'hidden'}}>
    <div style={{left: 114, top: 16, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 49.85, letterSpacing: 0.30, wordWrap: 'break-word'}}>SIGN UP</div>
  </div>
  <div style={{width: 288, height: 66, left: 71, top: 267, position: 'absolute'}}>
    <div style={{width: 288, height: 42, left: 0, top: 24, position: 'absolute', background: '#FAFAFA', borderRadius: 30, overflow: 'hidden'}}>
      <div style={{left: 15, top: 16, position: 'absolute', opacity: 0.50, color: '#888888', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.30, wordWrap: 'break-word'}}>ex: jon.smith@email.com</div>
    </div>
    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Email</div>
  </div>
  <div style={{width: 288, height: 66, left: 69, top: 362, position: 'absolute'}}>
    <div style={{width: 288, height: 42, left: 0, top: 24, position: 'absolute', background: '#FAFAFA', borderRadius: 30, overflow: 'hidden'}}>
      <div style={{left: 15, top: 18, position: 'absolute', opacity: 0.50, color: '#888888', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.30, wordWrap: 'break-word'}}>*********</div>
      <div style={{width: 24, height: 24, left: 252, top: 11, position: 'absolute'}}>
        <div style={{width: 22, height: 16, left: 1, top: 4, position: 'absolute', border: '2px #011729 solid'}}></div>
        <div style={{width: 6, height: 6, left: 9, top: 9, position: 'absolute', border: '2px #011729 solid'}}></div>
      </div>
    </div>
    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Password</div>
  </div>
  <div style={{width: 288, height: 66, left: 69, top: 457, position: 'absolute'}}>
    <div style={{width: 288, height: 42, left: 0, top: 24, position: 'absolute', background: '#FAFAFA', borderRadius: 30, overflow: 'hidden'}}>
      <div style={{left: 15, top: 18, position: 'absolute', opacity: 0.50, color: '#888888', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.30, wordWrap: 'break-word'}}>*********</div>
      <div style={{width: 24, height: 24, left: 252, top: 11, position: 'absolute'}}>
        <div style={{width: 22, height: 16, left: 1, top: 4, position: 'absolute', border: '2px #011729 solid'}}></div>
        <div style={{width: 6, height: 6, left: 9, top: 9, position: 'absolute', border: '2px #011729 solid'}}></div>
      </div>
    </div>
    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Confirm password</div>
  </div>
  <div style={{width: 288, height: 66, left: 69, top: 172, position: 'absolute'}}>
    <div style={{width: 288, height: 42, left: 0, top: 24, position: 'absolute', background: '#FAFAFA', borderRadius: 30, overflow: 'hidden'}}>
      <div style={{left: 15, top: -4, position: 'absolute', opacity: 0.50, color: '#888888', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.30, wordWrap: 'break-word'}}>ex: jon smith</div>
    </div>
    <div style={{left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, letterSpacing: 0.32, wordWrap: 'break-word'}}>Name</div>
  </div>
  <div style={{width: 13, height: 13, left: 71, top: 556, position: 'absolute', borderRadius: 1, border: '1px #F4F4F4 solid'}} />
  <div style={{left: 93, top: 559, position: 'absolute'}}><span style="color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, wordWrap: 'break-word'">I understood the </span><span style="color: 'white', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, wordWrap: 'break-word'">terms & policy</span><span style="color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 49.85, wordWrap: 'break-word'">.</span></div>
  <div style={{width: 17, height: 10.11, left: 71, top: 65, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1.70px white solid'}}></div>
</div>
        </>
    )
}