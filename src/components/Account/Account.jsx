import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/myImage.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Firebase";
import { toast } from "react-toastify";
import "./Account.css";

const Account = ({ user }) => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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

  const handleAccount = () => {
    navigate("/register");
  };

  return (
    <div className="account">
      {user ? (
        <div className="user-info">
          <img
            src={Profile}
            alt="Profile"
            className="profile-logo"
            onClick={toggleDropdown}
            /><MdArrowDropDown />
          {dropdownVisible && (
            <div className="profile-dropdown">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Name:</strong> {user.displayName}</p>
              <button onClick={() => navigate("/order-history")}>Order History</button>
              <button onClick={() => navigate("/settings")}>Settings</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <button className="myAccount" onClick={handleAccount}>
          My Account <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default Account;
