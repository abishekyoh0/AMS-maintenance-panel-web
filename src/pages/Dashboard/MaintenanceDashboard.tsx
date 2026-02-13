import { useState } from "react";
import StatCard from "../../components/Dashboard/StatCard";
import Section from "../../components/Dashboard/Section";
import TaskCard from "../../components/Dashboard/TaskCard";
import CompactTask from "../../components/Dashboard/CompactTask";
import WorkerCard from "../../components/Dashboard/WorkerCard";
import AvailableWorkerCard from "../../components/Dashboard/AvailableWorkerCard";
import TodaySummary from "../../components/Dashboard/TodaySummary";
import tools from "../../assets/Dashboard/tools.png" 
import alert from "../../assets/Dashboard/alarm.png"
import notes from "../../assets/Dashboard/notes.png"
import active from "../../assets/Dashboard/active.png"
import person from "../../assets/Dashboard/person.png"
import clock from "../../assets/Dashboard/clock.png"
import graph from "../../assets/Dashboard/graph.png"
import green from "../../assets/Dashboard/green.png"
import white from "../../assets/Dashboard/White.png"
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

/* ================= TYPES ================= */

export type Priority = "Critical" | "High" | "Medium" | "Low";
export type Status =
  | "In Progress"
  | "Assigned"
  | "Pending Parts"
  | "Completed";

export interface Task {
  id: string;
  title: string;
  location: string;
  flat?: string;
  category: string;
  worker?: string;
  timeElapsed: string;
    workerRole: string;   

  priority: Priority;
  status: Status;
  onTime?: boolean;
  critical?: boolean;
}

export interface Worker {
  id: string;
  name: string;
  role: string;
  status: "On Task" | "Available";
  currentTask?: string;
  location?: string;
  tasksToday: number;
}

export default function MaintenanceDashboard() {
  const [view, setView] = useState<"Active" | "Workers">("Active");

  /* ================= DATA ================= */

  const tasks: Task[] = [
    {
      id: "MT-001",
      title: "Water Leakage - Urgent",
      location: "Block A - Floor 3",
      flat: "A-301",
      category: "Plumbing",
      worker: "Ramesh Kumar",
      timeElapsed: "45 mins",
      priority: "Critical",
      status: "In Progress",
        workerRole: "Plumber",

      onTime: true,
      critical: true,
    },
    {
      id: "MT-002",
      title: "AC Not Cooling",
      location: "Block B - Floor 2",
      flat: "B-205",
      category: "HVAC",
      worker: "Suresh Patel",
      timeElapsed: "1h 20m",
      priority: "High",
      status: "In Progress",
              workerRole: "AC Technician",

      onTime: true,
      critical: true,
    },
    {
      id: "MT-003",
      title: "Door Lock Broken",
      location: "Block C - Floor 1",
      category: "Carpentry",
      worker: "Vikram Singh",
      timeElapsed: "3h 10m",
      priority: "Medium",
      status: "Pending Parts",
      onTime: false,
      workerRole: "Carpenter",
    },
    {
      id: "MT-004",
      title: "Electrical Switch Not Working",
      location: "Block C - Floor 1",
      category: "Electrical",
      worker: "Rajesh ",
      timeElapsed: "2h 15m",
      priority: "Low",
      status: "Assigned",
      onTime: false,
      workerRole: "Electrician",
    },
  ];

  const workers: Worker[] = [
    {
      id: "W1",
      name: "Ramesh Kumar",
      role: "Plumber",
      status: "On Task",
      currentTask: "Water Leakage - A-301",
      location: "Block A - Floor 3",
      tasksToday: 3,
    },
    {
      id: "W2",
      name: "Vikram Singh",
      role: "Carpenter",
      status: "On Task",
      currentTask: "Door Lock - C-102",
      location: "Block C - Floor 1",
      tasksToday: 3,
    },
    {
      id: "W3",
      name: "Rajesh Sharma",
      role: "Electrician",
      status: "Available",
      tasksToday: 5,
    },
    {
      id: "W4",
      name: "Amit Verma",
      role: "Painter",
      status: "Available",
      tasksToday: 5,
    },
  ];

  /* ================= DERIVED DATA ================= */

  const criticalTasks = tasks.filter((t) => t.critical);
  const otherTasks = tasks.filter((t) => !t.critical);

  const onTaskWorkers = workers.filter((w) => w.status === "On Task");
  const availableWorkers = workers.filter(
    (w) => w.status === "Available"
  );

  const completedToday = 23;
  const inProgress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const sla =
    Math.round(
      (tasks.filter((t) => t.onTime).length / tasks.length) * 100
    ) || 0;

  /* ================= UI ================= */

  return (
    <div className=" text-white p-6 space-y-8">
     <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

  {/* LEFT SIDE */}
  <div>
    <h1 style={FONTWEIGHT[700]} className={`text-3xl font-bold ${FONTSIZE[36]} `}>
      <img src={tools} alt="Maintenance Control Center" className="w-9 h-9 mr-3 inline-block" />
      Maintenance Control Center
    </h1>

    {/* Subtitle */}
    <p style={FONTWEIGHT[400]} className={`text-[#99A1AF] text-sm mt-2 ${FONTSIZE[16]}`}>
      Real-time task monitoring and worker management
    </p>
  </div>

  {/* RIGHT SIDE BUTTONS */}
 <div className="flex gap-3">
  {/* Emergency Alert Button */}
  <button style={FONTWEIGHT[700]} className={`px-7 py-2 rounded-xl cursor-pointer ${FONTSIZE[16]} bg-linear-to-r from-[#FB2C36] to-[#E60076] shadow-[#FB2C3640] transition-all duration-300 font-medium flex items-center`}>
    <img
      src={alert}
      alt="Emergency Alert"
      className="w-5 h-5 mr-2"
    />
    Emergency Alerts
  </button>

  {/* All Complaints Button */}
  <button style={FONTWEIGHT[700]} className={`px-5 py-2 rounded-xl cursor-pointer ${FONTSIZE[16]} bg-linear-to-r from-[#FF6900] to-[#FF6900] shadow-[#FF690040] hover:from-orange-500 hover:to-orange-700 transition-all duration-300 font-medium flex items-center`}>
    <img
      src={notes}
      alt="All Complaints"
      className="w-5 h-5 mr-2"
    />
    All Complaints
  </button>
</div>


</div>



     {/* ===== STATS ===== */}
<div className="grid md:grid-cols-5 gap-6">
  <StatCard
  icon={alert}
  value={criticalTasks.length}
  title="Critical Tasks"
  subtitle="Needs immediate attention"
  variant="critical"
/>


  <StatCard
    icon={active}
    value={inProgress}
    title="Active Tasks"
    subtitle="Currently in progress"
    variant="active"
  />

  <StatCard
    icon={person}
    value={`${onTaskWorkers.length}/${workers.length}`}
    title="Workers Active"
    subtitle="2 available now"
    variant="workers"
  />

  <StatCard
    icon={clock}
    value={`${sla}%`}
    title="SLA Compliance"
    subtitle="Tasks within deadline"
    variant="sla"
  />

  <StatCard
    icon={graph}
    value={completedToday}
    title="Completed Today"
    subtitle="+5 from yesterday"
    variant="completed"
  />
</div>


      {/* ===== TOGGLE ===== */}
      <div className="flex gap-4">
  <button
    onClick={() => setView("Active")} style={FONTWEIGHT[700]}
    className={`flex items-center gap-2 px-7 py-3 rounded-xl cursor-pointer transition ${FONTSIZE[16]} ${
      view === "Active"
        ? "bg-gradient-to-r from-[#FF6900] to-[#E7000B] text-[#FFFFFF]"
        : "bg-[#FFFFFF0D] text-gray-[#99A1AF]"
    }`}
  >
    <img
      src={tools}
      alt="Active Tasks"
      className="w-4 h-4 object-contain"
    />
    Active Tasks
  </button>

  <button
    onClick={() => setView("Workers")} style={FONTWEIGHT[700]}
    className={`flex items-center gap-2 px-7 py-3 rounded-xl cursor-pointer transition ${FONTSIZE[16]} ${
      view === "Workers"
        ? "bg-gradient-to-r from-[#2B7FFF] to-[#0092B8] text-[#FFFFFF]"
        : "bg-[#FFFFFF0D] text-gray-[#99A1AF]"
    }`}
  >
    <img
      src={person}
      alt="Worker Status"
      className="w-4 h-4 object-contain"
    />
    Worker Status
  </button>
</div>


      {/* ===== ACTIVE TAB ===== */}
      {view === "Active" && (
        <>
         <Section
  title="Critical Priority Tasks"
  icon={alert}
>
  {criticalTasks.map((task) => (
    <TaskCard key={task.id} task={task} />
  ))}
</Section>


         <Section 
  title="Other Active Tasks"
  icon={active}
>
  {otherTasks.map((task) => (
    <CompactTask key={task.id} task={task} />
  ))}
</Section>


          <TodaySummary
            total={tasks.length}
            completed={completedToday}
            inProgress={inProgress}
          />
        </>
      )}

      {/* ===== WORKER TAB ===== */}
      {view === "Workers" && (
        <>
         <Section
  title={`Workers on Task (${onTaskWorkers.length})`}
  icon={green}
>
  <div className="grid md:grid-cols-2 gap-6">
    {onTaskWorkers.map((worker) => (
      <WorkerCard key={worker.id} worker={worker} />
    ))}
  </div>
</Section>


          <Section
            title={`Available Workers (${availableWorkers.length})`}
            icon={white}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {availableWorkers.map((worker) => (
                <AvailableWorkerCard
                  key={worker.id}
                  worker={worker}
                />
              ))}
            </div>
          </Section>

          {/* SUMMARY ALSO IN WORKER TAB */}
          <TodaySummary
            total={tasks.length}
            completed={completedToday}
            inProgress={inProgress}
          />
        </>
      )}
    </div>
  );
}
