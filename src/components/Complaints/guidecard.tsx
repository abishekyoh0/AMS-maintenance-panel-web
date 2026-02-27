import {  COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import plumb from "../../assets/guide/work.png";


type StatCardProps = {
  title: string;
  value: number;
  icon: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  subcategories: string[];
  tools: string[];
  resolution: string;
};

const StatCard = ({
  title,
  value,
  icon,
  bgGradient,
  borderColor,
  textColor,
  subcategories,
  tools,
  resolution,
}: StatCardProps) => {
  return (
    <div
      className="rounded-2xl p-5 text-white border shadow-md"
      style={{
        background: bgGradient,
        borderColor: borderColor,
      }}
    >
      <div className="flex gap-3,">
        <div className="w-10 h-10 rounded-full  flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>

        <div className="flex-1">
          <h3
            className={`text-lg ${FONTSIZE[24]}`}
            style={{ fontWeight: WEIGHT.seven,color:COLORS.primary_white }}
          >
            {title}
          </h3>

          <p
            className={`text-xs mt-1 ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven,color:textColor }}
          >
            {value} {value === 1 ? "Active Task" : "Active Tasks"}
          </p>

          <p className={`text-sm mt-4 text-gray-400 ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four,color:COLORS.grey }}>Subcategories:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {subcategories.map((item, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-md bg-[#FFFFFF1A] ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four,color:COLORS.primary_white }}
              >
                {item}
              </span>
            ))}
          </div>

          <p className={`text-sm mt-4 text-gray-400 ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four,color:COLORS.grey }}>Common Tools:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded-md flex items-center gap-2    bg-[#FFFFFF1A] ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four,color:COLORS.primary_white }}

              >
             <img src={plumb} alt="Guide" className="w-5 h-5 sm:w-3 sm:h-3" />

                {tool}
              </span>
            ))}
          </div>

          <p className={`text-sm mt-4 text-gray-400 ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four,color:COLORS.grey }}>
            Avg. Resolution:{" "}
            <span className={`text-white font-semibold ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.seven,color:COLORS.primary_white }}>{resolution}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;