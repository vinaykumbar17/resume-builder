import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { SUMMARY_PLACEHOLDER } from "../../constants/placeholders";

function SummaryForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      summary: e.target.value,
    });
  };

  const charCount = resumeData.summary?.length || 0;

  const generateSummary = (data) => {
    // Lightweight extractive summarizer: pick top bullets and skills, craft short paragraph
    const name = data.personalInfo?.fullName?.trim();
    const skills = (data.skills || [])
      .map((s) => s.skills)
      .filter(Boolean)
      .join(', ');

    const bullets = [
      ...(data.experience || []).flatMap((e) => e.points || []),
      ...(data.projects || []).flatMap((p) => p.points || []),
    ].filter(Boolean);

    const topBullets = bullets.slice(0, 3).map((b) => b.replace(/\s+/g, ' ').trim());

    let summary = '';
    if (name) summary += '';
    if (topBullets.length) summary += `${topBullets.join('. ')}.`;
    if (skills) summary += ` Skilled in ${skills}.`;

    summary = summary.trim();
    if (!summary) summary = SUMMARY_PLACEHOLDER;

    // Truncate to 320 characters to better fit an A4 single page preview
    return summary.slice(0, 320);
  };

  const handleAutoSummarize = () => {
    const s = generateSummary(resumeData);
    setResumeData({ ...resumeData, summary: s });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
      <p className="text-gray-500 mb-8">
        Write 2–3 lines about who you are and what you bring. Keep it under 350
        characters for a single A4 page.
      </p>

      <Textarea
        label="Summary"
        value={resumeData.summary}
        onChange={handleChange}
        placeholder={SUMMARY_PLACEHOLDER}
        rows={5}
      />

      <div className="flex gap-2 mt-3">
        <Button onClick={handleAutoSummarize}>Auto Summarize</Button>
        <Button onClick={() => setResumeData({ ...resumeData, summary: '' })} variant="secondary">Clear</Button>
      </div>

      <p
        className={`text-sm mt-1 ${
          charCount > 350 ? "text-amber-600" : "text-gray-400"
        }`}
      >
        {charCount}/350 characters
        {charCount > 350 && " — consider shortening for one-page fit"}
      </p>
    </>
  );
}

export default SummaryForm;
