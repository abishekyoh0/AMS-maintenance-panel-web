import React from "react";
import Alert from "../../assets/emergencyAlerts/alarm.png";
import Tick from "../../assets/emergencyAlerts/tick.png";
import Graph from "../../assets/emergencyAlerts/graph.png";
import Water from "../../assets/emergencyAlerts/water.png";
import Locatio from "../../assets/emergencyAlerts/location.png";
import Clock from "../../assets/emergencyAlerts/clock.png";
import worker from "../../assets/emergencyAlerts/worker.png";
import Iicon from "../../assets/emergencyAlerts/iicon.png";
import Wire from "../../assets/emergencyAlerts/wire.png";
import Thunder from "../../assets/emergencyAlerts/thunder.png";
import Note from "../../assets/emergencyAlerts/note.png";
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";

type AlertHistory = {
  img?: string;
  type: string;
  code?: string;
  priority: "Low" | "Medium" | "High";
  location: string;
  date: string;
  time: string;
  assigned: string;
  status: "Active" | "Resolved";
};

const DASHBOARD_STATS = [
  {
    icon: Alert,
    count: 1,
    label: "Requires Attention",
    color: COLORS.red,
    bg: "from-[#FB2C3633] to-[#FF690033]",
    border: "#FF64674D",
  },
  {
    icon: Tick,
    count: 2,
    label: "Resolved",
    color: COLORS.green,
    bg: "from-[#00C95033] to-[#00BC7D33]",
    border: "#05DF724D",
  },
  {
    icon: Graph,
    count: 3,
    label: "Total Alerts",
    color: COLORS.blue,
    bg: "from-[#2B7FFF33] to-[#00B8DB33]",
    border: "#51A2FF4D",
  },
];

const ACTIVE_ALERTS: Array<{
  title: string;
  id: string;
  priority: string;
  color: string;
  icon: string;
  location: string;
  time: string;
  assigned: string;
  description: string;
  note: string;
}> = [
  {
    title: "Water Leakage",
    id: "#A2035",
    priority: "High",
    color: COLORS.orange,
    icon: Water,
    location: "Block A - Common Area",
    time: "08:30 PM",
    assigned: "Team-2",
    description:
      "Water leakage detected on Floor 3. Maintenance team is working on it. Please avoid the area.",
    note: "This leak requires maintenance team action. Please coordinate with security and admin.",
  },
];

const ALERT_HISTORY: AlertHistory[] = [
  {
    img: Water,
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
    img: Wire,
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
    img: Alert,
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

const GUIDELINES = [
  {
    icon: Wire,
    title: "Power Failure",
    points: ["Stay calm", "Use flashlight", "Avoid elevators", "Wait updates"],
  },
  {
    icon: Alert,
    title: "Security Threat",
    points: ["Lock doors", "Stay inside", "Call security"],
  },
  {
    icon: Water,
    title: "Water Leakage",
    points: ["Turn off valves", "Avoid wet areas", "Inform maintenance"],
  },
  {
    icon: Thunder,
    title: "Gas Leak",
    points: ["Do not use switches", "Open windows", "Evacuate"],
  },
];

const priorityStyle = (priority: string) => {
  if (priority === "High") return { bg: COLORS.red + "33", color: COLORS.red };
  if (priority === "Medium")
    return { bg: COLORS.orange + "33", color: COLORS.orange };
  return { bg: COLORS.blue + "33", color: COLORS.blue };
};

const statusStyle = (status: string) => {
  if (status === "Active")
    return { bg: COLORS.green + "33", color: COLORS.green };
  return { bg: "#6A728233", color: COLORS.secoundy_gray };
};

const InfoCard = ({ icon, label, value }: any) => (
  <div className="bg-[#FFFFFF0D] p-3 rounded-lg">
    <p
      className={`mb-2 ${FONTSIZE[12]}`}
      style={{ color: COLORS.secoundy_gray }}
    >
      {label}
    </p>
    <p className={`flex gap-2 ${FONTSIZE[16]} ${FONTWEIGHT[700]}`}>
      <img src={icon} className="w-5 h-5" /> {value}
    </p>
  </div>
);

type Priority = "High" | "Medium" | "Low";

const normalizePriority = (value: string): Priority => {
  const p = value?.toLowerCase();

  if (p === "high") return "High";
  if (p === "medium") return "Medium";
  if (p === "low") return "Low";

  return "Low";
};

const activePriorityStyle = (priority: "Low" | "Medium" | "High") => {
  switch (priority) {
    case "High":
      return {
        cardBorder: "#FF64674D",
        cardBg: "from-[#FB2C361A] to-[#FF69001A]",
        badgeBg: "#FB2C3633",
        badgeText: "#FF6467",
        badgeBorder: "#FF64674D",
      };

    case "Medium":
      return {
        cardBorder: "#FF89044D",
        cardBg: "from-[#FF69001A] to-[#FF89041A]",
        badgeBg: "#FF690033",
        badgeText: "#FF8904",
        badgeBorder: "#FF89044D",
      };

    case "Low":
    default:
      return {
        cardBorder: "#00C9504D",
        cardBg: "from-[#00C9501A] to-[#00BC7D1A]",
        badgeBg: "#00C95033",
        badgeText: "#00C950",
        badgeBorder: "#00C9504D",
      };
  }
};

const EmergencyDashboard: React.FC = () => {
  return (
    <div className="space-y-6" style={{ color: COLORS.primary_white }}>
      <div>
        <h1 className={`flex items-center gap-2 ${FONTSIZE[36]}`} 
        style={{fontWeight: WEIGHT.seven}}>
          <img src={Alert} /> Emergency Alerts
        </h1>
        <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.secoundy_gray, fontWeight: WEIGHT.four }}>
          View emergency alerts requiring maintenance attention
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {DASHBOARD_STATS.map((card, i) => (
          <div key={i}
            className={`rounded-xl p-5 bg-linear-to-r ${card.bg}`}
            style={{ border: `1px solid ${card.border}` }}>
            <img src={card.icon} />
            <p className={`${FONTSIZE[30]} my-2`} style={{fontWeight: WEIGHT.seven}}>
              {card.count}
            </p>
            <p className={`${FONTSIZE[14]}`} style={{ color: card.color, fontWeight: WEIGHT.four }}>
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {ACTIVE_ALERTS.map((alert, i) => {
        const normalizedPriority = normalizePriority(alert.priority);
        const priority = activePriorityStyle(normalizedPriority);

        return (
          <div key={i}
            className="rounded-2xl border border-[#FF64674D] bg-linear-to-r from-[#FB2C361A] to-[#FF69001A] p-4 space-y-5">
            <div className="flex justify-between flex-wrap items-center">
              <div className="flex gap-3 items-center">
                <img src={alert.icon} />
                <div>
                  <p className={`${FONTSIZE[24]}`} style={{fontWeight: WEIGHT.seven}}>
                    {alert.title}
                  </p>
                  <p style={{ color: COLORS.secoundy_gray }}>
                    Alert ID: {alert.id}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center px-4 py-2 rounded-full ${FONTSIZE[14]}`}
                style={{
                  background: priority.badgeBg,
                  color: priority.badgeText,
                  border: `1px solid ${priority.badgeBorder}`,
                  fontWeight: WEIGHT.seven
                }} >
                {alert.priority} Priority
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <InfoCard icon={Locatio} label="Location" value={alert.location} />
              <InfoCard icon={Clock} label="Time" value={alert.time} />
              <InfoCard icon={worker} label="Assigned" value={alert.assigned} />
            </div>

            <div className={`bg-[#FFFFFF0D] p-3 rounded-lg ${FONTSIZE[16]}`} style={{fontWeight: WEIGHT.four}}>
              <p className={`mb-2 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray, fontWeight:WEIGHT.four }}>
                Alert Details:
              </p>
              {alert.description}
            </div>

            <div className={`bg-[#F0B1001A] border border-[#FDC7004D] p-3 rounded-lg ${FONTSIZE[14]}`}
              style={{ color: COLORS.orange, fontWeight: WEIGHT.four }} >
              ⚠️ {alert.note}
            </div>
          </div>
        );
      })}

      <div className="rounded-2xl p-5"
        style={{ border: "1px solid #FFFFFF33", background: "#FFFFFF0D" }}>
        <div className="flex gap-2 items-center mb-4">
          <img src={Note} className="w-5 h-5" />
          <h2 className={`${FONTSIZE[24]}`} style={{fontWeight: WEIGHT.seven}}>
            Emergency Alert History
          </h2>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-238 w-full">
            <thead className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray, fontWeight: WEIGHT.seven }}>
              <tr className="uppercase border-b border-white/10">
                <th className="text-left py-3">Alert Type</th>
                <th className="text-left py-3">Priority</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Date & Time</th>
                <th className="text-left py-3">Assigned</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {ALERT_HISTORY.map((item, index) => {
                const p = priorityStyle(item.priority);
                const s = statusStyle(item.status);

                return (
                  <tr key={index}
                    className={FONTSIZE[14]}
                    style={{ borderBottom: "1px solid #ffffff1a" }}>
                    <td className="py-3 flex items-center gap-3">
                      <img src={item.img} className="w-6 h-6" />
                      <div>
                        <p className={`${FONTSIZE[16]}`} style={{fontWeight: WEIGHT.seven}}>
                          {item.type}
                        </p>
                        <p className={`${FONTSIZE[12]} ${FONTWEIGHT[400]}`}
                          style={{ color: COLORS.secoundy_gray }}>
                          {item.code}
                        </p>
                      </div>
                    </td>
                    <td>
                      <span className={`px-3 py-2 rounded-2xl ${FONTSIZE[12]}`}
                        style={{ background: p.bg, color: p.color, fontWeight: WEIGHT.seven }}>
                        {item.priority}
                      </span>
                    </td>
                    <td className={`${FONTSIZE[14]}`}
                      style={{ color: COLORS.blue, fontWeight:WEIGHT.seven }}>
                      {item.location}
                    </td>
                    <td>
                      <p className={`${FONTSIZE[14]} ${FONTWEIGHT[400]}`}>
                        {item.date}
                      </p>
                      <p className={`${FONTSIZE[12]} ${FONTWEIGHT[400]}`}
                        style={{ color: COLORS.grey }}>
                        {item.time}
                      </p>
                    </td>
                    <td style={{ color: COLORS.smalltext }}>{item.assigned}</td>
                    <td>
                      <span className={`px-3 py-2 rounded-2xl ${FONTSIZE[12]} ${FONTWEIGHT[700]}`}
                        style={{ background: s.bg, color: s.color }}>
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

      <div className="rounded-2xl border border-[#00D3F24D] bg-linear-to-r from-[#00B8DB1A] to-[#2B7FFF1A] p-5">
        <div className="flex gap-3 items-center mb-4 ">
          <img src={Iicon} className="w-1 h-5 " />
          <h2 className={`${FONTSIZE[24]}`} style={{fontWeight: WEIGHT.seven}}>
            Maintenance Emergency Response Guidelines
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {GUIDELINES.map((g, i) => (
            <div key={i} className="bg-[#FFFFFF0D] p-4 rounded-xl">
              <h3 className={`${FONTSIZE[16]}mb-2`} style={{fontWeight: WEIGHT.seven}}>
                <img src={g.icon} className="w-6 h-6 mb-2" />
                {g.title}
              </h3>
              <ul className={`list-disc list-inside ${FONTSIZE[14]} ${FONTWEIGHT[400]}`}
                style={{ color: COLORS.secoundy_gray }}>
                {g.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyDashboard;
