import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">무료 성격 테스트</span>
            <span className="block text-blue-600">MBTI 유형 검사</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
            <br />
            정확한 결과를 위해 편안한 마음으로 테스트를 진행해보세요.
          </p>

          <div className="mt-10">
            {user ? (
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  안녕하세요,{" "}
                  <span className="font-semibold text-blue-600">
                    {user.nickname}
                  </span>
                  님!
                </p>
                <Link
                  to="/test"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
                >
                  테스트 시작하기
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  테스트를 시작하려면 로그인이 필요합니다.
                </p>
                <div className="space-x-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
                  >
                    로그인하기
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-8 py-4 border border-blue-600 text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
                  >
                    회원가입하기
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 기능 소개 섹션 */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  정확한 분석
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  20개의 정교한 질문을 통해 당신의 성격 유형을 정확하게
                  분석합니다.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  무료 서비스
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  완전 무료로 제공되는 MBTI 성격 유형 테스트를 경험해보세요.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">결과 관리</h3>
                <p className="mt-2 text-base text-gray-500">
                  테스트 결과를 저장하고 다른 사용자들의 결과와 비교해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
