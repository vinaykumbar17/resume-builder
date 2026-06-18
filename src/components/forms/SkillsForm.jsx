import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import { SKILL_CATEGORIES } from "../../constants/placeholders";

function SkillsForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const skillGroups =
    resumeData.skills.length > 0
      ? resumeData.skills
      : [{ category: "", skills: "" }];

  const addCategory = () => {
    if (skillGroups.length >= 6) return;

    setResumeData({
      ...resumeData,
      skills: [...skillGroups, { category: "", skills: "" }],
    });
  };

  const removeCategory = (index) => {
    setResumeData({
      ...resumeData,
      skills: skillGroups.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, field, value) => {
    const updatedGroups = [...skillGroups];
    updatedGroups[index] = { ...updatedGroups[index], [field]: value };
    setResumeData({ ...resumeData, skills: updatedGroups });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Skills</h2>
        {skillGroups.length < 6 && (
          <Button onClick={addCategory}>+ Add Category</Button>
        )}
      </div>
      <p className="text-gray-500 mb-8">
        Group skills by category. ATS systems scan for relevant keywords.
      </p>

      {skillGroups.map((group, index) => {
        const defaults = SKILL_CATEGORIES[index] || SKILL_CATEGORIES[0];

        return (
          <div
            key={index}
            className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Category {index + 1}</h3>
              {skillGroups.length > 1 && (
                <button
                  onClick={() => removeCategory(index)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              )}
            </div>

            <Input
              label="Category Name"
              value={group.category}
              onChange={(e) =>
                handleChange(index, "category", e.target.value)
              }
              placeholder={defaults.category}
            />

            <Input
              label="Skills"
              value={group.skills}
              onChange={(e) => handleChange(index, "skills", e.target.value)}
              placeholder={defaults.skills}
            />
          </div>
        );
      })}
    </>
  );
}

export default SkillsForm;
