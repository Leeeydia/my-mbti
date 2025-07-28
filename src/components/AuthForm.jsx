import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          아이디
        </label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디를 입력하세요"
          required
          disabled={disabled}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          비밀번호
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
          required
          disabled={disabled}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
        />
      </div>

      {mode === "signup" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            닉네임
          </label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력하세요"
            required
            disabled={disabled}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={disabled}
        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        }`}
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
