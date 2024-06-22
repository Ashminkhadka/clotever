import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${fname} ${lname}`,
      });
      
      // if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      // }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
    <ToastContainer/>
    <form onSubmit={handleRegister} className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-2xl font-bold text-center mb-6">Sign Up</h3>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">First name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Last name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email address</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Sign Up
        </button>
      </div>

      <p className="text-right text-gray-600">
        Already registered? <a href="/login" className="text-blue-500 hover:underline">Login</a>
      </p>
    </form>
    </>
    
  );
};

export default Register;
