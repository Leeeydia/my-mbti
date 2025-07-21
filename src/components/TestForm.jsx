import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit, disabled = false }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  const allAnswered = answers.every((answer) => answer !== null);
  const answeredCount = answers.filter((answer) => answer !== null).length;

  return (
    <div className="space-y-6">
      {/* 진행률 표시 */}
      <div className="bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 text-center mb-4">
        진행률: {answeredCount}/{questions.length} (
        {Math.round((answeredCount / questions.length) * 100)}%)
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 bg-white rounded-lg shadow-md"
      >
        {questions.map((q, index) => (
          <div key={q.id} className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800 mb-3">
              {index + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, i) => (
                <label
                  key={i}
                  className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    disabled={disabled}
                    className="mr-3 h-4 w-4 text-blue-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={disabled || !allAnswered}
          className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
            disabled || !allAnswered
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 transform hover:scale-105"
          }`}
        >
          {disabled
            ? "결과 저장 중..."
            : allAnswered
            ? "테스트 완료!"
            : "모든 질문에 답해주세요"}
        </button>
      </form>
    </div>
  );
};

export default TestForm;
