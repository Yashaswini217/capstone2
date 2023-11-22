import React from "react";

function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.email===""){
            error.email="name should not be empty"
        }
        if(!email_pattern.test(values.email)){
            error.email="email didnot match"
        }

        if(values.password===""){
            error.password="password should not be empty"
        }

        if(!password_pattern.test(values.password)){
            error.password="password disnot match"
        }
        if(values.confirm_password === "" || values.confirm_password !== values.password){
error.confirm_password="passward not matched"
        }
return error;


}
export default Validation;