function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows = 5,
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <textarea
        rows={rows}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition placeholder:text-gray-400"
      />
    </div>
  );
}

export default Textarea;
