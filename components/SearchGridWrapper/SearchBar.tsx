export default function SearchBar({ setInputValue }) {
  return (
    <div>
      <input
        className="object-top-right border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700"
        placeholder="Search for books..."
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
