function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-7 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition duration-300">
      {icon && (
        <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">
          {icon}
        </span>
      )}

      <h3 className="text-lg font-semibold mb-3 text-gray-900">{title}</h3>

      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
