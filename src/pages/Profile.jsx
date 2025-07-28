import { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await updateProfile({ nickname: nickname.trim() });
      setUser({ ...user, nickname: response.nickname });
      alert("프로필이 성공적으로 업데이트 되었습니다.");
    } catch (e) {
      console.error("프로필 업데이트 실패:", e);
      alert("닉네임 변경에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          프로필 수정
        </h1>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            현재 정보
          </h2>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">아이디:</span> {user?.id}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">현재 닉네임:</span> {user?.nickname}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              새 닉네임
            </label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="새로운 닉네임을 입력하세요"
              disabled={isLoading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={
              isLoading || !nickname.trim() || nickname === user?.nickname
            }
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
              isLoading || !nickname.trim() || nickname === user?.nickname
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            }`}
          >
            {isLoading ? "업데이트 중..." : "프로필 업데이트"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
