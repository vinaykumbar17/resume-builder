import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { PERSONAL_PLACEHOLDERS } from "../../constants/placeholders";

function PersonalPreview() {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo } = resumeData;

  const phoneNumber = (personalInfo.phone || "").replace(/\D/g, "");
  const countryCode = personalInfo.countryCode || PERSONAL_PLACEHOLDERS.countryCode;

  const websiteUrl = personalInfo.website
    ? personalInfo.website.startsWith("http")
      ? personalInfo.website
      : `https://${personalInfo.website}`
    : "";

  const displayName = personalInfo.fullName || PERSONAL_PLACEHOLDERS.fullName;
  const displayEmail = personalInfo.email || PERSONAL_PLACEHOLDERS.email;
  const displayPhone = personalInfo.phone || PERSONAL_PLACEHOLDERS.phone;
  const isPlaceholder = !personalInfo.fullName?.trim();

  return (
    <div className="text-center">
      <h1
        className={`text-[26px] font-bold tracking-tight ${
          isPlaceholder ? "text-gray-400" : "text-gray-900"
        }`}
      >
        {displayName}
      </h1>

      <div className="mt-1 flex flex-wrap justify-center items-center gap-x-2 text-[12px] text-gray-700">
        <a
          href={personalInfo.email ? `mailto:${personalInfo.email}` : "#"}
          className="text-indigo-700 hover:underline"
        >
          {displayEmail}
        </a>

        <span className="text-gray-400">|</span>

        <a
          href={phoneNumber ? `tel:${countryCode}${phoneNumber}` : "#"}
          className="text-indigo-700 hover:underline"
        >
          {countryCode} {displayPhone}
        </a>

        {personalInfo.location?.trim() && (
          <>
            <span className="text-gray-400">|</span>
            <span>{personalInfo.location}</span>
          </>
        )}

        <span className="text-gray-400">|</span>

        <a
          href={personalInfo.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-700 hover:underline"
        >
          LinkedIn
        </a>

        <span className="text-gray-400">|</span>

        <a
          href={personalInfo.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-700 hover:underline"
        >
          GitHub
        </a>

        <span className="text-gray-400">|</span>

        <a
          href={websiteUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-700 hover:underline"
        >
          Website
        </a>
      </div>
    </div>
  );
}

export default PersonalPreview;
