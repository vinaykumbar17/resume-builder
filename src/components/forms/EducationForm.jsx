import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import { EDUCATION_PLACEHOLDERS } from "../../constants/placeholders";

function EducationForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const educationList = resumeData.education;

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...educationList,
        {
          level: "",
          institution: "",
          board: "",
          year: "",
          score: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    setResumeData({
      ...resumeData,
      education: educationList.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index] = { ...updatedList[index], [field]: value };
    setResumeData({ ...resumeData, education: updatedList });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Education</h2>
        <Button onClick={addEducation}>+ Add Education</Button>
      </div>
      <p className="text-gray-500 mb-8">
        List your degrees in reverse chronological order. Include CGPA or
        percentage. Add Board/Stream for school-level entries.
      </p>

      {educationList.map((edu, index) => (
        <div
          key={index}
          className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">
              {edu.level || "Other Education"}
            </h3>
            {educationList.length > 1 && (
              <button
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            )}
          </div>

          <Input
            label="Education Level"
            value={edu.level}
            onChange={(e) => handleChange(index, "level", e.target.value)}
            placeholder="e.g. B.E / B.Tech, 12th, 10th, Diploma"
          />

          <Input
            label="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, "institution", e.target.value)}
            placeholder={EDUCATION_PLACEHOLDERS.institution}
          />

          <Input
            label="Board / Stream"
            value={edu.board}
            onChange={(e) => handleChange(index, "board", e.target.value)}
            placeholder="e.g. State Board / CBSE / Science"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Passing Year"
              value={edu.year}
              onChange={(e) => handleChange(index, "year", e.target.value)}
              placeholder={EDUCATION_PLACEHOLDERS.year}
            />

            <Input
              label={
                /B\.E|B\.Tech|BE|BTech/i.test(edu.level) ? "CGPA" : "Percentage"
              }
              value={edu.score}
              onChange={(e) => handleChange(index, "score", e.target.value)}
              placeholder={
                /B\.E|B\.Tech|BE|BTech/i.test(edu.level)
                  ? EDUCATION_PLACEHOLDERS.cgpa
                  : EDUCATION_PLACEHOLDERS.percentage
              }
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default EducationForm;