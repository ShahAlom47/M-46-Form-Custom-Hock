import { useState } from 'react';
import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom';


const LogIn1 = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    

 const handelSubmit1 = (e)=>{
    e. preventDefault()
    
    console.log(e.target.email.value);
    console.log(e.target.password.value);

  
   
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500
      });
 
      
 }
 const emailHandel =(e)=>{
    setEmail(e.target.value);
    
 }
 const passHandel =(e)=>{
    setPass(e.target.value);
console.log(e.target.value);
 }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className='font-semibold my-3 text-red-600 italic'> controlled elements :use onChange attribute and  onSubmit </p>
                    <p className="my-4">Your Submited Emai : {email}</p>
                    <p className="">Your Submited Password : {pass}</p>
                </div>
                <div className="card  w-6/12 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit1}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={emailHandel} name="email" type="email" placeholder="email" defaultValue={"sahaalom48@gamail.com"} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={passHandel} name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                         
                            {/* <input className="btn btn-primary" type="submit" value="Login" /> */}
                            <button className="btn btn-primary" type="submit" >LogIn</button>
                            {/* <Link  to={'/submited1'} > <button className="btn btn-primary" type="submit" >LogIn</button>  </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn1;