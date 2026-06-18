import { useContext } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { ResumeContext } from "../../context/ResumeContext";
import {
  PROJECT_PLACEHOLDERS,
  PROJECT_PLACEHOLDERS_2,
} from "../../constants/placeholders";

const PROJECT_FORM_DEFAULTS = [PROJECT_PLACEHOLDERS, PROJECT_PLACEHOLDERS_2];

function ProjectsForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const projectList = resumeData.projects;

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...projectList,
        {
          title: "",
          tech: "",
          duration: "",
          organization: "",
          points: ["", "", ""],
        },
      ],
    });
  };

  const removeProject = (index) => {
    setResumeData({
      ...resumeData,
      projects: projectList.filter((_, i) => i !== index),
    });
  };

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projectList];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setResumeData({ ...resumeData, projects: updatedProjects });
  };

  const handlePointChange = (projectIndex, pointIndex, value) => {
    const updatedProjects = [...projectList];
    updatedProjects[projectIndex].points[pointIndex] = value;
    setResumeData({ ...resumeData, projects: updatedProjects });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button onClick={addProject}>+ Add Project</Button>
      </div>
      <p className="text-gray-500 mb-8">
        Showcase 2–3 strong projects. Perfect for freshers without much work
        experience.
      </p>

      {projectList.map((project, index) => {
        const defaults =
          PROJECT_FORM_DEFAULTS[index] || PROJECT_PLACEHOLDERS;

        return (
          <div
            key={index}
            className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6"
          >
            <div className="flex justify-between mb-6">
              <h3 className="font-semibold">Project {index + 1}</h3>
              {projectList.length > 1 && (
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              )}
            </div>

            <Input
              label="Project Title"
              value={project.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder={defaults.title}
            />

            <Input
              label="Technologies"
              value={project.tech}
              onChange={(e) => handleChange(index, "tech", e.target.value)}
              placeholder={defaults.tech}
            />

            <Input
              label="Duration"
              value={project.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              placeholder={defaults.duration}
            />

            <Input
              label="Organization"
              value={project.organization}
              onChange={(e) =>
                handleChange(index, "organization", e.target.value)
              }
              placeholder={defaults.organization}
            />

            {defaults.bullets.map((placeholder, pointIdx) => (
              <Input
                key={pointIdx}
                label={`Bullet Point ${pointIdx + 1}`}
                value={project.points[pointIdx]}
                onChange={(e) =>
                  handlePointChange(index, pointIdx, e.target.value)
                }
                placeholder={placeholder}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}

export default ProjectsForm;
