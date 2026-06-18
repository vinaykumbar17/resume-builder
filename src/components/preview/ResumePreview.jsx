import { forwardRef, useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import PersonalPreview from "./PersonalPreview";
import SummaryPreview from "./SummaryPreview";
import SkillsPreview from "./SkillsPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import ProjectsPreview from "./ProjectsPreview";
import CertificationsPreview from "./CertificationsPreview";
import LanguagesPreview from "./LanguagesPreview";

const ResumePreview = forwardRef(function ResumePreview(_, ref) {
  const { fontFamily } = useContext(ResumeContext);

  return (
    <div
      ref={ref}
      className="resume-page bg-white shadow-2xl border border-gray-200 w-[794px] h-[1123px] mx-auto px-8 py-6 text-[12.5px] leading-[1.4] overflow-hidden print:shadow-none print:border-none"
      style={{ fontFamily }}
    >
      <PersonalPreview />

      <div className="mt-2">
        <SummaryPreview />
      </div>

      <SkillsPreview />
      <EducationPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <CertificationsPreview />
      <LanguagesPreview />
    </div>
  );
});

export default ResumePreview;