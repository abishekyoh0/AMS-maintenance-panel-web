import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import { X } from "lucide-react";
import User from "../../assets/notification/user.png"
import Parcel from "../../assets/notification/user.png"
import Car from "../../assets/notification/user.png"
import Bell from "../../assets/notification/user.png"

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const notificationData = [
  {
    icon: User,
    title: "Visitor Approval Pending",
    desc: "John Doe waiting at Main Gate for Unit A-305",
    time: "5m ago",
    type: "Urgent",
  },
  {
    icon: Parcel,
    title: "Large Delivery Arrived",
    desc: "Furniture delivery for Unit C-108 requires escort",
    time: "20m ago",
    type: "Assigned",
  },
  {
    icon: Car,
    title: "Unregistered Vehicle",
    desc: "Vehicle ABC-1234 registration expired",
    time: "1h ago",
    type: "Inventory",
  },
];

const NotificationPopup: React.FC<Props> = ({ open, setOpen }) => {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setOpen(false)}
      />

      <div
        className="fixed right-4 top-16 z-50 w-[95vw] sm:w-96 max-h-[80vh] overflow-y-auto bg-black rounded-xl"
        style={{ color: COLORS.primary_white }}
      >
        <div className="bg-linear-to-br from-[#00B8DB1A] to-[#8E51FF1A] shadow-2xl border border-white/10 rounded-xl">

          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src={Bell} className="w-5 h-5" />
              <h2
                className={`${FONTSIZE[18]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                Notifications
              </h2>
              <span className="bg-pink-500 px-2 py-1 rounded-full text-xs font-semibold">
                3 New
              </span>
            </div>

            <button className="cursor-pointer" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <p
            className="px-4 py-2 text-xs"
            style={{ color: COLORS.secoundy_gray }}
          >
            Stay updated with your latest activities
          </p>

          <div className="divide-y divide-white/10">
            {notificationData.map((item, index) => (
              <div
                key={index}
                className="p-4 hover:bg-white/5 cursor-pointer flex justify-between"
              >
                <div className="flex gap-3">
                  <img src={item.icon} className="w-5 h-5 mt-1" />

                  <div>
                    <p className="text-sm font-semibold">
                      {item.title}
                    </p>

                    <p
                      className="text-xs mt-1"
                      style={{ color: COLORS.secoundy_gray }}
                    >
                      {item.desc}
                    </p>

                    <div className="flex gap-2 mt-1 text-xs">
                      <span style={{ color: COLORS.secoundy_gray }}>
                        {item.time}
                      </span>
                      •
                      <span style={{ color: COLORS.blue }}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              </div>
            ))}
          </div>

          <div className="p-4">
            <button
              onClick={() => {
                navigate("/notification");
                setOpen(false);
              }}
              className="w-full bg-linear-to-r from-[#00B8DB] to-[#8E51FF] py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition cursor-pointer"
            >
              View All Notifications →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPopup;
