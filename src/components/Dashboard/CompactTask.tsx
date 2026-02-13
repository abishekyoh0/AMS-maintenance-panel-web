import type { Task } from "../../pages/Dashboard/MaintenanceDashboard";
import tools from "../../assets/Dashboard/tools.png"
import location from "../../assets/Dashboard/Location.png"
import person from "../../assets/Dashboard/person.png"
import clock from "../../assets/Dashboard/clock.png"
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

export default function CompactTask({ task }: { task: Task }) {
  return (
    <div className="relative bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl px-6 py-5 flex justify-between items-center hover:border-white/20 transition duration-300">

      {/* LEFT SIDE */}
      <div className="flex items-start gap-4">

        {/* ICON */}
        <div className="text-gray-400 text-xl mt-1">
          <img src={tools} alt="Task" className="w-6 h-6 object-contain" />
        </div>

        {/* TEXT CONTENT */}
        <div>
          <h4 style={FONTWEIGHT[700]} className={`font-semibold text-[#FFFFFF] text-lg ${FONTSIZE[18]}`}>
            {task.title}
          </h4>

          <div className="flex items-center gap-3 text-sm text-gray-400 mt-2 flex-wrap">
  
  {/* Location */}
  <div style={FONTWEIGHT[400]} className={`flex items-center gap-1 ${FONTSIZE[14]}`}>
    <img
      src={location}
      alt="location"
      className="w-4 h-4 object-contain"
    />
    <span className="text-[##99A1AF]">{task.location}</span>
  </div>

  <span>•</span>

  {/* Worker */}
  <div style={FONTWEIGHT[400]} className={`flex items-center gap-1 ${FONTSIZE[14]}`}>
    <img
      src={person}
      alt="worker"
      className="w-4 h-4 object-contain"
    />
    <span style={FONTWEIGHT[400]} className={`text-[#99A1AF] ${FONTSIZE[14]}`}>
      {task.worker} ({task.workerRole})
    </span>
  </div>

  <span>•</span>

  {/* Time */}
  <div style={FONTWEIGHT[400]} className={`flex items-center gap-1 ${FONTSIZE[14]}`}>
    <img
      src={clock}
      alt="time"
      className="w-4 h-4 object-contain"
    />
    <span className="text-[#99A1AF]">{task.timeElapsed}</span>
  </div>

</div>

        </div>
      </div>

      {/* RIGHT SIDE BADGES */}
      <div style={FONTWEIGHT[700]} className={`flex items-center gap-3 ${FONTSIZE[12]}`}>
        <PriorityBadge priority={task.priority} />
        <StatusBadge status={task.status} />
      </div>
    </div>
  );
}

/* ================= PRIORITY BADGE ================= */

function PriorityBadge({
  priority,
}: {
  priority: Task["priority"];
}) {
  const styles = {
    Critical:
      "bg-[#FB2C3633] text-[#FF6467] border border-[#FF646766]",
    High:
      "bg-[#FF690033] text-[#FF8904] border border-[#FF89044D]",
    Medium:
      "bg-[#F0B10033] text-[#FDC700] border border-[#FDC7004D]",
    Low:
      "bg-[#6A728233] text-[#99A1AF] border border-[#99A1AF4D]",
  };

  return (
    <span style={FONTWEIGHT[400]}
      className={`px-3 py-1 rounded-full text-xs font-medium ${FONTSIZE[12]} ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}

/* ================= STATUS BADGE ================= */

function StatusBadge({
  status,
}: {
  status: Task["status"];
}) {
  const styles = {
    "In Progress":
      "bg-[#2B7FFF33] text-[#51A2FF] border border-[#51A2FF4D]",
    Assigned:
      "bg-[#AD46FF33] text-[#C27AFF] border border-[#C27AFF4D]",
    "Pending Parts":
      "bg-[#F0B10033] text-[#FDC700] border border-[#FDC7004D]",
    Completed:
      "bg-[#00C95033] text-[#05DF72] border border-[#05DF724D]",
  };

  return (
    <span style={FONTWEIGHT[700]} className={`px-3 py-1 rounded-full text-xs font-medium ${FONTSIZE[12]} ${styles[status]}`}>
      {status}
    </span>
  );
}
