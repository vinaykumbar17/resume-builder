import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { ACHIEVEMENT_PLACEHOLDERS } from "../../constants/placeholders";

function AchievementsPreview() {
  const { resumeData } = useContext(ResumeContext);

  const filledAchievements = resumeData.achievements.filter((a) =>
    a.achievement?.trim()
  );

  const hasAchievements = filledAchievements.length > 0;
  const displayList = hasAchievements
    ? filledAchievements
    : ACHIEVEMENT_PLACEHOLDERS.slice(0, 3).map((a) => ({
        achievement: a,
      }));

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Achievements</h2>

      <div className="mt-1 space-y-0.5">
        {displayList.map((item, index) => (
          <div
            key={index}
            className={`flex items-start ${!hasAchievements ? "text-gray-400" : ""}`}
          >
            <span className="mr-2">•</span>
            <span>{item.achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsPreview;
