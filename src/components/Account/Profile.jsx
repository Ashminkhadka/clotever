// src/components/ProfileMenu.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Firebase";
import { toast } from "react-toastify";
import "./Profile.css";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("User Log Out Successfully!!", { position: "top-center" });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="profile-menu-container">
      <h2>User Profile</h2>
      {user ?(
        <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.displayName}</p>
      </div>
      ) :(
        <p>No user information available.</p>
      )}
      
      <div className="profile-menu">
        {/* <button onClick={() => navigate("/order-history")}>Order History</button>
        <button onClick={() => navigate("/settings")}>Settings</button> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
