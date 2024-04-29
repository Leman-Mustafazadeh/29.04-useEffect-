import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";
import { post } from "../API";




const Login = ({isLogged,setisLogged}) => {
  const [username, setuserName] = useState("");
  const [userpass, setuserPass] = useState("");
  const [error, setError] = useState("");
  

  const loginBtnSub = (e) => {
    e.preventDefault();
     /*  await post({ username, userpass })
      if (error) {
        return setError("parol ve ya name yanlisdir")
      } */
      setisLogged((even)=>!even);
  }




  // const logForm=async()=>{
  //     const{data,error}=await post({username,password})
  //     if(error){
  //          return setError("parol ve yaxud name yanlisdi")
  //     }
  // }

  //   return (

  // //    <div className="container ">
  // //     <div className="cont-head">

  // //     <form className='d-flex flex-column gap-2 form-login' >
  // //     <h2>Login Page</h2>
  // //         {error && <p style={{ color: 'red' }}>{error}
  // //         </p>}
  // //         <input type="text" placeholder='Enter You Name' onChange={(e)=>{
  // //             setuserName(e.target.value)
  // //         }}
  // //           />
  // //         <input type="password" placeholder='Enter you password' onChange={(e)=>{
  // //             setuserPass(e.target.value)
  // //         }} />
  // //         <button onClick={async()=>{
  // //             await post({username,password})
  // //             if(error){
  // //                return setError("parol ve yaxud name yanlisdir")
  // //             }
  // //         }}>Login</button>
  // //     </form>
  // //     </div>
  // //    </div>
  //   )
  return (
    <>
      <section className="sign-in">
        <form onSubmit={loginBtnSub} className="form2">
          <button className={isLogged ? "btn btn-danger p-2":"btn btn-primary p-2"} >Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;
