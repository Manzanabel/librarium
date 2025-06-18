'use client';

import { useBooks } from '@/hooks/booksQueryHook';
import Card from '../Card';

export default function Grid({ searchInput }) {
  const { data, isLoading, error } = useBooks(searchInput); // for test purposes

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="grid grid-cols-6 gap-4 place-items-center">
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
