import { useQuery } from '@tanstack/react-query';
import { fetchBooksFromOpenLibrary } from '@/queries/bookQueries';

export const useBooks = (query: string) => {
  return useQuery({
    queryKey: ['books', query],
    queryFn: () => fetchBooksFromOpenLibrary(query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5, // cache for 5 min
  });
};