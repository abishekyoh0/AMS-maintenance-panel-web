import graph from "../../assets/Dashboard/graph.png"
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

interface Props {
  total: number;
  completed: number;
  inProgress: number;
}

export default function TodaySummary({
  total,
  completed,
  inProgress,
}: Props) {
  
  return (
    <div className="bg-linear-to-r from-blue-900/40 to-black border border-blue-500/30 p-6 rounded-2xl space-y-3">
      <h3 className="text-lg font-semibold">
        <img src={graph} alt="Graph" className="w-5 h-5 mr-2 inline-block" />
      </h3>
      <p style={FONTWEIGHT[700]} className={`text-[#FFFFFF] ${FONTSIZE[20]}`}> Today's Summary</p>
      <div className="flex justify-between text-sm">
        <span style={FONTWEIGHT[400]} className={`text-[#99A1AF] ${FONTSIZE[14]}`}>Total Tasks</span>
        <span style={FONTWEIGHT[700]} className={`text-[#FFFFFF] ${FONTSIZE[14]}`}>{total}</span>
      </div>

      <div className="flex justify-between text-sm text-green-400">
        <span style={FONTWEIGHT[400]} className={`text-[#99A1AF] ${FONTSIZE[14]}`}>Completed</span>
        <span style={FONTWEIGHT[700]} className={`text-[#05DF72] ${FONTSIZE[14]}`}>{completed}</span>
      </div>

      <div className="flex justify-between text-sm text-blue-400">
        <span style={FONTWEIGHT[400]} className={`text-[#99A1AF] ${FONTSIZE[14]}`}>In Progress</span>
        <span style={FONTWEIGHT[700]} className={`text-[#51A2FF] ${FONTSIZE[14]}`}>{inProgress}</span>
      </div>
    </div>
  );
}


