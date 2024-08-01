"use client";
import { debounce } from "lodash";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

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

const Career: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<DataProps[]>([]);

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
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded"
      />
      <ul>
        {results.map((item) => (
          <li key={item.id} className="p-2 border-b border-gray-200">
            {item.name}
          </li>
        ))}
      </ul>

      <div>
        <h1>List of Career</h1>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Career;
