import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully", { position: "top-center" });
      setTimeout(() => {
        navigate("/");  // Redirect to home page after a delay
      }, 3000); 
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <>
    <ToastContainer />
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-2xl font-bold text-center mb-6">Login</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email address</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter email"
          value={email}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Submit
        </button>
      </div>
      <p className="text-right text-gray-600">
        New user? <a href="/register" className="text-blue-500 hover:underline">Register Here</a>
      </p>
    </form>
    </>
    
  );
}

export default Login;


// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "./Firebase";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in Successfully");
//       toast.success("User logged in Successfully", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
//       <h3 className="text-2xl font-bold text-center mb-6">Login</h3>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Email address</label>
//         <input
//           type="email"
//           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Password</label>
//         <input
//           type="password"
//           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
//           Submit
//         </button>
//       </div>
//       <p className="text-right text-gray-600">
//         New user? <a href="/register" className="text-blue-500 hover:underline">Register Here</a>
//       </p>
//     </form>
//   );
// }

// export default Login;
