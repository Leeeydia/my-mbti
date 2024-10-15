import { Link, useNavigate } from "react=router-dom";
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
            <Link to="/profile">프로필</Link>

            {user ? (
              <>
                <button onClick={handleLogout}>로그아웃</button>
              </>
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
