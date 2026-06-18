import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { SUMMARY_PLACEHOLDER } from "../../constants/placeholders";

function SummaryPreview() {
  const { resumeData } = useContext(ResumeContext);
  const hasSummary = resumeData.summary?.trim().length > 0;

  return (
    <div>
      <h2 className="resume-section-title">Professional Summary</h2>

      <p
        className={`leading-[1.4] mt-1 ${
          hasSummary ? "text-gray-800" : "text-gray-400"
        }`}
      >
        {hasSummary ? resumeData.summary : SUMMARY_PLACEHOLDER}
      </p>
    </div>
  );
}

export default SummaryPreview;
