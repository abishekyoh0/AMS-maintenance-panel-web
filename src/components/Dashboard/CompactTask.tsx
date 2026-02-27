import type { Task } from "../../pages/Dashboard/MaintenanceDashboard";
import tools from "../../assets/Dashboard/tools.png";
import location from "../../assets/emergencyAlerts/location.png";
import person from "../../assets/Dashboard/person.png";
import clock from "../../assets/Dashboard/clock.png";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

export default function CompactTask({ task }: { task: Task }) {
  return (
    <div className="relative bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl px-6 py-5 flex justify-between items-center hover:border-white/20 transition duration-300">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <img src={tools} alt="Task" className="w-6 h-6 object-contain" />
        </div>

        <div>
          <h4
            style={{fontWeight: WEIGHT.seven}}
            className={`${FONTSIZE[18]}`}>
            {task.title}
          </h4>

          <div className={`flex items-center gap-3 mt-2 flex-wrap ${FONTSIZE[14]}`} style={{fontWeight: WEIGHT.four, color: COLORS.secoundy_gray}}>
            <div className={`flex items-center gap-1 `}>
              <img
                src={location}
                alt="location"
                className="w-4 h-4 object-contain"
              />
              <span>{task.location}</span>
            </div>
            <span>•</span>

            <div className={`flex items-center gap-1 `}>
              <img
                src={person}
                alt="worker"
                className="w-4 h-4 object-contain"
              />
              <span>
                {task.worker} ({task.workerRole})
              </span>
            </div>
            <span>•</span>

            <div className={`flex items-center gap-1`}>
              <img src={clock} alt="time" className="w-4 h-4 object-contain" />
              <span>{task.timeElapsed}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{fontWeight: WEIGHT.seven}}
        className={`flex items-center gap-3 ${FONTSIZE[12]}`}>
        <PriorityBadge priority={task.priority} />
        <StatusBadge status={mapStatus(task.status)} />
      </div>
    </div>
  );
}

function mapStatus(
  status: string,
): "In Progress" | "Assigned" | "Pending Parts" | "Completed" {
  switch (status) {
    case "In Progress":
    case "Assigned":
    case "Pending Parts":
    case "Completed":
      return status;
    default:
      return "Assigned";
  }
}

function PriorityBadge({ priority }: { priority: Task["priority"] }) {
  const styles: Record<Task["priority"], string> = {
    Critical: "bg-[#FB2C3633] text-[#FF6467] border border-[#FF646766]",
    High: "bg-[#FF690033] text-[#FF8904] border border-[#FF89044D]",
    Medium: "bg-[#F0B10033] text-[#FDC700] border border-[#FDC7004D]",
    Low: "bg-[#6A728233] text-[#99A1AF] border border-[#99A1AF4D]",
  };

  return (
    <span style={{fontWeight: WEIGHT.seven}}
      className={`px-3 py-1 rounded-full ${FONTSIZE[12]} ${styles[priority]}`}>
      {priority}
    </span>
  );
}

function StatusBadge({
  status,
}: {
  status: "In Progress" | "Assigned" | "Pending Parts" | "Completed";
}) {
  const styles: Record<
    "In Progress" | "Assigned" | "Pending Parts" | "Completed",
    string
  > = {
    "In Progress": "bg-[#2B7FFF33] text-[#51A2FF] border border-[#51A2FF4D]",
    Assigned: "bg-[#AD46FF33] text-[#C27AFF] border border-[#C27AFF4D]",
    "Pending Parts": "bg-[#F0B10033] text-[#FDC700] border border-[#FDC7004D]",
    Completed: "bg-[#00C95033] text-[#05DF72] border border-[#05DF724D]",
  };

  return (
    <span style={{fontWeight: WEIGHT.seven}}
      className={`px-3 py-1 rounded-full ${FONTSIZE[12]} ${styles[status]}`}>
      {status}
    </span>
  );
}
