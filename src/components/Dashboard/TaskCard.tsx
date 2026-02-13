import type { Task } from "../../pages/Dashboard/MaintenanceDashboard";
import alert from "../../assets/Dashboard/alarm.png"
import location from "../../assets/Dashboard/Location.png"
import person from "../../assets/Dashboard/person.png"
import tick from "../../assets/Dashboard/tick.png"
import clock from "../../assets/Dashboard/clock.png"
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";
export default function TaskCard({ task }: { task: Task }) {
  const isCritical = task.priority === "Critical";

  return (
    <div 
      className={`
      relative rounded-2xl border p-6 space-y-6
      backdrop-blur-xl
      ${
        isCritical
          ? "bg-linear-to-br from-[#FB2C361A]  to-[#FF69001A] border-[#FF646766]"
          : "bg-linear-to-br from-[#FB2C361A]  to-[#FF69001A] border-[#FF646766]"
      }
    `}
    >
      {/* TOP HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h3 style={FONTWEIGHT[700]} className={`text-xl font-semibold ${FONTSIZE[24]} text-[#FFFFFF]`}>
           <img src={alert} alt="Alert" className="w-5 h-5 mr-2 inline-block" /> {task.title}
          </h3>
          <p style={FONTWEIGHT[400]} className={`text-sm text-[#99A1AF] mt-1 px-8 ${FONTSIZE[14]}`}>
            Task ID: #{task.id}
          </p>
        </div>

        {/* PRIORITY BADGE */}
        <span style={FONTWEIGHT[400]}
          className={`
            px-4 py-1 rounded-full text-xs font-medium $FONTSIZE[14]
            ${
              isCritical
                ? "bg-[#FB2C3633] text-[#FF6467] border border-[#FF646766]"
                : "bg-[#FF690033] text-[#FF8904] border border-[#FF89044D]"
            }
          `}
        >
          {task.priority}
        </span>
      </div>

      {/* INFO GRID */}
      <div className="grid md:grid-cols-4 gap-4">
  <Info
    label="Location"
    value={task.location}
    icon={location}
    valueColor="#FFFFFF"
    
  />

  {task.flat && (
    <Info
      label="Flat Number"
      value={task.flat}
      highlight
    />
  )}

  <Info
    label="Category"
    value={task.category}
    valueColor="#FFFFFF"
  />

  <Info
  label="Time Elapsed"
  value={task.timeElapsed}
  icon={clock}
  valueColor="text-[#FF8904]"
/>

</div>


      {/* ASSIGNED WORKER ROW */}
      <div className="flex justify-between items-center bg-white/5 rounded-xl p-4 border border-white/10">
        <div>
          <p className="text-xs text-[#99A1AF]">
            Assigned Worker
          </p>
         <div className="mt-1">
  <p className="font-medium text-[#FFFFFF]">
    <img src={person} alt="Person" className="w-6 h-6 mr-2 inline-block" /> {task.worker} ({task.workerRole})
  </p>
</div>

        </div>

        <span className="px-4 py-1 rounded-full text-xs bg-[#2B7FFF33] text-[#51A2FF] border border-[#51A2FF4D]">
          {task.status}
        </span>
      </div>

      {/* BOTTOM STATUS BAR */}
      <div className="flex justify-between items-center rounded-xl p-4 border border-[#05DF724D] bg-[#00C9501A]">
        <div className="flex items-center gap-2 text-[#05DF72] text-sm"><img src={tick} alt="On Time" className="w-4 h-4 object-contain" />
          {task.onTime ? " On Time" : "⚠ Delayed"}
        </div>

        <button className="px-4 py-2 bg-[#FFFFFF1A] text-[#FFFFFF] hover:bg-white/20 transition rounded-lg text-sm">
          View Details →
        </button>
      </div>
    </div>
  );
}

/* ================= INFO BOX ================= */

function Info({
  label,
  value,
  highlight,
  icon,
  valueColor,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  icon?: string;
  valueColor?: string;
}) {
  return (
    <div className="bg-[#FFFFFF1A] rounded-xl p-4 border border-white/10">
      
      {/* LABEL */}
      <p
        style={FONTWEIGHT[400]}
        className={`text-[#99A1AF] ${FONTSIZE[14]}`}
      >
        {label}
      </p>

      {/* VALUE */}
      <div className="flex items-center gap-2 mt-2">
        {icon && (
          <img
            src={icon}
            alt={label}
            className="w-4 h-4 object-contain"
          />
        )}

        <p
          style={FONTWEIGHT[700]}
          className={`
            ${FONTSIZE[16]}
            ${highlight ? "text-[#00D3F2]" : ""}
            ${valueColor || "text-[#FFFFFF]"}
          `}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

