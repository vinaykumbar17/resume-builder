function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
}) {
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 rounded-xl",
    lg: "px-8 py-4 rounded-xl text-lg",
  };

  const baseStyles =
    "font-semibold transition duration-200 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-200",
    secondary:
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
