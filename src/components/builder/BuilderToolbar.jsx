import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { analyzeATS } from "../../utils/atsAnalyzer";
import Button from "../common/Button";
import toast from "react-hot-toast";

function ATSScorePanel() {
  const { resumeData } = useContext(ResumeContext);
  const { score, grade, tips } = analyzeATS(resumeData);

  const scoreColor =
    score >= 85
      ? "text-emerald-600"
      : score >= 70
        ? "text-indigo-600"
        : score >= 50
          ? "text-amber-600"
          : "text-red-600";

  const ringColor =
    score >= 85
      ? "stroke-emerald-500"
      : score >= 70
        ? "stroke-indigo-500"
        : score >= 50
          ? "stroke-amber-500"
          : "stroke-red-500";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              className={ringColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${score} 100`}
            />
          </svg>
          <span
            className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${scoreColor}`}
          >
            {score}
          </span>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800">ATS Score</p>
          <p className={`text-sm font-medium ${scoreColor}`}>{grade}</p>
        </div>
      </div>

      {tips.length > 0 && (
        <ul className="space-y-2">
          {tips.slice(0, 3).map((tip, i) => (
            <li key={i} className="text-xs text-gray-600 flex gap-2">
              <span className="text-indigo-500 shrink-0">→</span>
              {tip}
            </li>
          ))}
        </ul>
      )}

      {tips.length === 0 && (
        <p className="text-xs text-emerald-600">
          Great job! Your resume is well-optimized for ATS systems.
        </p>
      )}
    </div>
  );
}

function BuilderToolbar({ onDownload }) {
  const { fontFamily, setFontFamily, lastSavedAt, saveDraft } = useContext(ResumeContext);

  const fonts = [
    { id: 'inter', label: 'Inter (Sans)', value: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" },
    { id: 'roboto', label: 'Roboto (Sans)', value: "Roboto, system-ui, -apple-system, 'Segoe UI', Arial" },
    { id: 'georgia', label: 'Georgia (Serif)', value: "Georgia, 'Times New Roman', Times, serif" },
    { id: 'times', label: 'Times New Roman', value: "'Times New Roman', Times, serif" },
  ];

  const savedLabel = lastSavedAt
    ? "Draft saved locally."
    : "Draft will save automatically.";

  const handleSave = () => {
    saveDraft();
    toast.success("Draft saved locally.");
  };

  return (
    <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
        <p className="text-sm text-gray-500 mt-1">ATS-optimized • Single A4 page</p>
        <p className="text-xs text-gray-500 mt-2">{savedLabel}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Font:</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="rounded-md border px-3 py-1 text-sm"
          >
            {fonts.map((f) => (
              <option key={f.id} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={handleSave} variant="secondary">
            Save Draft
          </Button>
          <Button onClick={onDownload} variant="primary">
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}

export { ATSScorePanel, BuilderToolbar };
