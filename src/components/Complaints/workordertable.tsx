import { useState } from "react";
import electrical from "../../assets/guide/electrical.png"
import plumbing from "../../assets/guide/work.png"
import carpentry from "../../assets/guide/car.png"
import Hvac from "../../assets/guide/hvac.png"
import General from "../../assets/guide/general.png"
import worker from "../../assets/guide/boy.png"
import phone from "../../assets/guide/mobile.png"
import Paint from "../../assets/guide/paint.png"
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type WorkOrder = {
  id: number;
  title: string;
  resident: string;
  unit: string;
  category: string;
  worker: string;
  workerCategory?: string;
  phone?: string;
  priority: string;
  status: string;
  progress: number;
  duration: string;
};

const data: WorkOrder[] = [
  {
    id: 1,
    title: "AC not working",
    resident: "Sarah Johnson",
    unit: "A-304",
    category: "Electrical",
    worker: "Mike Wilson",
    workerCategory: "Electrical",
    phone: "+91-9876543210",
    priority: "High",
    status: "In Progress",
    progress: 60,
     duration: "3h",
  },
  {
    id: 2,
    title: "Water leakage",
    resident: "John Doe",
    unit: "B-201",
    category: "Plumbing",
    worker: "John Smith",
    workerCategory: "Plumbing",
    phone: "+91-9123456780",
    priority: "Critical",
    status: "Resolved",
    progress: 100,
     duration: "2h",
  },
  {
    id: 3,
    title: "Door lock issue",
    resident: "Alice Brown",
    unit: "C-102",
    category: "Carpentry",
    worker: "Unassigned",
    priority: "Medium",
    status: "Open",
    progress: 0,
     duration: "8h",
  },
   {
    id: 4,
    title: "Kitchen Sink issue",
    resident: "robert Brown",
    unit: "C-102",
    category: "HVAC",
    worker: "John Smith",
    workerCategory: "HVAC",
    phone: "+91-9123456780",
    priority: "High",
    status: "In Progress",
    progress: 50,
     duration: "4h",
  },
   {
    id: 5,
    title: " painting issue",
    resident: "shakes Doe",
    unit: "B-201",
    category: "Painting",
    worker: "shakes Smith",
    workerCategory: "Painting",
    phone: "+91-9123456780",
    priority: "High",
    status: "In progress",
    progress: 70,
     duration: "2h",
  },
    {
    id: 6,
    title: " general issue",
    resident: "james Doe",
    unit: "B-201",
    category: "General",
    worker: "james Smith",
    workerCategory: "General",
    phone: "+91-9123456780",
    priority: "Low",
    status: "Resolved",
    progress: 100,
     duration: "1h",
  },
];

const tabs = ["All", "Open", "Assigned", "In Progress", "Resolved"];

const WorkOrdersTable = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = data.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Assigned") return item.worker !== "Unassigned";
    return item.status === activeTab;
  });

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Electrical":
      return {
        icon: electrical,
        bg: "bg-[#F0B1001A]",
        border: "border-[#FDC7004D]",
        text: "text-[#FDC700]",
      };

    case "Plumbing":
      return {
        icon: plumbing,
        bg: "bg-[#2B7FFF1A]",
        border: "border-[#51A2FF4D]",
        text: "text-[#51A2FF]",
      };

    case "Carpentry":
      return {
        icon: carpentry,
        bg: "bg-[#F0B1001A]",
        border: "border-[#FDC7004D]",
        text: "text-[#FFB900]",
      };

    case "HVAC":
      return {
        icon: Hvac,
        bg: "bg-[#00B8DB1A]",
        border: "border-[#00D3F24D]",
        text: "text-[#00D3F2]",
      };

    case "General":
      return {
        icon: General,
        bg: "bg-[#6A72821A]",
        border: "border-[#99A1AF4D]",
        text: "text-[#99A1AF]",
      };

    case "Painting":
      return {
        icon: Paint,
        bg: "bg-[#F6339A1A]",
        border: "border-[#FB64B64D]",
        text: "text-[#FB64B6]",
      };

    default:
      return {
        icon: plumbing,
        bg: "bg-gray-500/10",
        border: "border-gray-400/30",
        text: "text-gray-300",
      };
  }
};

const getPriorityStyle = (priority: string) => {
  switch (priority) {
    case "Critical":
      return {
        bg: "bg-[#FB2C3633]",
        border: "border-[#FF64674D]",
        text: "text-[#FF6467]",
      };

    case "High":
      return {
        bg: "bg-[#FF690033]",
        border: "border-[#FF89044D]",
        text: "text-[#FF8904]",
      };

    case "Medium":
      return {
        bg: "bg-[#F0B10033]",
        border: "border-[#FDC7004D]",
        text: "text-[#FDC700]",
      };

    case "Low":
      return {
        bg: "bg-[#6A728233]",
        border: "border-[#99A1AF4D]",
        text: "text-[#99A1AF]",
      };

    default:
      return {
        bg: "bg-gray-500/10",
        border: "border-gray-400/30",
        text: "text-gray-300",
      };
  }
};

const getStatusStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case "open":
      return {
        bg: "bg-[#F0B10033]",
        border: "border-[#FDC7004D]",
        text: "text-[#FDC700]",
      };

    case "in progress":
      return {
        bg: "bg-[#2B7FFF33]",
        border: "border-[#51A2FF4D]",
        text: "text-[#51A2FF]",
      };

    case "resolved":
      return {
        bg: "bg-[#00C95033]",
        border: "border-[#05DF724D]",
        text: "text-[#05DF72]",
      };

    case "assigned":
      return {
        bg: "bg-[#AD46FF33]",
        border: "border-[#C27AFF4D]",
        text: "text-[#C27AFF]",
      };

    default:
      return {
        bg: "bg-gray-500/10",
        border: "border-gray-400/30",
        text: "text-gray-300",
      };
  }
};
const getProgressColor = (progress: number) => {
  if (progress <= 25) {
    return "bg-gradient-to-r from-[#FF4D4F] to-[#FF7875]"; 
  }

  if (progress <= 50) {
    return "bg-gradient-to-r from-[#FF6900] to-[#F0B100]"; 
  }

  if (progress <= 75) {
    return "bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]"; 
  }

  return "bg-gradient-to-r from-[#34C759] to-[#30D158]"; 
};











  return (
    <div className=" text-white">
      
      
       
      
<div className="max-w-166.5 w-full">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-5">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`
          h-9
          px-4
          rounded-full
          text-sm font-medium
          flex items-center justify-center
          whitespace-nowrap
          transition-all duration-200
          cursor-pointer
          ${
            activeTab === tab
              ? "bg-[#00B8DB] text-[#FFFFFF]  shadow-md"
              : "bg-[#FFFFFF0D] text-[#99A1AF]  hover:bg-[#FFFFFF0D] hover:text-white"
          } ${FONTSIZE[14]}
        `}
      style={{fontWeight:WEIGHT.four}}>
        {tab}
      </button>
    ))}
  </div>
</div>




      <div className="rounded-2xl border border-[#FFFFFF33] overflow-hidden  shadow-xl">
        <div className="overflow-x-auto">
          <table className="min-w-225 w-full text-sm ">
            
            <thead className="bg-[#FFFFFF1A]  text-xs uppercase "
            >
              <tr className={`${FONTSIZE[12]}`} style={{fontWeight:WEIGHT.seven,color:COLORS.grey}}>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Title</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Resident</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Unit</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Assigned Worker</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Progress</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400  tracking-wider ">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-[#FFFFFF33] hover:bg-white/5 transition"
                >
                  <td className={`p-4  whitespace-nowrap text-[#D1D5DC] font-medium ${FONTSIZE[14]}`}
                  style={{fontWeight:WEIGHT.four}}>#{item.id}</td>

                  <td className={`p-4  whitespace-nowrap text-gray-200 font-medium ${FONTSIZE[14]}`}  style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>
                    {item.title}
                  </td>

                  <td className={`p-4  whitespace-nowrap text-[#D1D5DC] ${FONTSIZE[14]}`}  style={{fontWeight:WEIGHT.four}}>{item.resident}</td>

                  <td className={`p-4  whitespace-nowrap text-[#00D3F2] font-semibold ${FONTSIZE[14]}`}  style={{fontWeight:WEIGHT.seven}}>
                    {item.unit}
                  </td>

  <td className="p-4  whitespace-nowrap">
  {(() => {
    const cat = getCategoryIcon(item.category);

    return (
      <div
        className={`
          flex items-center
          w-23.75 h-7.5
          pl-3 pr-3
          gap-1
          rounded-full border
          ${cat.bg} ${cat.border}
        `}
      >
        <img src={cat.icon} alt="" className="w-4 h-4" />

        <span className={`text-xs font-medium ${cat.text} ${FONTSIZE[12]}`} style={{fontWeight:WEIGHT.seven}}>
          {item.category}
        </span>
      </div>
    );
  })()}
</td>




<td className="p-4  whitespace-nowrap">
  <div className="flex gap-3">

    <div className="flex flex-col items-center w-9">
      {item.worker !== "Unassigned" && (
        <>
          <img
            src={worker}
            alt="worker"
            className="w-9 h-9 rounded-full object-cover"
          />

          <img
            src={phone}
            alt="phone"
            className="w-4 h-4 object-contain mt-2 opacity-80"
          />
        </>
      )}
    </div>

    <div className="leading-tight">
      {item.worker !== "Unassigned" ? (
        <>
          <div className={` text-sm font-medium ${FONTSIZE[14]}`} style={{fontWeight:WEIGHT.seven,color:COLORS.primary_white}}>
            {item.worker}
          </div>

          <div className={`text-xs  ${FONTSIZE[12]}`} style={{fontWeight:WEIGHT.four,color:COLORS.grey}}>
            {item.workerCategory}
          </div>

          <div className={`text-xs text-[#00D3F2] mt-2 ${FONTSIZE[12]}`} style={{fontWeight:WEIGHT.four}}>
            {item.phone}
          </div>
        </>
      ) : (
        <div className={`0 text-sm mt-1 ${FONTSIZE[14]}`} style={{fontWeight:WEIGHT.seven,color:COLORS.input}}>
          Unassigned
        </div>
      )}
    </div>

  </div>
</td>


<td className="p-4  whitespace-nowrap">
  {(() => {
    const p = getPriorityStyle(item.priority);

    return (
      <div
        className={`
          w-19.25 h-7.5
          flex items-center justify-center
          text-xs font-medium
          rounded-full border
          ${p.bg} ${p.border} ${p.text}
        ${FONTSIZE[12]}` }
      style={{fontWeight:WEIGHT.seven}}>
        {item.priority}
      </div>
    );
  })()}
</td>



                <td className="p-4  whitespace-nowrap">
  {(() => {
    const s = getStatusStyle(item.status);

    return (
      <div
        className={`
          w-26.25 h-7.5
          flex items-center justify-center
          text-xs font-medium
          rounded-full border
          whitespace-nowrap
          ${s.bg} ${s.border} ${s.text}
        ${FONTSIZE[12]}`}
     style={{fontWeight:WEIGHT.seven}} >
        {item.status}
      </div>
    );
  })()}
</td>


<td className="p-4 min-w-35  whitespace-nowrap">
  <div className={`flex justify-between text-xs 0 mb-1 ${FONTSIZE[12]}`} style={{fontWeight:WEIGHT.four,color:COLORS.grey}}>
    <span>{item.progress}%</span>
    <span>{item.duration}</span>
  </div>

  <div className="w-full bg-[#FFFFFF33] rounded-full h-2 overflow-hidden">
  <div
    className={`h-2 rounded-full transition-all duration-500 ease-in-out ${getProgressColor(item.progress)}`}
    style={{ width: `${item.progress}%` }}
  />
</div>

</td>




                  <td className="p-4  whitespace-nowrap">
                    <button className={`cursor-pointer text-[#00D3F2] hover:text-[#00D3F2] text-sm font-medium ${FONTSIZE[14]}`} style={{fontWeight:WEIGHT.four}}>
                      Update →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkOrdersTable;
