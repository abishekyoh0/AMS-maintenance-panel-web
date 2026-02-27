

import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import bell from "../../assets/notification/bell1.png"
import unread from "../../assets/notification/unread.png"
import action from "../../assets/notification/action.png"
import urgent from "../../assets/notification/urgent.png"
import assigned from "../../assets/notification/assigned.png"
import ring from "../../assets/notification/ring.png"
import scheduled from "../../assets/notification/scheduled.png"
import emergency from "../../assets/notification/emergency.png"
import orange from "../../assets/notification/orange.png"
import violetdocument from "../../assets/notification/violetdocument.png"
import greentick from "../../assets/notification/greentick4.png"
import car from "../../assets/notification/carr.png"
import user from "../../assets/notification/user.png"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrashIcon from "../../assets/notification/trash.png";
import Clock from "../../assets/notification/clock.png";
import ViewIcon from "../../assets/notification/eye.png";
import BackIcon from "../../assets/notification/back-arrow.png";
import blueclock from "../../assets/notification/blueclock.png";
import { COLORS, FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

import {
  Bell,
  CheckCircle,

  AlertTriangle,
  Search,
  X,
} from "lucide-react";


type Priority = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
type Category = "Assigned" | "Scheduled" | "General";

interface NotificationItem {
  id: number;
  title: string;
  desc: string;
  time: string;
  code: string;
  priority: Priority;
  actionRequired: boolean;
  read: boolean;
  category: Category;
  image: string;
}

const initialData: NotificationItem[] = [
  {
    id: 1,
    title: "URGENT: Elevator Malfunction - Tower B",
    desc: "Elevator stuck on 12th floor with passengers. Immediate assistance required.",
    time: "2 minutes ago",
    code: "WO-1567",
    priority: "CRITICAL",
    actionRequired: true,
    read: true,
    category: "Assigned",
    image: emergency,
  },
  {
    id: 2,
    title: "Water Leak Emergency - Unit A-204",
    desc: "Major water leak reported in bathroom. Emergency plumber dispatched.",
    time: "15 minutes ago",
    code: "WO-1568",
    priority: "CRITICAL",
    actionRequired: true,
    read: true,
    category: "Assigned",
    image: emergency,
  },
  {
    id: 3,
    title: "New Work Order Assigned",
    desc: "AC repair request for Unit C-308. Priority: High.",
    time: "30 minutes ago",
    code: "WO-1569",
    priority: "HIGH",
    actionRequired: true,
    read: false,
    category: "Assigned",
    image: orange,
  },
  {
    id: 4,
    title: "Scheduled Maintenance Reminder",
    desc: "Annual HVAC maintenance for Tower C at 2:00 PM.",
    time: "1 hour ago",
    code: "SCH-234",
    priority: "MEDIUM",
    actionRequired: true,
    read: true,
    category: "Scheduled",
    image: blueclock,
  },
  {
    id: 5,
    title: "Low Inventory Alert",
    desc: "AC filters (2 left), plumbing pipes (5m).",
    time: "2 hours ago",
    code: "INV-45",
    priority: "HIGH",
    actionRequired: true,
    read: true,
    category: "General",
    image: user,
  },
  {
    id: 6,
    title: "Work Order Completed",
    desc: "Electrical repair in Unit B-102 completed successfully.",
    time: "3 hours ago",
    code: "WO-1564",
    priority: "LOW",
    actionRequired: false,
    read: true,
    category: "General",
    image: violetdocument
  },
  {
    id: 7,
    title: "Multiple Work Orders Assigned",
    desc: "5 new maintenance requests assigned today.",
    time: "4 hours ago",
    code: "WO-1570",
    priority: "MEDIUM",
    actionRequired: true,
    read: false,
    category: "Assigned",
    image: greentick,
  },
  {
    id: 8,
    title: "Monthly Inspection Due",
    desc: "Fire safety inspection scheduled before Jan 31.",
    time: "5 hours ago",
    code: "INS-45",
    priority: "HIGH",
    actionRequired: true,
    read: false,
    category: "Scheduled",
    image: blueclock,
  },
  {
    id: 9,
    title: "Generator Maintenance Complete",
    desc: "Quarterly generator maintenance completed.",
    time: "6 hours ago",
    code: "WO-1560",
    priority: "LOW",
    actionRequired: false,
    read: true,
    category: "General",
    image: orange,
  },
  {
    id: 10,
    title: "Power Outage - Basement Level",
    desc: "Complete power failure in basement parking.",
    time: "8 hours ago",
    code: "WO-1558",
    priority: "CRITICAL",
    actionRequired: true,
    read: false,
    category: "General",
    image: car,
  },
  {
    id: 11,
    title: "Preventive Maintenance Scheduled",
    desc: "Weekly pump maintenance scheduled for tomorrow.",
    time: "10 hours ago",
    code: "SCH-235",
    priority: "MEDIUM",
    actionRequired: false,
    read: true,
    category: "Scheduled",
    image: orange,
  },
  {
    id: 12,
    title: "Inventory Restocked",
    desc: "AC parts, plumbing supplies restocked.",
    time: "1 day ago",
    code: "INV-47",
    priority: "LOW",
    actionRequired: false,
    read: true,
    category: "General",
    image: bell,
  },
];

const Notification: React.FC = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const total = notifications.length;
  const unreadCount = notifications.filter(n => !n.read).length;
  const actionCount = notifications.filter(n => n.actionRequired).length;

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));

    toast.error("Notification deleted", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const filteredData = useMemo(() => {
    let data = [...notifications];

    if (activeFilter === "Unread")
      data = data.filter(n => !n.read);

    if (activeFilter === "Action")
      data = data.filter(n => n.actionRequired);

    if (activeFilter === "Urgent")
      data = data.filter(n => n.priority === "CRITICAL");

    if (activeFilter === "Assigned")
      data = data.filter(n => n.category === "Assigned");

    if (activeFilter === "Scheduled")
      data = data.filter(n => n.category === "Scheduled");

    if (search.trim()) {
      data = data.filter(n =>
        n.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return data;
  }, [activeFilter, notifications, search]);


  type Delete = {
    onConfirm: () => void;
    onCancel: () => void;
  };

  const Delete = ({
    onConfirm,
    onCancel,
  }: Delete) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="relative w-full sm:w-[90%] md:w-125  bg-linear-to-br from-[#0F172B] to-[#101828] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <button
            onClick={onCancel}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X size={18} className="text-gray-300" />
          </button>
          <div className="text-center">
            <h2 className={`${FONTSIZE[30]} ${FONTWEIGHT[700]} text-white`}>
              Delete Notification
            </h2>
            <p
              className={`${FONTSIZE[16]} ${FONTWEIGHT[400]} text-[#99A1AF] mt-2`}
            >
              Are you sure you want to delete this notification?
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-8 ">
            <button
              onClick={onCancel}
              className="px-5 py-2 rounded-lg text-sm font-medium text-white bg-[#FFFFFF0D]  hover:opacity-90 transition cursor-pointer flex items-center"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-r from-[#FB2C36] to-[#EC003F] hover:opacity-90 transition cursor-pointer flex items-center"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    );
  }


  const markAllRead = () => {
    const unread = notifications.filter(n => !n.read);

    if (unread.length === 0) {
      toast.info("All notifications are already marked as read.", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }

    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );

    toast.success("All notifications marked as read ✅", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };




  const filters = [
    { label: "All", icon: ring },
    { label: "Unread", icon: unread },
    { label: "Action", icon: action },
    { label: "Urgent", icon: urgent },
    { label: "Assigned", icon: assigned },
    { label: "Scheduled", icon: scheduled },
  ];

  const badgeColor = (priority: Priority) => {
    switch (priority) {
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

  const borderGlow = (priority: Priority) => {
    switch (priority) {
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

  return (
    <div style={{ color: COLORS.primary_white }}>


      <div className="rounded-2xl   mb-6">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-400 mb-4 cursor-pointer"
        >
          <img src={BackIcon} className="w-4 h-4" />
          Back to Dashboard
        </button>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

          <div>

            <div className="flex items-center gap-3">
              <img src={bell} alt="Bell" className="w-6 h-6" />
              <h1 className="text-2xl font-bold">
                Maintenance Notifications
              </h1>
            </div>

            <p className="text-gray-400 mt-1 text-sm">
              Work orders, schedules, and maintenance alerts
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">

              <span className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-medium">
                <Bell size={14} />
                {total} Total
              </span>

              <span className="flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-medium">
                <CheckCircle size={14} />
                {unreadCount} Unread
              </span>

              <span className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-xs font-medium">
                <AlertTriangle size={14} />
                {actionCount} Need Action
              </span>

            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <button
              onClick={markAllRead}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 
               transition px-5 py-2 rounded-full text-sm font-semibold 
               shadow-lg shadow-green-500/30 cursor-pointer"
            >
              <CheckCircle size={16} />
              Mark All Read
            </button>
          </div>

        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-6">

        <div className="flex flex-col lg:flex-row items-center gap-4">

          <div className="relative w-full lg:w-1/3">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notifications..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-3 w-full   lg:w-auto">

            {filters.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveFilter(item.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer text-sm transition-all duration-200
      ${activeFilter === item.label
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/40"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
                  }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-4 h-4 object-contain mb-1 ${activeFilter === item.label ? "brightness-0 invert" : "opacity-70"
                    }`}
                />
                {item.label}
              </button>
            ))}

          </div>

        </div>
      </div>



      <div className="space-y-4">
        {filteredData.map(n => (
          <div
            key={n.id}
            className={`rounded-xl border border-l-4 p-4 transition-all duration-300
  ${n.read ? `${borderGlow(n.priority)} bg-white/5` : "bg-white/2 border-white/10"}`}
          >
            <div className="flex justify-between">

              <div className="flex gap-4">

                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    id={`select-${n.id}`}
                    checked={selectedIds.includes(n.id)}
                    onChange={() => toggleSelect(n.id)}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor={`select-${n.id}`}
                    className="flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-blue-400 bg-white/5 transition-all 
    peer-checked:bg-blue-500/20 peer-checked:border-blue-500"
                  >
                    <svg
                      className={`h-3 w-3 text-blue-400 transition-opacity ${selectedIds.includes(n.id) ? "opacity-100" : "opacity-0"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </label>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5">
                  <img
                    src={n.image}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <div>
                  <h2 className="font-semibold">{n.title}</h2>

                  <p className="text-sm text-gray-400 mt-1">
                    {n.desc}
                  </p>

                  <div className="flex gap-2 mt-3 text-xs flex-wrap items-center">

                    <span className="flex items-center gap-1 text-gray-400">
                      <img src={Clock} className="w-3 h-3" />
                      {n.time}
                    </span>

                    <span className="text-gray-400 rounded-lg px-2 py-1 bg-[#FFFFFF0D] border border-white/10">
                      {n.code}
                    </span>

                    <span className={`px-2 py-1 rounded ${badgeColor(n.priority)}`}>
                      {n.priority}
                    </span>

                    {n.actionRequired && (
                      <span className="px-2 py-1 rounded text-red-500">
                        ACTION REQUIRED
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">



                <button onClick={() => navigate("/details", { state: n })}>
                  <img src={ViewIcon} className="w-5 h-5 cursor-pointer" />
                </button>


                <button
                  className="hover:text-red-400 cursor-pointer"
                  onClick={() => {
                    setDeleteId(n.id);
                    setShowDelete(true);
                  }}
                >
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-400 text-center">
        Showing {filteredData.length} of {total} notifications
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      {showDelete && deleteId !== null && (
        <Delete
          onConfirm={() => {
            deleteNotification(deleteId);
            setDeleteId(null);
            setShowDelete(false);
          }}
          onCancel={() => {
            setDeleteId(null);
            setShowDelete(false);
          }}
        />
      )}
    </div>
  );
};
export default Notification;