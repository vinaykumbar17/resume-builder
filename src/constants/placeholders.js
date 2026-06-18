export const PERSONAL_PLACEHOLDERS = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  countryCode: "+1",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  website: "https://johndoe.dev",
  location: "New York, USA",
};

export const SUMMARY_PLACEHOLDER =
  "Motivated Computer Science graduate with hands-on experience in web development. Skilled in React, JavaScript, and REST APIs. Eager to contribute to innovative teams and grow as a software engineer.";

export const EDUCATION_PLACEHOLDERS = {
  institution: "ABC University",
  year: "2025",
  cgpa: "8.5",
  percentage: "85",
};

export const EXPERIENCE_PLACEHOLDERS = {
  title: "Software Developer Intern",
  company: "XYZ Corporation",
  duration: "Jan 2025 - Jun 2025",
  type: "Internship",
  bullets: [
    "Developed responsive web features using React and JavaScript.",
    "Collaborated with a team of 4 to deliver a client project on schedule.",
    "Improved application performance by optimizing API calls by 30%.",
  ],
};

export const PROJECT_PLACEHOLDERS = {
  title: "Task Management App",
  tech: "React • Node.js • MongoDB",
  duration: "Mar 2025 - May 2025",
  organization: "XYZ Labs",
  bullets: [
    "Built a full-stack task manager with user authentication.",
    "Implemented real-time updates using REST APIs.",
    "Deployed application on cloud with CI/CD pipeline.",
  ],
};

export const PROJECT_PLACEHOLDERS_2 = {
  title: "Portfolio Website",
  tech: "HTML • CSS • JavaScript",
  duration: "Jan 2025 - Feb 2025",
  organization: "Personal Project",
  bullets: [
    "Designed and developed a responsive personal portfolio.",
    "Optimized for accessibility and mobile-first layout.",
    "Achieved 95+ Lighthouse performance score.",
  ],
};

export const CERTIFICATION_PLACEHOLDERS = [
  {
    title: "Web Development Certification",
    organization: "ABC Training Institute",
    duration: "Aug 2025 - Sep 2025",
  },
  {
    title: "Coding Bootcamp 2025",
    organization: "XYZ University",
    duration: "May 2025",
  },
  {
    title: "Sample Hackathon 2024",
    organization: "ABC Institute of Technology",
    duration: "Jul 2024",
  },
];

export const ACHIEVEMENT_PLACEHOLDERS = [
  "Top performer in ABC Training Institute (Grade A)",
  "Participated in Sample Hackathon 2024",
  "Completed 6-month Software Development Internship",
  "Built Task Management App as capstone project",
  "Published open-source contribution on GitHub",
];

export const LANGUAGE_PLACEHOLDERS = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
];

export const SKILL_CATEGORIES = [
  { category: "Programming", skills: "Java, Python, JavaScript" },
  { category: "Web Technologies", skills: "HTML, CSS, React, Node.js" },
  { category: "Database", skills: "MySQL, MongoDB, PostgreSQL" },
  { category: "Tools", skills: "Git, VS Code, Docker" },
  { category: "Soft Skills", skills: "Communication, Teamwork, Problem Solving" },
  { category: "Cloud", skills: "AWS, Firebase, Vercel" },
];

export const DEFAULT_SKILLS_PREVIEW = SKILL_CATEGORIES.slice(0, 3);

export const DEFAULT_PROJECTS_PREVIEW = [
  {
    title: PROJECT_PLACEHOLDERS.title,
    tech: PROJECT_PLACEHOLDERS.tech,
    duration: PROJECT_PLACEHOLDERS.duration,
    organization: PROJECT_PLACEHOLDERS.organization,
    points: PROJECT_PLACEHOLDERS.bullets,
  },
  {
    title: PROJECT_PLACEHOLDERS_2.title,
    tech: PROJECT_PLACEHOLDERS_2.tech,
    duration: PROJECT_PLACEHOLDERS_2.duration,
    organization: PROJECT_PLACEHOLDERS_2.organization,
    points: PROJECT_PLACEHOLDERS_2.bullets,
  },
];

export const DEFAULT_LANGUAGES_PREVIEW = [
  { language: "English" },
  { language: "Spanish" },
  { language: "French" },
];
