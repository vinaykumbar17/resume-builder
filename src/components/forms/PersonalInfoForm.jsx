import Input from "../common/Input";
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { PERSONAL_PLACEHOLDERS } from "../../constants/placeholders";

function PersonalInfoForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
      <p className="text-gray-500 mb-8">
        Start with your name and contact details. Keep it concise for a single
        A4 page.
      </p>

      <Input
        label="Full Name"
        name="fullName"
        value={resumeData.personalInfo.fullName}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.fullName}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={resumeData.personalInfo.email}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.email}
      />

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Country Code</label>
        <select
          name="countryCode"
          value={resumeData.personalInfo.countryCode || "+1"}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
        >
          <option value="+1">United States (+1)</option>
          <option value="+91">India (+91)</option>
          <option value="+44">United Kingdom (+44)</option>
          <option value="+61">Australia (+61)</option>
          <option value="+81">Japan (+81)</option>
          <option value="+49">Germany (+49)</option>
          <option value="+33">France (+33)</option>
          <option value="+971">UAE (+971)</option>
        </select>
      </div>

      <Input
        label="Phone Number"
        name="phone"
        value={resumeData.personalInfo.phone}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.phone}
      />

      <Input
        label="Location"
        name="location"
        value={resumeData.personalInfo.location}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.location}
      />

      <Input
        label="LinkedIn URL"
        name="linkedin"
        value={resumeData.personalInfo.linkedin}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.linkedin}
      />

      <Input
        label="GitHub URL"
        name="github"
        value={resumeData.personalInfo.github}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.github}
      />

      <Input
        label="Portfolio Website"
        name="website"
        value={resumeData.personalInfo.website}
        onChange={handleChange}
        placeholder={PERSONAL_PLACEHOLDERS.website}
      />
    </>
  );
}

export default PersonalInfoForm;
