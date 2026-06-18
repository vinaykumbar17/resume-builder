import { useEffect, useState } from "react";

function PageFitIndicator({ contentRef }) {
  const [overflow, setOverflow] = useState(false);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const checkOverflow = () => {
      if (!contentRef?.current) return;

      const el = contentRef.current;
      const overflowed = el.scrollHeight > el.clientHeight;
      const percent = Math.min(
        100,
        Math.round((el.scrollHeight / el.clientHeight) * 100)
      );

      setOverflow(overflowed);
      setFillPercent(percent);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    if (contentRef?.current) {
      observer.observe(contentRef.current);
    }

    const interval = setInterval(checkOverflow, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [contentRef]);

  const barColor =
    overflow
      ? "bg-red-500"
      : fillPercent > 85
        ? "bg-amber-500"
        : "bg-emerald-500";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">
          A4 Page Fit
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            overflow
              ? "bg-red-100 text-red-700"
              : fillPercent > 85
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {overflow ? "Overflow" : fillPercent > 85 ? "Nearly Full" : "Good Fit"}
        </span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${barColor}`}
          style={{ width: `${Math.min(fillPercent, 100)}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        {overflow
          ? "Content exceeds one A4 page. Remove bullet points or shorten sections."
          : "Designed for a single A4 page — ideal for fresher resumes."}
      </p>
    </div>
  );
}

export default PageFitIndicator;
