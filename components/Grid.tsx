'use client';

import { useBooks } from '@/hooks/booksQueryHook';
import { useDebounce } from '@/hooks/debounceHook';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function Grid() {
  //const [inputValue, setInputValue] = useState('');
  //const debouncedQuery = useDebounce(inputValue, 1000);
  //const finalQuery = debouncedQuery.trim() || 'bestseller'; // fallback if empty

  const { data, isLoading, error } = useBooks('bestseller'); // for test purposes

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="grid grid-cols-4 gap-4 place-items-center">
          {data.docs.map((book) => (
            <Card
              key={book.key}
              title={book.title}
              authors={book.author_name}
              year={book.first_publish_year}
              cover={book.cover_i}
            />
          ))}
        </div>
      )}
    </>
  );
}
