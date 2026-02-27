import type { Worker } from "../../pages/Dashboard/MaintenanceDashboard";
import person from "../../assets/Dashboard/person.png";
import green from "../../assets/Dashboard/green.png";
import location from "../../assets/Dashboard/Location.png";
import { FONTSIZE } from "../../constent/uiconstent";
import { FONTWEIGHT } from "../../constent/uiconstent";

export default function WorkerCard({ worker }: { worker: Worker }) {
  return (
    <div className="bg-linear-to-br from-[#00C9501A] to-[#00BC7D1A] border border-[#05DF724D] p-6 rounded-2xl space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#00C95033] border border-green-500/30 flex items-center justify-center">
            <img
              src={person}
              alt="Worker"
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
          <div>
            <p
              style={FONTWEIGHT[700]}
              className={`text-lg text-[#FFFFFF] ${FONTSIZE[18]}`}
            >
              {worker.name}
            </p>

            <p
              style={FONTWEIGHT[400]}
              className={`text-sm text-[#99A1AF] ${FONTSIZE[14]}`}
            >
              {worker.role}
            </p>
          </div>
        </div>

        <span
          style={FONTWEIGHT[700]}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-[#00C95033] text-[#05DF72] border border-[#05DF724D] ${FONTSIZE[12]}`}
        >
          <img src={green} alt="On Task" className="w-3 h-3 object-contain" />
          On Task
        </span>
      </div>

      <div className="bg-white/5 p-4 rounded-xl">
        <p
          style={FONTWEIGHT[400]}
          className={`text-xs text-[#99A1AF] ${FONTSIZE[12]}`}
        >
          Current Task
        </p>
        <p
          style={FONTWEIGHT[700]}
          className={`font-medium text-[#FFFFFF] ${FONTSIZE[16]}`}
        >
          {worker.currentTask}
        </p>
      </div>

      <div className="flex justify-between text-sm text-[#99A1AF]">
        <span
          style={FONTWEIGHT[400]}
          className={`flex items-center gap-1 ${FONTSIZE[14]}`}
        >
          <img src={location} alt="Location" className="w-6 h-6" />
          {worker.location}
        </span>

        <span
          style={FONTWEIGHT[700]}
          className={`text-[#00D3F2] ${FONTSIZE[14]}`}
        >
          {worker.tasksToday} tasks today
        </span>
      </div>
    </div>
  );
}
