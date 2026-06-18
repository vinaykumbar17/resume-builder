import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { DEFAULT_LANGUAGES_PREVIEW } from "../../constants/placeholders";

function LanguagesPreview() {
  const { resumeData } = useContext(ResumeContext);

  const hasLanguages = resumeData.languages.some((lang) =>
    lang.language?.trim()
  );

  const languages = hasLanguages
    ? resumeData.languages.filter((l) => l.language?.trim())
    : DEFAULT_LANGUAGES_PREVIEW;

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Languages</h2>

      <p
        className={`mt-1 ${!hasLanguages ? "text-gray-400" : "text-gray-800"}`}
      >
        {languages.map((lang) => lang.language).join(" • ")}
      </p>
    </div>
  );
}

export default LanguagesPreview;
