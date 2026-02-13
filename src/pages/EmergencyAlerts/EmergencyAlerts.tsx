import React from "react";
import Alert from "../../assets/emergencyAlerts/alarm.png";
import Tick from "../../assets/emergencyAlerts/tick.png";
import Graph from "../../assets/emergencyAlerts/graph.png";
import Water from "../../assets/emergencyAlerts/water.png";
import Locatio from "../../assets/emergencyAlerts/location.png";
import Clock from "../../assets/emergencyAlerts/clock.png";
import worker from "../../assets/emergencyAlerts/worker.png";
import { COLORS, FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

type AlertHistory = {
  img?: string;
  type: string; 
  code?: string;
  priority: "Low" | "Medium" | "High";
  location: string;
  date: number | string;
  time: string;
  assigned: string;
  status: "Active" | "Resolved";
};

export const ALERT_HISTORY: AlertHistory[] = [
  {
    img: "",
    type: "Water Leakage",
    code: "#EA003",
    priority: "Medium",
    location: "Block A - Common Area",
    date: "2026-01-28",
    time: "08:30 PM",
    assigned: "Team-2",
    status: "Active",
  },
  {
    img: "",
    type: "Power Failure",
    code: "#EA004",
    priority: "Medium",
    location: "Block C",
    date: "2026-01-27",
    time: "10:15 AM",
    assigned: "Team-1",
    status: "Resolved",
  },
  {
    img: "",
    type: "Elevator Emergency",
    code: "#EA005",
    priority: "High",
    location: "Block B - Elevator 2",
    date: "2026-01-27",
    time: "02:45 PM",
    assigned: "Team-3",
    status: "Resolved",
  },
];

const priorityStyle = (priority: string) => {
  if (priority === "High")
    return { bg: `${COLORS.red}33`, color: COLORS.red };

  if (priority === "Medium")
    return { bg: `${COLORS.orange}33`, color: COLORS.orange };

  return { bg: `${COLORS.blue}33`, color: COLORS.blue };
};

const statusStyle = (status: string) => {
  if (status === "Active")
    return { bg: `${COLORS.green}33`, color: COLORS.green };

  return { bg: "#6A728233", color: COLORS.secoundy_gray };
};


const EmergencyDashboard: React.FC = () => {
  return (
    <div className="space-y-6" style={{ color: COLORS.primary_white }}>

      <div>
        <h1 className={`flex items-center gap-2 ${FONTSIZE[36]} ${FONTWEIGHT[700]}`}>
          <img src={Alert} alt="alert" /> Emergency Alerts
        </h1>
        <p className={`mt-2 ${FONTSIZE[16]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>
          View emergency alerts requiring maintenance attention
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl p-5 bg-linear-to-r from-[#FB2C3633] to-[#FF690033] border border-[#FF64674D]">
          <img src={Alert} alt="" />
          <p className={`my-2 ${FONTSIZE[30]} ${FONTWEIGHT[700]}`}>1</p>
          <p className={`my-2 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.red }}>Requires Attention</p>
        </div>

        <div className="rounded-xl p-5 bg-linear-to-r from-[#00C95033] to-[#00BC7D33] border border-[#05DF724D]">
          <img src={Tick} alt="" />
          <p className={`my-2 ${FONTSIZE[30]} ${FONTWEIGHT[700]}`}>2</p>
          <p className={`my-2 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.green }}>Resolved</p>
        </div>

        <div className="rounded-xl p-5 bg-linear-to-r from-[#2B7FFF33] to-[#00B8DB33] border border-[#51A2FF4D]">
          <img src={Graph} alt="" />
          <p className={`my-2 ${FONTSIZE[30]} ${FONTWEIGHT[700]}`}>3</p>
          <p className={`my-2 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.blue }}>Total Alerts</p>
        </div>
      </div>

      <h2 className={`mt-10 flex items-center gap-2 ${FONTSIZE[24]} ${FONTWEIGHT[700]}`}>
        <img src={Alert} alt="" /> Active Alerts - Maintenance Required
      </h2>

      <div className="rounded-2xl border border-[#FF64674D] bg-linear-to-r from-[#FB2C361A] to-[#FF69001A] p-4 space-y-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={Water} alt="" />
            <div>
              <p className={`flex items-center ${FONTSIZE[24]} ${FONTWEIGHT[700]}`}>
                Water Leakage
              </p>
              <p className={`${FONTSIZE[16]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>Alert ID: #A2035</p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full ${FONTSIZE[14]} ${FONTWEIGHT[700]}`} style={{ backgroundColor: COLORS.orange + "33", color: COLORS.orange }}>
            Medium Priority
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mt-4 text-sm">
          <div className="bg-[#FFFFFF0D] p-3 rounded-lg">
            <p className={`mb-2 ${FONTSIZE[12]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>Location</p>
            <p className={`flex gap-2 ${FONTSIZE[16]} ${FONTWEIGHT[700]}`}> <img src={Locatio} alt="" className="w-5 h-5" /> Block A - Common Area</p>
          </div>

          <div className="bg-[#FFFFFF0D] p-3 rounded-lg">
            <p className={`mb-2 ${FONTSIZE[12]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>Time</p>
            <p className={`flex gap-2 ${FONTSIZE[16]} ${FONTWEIGHT[700]}`}> <img src={Clock} alt="" className="w-5 h-5" /> 08:30 PM</p>
          </div>

          <div className="bg-[#FFFFFF0D] p-3 rounded-lg">
            <p className={`mb-2 ${FONTSIZE[12]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>Assigned</p>
            <p className={`flex gap-2 ${FONTSIZE[16]} ${FONTWEIGHT[700]}`}> <img src={worker} alt="" className="w-5 h-5" /> Team-2</p>
          </div>
        </div>

        <div className={`bg-[#FFFFFF0D] p-3 rounded-lg mt-3 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`}>
          <p className={`mb-1 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>Alert Details:</p>
          Water leakage detected on Floor 3. Maintenance team is working on it.
          Please avoid the area.
        </div>

        <div className={`mt-3 bg-[#F0B1001A] border border-[#FDC7004D] p-3 rounded-lg ${FONTSIZE[14]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.orange }}>
          ⚠️ This leak requires maintenance team action. Please coordinate with security and admin.
        </div>
      </div>

      <div className="rounded-2xl p-5"
        style={{ border: "1px solid #FFFFFF33", background: "#FFFFFF0D" }}>
        <h2 className={`mb-1 ${FONTSIZE[24]} ${FONTWEIGHT[700]}`}>
          📄 Emergency Alert History
        </h2>
        <p className={`mb-1 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`} style={{ color: COLORS.secoundy_gray }}>All emergency alerts related to maintenance</p>

        <div className="overflow-auto">
          <table className="w-full">
            <thead className={`${FONTSIZE[12]} ${FONTWEIGHT[700]}`}
              style={{ color: COLORS.secoundy_gray, borderBottom: "1px solid #ffffff1a" }}>
              <tr className="uppercase">
                <th className="text-left py-3">Alert Type</th>
                <th className="text-left py-3">Priority</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Date & Time</th>
                <th className="text-left py-3">Assigned</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody className="">
              {ALERT_HISTORY.map((item, index) => {
                const p = priorityStyle(item.priority);
                const s = statusStyle(item.status);

                return (
                  <tr key={index} className={FONTSIZE[14]} style={{ borderBottom: "1px solid #ffffff1a" }}>
                    <td className="py-3">{item.type} <br /> {item.code}</td>
                    <td>
                      <span className="px-3 py-1 rounded-2xl"
                        style={{ background: p.bg, color: p.color, ...FONTWEIGHT[500] }}>
                        {item.priority}
                      </span>
                    </td>
                    <td style={{ color: COLORS.blue }}>{item.location}</td>
                    <td style={{ color: COLORS.grey }}>{item.date} <br /> {item.time} </td>
                    <td style={{ color: COLORS.smalltext }}>{item.assigned}</td>
                    <td>
                      <span className="px-3 py-1 rounded-2xl"
                        style={{ background: s.bg, color: s.color, ...FONTWEIGHT[500] }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-500/20 bg-linear-to-r from-[#0b1220] to-[#0a0f2a] p-5">
        <h2 className="text-lg font-semibold mb-4">
          🛠 Maintenance Emergency Response Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">

          <div className="bg-[#11162b] p-4 rounded-xl">
            <h3 className="font-semibold mb-2">⚡ Power Failure</h3>
            <ul className="text-gray-400 space-y-1">
              <li>• Stay calm</li>
              <li>• Use flashlight</li>
              <li>• Avoid elevators</li>
              <li>• Wait for official updates</li>
            </ul>
          </div>

          <div className="bg-[#11162b] p-4 rounded-xl">
            <h3 className="font-semibold mb-2">🛡 Security Threat</h3>
            <ul className="text-gray-400 space-y-1">
              <li>• Lock doors</li>
              <li>• Stay inside</li>
              <li>• Call security</li>
              <li>• Do not confront intruders</li>
            </ul>
          </div>

          <div className="bg-[#11162b] p-4 rounded-xl">
            <h3 className="font-semibold mb-2">💧 Water Leakage</h3>
            <ul className="text-gray-400 space-y-1">
              <li>• Turn off valves</li>
              <li>• Avoid wet areas</li>
              <li>• Inform maintenance</li>
              <li>• Document damage</li>
            </ul>
          </div>

          <div className="bg-[#11162b] p-4 rounded-xl">
            <h3 className="font-semibold mb-2">🔥 Gas Leak</h3>
            <ul className="text-gray-400 space-y-1">
              <li>• Do not use switches</li>
              <li>• Open windows</li>
              <li>• Evacuate area</li>
              <li>• Call emergency</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EmergencyDashboard;
