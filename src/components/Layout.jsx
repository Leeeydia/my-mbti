import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ user, setUser, children }) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              MBTI 테스트
            </Link>
            <div className="flex items-center space-x-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/test"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    테스트
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    프로필
                  </Link>
                  <span className="text-gray-800 font-medium px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {user.nickname} 님
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  로그인
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
