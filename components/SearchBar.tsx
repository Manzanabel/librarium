'use client';

import { useEffect, useRef, useState } from 'react';

export default function SearchBar({ setInputValue }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setInputValue(inputRef.current.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <form onSubmit={onSubmit} className="flex justify-center mt-6">
      <div
        className={`flex items-center overflow-hidden border border-gray-300 rounded-full shadow-md transition-all duration-300 ${
          isOpen ? 'w-80 px-3' : 'w-10 px-0'
        }`}
      >
        <button
          type="button"
          onClick={toggleOpen}
          className="w-10 h-10 flex items-center justify-center rounded-full transition"
        >
          <svg className="w-5 h-5 text-sky-50" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search books"
          onKeyDown={onEnter}
          onBlur={toggleOpen}
          className={`transition-all duration-300 bg-transparent focus:outline-none text-sm ml-2 ${
            isOpen ? 'w-full opacity-100' : 'hidden'
          }`}
        />

        <button
          type="submit"
          className={`ml-2 text-sm px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition ${
            isOpen ? 'opacity-100' : 'hidden'
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
}
