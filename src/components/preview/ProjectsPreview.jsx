import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { DEFAULT_PROJECTS_PREVIEW } from "../../constants/placeholders";

function ProjectsPreview() {
  const { resumeData } = useContext(ResumeContext);

  const hasProjects = resumeData.projects.some(
    (project) =>
      project.title?.trim() ||
      project.tech?.trim() ||
      project.duration?.trim() ||
      project.organization?.trim() ||
      (project.points || []).some((p) => p?.trim())
  );

  const projectsList = hasProjects
    ? resumeData.projects.filter(
        (p) => p.title?.trim() || p.tech?.trim()
      )
    : DEFAULT_PROJECTS_PREVIEW;

  return (
    <div className="mt-2.5">
      <h2 className="resume-section-title">Projects</h2>

      <div className="mt-1 space-y-1">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className={!hasProjects ? "text-gray-400" : ""}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{project.title}</h3>
              <span className="font-semibold whitespace-nowrap">
                {project.duration}
              </span>
            </div>

            <div className="flex justify-between items-start">
              <p className="italic text-gray-700">{project.tech}</p>
              <span className="text-gray-600 whitespace-nowrap">
                {project.organization}
              </span>
            </div>

            <div className="mt-0.5 space-y-0.5">
              {(project.points || []).map(
                (point, idx) =>
                  point && (
                    <div key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPreview;
