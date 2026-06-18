/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const ResumeContext = createContext();

const LOCAL_STORAGE_KEY = "vhire_resume_draft";
const DRAFT_EXPIRY = 1000 * 60 * 60 * 24 * 7; // 7 days

const defaultResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    website: "",
  },
  summary: "",
  education: [
    {
      level: "",
      institution: "",
      board: "",
      year: "",
      score: "",
    },
  ],
  experience: [
    {
      title: "",
      company: "",
      duration: "",
      type: "",
      points: ["", "", ""],
    },
  ],
  projects: [
    {
      title: "",
      tech: "",
      duration: "",
      organization: "",
      points: ["", "", ""],
    },
  ],
  skills: [
    {
      category: "",
      skills: "",
    },
  ],
  certifications: [
    {
      title: "",
      organization: "",
      duration: "",
    },
  ],
  languages: [
    {
      language: "",
    },
  ],
};

function loadSavedDraft() {
  try {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved?.savedAt || Date.now() - saved.savedAt > DRAFT_EXPIRY) {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
      return null;
    }
    return saved;
  } catch {
    return null;
  }
}

function ResumeProvider({ children }) {
  const savedDraft = loadSavedDraft();

  const [activeSection, setActiveSection] = useState(
    savedDraft?.activeSection || "personalInfo"
  );

  const [sectionOrder, setSectionOrder] = useState([
    "personalInfo",
    "summary",
    "education",
    "experience",
    "projects",
    "skills",
    "certifications",
    "languages",
  ]);

  const [resumeData, setResumeData] = useState(
    savedDraft?.resumeData || defaultResumeData
  );

  const [fontFamily, setFontFamily] = useState(
    savedDraft?.fontFamily ||
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
  );

  const [lastSavedAt, setLastSavedAt] = useState(savedDraft?.savedAt || null);

  const saveDraft = () => {
    try {
      if (typeof window === "undefined") return;
      const payload = {
        savedAt: Date.now(),
        resumeData,
        activeSection,
        fontFamily,
      };
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
      setLastSavedAt(payload.savedAt);
    } catch {
      // ignore localStorage issues
    }
  };

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const payload = {
        savedAt: Date.now(),
        resumeData,
        activeSection,
        fontFamily,
      };
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore localStorage issues
    }
  }, [resumeData, activeSection, fontFamily]);

  return (
    <ResumeContext.Provider
      value={{
        activeSection,
        setActiveSection,

        sectionOrder,
        setSectionOrder,

        resumeData,
        setResumeData,

        fontFamily,
        setFontFamily,

        lastSavedAt,
        saveDraft,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeProvider;
