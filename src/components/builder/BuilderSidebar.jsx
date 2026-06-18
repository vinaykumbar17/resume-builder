import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const SECTION_ICONS = {
  personalInfo: "👤",
  summary: "📝",
  education: "🎓",
  experience: "💼",
  projects: "🚀",
  skills: "⚡",
  certifications: "📜",
  languages: "🌐",
};

function BuilderSidebar() {
  const { activeSection, setActiveSection, sectionOrder } =
    useContext(ResumeContext);

  const sectionTitles = {
    personalInfo: "Personal Info",
    summary: "Summary",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
    languages: "Languages",
  };

  const currentIndex = sectionOrder.indexOf(activeSection);

  return (
    <div className="w-full lg:w-72 bg-slate-900 text-white flex flex-col shrink-0">
      <div className="p-6 border-b border-slate-700">
        <a href="/" className="text-2xl font-bold tracking-tight">
          V<span className="text-indigo-400">Hire</span>
        </a>
        <p className="text-slate-400 text-xs mt-2">
          Fresher Resume Studio
        </p>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
          Sections
        </p>

        <div className="flex flex-col gap-1">
          {sectionOrder.map((section, index) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg transition text-sm ${
                activeSection === section
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-base w-6 text-center">
                {SECTION_ICONS[section]}
              </span>
              <span className="flex-1">{sectionTitles[section]}</span>
              {index < currentIndex && (
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-slate-700">
        <div className="bg-slate-800 rounded-lg p-3">
          <p className="text-xs text-slate-400">Progress</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all"
                style={{
                  width: `${((currentIndex + 1) / sectionOrder.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-xs text-slate-400">
              {currentIndex + 1}/{sectionOrder.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderSidebar;
