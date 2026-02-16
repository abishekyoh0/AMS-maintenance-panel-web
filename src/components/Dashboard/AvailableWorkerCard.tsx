import type { Worker } from "../../pages/Dashboard/MaintenanceDashboard";
import person from "../../assets/Dashboard/person.png"
import white from "../../assets/Dashboard/White.png"
import {  FONTWEIGHT } from "../../constent/uiconstent";
import { FONTSIZE } from "../../constent/uiconstent";

export default function AvailableWorkerCard({
    worker,
}: {
    worker: Worker;
}) {
    return (
        <div className="bg-[#FFFFFF0D] border border-[#FFFFFF33] p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-[#6A728233] border-white/20 flex items-center justify-center">
                        <img
                            src={person}
                            alt="Worker"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    <div>
                        <h3 style={FONTWEIGHT[700]} className={`font-semibold text-[#FFFFFF] ${FONTSIZE[18]}`}>{worker.name}</h3>
                        <p style={FONTWEIGHT[400]} className={`text-sm text-[#99A1AF] ${FONTSIZE[12]}`}>{worker.role}</p>
                    </div>
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300 border border-gray-500/40">

                    <div style={FONTWEIGHT[400]} className={`w-4 h-4 rounded-full bg-[#6A728233] border border-[#99A1AF4D] flex items-center justify-center ${FONTSIZE[12]}`}>
                        <img
                            src={white}
                            alt="Available"
                            className="w-2.5 h-2.5 object-contain"
                        />
                    </div>

                    Available
                </span>

            </div>


            <div className="flex justify-between text-sm text-[#99A1AF]">
                <span style={FONTWEIGHT[400]} className={`text-[#99A1AF] ${FONTSIZE[14]}`}>Tasks today</span>
                <span style={FONTWEIGHT[700]} className={`text-[#00D3F2] ${FONTSIZE[14]}`}>{worker.tasksToday}</span>
            </div>
        </div>
    );
}
