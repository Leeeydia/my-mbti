import React, { useState } from "react";

const AuthForm = ({ mode, onSubmit, disabled = false }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label className="form-label">아이디</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디를 입력하세요"
          required
          disabled={disabled}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">비밀번호</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
          required
          disabled={disabled}
          className="form-input"
        />
      </div>

      {mode === "signup" && (
        <div className="form-group">
          <label className="form-label">닉네임</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력하세요"
            required
            disabled={disabled}
            className="form-input"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={disabled}
        className={`form-button form-button-primary ${disabled ? "" : ""}`}
      >
        {disabled
          ? mode === "login"
            ? "로그인 중..."
            : "회원가입 중..."
          : mode === "login"
          ? "로그인"
          : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
