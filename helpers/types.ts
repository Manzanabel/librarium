export type Book = {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  key: string
};

export type OpenLibraryResponse = {
  numFound: number;
  docs: Book[];
};