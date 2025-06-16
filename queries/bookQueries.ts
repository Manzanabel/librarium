import { OpenLibraryResponse } from "@/helpers/types";

export const fetchBooksFromOpenLibrary = async (query: string): Promise<OpenLibraryResponse> => {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`;

  const headers = new Headers({
    "User-Agent": process.env.NEXT_PUBLIC_OPEN_LIBRARY_USER_AGENT,
  });

  const options = {
    method: 'GET',
    headers: headers,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Error fetching books from Open Library');
  }

  return response.json();
};