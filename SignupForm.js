import React from "react";
import 'boostrap/dist/css/boostrap.min.css';
import { useState } from "react";
import Validation from "./Validation";

function Signup(){
    const[values,setValues]=useState({
        email:'',
        passward:'',
        confirm_password:''
    })
    const[errors,setErrors]=useState(null)
    const handleInput = (e) =>{
        setValues({...state,[e.target.name]:[e.target.values]})
    }
    function handleValidation(){
        setErrors(Validation(values))
    }

}