import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // No need to modify auth here
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/v1/auth/user-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          navigate("/login"); // Redirect to login if authentication fails
        }
      } catch (error) {
        navigate("/login"); // Redirect if API fails
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      navigate("/login");
    }
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : null;
}
