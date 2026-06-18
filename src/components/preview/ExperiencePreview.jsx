import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { EXPERIENCE_PLACEHOLDERS } from "../../constants/placeholders";

function ExperiencePreview() {
  const { resumeData } = useContext(ResumeContext);
  const experienceList = resumeData.experience;

  const hasAnyExperience = experienceList.some(
    (exp) =>
      exp.title?.trim() ||
      exp.company?.trim() ||
      exp.duration?.trim() ||
      (exp.points || []).some((p) => p?.trim())
  );

  if (!hasAnyExperience) {
    return (
      <div className="mt-2.5">
        <h2 className="resume-section-title">Experience</h2>

        <div className="mt-1 text-gray-400">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {EXPERIENCE_PLACEHOLDERS.title}
            </h3>
            <span className="font-semibold whitespace-nowrap">
              {EXPERIENCE_PLACEHOLDERS.duration}
            </span>
          </div>

          <div className="flex justify-between items-start">
            <p className="italic">{EXPERIENCE_PLACEHOLDERS.company}</p>
            <span>{EXPERIENCE_PLACEHOLDERS.type}</span>
          </div>

          <div className="mt-0.5 space-y-0.5">
            {EXPERIENCE_PLACEHOLDERS.bullets.map((point, idx) => (
              <div key={idx} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Experience</h2>

      <div className="mt-1 space-y-1">
        {experienceList.map((exp, index) => {
          const hasEntry =
            exp.title?.trim() ||
            exp.company?.trim() ||
            exp.duration?.trim();

          if (!hasEntry) return null;

          return (
            <div key={index}>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{exp.title}</h3>
                <span className="font-semibold whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <p className="italic text-gray-700">{exp.company}</p>
                <span className="text-gray-600 whitespace-nowrap">
                  {exp.type}
                </span>
              </div>

              <div className="mt-0.5 space-y-0.5">
                {(exp.points || []).map(
                  (point, idx) =>
                    point?.trim() && (
                      <div key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </div>
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperiencePreview;
