import { useState } from "react";
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            회원가입
          </h2>
          <p className="mt-2 text-sm text-gray-600">새 계정을 만들어보세요</p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <AuthForm
            mode="signup"
            onSubmit={handleSignup}
            disabled={isLoading}
          />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                로그인하기
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
