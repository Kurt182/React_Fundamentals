// import React, { useState } from 'react';

// const Login = () => {
//     const [email, setEmail] =useState("")
//     const [password, setPassword] =useState("")

//     function emasilOnChange(){
// // event.target.value
// console.log(event.target.value);
// setEmail(event.target.value)

//     }

//     function passwortdOnChange(event){
//         setPassword(eventy.target.value)
//     }

//     return (
//     <div>
//         <input 
//         type="text" 
//         placeholder="email"
//         value= {email} 
//         onChange ={(e) => emailOnChange(e)}
//         />
//         <input type="text" placeholder="password"/>
//     </div>
//     );
// };
 
// export default Login;

import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function emailOnChange(event) {
    // event.target.value
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function passwordOnChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  return (
    <div><h1>Login</h1>
      <input
        type="text"
        placeholder="email login"
        value={email}
        onChange={(e) => emailOnChange(e)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => passwordOnChange(e)}
      />
    </div>
  );
};
export default Login;