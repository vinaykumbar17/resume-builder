const ACTION_VERBS = [
  "developed",
  "built",
  "created",
  "designed",
  "implemented",
  "improved",
  "led",
  "managed",
  "optimized",
  "collaborated",
  "delivered",
  "achieved",
  "analyzed",
  "automated",
];

function hasActionVerbs(text) {
  const lower = text.toLowerCase();
  return ACTION_VERBS.some((verb) => lower.includes(verb));
}

function scoreSection(hasContent, weight) {
  return hasContent ? weight : 0;
}

export function analyzeATS(resumeData) {
  const { personalInfo, summary, education, experience, projects, skills } =
    resumeData;

  const tips = [];
  let score = 0;

  const hasName = personalInfo.fullName?.trim().length > 0;
  const hasEmail = personalInfo.email?.trim().length > 0;
  const hasPhone = personalInfo.phone?.trim().length > 0;

  // increase weight for contact details
  score += scoreSection(hasName, 10);
  score += scoreSection(hasEmail, 10);
  score += scoreSection(hasPhone, 8);

  if (!hasName) tips.push("Add your full name — ATS systems parse this first.");
  if (!hasEmail) tips.push("Include a professional email address.");
  if (!hasPhone) tips.push("Add a phone number recruiters can reach you on.");

  const summaryText = summary?.trim() || "";
  const summaryLen = summaryText.length;

  // reward well-sized summaries more aggressively
  if (summaryLen >= 90 && summaryLen <= 300) {
    score += 20;
  } else if (summaryLen > 0) {
    score += 10;
    if (summaryLen > 300) {
      tips.push("Shorten your summary to fit one A4 page (aim for 2–3 lines).");
    } else {
      tips.push("Expand your summary to 2–3 lines highlighting your strengths.");
    }
  } else {
    tips.push("Add a professional summary tailored for fresher roles.");
  }

  const filledEducation = education.filter(
    (e) => e.institution?.trim() || e.year?.trim()
  );
  score += Math.min(filledEducation.length * 6, 24);
  if (filledEducation.length === 0) {
    tips.push("List your education — degree, institution, and year.");
  }

  const filledSkills = skills.filter(
    (s) => s.category?.trim() && s.skills?.trim()
  );
  score += Math.min(filledSkills.length * 6, 20);
  if (filledSkills.length < 3) {
    tips.push("Add at least 3 skill categories (Programming, Tools, Soft Skills).");
  }

  const expBullets = experience.flatMap((e) => e.points || []).filter(Boolean);
  const projectBullets = projects.flatMap((p) => p.points || []).filter(Boolean);
  const allBullets = [...expBullets, ...projectBullets];

  const hasExperience =
    experience.some((e) => e.title?.trim() || e.company?.trim()) ||
    projects.some((p) => p.title?.trim());

  score += scoreSection(hasExperience, 12);
  if (!hasExperience) {
    tips.push("Add internships, projects, or volunteer work — critical for freshers.");
  }

  const actionVerbCount = allBullets.filter(hasActionVerbs).length;
  if (actionVerbCount >= 3) {
    score += 18;
  } else if (actionVerbCount > 0) {
    score += 9;
    tips.push("Start bullet points with action verbs: Developed, Built, Implemented.");
  } else if (allBullets.length > 0) {
    tips.push("Use strong action verbs in bullet points for ATS keyword matching.");
  }

  const hasLinkedIn = personalInfo.linkedin?.trim().length > 0;
  const hasGithub = personalInfo.github?.trim().length > 0;
  const hasWebsite = personalInfo.website?.trim().length > 0;
  score += scoreSection(hasLinkedIn || hasGithub, 8);
  score += scoreSection(hasWebsite, 4);
  if (!hasLinkedIn && !hasGithub) {
    tips.push("Add LinkedIn or GitHub — recruiters expect online profiles.");
  }

  if (allBullets.length > 12) {
    // reduce penalty slightly
    score -= 3;
    tips.push("Too many bullet points — trim content to keep everything on one A4 page.");
  }

  // normalize score
  score = Math.max(0, Math.min(100, Math.round(score)));

  const grade =
    score >= 85
      ? "Excellent"
      : score >= 70
        ? "Good"
        : score >= 50
          ? "Fair"
          : "Needs Work";

  return { score, grade, tips };
}