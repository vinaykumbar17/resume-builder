import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import PersonalInfoForm from "../forms/PersonalInfoForm";
import SummaryForm from "../forms/SummaryForm";
import EducationForm from "../forms/EducationForm";
import ExperienceForm from "../forms/ExperienceForm";
import ProjectsForm from "../forms/ProjectsForm";
import SkillsForm from "../forms/SkillsForm";
import CertificationsForm from "../forms/CertificationsForm";
import LanguagesForm from "../forms/LanguagesForm";

function FormContainer() {
  const { activeSection } = useContext(ResumeContext);

  switch (activeSection) {
    case "personalInfo":
      return <PersonalInfoForm />;

    case "summary":
      return <SummaryForm />;

    case "education":
      return <EducationForm />;

    case "experience":
      return <ExperienceForm />;

    case "projects":
      return <ProjectsForm />;

    case "skills":
      return <SkillsForm />;

    case "certifications":
      return <CertificationsForm />;

    case "languages":
      return <LanguagesForm />;

    default:
      return (
        <div className="text-gray-500">
          {activeSection} form coming soon...
        </div>
      );
  }
}

export default FormContainer;
