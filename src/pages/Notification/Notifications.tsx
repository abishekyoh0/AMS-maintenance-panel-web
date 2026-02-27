import React from "react";
import CheckCircleIcon from "../../assets/notification/circleTickMark.png";
import TrashIcon from "../../assets/notification/trash.png";
import AlertImg from "../../assets/notification/emergency.png";
import SecurityImg from "../../assets/notification/warning.png";
import VisitorImg from "../../assets/notification/user.png";
import DeliveryImg from "../../assets/notification/parcel.png";
import ParkingImg from "../../assets/notification/car.png";
import EntryImg from "../../assets/notification/car.png";
import SystemImg from "../../assets/notification/bell.png";
import Clock from "../../assets/notification/clock.png";
import ViewIcon from "../../assets/notification/eye.png";
import BackIcon from "../../assets/notification/back-arrow.png"
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  CheckCircle,

  AlertTriangle,
  Settings,
  User,
} from "lucide-react";

const filter = [
  { label: "All", icon: <Bell size={16} /> },
  { label: "Unread", icon: <CheckCircle size={16} /> },
  { label: "Action", icon: <CheckCircle size={16} /> },
  { label: "Urgent", icon: <AlertTriangle size={16} /> },
  { label: "Assigned", icon: <User size={16} /> },
  { label: "Scheduled", icon: <Settings size={16} /> },
];


type AlertType = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
type AlertStatus = "Security" | "Visitor" | "Delivery" | "Parking" | "Entry" | "System";

interface AlertItem {
  title: string;
  desc: string;
  time: string;
  location?: string;
  type: AlertType;
  action?: boolean;
  icon: any;
  status: AlertStatus;
}

const alerts: AlertItem[] = [
  {
    title: "Emergency Alert - Medical Emergency",
    desc: "Medical emergency reported in Unit B-204. Ambulance dispatched. Resident: Mrs. Patricia Brown.",
    time: "3 minutes ago",
    location: "Unit B-204",
    type: "CRITICAL",
    action: true,
    icon: AlertImg,
    status: "Security",
  },
  {
    title: "Unauthorized Access Attempt",
    desc: "Failed access attempt at Basement Gate.",
    time: "15 minutes ago",
    location: "Basement Gate",
    type: "CRITICAL",
    action: true,
    icon: SecurityImg,
    status: "Security",
  },
  {
    title: "Visitor Approval Pending",
    desc: "Visitor waiting at Main Gate for Unit A-305 approval.",
    time: "20 minutes ago",
    location: "Visitor AV-2345",
    type: "HIGH",
    action: true,
    icon: VisitorImg,
    status: "Visitor",
  },
  {
    title: "Large Delivery Arrived",
    desc: "Furniture delivery for Unit C-108.",
    time: "25 minutes ago",
    location: "Package PKG-5678",
    type: "HIGH",
    action: true,
    icon: DeliveryImg,
    status: "Delivery",
  },
  {
    title: "Unregistered Vehicle Alert",
    desc: "Vehicle ABC-1234 parked in Slot B45. Registration expired.",
    time: "1 hour ago",
    location: "Vehicle ABC-1234",
    type: "MEDIUM",
    action: true,
    icon: ParkingImg,
    status: "Parking",
  },
  {
    title: "Late Night Entry Logged",
    desc: "Resident entry logged at 2:45 AM - Unit A-501.",
    time: "2 hours ago",
    location: "Entry #E334",
    type: "LOW",
    icon: EntryImg,
    status: "Entry",
  },
  {
    title: "Visitor Overstay Alert",
    desc: "Visitor exceeded approved duration by 3 hours.",
    time: "3 hours ago",
    location: "Visitor AV-2301",
    type: "MEDIUM",
    action: true,
    icon: VisitorImg,
    status: "Visitor",
  },
  {
    title: "CCTV System Update",
    desc: "Camera #12 back online after maintenance. All operational.",
    time: "4 hours ago",
    location: "CCTV System",
    type: "LOW",
    icon: SystemImg,
    status: "System",
  },
];

const badgeColor = (type: AlertType) => {
  switch (type) {
    case "CRITICAL":
      return "bg-red-600/20 text-red-400";
    case "HIGH":
      return "bg-orange-500/20 text-orange-400";
    case "MEDIUM":
      return "bg-yellow-500/20 text-yellow-400";
    case "LOW":
      return "bg-blue-600/20 text-blue-400";
  }
};

const borderGlow = (type: AlertType) => {
  switch (type) {
    case "CRITICAL":
      return "border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.35)]";
    case "HIGH":
      return "border-orange-500 shadow-[0_0_25px_rgba(255,165,0,0.35)]";
    case "MEDIUM":
      return "border-yellow-500 shadow-[0_0_25px_rgba(255,255,0,0.25)]";
    case "LOW":
      return "border-blue-500 shadow-[0_0_25px_rgba(0,100,255,0.25)]";
  }
};

const iconColor = (status: AlertStatus) => {
  switch (status) {
    case "Security":
      return "bg-red-500/20";
    case "Visitor":
      return "bg-blue-500/20";
    case "Delivery":
      return "bg-green-500/20";
    case "Parking":
      return "bg-purple-500/20";
    case "Entry":
      return "bg-blue-500/20";
    case "System":
      return "bg-gray-500/20";
  }
};

const Notification: React.FC = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = React.useState<string>("All");

  return (
    <div style={{ color: COLORS.primary_white }}>

      <div className="rounded-2xl bg-linear-to-br from-[#0c0f1f] via-[#0d1024] to-[#0f1431] p-6 mb-6">
        <div className="pt-2 pb-3">
          <button onClick={() => navigate("/")}
            className={`flex items-center gap-2 sm:text-base cursor-pointer ${FONTSIZE[16]} ${FONTWEIGHT[400]}`}
            style={{ color: COLORS.secoundy_gray }}>
            <img src={BackIcon} className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Dashboard
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold">
              Maintenance Notifications
            </h1>

            <p className="text-gray-400 mt-1 text-sm">
              Work orders, schedules, and maintenance alerts
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                12 Total
              </span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
                5 Unread
              </span>
              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">
                7 Need Action
              </span>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-green-500/20 cursor-pointer">
            Mark All Read
          </button>
        </div>

        <div className="mt-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full lg:w-1/3 bg-white/5 border border-white/10 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-wrap gap-3">
              {["All", "Unread", "Action", "Urgent", "Assigned", "Scheduled"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-all cursor-pointer
      ${activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>


      <div className="mx-auto space-y-4">
        {alerts.map((a, i) => (
          <div
            key={i}
            className={`rounded-xl border border-l-4 p-3 sm:p-4 ${borderGlow(a.type)}`}>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-lg h-fit ${iconColor(a.status)}`}>
                  <img src={a.icon} className="w-5 h-5 " />
                </div>

                <div>
                  <h2 >
                    {a.title}
                  </h2>

                  <p className={`sm:text-sm ${FONTSIZE[14]}`}>
                    {a.desc}
                  </p>

                  <div className={`flex flex-wrap gap-2 mt-2 sm:mt-3 sm:text-xs ${FONTSIZE[12]}`}>
                    <span style={{ color: COLORS.secoundy_gray }}
                      className="px-2 sm:px-3 py-1 rounded-md flex items-center gap-1">
                      <img src={Clock} className="w-3 h-3 sm:w-4 sm:h-4" />
                      {a.time}
                    </span>

                    {a.location && (
                      <span style={{ color: COLORS.grey }}
                        className="px-2 sm:px-3 py-1 rounded-md">
                        {a.location}
                      </span>
                    )}

                    <span className={`px-2 sm:px-3 py-1 rounded-md ${badgeColor(a.type)}`}
                      style={{ fontWeight: WEIGHT.four }}>
                      {a.type}
                    </span>

                    {a.action && (
                      <span
                        className="px-2 sm:px-3 py-1 rounded-md text-red-500">
                        ACTION REQUIRED
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 sm:gap-4">
                <button onClick={() => navigate("/details", { state: a })}
                  className="hover:scale-110 transition cursor-pointer">
                  <img src={ViewIcon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button className="hover:scale-110 transition cursor-pointer">
                  <img src={TrashIcon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center sm:justify-end">
        <button className={`flex border p-2 rounded-lg items-center gap-2 sm:text-sm cursor-pointer ${FONTSIZE[14]}`}
          style={{ fontWeight: WEIGHT.four }}>
          <img src={CheckCircleIcon} className="w-4 h-4 sm:w-5 sm:h-5" />
          Showing<span style={{ fontWeight: WEIGHT.seven }}>12</span> of <span style={{ fontWeight: WEIGHT.seven }}>24</span>notifications
        </button>
      </div>
    </div>
  );
};

export default Notification;
