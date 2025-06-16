export function formatAuthors(authors: string[] | string): string {
  if (typeof authors === "string") return authors;

  if (authors.length === 0) return "Unknown author";

  if (authors.length === 1) return authors[0];

  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;

  return `${authors.slice(0, 2).join(", ")} and others`;
}