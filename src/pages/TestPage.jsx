import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const Test = ({ user }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleTestSubmit = async (answers) => {
    // 모든 질문에 답했는지 확인
    if (answers.some((answer) => answer === null)) {
      setError("모든 질문에 답해주세요.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const result = calculateMBTI(answers);
      const resultData = {
        userId: user.id,
        nickname: user.nickname,
        result,
        answers,
        date: new Date().toISOString(),
        visibility: true,
      };

      await createTestResult(resultData);
      navigate("/results");
    } catch (error) {
      console.error("테스트 결과 저장 실패:", error);
      setError("테스트 결과 저장에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        MBTI 성격 유형 테스트
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        20개의 질문에 솔직하게 답변해주세요. 정답은 없으니 편안하게
        생각해보세요.
      </p>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {isSubmitting && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4 text-center">
          테스트 결과를 저장 중입니다...
        </div>
      )}

      <TestForm onSubmit={handleTestSubmit} disabled={isSubmitting} />
    </div>
  );
};

export default Test;
