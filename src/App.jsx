import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // ถ้ามีผู้ใช้เข้าสู่ระบบ
      } else {
        setUser(null); // ถ้าไม่มีผู้ใช้เข้าสู่ระบบ
      }
    });

    return () => unsubscribe(); // ทำการยกเลิกเมื่อคอมโพเนนต์ถูกทำลาย
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;