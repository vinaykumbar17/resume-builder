import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import { ACHIEVEMENT_PLACEHOLDERS } from "../../constants/placeholders";

function AchievementsForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const achievements =
    resumeData.achievements.length > 0
      ? resumeData.achievements
      : [{ achievement: "" }];

  const addAchievement = () => {
    if (achievements.length >= 5) return;

    setResumeData({
      ...resumeData,
      achievements: [...achievements, { achievement: "" }],
    });
  };

  const removeAchievement = (index) => {
    setResumeData({
      ...resumeData,
      achievements: achievements.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, value) => {
    const updated = [...achievements];
    updated[index].achievement = value;
    setResumeData({ ...resumeData, achievements: updated });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Achievements</h2>
        {achievements.length < 5 && (
          <Button onClick={addAchievement}>+ Add Achievement</Button>
        )}
      </div>
      <p className="text-gray-500 mb-8">
        Highlight awards, hackathons, or notable accomplishments.
      </p>

      {achievements.map((item, index) => (
        <div
          key={index}
          className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Achievement {index + 1}</h3>
            {achievements.length > 1 && (
              <button
                onClick={() => removeAchievement(index)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            )}
          </div>

          <Input
            label="Achievement"
            value={item.achievement}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={
              ACHIEVEMENT_PLACEHOLDERS[index] ||
              "e.g. Winner of XYZ Coding Competition"
            }
          />
        </div>
      ))}
    </>
  );
}

export default AchievementsForm;
