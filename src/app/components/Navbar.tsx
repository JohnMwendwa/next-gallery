import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center px-4 py-6 font-bold max-w-6xl mx-auto text-white">
        <div>
          <h1 className="text-2xl  sm:text-3xl text-center whitespace-nowrap text-orange-500">
            <Link href={"/"}>Image Search Gallery</Link>
          </h1>
          <span className="hidden sm:inline-block text-orange-200">
            Search images by text
          </span>
        </div>
        <SearchBar />
      </nav>
    </header>
  );
}
