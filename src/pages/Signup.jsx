import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (formData) => {
    setIsLoading(true);
    setError("");

    try {
      await register(formData);
      alert("회원가입이 완료되었습니다. 로그인해주세요.");
      navigate("/login");
    } catch (error) {
      if (error.response?.status === 409) {
        setError("이미 존재하는 아이디입니다.");
      } else {
        setError("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>회원가입</h1>
        <p>새 계정을 만들어보세요</p>
      </div>

      <div className="auth-form-wrapper">
        {error && <div className="error-message">{error}</div>}

        <AuthForm mode="signup" onSubmit={handleSignup} disabled={isLoading} />

        <div className="auth-link">
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
