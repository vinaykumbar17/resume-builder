import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { CERTIFICATION_PLACEHOLDERS } from "../../constants/placeholders";

function CertificationsPreview() {
  const { resumeData } = useContext(ResumeContext);

  const hasCertifications = resumeData.certifications.some(
    (cert) =>
      cert.title?.trim() ||
      cert.organization?.trim() ||
      cert.duration?.trim()
  );

  const certifications = hasCertifications
    ? resumeData.certifications.filter((c) => c.title?.trim())
    : CERTIFICATION_PLACEHOLDERS;

  if (!hasCertifications && certifications.length === 0) return null;

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Certifications</h2>

      <div className="mt-1 space-y-0.5">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`flex justify-between items-start gap-4 ${
              !hasCertifications ? "text-gray-400" : ""
            }`}
          >
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <span className="font-semibold">{cert.title}</span>
                <span> — {cert.organization}</span>
              </div>
            </div>

            <span className="font-semibold whitespace-nowrap">
              {cert.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPreview;
