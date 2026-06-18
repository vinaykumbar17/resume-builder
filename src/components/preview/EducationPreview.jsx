import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { EDUCATION_PLACEHOLDERS } from "../../constants/placeholders";

function EducationPreview() {
  const { resumeData } = useContext(ResumeContext);
  const educationList = resumeData.education;

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Education</h2>

      <div className="mt-1 space-y-1">
        {educationList.map((edu, index) => {
          const hasData =
            edu.institution?.trim() || edu.year?.trim() || edu.score?.trim();
          const level = edu.level || "";
          const institution =
            edu.institution || EDUCATION_PLACEHOLDERS.institution;
          const year = edu.year || EDUCATION_PLACEHOLDERS.year;
          const score =
            edu.score ||
            (/B\.E|B\.Tech|BE|BTech/i.test(edu.level)
              ? EDUCATION_PLACEHOLDERS.cgpa
              : EDUCATION_PLACEHOLDERS.percentage);

          return (
            <div key={index} className={!hasData ? "text-gray-400" : ""}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{level}</h3>
                  <p className="italic leading-[1.4] text-sm mt-0.5">{institution}</p>
                  {edu.board && <p className="text-xs text-gray-500">{edu.board}</p>}
                </div>

                <div className="text-right">
                  <span className="font-semibold whitespace-nowrap">{year}</span>
                  <div className="text-sm">
                    { /B\.E|B\.Tech|BE|BTech/i.test(edu.level)
                      ? `CGPA: ${score}`
                      : `${score}%` }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationPreview;