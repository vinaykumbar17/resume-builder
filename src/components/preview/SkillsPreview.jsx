import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { DEFAULT_SKILLS_PREVIEW } from "../../constants/placeholders";

function SkillsPreview() {
  const { resumeData } = useContext(ResumeContext);

  const hasSkills =
    resumeData.skills.length > 0 &&
    resumeData.skills.some(
      (skill) => skill.category?.trim() || skill.skills?.trim()
    );

  const skills = hasSkills ? resumeData.skills : DEFAULT_SKILLS_PREVIEW;
  const leftColumn = skills.slice(0, 3);
  const rightColumn = skills.slice(3, 6);

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Skills</h2>

      <div
        className={`mt-1 grid ${
          rightColumn.length > 0 ? "grid-cols-2 gap-x-8" : "grid-cols-1"
        }`}
      >
        <ul className="list-disc ml-4 leading-[1.4] text-gray-800">
          {leftColumn.map((skill, index) => (
            <li key={index} className={!hasSkills ? "text-gray-400" : ""}>
              <span className="font-semibold">{skill.category}</span>
              {" — "}
              {skill.skills}
            </li>
          ))}
        </ul>

        {rightColumn.length > 0 && (
          <ul className="list-disc ml-4 leading-[1.4] text-gray-800">
            {rightColumn.map((skill, index) => (
              <li key={index} className={!hasSkills ? "text-gray-400" : ""}>
                <span className="font-semibold">{skill.category}</span>
                {" — "}
                {skill.skills}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SkillsPreview;
