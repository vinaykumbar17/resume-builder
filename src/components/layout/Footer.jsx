import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              V<span className="text-indigo-600">Hire</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-sm leading-7 text-sm">
              Premium ATS-friendly resume builder for freshers. One A4 page,
              real-time preview, intelligent scoring, and instant PDF export.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Navigation</h3>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link to="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
              <a href="#features" className="hover:text-indigo-600 transition">
                Features
              </a>
              <Link to="/builder" className="hover:text-indigo-600 transition">
                Create Resume
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact & Credits</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <div>
                <strong>Email:</strong> <a href="mailto:vinaykumbar17@gmail.com" className="text-indigo-600">vinaykumbar17@gmail.com</a>
              </div>
              <div>
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vinay-kumbar-0549a4388/" target="_blank" rel="noopener noreferrer" className="text-indigo-600">linkedin.com/in/vinay-kumbar-0549a4388/</a>
              </div>
              <div>
                <strong>Website:</strong> <a href="https://portfolio-vinayk.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-600">portfolio-vinayk.vercel.app</a>
              </div>
              <div>
                <strong>GitHub:</strong> <a href="https://github.com/vinaykumbar17" target="_blank" rel="noopener noreferrer" className="text-indigo-600">github.com/vinaykumbar17</a>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition text-sm font-medium"
              >
                Built for Digital Heroes
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Vinay Kumbar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
