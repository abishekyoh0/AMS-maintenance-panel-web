import type { ReactNode } from "react";
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

interface Props {
  title: string;
  icon?: string;
  children: ReactNode;
}

export default function Section({ title, icon, children }: Props) {
  return (
    <div className="space-y-6">
      
      <div className="flex items-center gap-3">
        {icon && (
          <img
            src={icon}
            alt={title}
            className="w-5 h-5 object-contain"
          />
        )}

        <h2
          style={FONTWEIGHT[700]}
          className={`
            ${FONTSIZE[24]}
            text-[#FFFFFF]
            tracking-wide
          `}
        >
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}
