import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import { EXPERIENCE_PLACEHOLDERS } from "../../constants/placeholders";

function ExperienceForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const experienceList = resumeData.experience;

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...experienceList,
        {
          title: "",
          company: "",
          duration: "",
          type: "",
          points: ["", "", ""],
        },
      ],
    });
  };

  const removeExperience = (index) => {
    setResumeData({
      ...resumeData,
      experience: experienceList.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...experienceList];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, experience: updated });
  };

  const handlePointChange = (expIndex, pointIndex, value) => {
    const updated = [...experienceList];
    updated[expIndex].points[pointIndex] = value;
    setResumeData({ ...resumeData, experience: updated });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Experience</h2>
        <Button onClick={addExperience}>+ Add Experience</Button>
      </div>
      <p className="text-gray-500 mb-8">
        Include internships, part-time roles, or volunteer work. Use 2–3 bullet
        points per role.
      </p>

      {experienceList.map((exp, index) => (
        <div
          key={index}
          className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
        >
          <div className="flex justify-between mb-6">
            <h3 className="font-semibold">Experience {index + 1}</h3>
            {experienceList.length > 1 && (
              <button
                className="text-red-500 hover:text-red-700 text-sm font-medium"
                onClick={() => removeExperience(index)}
              >
                Remove
              </button>
            )}
          </div>

          <Input
            label="Job Role"
            value={exp.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            placeholder={EXPERIENCE_PLACEHOLDERS.title}
          />

          <Input
            label="Company"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            placeholder={EXPERIENCE_PLACEHOLDERS.company}
          />

          <Input
            label="Duration"
            value={exp.duration}
            onChange={(e) => handleChange(index, "duration", e.target.value)}
            placeholder={EXPERIENCE_PLACEHOLDERS.duration}
          />

          <Input
            label="Type"
            value={exp.type}
            onChange={(e) => handleChange(index, "type", e.target.value)}
            placeholder={EXPERIENCE_PLACEHOLDERS.type}
          />

          {EXPERIENCE_PLACEHOLDERS.bullets.map((placeholder, pointIdx) => (
            <Input
              key={pointIdx}
              label={`Bullet Point ${pointIdx + 1}`}
              value={exp.points[pointIdx]}
              onChange={(e) =>
                handlePointChange(index, pointIdx, e.target.value)
              }
              placeholder={placeholder}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default ExperienceForm;
