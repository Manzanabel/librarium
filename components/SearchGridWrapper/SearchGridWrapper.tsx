'use client';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useDebounce } from '@/hooks/debounceHook';
import Grid from './Grid';

export default function SearchGridWrapper() {
  const [inputValue, setInputValue] = useState('');
  const debouncedQuery = useDebounce(inputValue, 1000);
  const finalQueryString = debouncedQuery.trim() || 'bestseller'; // fallback if empty

  return (
    <>
      <div className="absolute right-0 top-0 m-4">
        <SearchBar setInputValue={setInputValue} />
      </div>
      <Grid searchInput={finalQueryString} />
    </>
  );
}
