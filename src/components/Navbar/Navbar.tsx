import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          My Portfolio
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              About
            </div>
          </Link>
          <Link href="/projects">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Projects
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}