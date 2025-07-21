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
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user ? (
              <div>
                <Link to="/test"> 테스트</Link>
                <Link to="/profile">프로필</Link>

                <div>{user.nickname} 님</div>
                <button onClick={handleLogout}>로그아웃</button>
              </div>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
