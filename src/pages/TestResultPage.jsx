import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";

const TestResultPage = ({ user }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const data = await getTestResults();
      setResults(data);
    } catch (error) {
      console.error("결과를 불러오는데 실패했습니다:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">결과를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResultPage;
