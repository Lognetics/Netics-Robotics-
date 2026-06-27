"use client";

import dynamic from "next/dynamic";

const RobotScene = dynamic(() => import("./RobotScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin-slow rounded-full border-2 border-cyan/30 border-t-cyan" />
    </div>
  ),
});

/** Server-page-friendly wrapper around the 3D robot scene. */
export default function RobotViewer({
  accent = "#19e3ff",
  className = "h-[440px]",
}: {
  accent?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <RobotScene accent={accent} />
    </div>
  );
}
