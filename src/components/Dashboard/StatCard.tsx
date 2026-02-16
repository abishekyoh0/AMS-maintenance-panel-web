import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

interface Props {
  icon: string;
  value: string | number;
  title: string;
  subtitle: string;
  variant: "critical" | "active" | "workers" | "sla" | "completed";
}

export default function StatCard({
  icon,
  value,
  title,
  subtitle,
  variant,
}: Props) {
  const styles = {
    critical:
      "bg-gradient-to-br from-[#FB2C3633] to-[#FF690033] border-[#FF64674D]",
    active:
      "bg-[#51A2FF1A] border-[#51A2FF4D]",
    workers:
      "bg-[#05DF721A] border-[#05DF724D]",
    sla:
      "bg-[#C27AFF1A] border-[#C27AFF4D]",
    completed:
      "bg-[#FDC7001A] border-[#FDC7004D]",
  };

  const titleColors = {
    critical: "text-[#FF6467]",
    active: "text-[#51A2FF]",
    workers: "text-[#05DF72]",
    sla: "text-[#C27AFF]",
    completed: "text-[#FDC700]",
  };

  return (
    <div
      className={`p-6 rounded-2xl border backdrop-blur-xl ${styles[variant]} transition hover:scale-[1.02] duration-300`}
    >
      {/* Image Icon */}
      <div className="mb-4">
        <img
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Value */}
      <h2 style={FONTWEIGHT[700]} className={`text-3xl text-[#FFFFFF] font-bold mb-1 ${FONTSIZE[30]}`}>{value}</h2>

      {/* Title */}
      <p style={FONTWEIGHT[700]} className={`text-sm font-semibold ${FONTSIZE[14]} ${titleColors[variant]}`}>
        {title}
      </p>

      {/* Subtitle */}
      <p style={FONTWEIGHT[400]} className={`text-xs text-[#99A1AF] mt-1 ${FONTSIZE[12]}`}>{subtitle}</p>
    </div>
  );
}
