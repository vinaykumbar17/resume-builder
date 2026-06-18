import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";
import BuilderSidebar from "../components/builder/BuilderSidebar";
import FormContainer from "../components/builder/FormContainer";
import ResumePreview from "../components/preview/ResumePreview";
import PageFitIndicator from "../components/builder/PageFitIndicator";
import {
  ATSScorePanel,
  BuilderToolbar,
} from "../components/builder/BuilderToolbar";

function ResumeBuilder() {
  const previewRef = useRef(null);
  const previewContainerRef = useRef(null);
  const [previewWidth, setPreviewWidth] = useState(() => {
    try {
      const saved = Number(localStorage.getItem("previewWidth"));
      if (saved) return saved;
    } catch { /* ignore */ }

    if (typeof window !== "undefined") {
      const w = Math.floor(window.innerWidth * 0.9);
      return Math.min(480, Math.max(320, w));
    }

    return 480;
  });
  const [containerWidth, setContainerWidth] = useState(previewWidth);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(previewWidth);

  useEffect(() => {
    startWidthRef.current = previewWidth;
    try {
      localStorage.setItem("previewWidth", String(previewWidth));
    } catch {
      // ignore
    }
  }, [previewWidth]);

  useEffect(() => {
    if (!previewContainerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(previewContainerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onMove(e) {
      if (!draggingRef.current) return;
      const delta = e.clientX - startXRef.current;
      const maxAllowed = Math.max(280, window.innerWidth - 240);
      const newWidth = Math.max(280, Math.min(maxAllowed, startWidthRef.current - delta));
      setPreviewWidth(newWidth);
    }

    function onUp() {
      draggingRef.current = false;
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = previewWidth;
    document.body.style.cursor = "col-resize";
  };

  const handleDownload = useReactToPrint({
    contentRef: previewRef,
    documentTitle: "Resume",
    onAfterPrint: () => toast.success("Resume downloaded successfully!"),
  });

  const effectiveWidth = Math.min(previewWidth, containerWidth || previewWidth);
  const scale = Math.max(0.35, Math.min(1, effectiveWidth / 794));

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex flex-col lg:flex-row">
        <BuilderSidebar />

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto p-6 lg:p-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
              <BuilderToolbar onDownload={handleDownload} />
              <FormContainer />
            </div>
          </div>
        </div>

        {/* Resizer handle */}
        <div
          onMouseDown={handleMouseDown}
          className="hidden lg:block bg-transparent hover:bg-slate-300"
          style={{ width: 8, cursor: "col-resize" }}
          aria-hidden
        />

        {/* Preview area (resizable) */}
        <div
          ref={previewContainerRef}
          className="w-full lg:shrink-0 bg-slate-200 border-t border-gray-300 lg:border-t-0 lg:border-l overflow-y-auto"
          style={{ width: previewWidth, maxWidth: "100%", minWidth: 0 }}
        >
          <div className="p-6 sticky top-0">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-1">Live Preview</h2>
              <p className="text-xs text-gray-500">
                Your resume preview is available on all devices. Drag the handle on desktop to resize.
              </p>
            </div>

            <PageFitIndicator contentRef={previewRef} />
            <ATSScorePanel />

            <div className="mt-4 flex justify-center overflow-hidden">
              <div style={{ width: 794, height: 1123, transform: `scale(${scale})`, transformOrigin: "top center" }}>
                <ResumePreview ref={previewRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
