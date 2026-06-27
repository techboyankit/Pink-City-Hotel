import { useState } from "react";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

signInWithPopup,

signOut

} from "firebase/auth";

import {

auth,

googleProvider

} from "../firebase/config";

export default function Login(){

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const signup=async()=>{

try{

await createUserWithEmailAndPassword(

auth,

email,

password

);

alert("Account Created");

}

catch(err){

alert(err.message);

}

}

const login=async()=>{

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("Logged In");

}

catch(err){

alert(err.message);

}

}

const googleLogin=async()=>{

try{

await signInWithPopup(

auth,

googleProvider

);

alert("Google Login Success");

}

catch(err){

alert(err.message);

}

}

return(

<div className="container py-5">

<div className="card p-4 mx-auto" style={{maxWidth:"450px"}}>

<h2 className="text-center mb-4">

Login

</h2>

<input

className="form-control mb-3"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<input

type="password"

className="form-control mb-3"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button

className="btn btn-primary w-100 mb-2"

onClick={login}

>

Login

</button>

<button

className="btn btn-success w-100 mb-2"

onClick={signup}

>

Create Account

</button>

<button

className="btn btn-danger w-100 mb-2"

onClick={googleLogin}

>

Continue with Google

</button>

<button

className="btn btn-secondary w-100"

onClick={()=>signOut(auth)}

>

Logout

</button>

</div>

</div>

);

}