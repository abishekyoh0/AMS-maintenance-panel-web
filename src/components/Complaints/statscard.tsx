import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type StatCardProps = {
  title: string;
  value: number;
  icon: string;
  bgColor: string;
  borderColor?: string;
  textColor?: string;
};

const StatCard = ({
  title,
  value,
  icon,
  bgColor,
  borderColor,
  textColor,
}: StatCardProps) => {
  return (
    <div
      className="rounded-xl p-4 text-white shadow border"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-3">
        <img src={icon} alt={title} className="w-6 h-6 object-contain" />
      </div>

      <p
        className={`text-sm ${FONTSIZE[14]}`}
        style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
      >
        {title}
      </p>

      <h2
        className={`text-2xl font-bold mt-1 ${FONTSIZE[18]}`}
        style={{
          fontWeight: WEIGHT.seven,
          color: textColor || COLORS.primary_white, 
        }}
      >
        {value} {value === 1 ? "Task" : "Tasks"}
      </h2>
    </div>
  );
};

export default StatCard;
