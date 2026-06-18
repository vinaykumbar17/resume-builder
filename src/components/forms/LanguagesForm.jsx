import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import { LANGUAGE_PLACEHOLDERS } from "../../constants/placeholders";

function LanguagesForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const languages =
    resumeData.languages.length > 0
      ? resumeData.languages
      : [{ language: "" }];

  const addLanguage = () => {
    if (languages.length >= 5) return;

    setResumeData({
      ...resumeData,
      languages: [...languages, { language: "" }],
    });
  };

  const removeLanguage = (index) => {
    setResumeData({
      ...resumeData,
      languages: languages.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, value) => {
    const updated = [...languages];
    updated[index].language = value;
    setResumeData({ ...resumeData, languages: updated });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Languages</h2>
        {languages.length < 5 && (
          <Button onClick={addLanguage}>+ Add Language</Button>
        )}
      </div>
      <p className="text-gray-500 mb-8">
        List languages you can read, write, or speak.
      </p>

      {languages.map((item, index) => (
        <div
          key={index}
          className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Language {index + 1}</h3>
            {languages.length > 1 && (
              <button
                onClick={() => removeLanguage(index)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            )}
          </div>

          <Input
            label="Language"
            value={item.language}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={
              LANGUAGE_PLACEHOLDERS[index] || "e.g. Spanish"
            }
          />
        </div>
      ))}
    </>
  );
}

export default LanguagesForm;
