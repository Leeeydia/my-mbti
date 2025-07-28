import { useState } from "react";
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">로그인</h2>
          <p className="mt-2 text-sm text-gray-600">계정에 로그인하세요</p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <AuthForm mode="login" onSubmit={handleLogin} disabled={isLoading} />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              계정이 없으신가요?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                회원가입하기
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
