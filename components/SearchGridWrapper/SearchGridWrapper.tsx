'use client';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import Grid from './Grid';

export default function SearchGridWrapper() {
  const [inputValue, setInputValue] = useState('');
  const finalQueryString = inputValue.trim() || 'bestseller'; // fallback if empty

  return (
    <>
      <div className="absolute right-0 top-0 m-4">
        <SearchBar setInputValue={setInputValue} />
      </div>
      <Grid searchInput={finalQueryString} />
    </>
  );
}
