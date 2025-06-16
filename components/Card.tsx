import { formatAuthors } from '@/helpers/formatAuthors';
import { truncateText } from '@/helpers/truncateText';

interface CardProps {
  title: string;
  authors: string[];
  year: number;
  cover: number;
}

export default function Card({ title, authors, year, cover }: CardProps) {
  const url = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

  return (
    <div className="w-full max-w-96 p-4 justify-items-center border border-2 border-indigo-500/10 rounded-lg shadow-md bg-gradient-to-r hover:from-pink-500/25 hover:to-violet-500/25">
      <img className="self-center" src={url} alt={title} />
      <p>{truncateText(title, 20)}</p>
      {formatAuthors(authors)}
      <p>{year}</p>
    </div>
  );
}
