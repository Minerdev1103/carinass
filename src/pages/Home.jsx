import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login"); // นำทางกลับไปยังหน้าล็อกอิน
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to Crinass</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;