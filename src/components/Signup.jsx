import React, { useState } from 'react';
import { useForm, Form } from "react-hook-form";
import { Link } from "react-router-dom";

import "../styles/signup.scss"

export default function Signup() {

  const { register, control } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

    return (
        <>
          <div class="sign-up-page">
            <div id='container-signup'>
            <div class="create-your-account">Create your account</div>
              <Form 
              control={control} 
              class="sign-up-form" 
              headers={{
                'Content-Type':'application/json'
              }}
              action="/signup"
              method='post'
              onSubmit={(
                {data}
              ) => {
                console.log(data)
                alert("Form submission succesful")
              }}
              onError={() => {
                alert("Form submission failed")
              }}
              validateStatus={(status) => status >= 200}
              >
                <p className='field-names'>Name</p>
                  <div class="group">
                    <input type="text" {...register("name", {required: true})} placeholder="ex: Jon Smith" class="name"/>
                  </div>
                  <div class="group">
                <p className='field-names'>Email</p>
                  <input type="email" {...register("email", {required: true})} placeholder="ex: jonsmith@gmail.com" class="email"/>
                </div>
                <div class="group">
                <p className='field-names'>Password</p>
                <input type="password" {...register("password", {required: true})} placeholder="*********" class="password"/>
                </div>
                <div class="group">
                <p className='field-names'>Confirm Password</p>
                <input type="password" {...register("second_password", {required: true})} placeholder="**********" class="confirm-password"/>
                </div>
                <button type="submit" className="button">SIGN UP</button>
                <div class="container-message">
                <div class="have-an-account">Have an account? </div>
                </div>
                <Link to="/login">
                <button type="submit" className="button_2">LOGIN</button>
                </Link>

                </Form>
                <p class="terms-policy">By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
                </div>
  </div>
        </>
    )
}