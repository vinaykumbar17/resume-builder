import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import FeatureCard from "../components/common/FeatureCard";
import Footer from "../components/layout/Footer";

const FEATURES = [
  {
    icon: "🎯",
    title: "ATS Score Analyzer",
    description:
      "Real-time scoring checks keywords, structure, and fresher-friendly formatting so recruiters and bots both read your resume.",
  },
  {
    icon: "📄",
    title: "Single A4 Page",
    description:
      "Every section is tuned for one page — the gold standard for fresher resumes. Page-fit indicator warns you before overflow.",
  },
  {
    icon: "👁️",
    title: "Live Preview",
    description:
      "Watch your resume update instantly. Example placeholders in gray guide you until you add your own details.",
  },
  {
    icon: "🚀",
    title: "Fresher-First Design",
    description:
      "Sections for projects, internships, certifications, and achievements — exactly what new graduates need to stand out.",
  },
  {
    icon: "📥",
    title: "PDF Download",
    description:
      "Export a clean, ATS-friendly PDF with one click. No watermarks, no clutter — ready to submit.",
  },
  {
    icon: "✨",
    title: "Premium Templates",
    description:
      "Clean, professional layout with proper hierarchy, spacing, and typography that passes ATS parsing.",
  },
];

const STATS = [
  { value: "1 Page", label: "A4 Optimized" },
  { value: "ATS", label: "Friendly Format" },
  { value: "Free", label: "No Sign-up" },
  { value: "PDF", label: "Instant Export" },
];

function Home() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            Built for Freshers & New Graduates
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            ATS-Friendly Resumes
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              On One Perfect Page
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            VHire helps freshers build professional, ATS-optimized resumes that
            fit on a single A4 page. Real-time preview, intelligent scoring, and
            instant PDF export.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/builder">
              <Button size="lg">Start Building — It&apos;s Free</Button>
            </Link>
            <a href="#features">
              <Button variant="secondary" size="lg">See Features</Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <p className="text-2xl font-bold text-indigo-600">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything Freshers Need
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No experience? No problem. VHire is designed around what ATS systems
            and recruiters look for in entry-level candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to land your first job?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Build your ATS-friendly resume in minutes. One page, zero clutter,
            maximum impact.
          </p>
          <Link to="/builder">
            <button
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition shadow-lg"
            >
              Create Your Resume Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
