import React,{createContext,useState,useEffect} from "react";
import {auth} from '../Firnabase';


const AuthContext = createContext();
const value={};

export const AuthProvide= (props)=>{

    const [usuario ,setUsusario] =useState({});

    useEffect(()=>{
            auth.onAuthStateChanged()
    },[])


    const sing=(email,password)=>{
            return  auth.createuserwithemailandpassword(email, password);

    }
       
        const login= (email,password)=>{
            return autn.signinwithemailandpassword(email,password);
        }

        const logout= ()=> auth.logout()


    const value=(sing,login,logout);
    return(
    <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
    )
    
}
