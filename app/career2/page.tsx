"use client";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

interface DataProps {
  id: number;
  name: string;
}

const data: DataProps[] = [
  { id: 1, name: "Production" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Purchasing" },
  { id: 4, name: "Accountant" },
  { id: 5, name: "Manager" },
  { id: 6, name: "Supervisor" },
  { id: 7, name: "Foreman" },
  { id: 8, name: "Caps" },
  { id: 9, name: "Leader" },
  { id: 10, name: "Junior" },
  { id: 11, name: "Security" },
  { id: 12, name: "Operator" },
  { id: 13, name: "Duelist" },
  { id: 14, name: "Sentinel" },
  { id: 15, name: "Medic" },
];

const Career2: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<DataProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        if (query) {
          const filteredData = data.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filteredData);
        } else {
          setResults([]);
        }
      }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />

      {results.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="bg-white shadow rounded">
            {results.map((item) => (
              <li key={item.id} className="p-2 border-b border-gray-200">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold mb-4">List of Careers</h1>
        <ul className="bg-white shadow rounded">
          {currentItems.map((item) => (
            <li key={item.id} className="p-2 border-b border-gray-200">
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-center">
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Career2;
