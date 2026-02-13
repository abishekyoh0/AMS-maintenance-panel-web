import { COLORS,  FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type StatCardProps = {
  title: string;
  value: number;
  icon: string;
  gradientColors?: [string, string];
  borderColor?: string; 
};

const StatCard = ({ title, value, icon, gradientColors,borderColor }: StatCardProps) => {
  return (
    <div
      className="rounded-xl p-4 text-white shadow"
      style={{
        background: gradientColors
          ? `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`
          : undefined,
           border: `1px solid ${borderColor || "#FFFFFF33"}`,
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-3">
        <img src={icon} alt={title} className="w-8 h-8 object-contain" />
      </div>

      <h2
        className={`text-2xl font-bold ${FONTSIZE[30]}`}
        style={{ fontWeight:WEIGHT.seven, color: COLORS.primary_white }}
      >
        {value}
      </h2>

      <p
        className={`text-sm opacity-50 ${FONTSIZE[14]}`}
        style={{ fontWeight:WEIGHT.four, color: COLORS.cardsubhead }}
      >
        {title}
      </p>
    </div>
  );
};

export default StatCard;
