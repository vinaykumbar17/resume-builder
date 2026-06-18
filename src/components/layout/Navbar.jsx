import { Link } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          V<span className="text-indigo-600">Hire</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-indigo-600 transition text-sm font-medium"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-gray-600 hover:text-indigo-600 transition text-sm font-medium"
          >
            Features
          </a>

          <Link
            to="/builder"
            className="text-gray-600 hover:text-indigo-600 transition text-sm font-medium"
          >
            Builder
          </Link>

          <Link to="/builder">
            <Button>Create Resume</Button>
          </Link>
        </div>

        <Link to="/builder" className="md:hidden">
          <Button size="sm">Build</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
