import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  const visibleResults = results.filter(
    (result) => result.visibility || result.userId === user.id
  );

  if (visibleResults.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          아직 테스트 결과가 없습니다
        </h3>
        <p className="text-gray-500">첫 번째 MBTI 테스트를 시작해보세요!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 mb-4">
        총 {visibleResults.length}개의 결과가 있습니다.
      </div>
      {visibleResults.map((result) => (
        <TestResultItem
          key={result.id}
          result={result}
          user={user}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TestResultList;
