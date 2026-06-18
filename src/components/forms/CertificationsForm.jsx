import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import { CERTIFICATION_PLACEHOLDERS } from "../../constants/placeholders";

function CertificationsForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const certifications =
    resumeData.certifications.length > 0
      ? resumeData.certifications
      : [{ title: "", organization: "", duration: "" }];

  const addCertification = () => {
    if (certifications.length >= 5) return;

    setResumeData({
      ...resumeData,
      certifications: [
        ...certifications,
        { title: "", organization: "", duration: "" },
      ],
    });
  };

  const removeCertification = (index) => {
    setResumeData({
      ...resumeData,
      certifications: certifications.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, certifications: updated });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">Certifications</h2>
        {certifications.length < 5 && (
          <Button onClick={addCertification}>+ Add Certification</Button>
        )}
      </div>
      <p className="text-gray-500 mb-8">
        List courses, bootcamps, or hackathons. Max 5 entries for one-page fit.
      </p>

      {certifications.map((cert, index) => {
        const placeholder =
          CERTIFICATION_PLACEHOLDERS[index] || CERTIFICATION_PLACEHOLDERS[0];

        return (
          <div
            key={index}
            className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
          >
            <div className="flex justify-between mb-6">
              <h3 className="font-semibold">Certification {index + 1}</h3>
              {certifications.length > 1 && (
                <button
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                  onClick={() => removeCertification(index)}
                >
                  Remove
                </button>
              )}
            </div>

            <Input
              label="Course Name"
              value={cert.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder={placeholder.title}
            />

            <Input
              label="Organization"
              value={cert.organization}
              onChange={(e) =>
                handleChange(index, "organization", e.target.value)
              }
              placeholder={placeholder.organization}
            />

            <Input
              label="Duration"
              value={cert.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              placeholder={placeholder.duration}
            />
          </div>
        );
      })}
    </>
  );
}

export default CertificationsForm;
