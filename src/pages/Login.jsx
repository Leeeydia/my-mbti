import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (formData) => {
    setIsLoading(true);
    setError("");

    try {
      const loginData = await login(formData);
      localStorage.setItem("accessToken", loginData.accessToken);
      const userProfile = await getUserProfile(loginData.accessToken);
      setUser(userProfile);
      navigate("/");
    } catch (error) {
      if (error.response?.status === 401) {
        setError("아이디 또는 비밀번호가 올바르지 않습니다.");
      } else {
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>로그인</h1>
        <p>계정에 로그인하세요</p>
      </div>

      <div className="auth-form-wrapper">
        {error && <div className="error-message">{error}</div>}

        <AuthForm mode="login" onSubmit={handleLogin} disabled={isLoading} />

        <div className="auth-link">
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
