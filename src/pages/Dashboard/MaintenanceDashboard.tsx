import { useState, type ReactNode } from "react";
import StatCard from "../../components/Dashboard/StatCard";
import Section from "../../components/Dashboard/Section";
import TaskCard from "../../components/Dashboard/TaskCard";
import CompactTask from "../../components/Dashboard/CompactTask";
import WorkerCard from "../../components/Dashboard/WorkerCard";
import AvailableWorkerCard from "../../components/Dashboard/AvailableWorkerCard";
import TodaySummary from "../../components/Dashboard/TodaySummary";
import tools from "../../assets/sidebar/logo.png";
import alert from "../../assets/Dashboard/alarm.png";
import notes from "../../assets/Dashboard/notes.png";
import active from "../../assets/Dashboard/active.png";
import person from "../../assets/Dashboard/person.png";
import clock from "../../assets/Dashboard/clock.png";
import graph from "../../assets/Dashboard/graph.png";
import green from "../../assets/Dashboard/green.png";
import white from "../../assets/Dashboard/White.png";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import { useNavigate } from "react-router-dom";


export type Worker = {
  currentTask: ReactNode;
  location: string;
  id: string;
  name: string;
  role: string;
  status: string;
  tasksToday: number;
};

export type Task = {
  id: string;
  title: string;
  location: string;
  flat?: string;
  category: string;
  worker: string;
  workerRole: string;
  timeElapsed: string;
  priority: string;
  status: string;
  onTime: boolean;
  critical?: boolean;
};

export default function MaintenanceDashboard() {
  const [view, setView] = useState<"Active" | "Workers">("Active");
  const navigate = useNavigate();

  const tasks = [
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
      worker: "Rajesh",
      timeElapsed: "2h 15m",
      priority: "Low",
      status: "Assigned",
      onTime: false,
      workerRole: "Electrician",
    },
  ];

  // const workers = [
  //   {
  //     id: "W1",
  //     name: "Ramesh ",
  //     role: "Plumber",
  //     status: "On Task",
  //     tasksToday: 3,
  //     location: "test",
  //   },
  //   {
  //     id: "W2",
  //     name: "Vikram ",
  //     role: "Carpenter",
  //     status: "On Task",
  //     tasksToday: 3,
  //     location: "test",
  //   },
  //   {
  //     id: "W8",
  //     name: "Vikramm ",
  //     role: "Carpenterr",
  //     status: "On Task",
  //     tasksToday: 3,
  //     location: "test",
  //   },
  //   {
  //     id: "W9",
  //     name: "Vikrammm",
  //     role: "Carpenterr",
  //     status: "On Task",
  //     tasksToday: 3,
  //     location: "test",
  //   },
  //   {
  //     id: "W9",
  //     name: "Vikrammm",
  //     role: "Carpenterr",
  //     status: "On Task",
  //     tasksToday: 3,
  //     location: "test",
  //   },
  //   {
  //     id: "W3",
  //     name: "Rajesh ",
  //     role: "Electrician",
  //     status: "Available",
  //     tasksToday: 5,
  //     location: "test",
  //   },
  //   {
  //     id: "W4",
  //     name: "Amit",
  //     role: "Painter",
  //     status: "Available",
  //     tasksToday: 5,
  //     location: "test",
  //   },
  // ];

  const workers = [
    {
      id: "W1",
      name: "Ramesh Kumar",
      role: "Plumber",
      status: "On Task",
      tasksToday: 3,
      location: "Block A - Floor 3",
    },
    {
      id: "W2",
      name: "Vikram Singh",
      role: "Carpenter",
      status: "On Task",
      tasksToday: 2,
      location: "Block C - Floor 1",
    },
    {
      id: "W3",
      name: "Rajesh",
      role: "Electrician",
      status: "On Task",
      tasksToday: 5,
      location: "Maintenance Office",
    },
    {
      id: "W4",
      name: "Amit",
      role: "Painter",
      status: "Available",
      tasksToday: 1,
      location: "Maintenance Office",
    },
  ];

  const criticalTasks = tasks.filter((t) => t.critical);
  const otherTasks = tasks.filter((t) => !t.critical);
  const onTaskWorkers = workers.filter((w) => w.status === "On Task");
  const availableWorkers = workers.filter((w) => w.status === "Available");

  const completedToday = 23;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;

  const sla =
    Math.round((tasks.filter((t) => t.onTime).length / tasks.length) * 100) ||
    0;

  return (
    <div className="space-y-8" style={{ color: COLORS.primary_white }}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
        <div className="text-center lg:text-left">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center lg:justify-start ${FONTSIZE[36]}`}
            style={{ fontWeight: WEIGHT.seven }}>
            {/* <img
              src={tools}
              alt="Maintenance"
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 mr-3"
            /> */}
            Maintenance Control Center
          </h1>

          <p className={`mt-2 sm:text-base ${FONTSIZE[16]}`} style={{color: COLORS.secoundy_gray}}>
            Real-time task monitoring and worker management
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <button onClick={() => { navigate("/emergencyalerts") }}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl bg-linear-to-r from-[#FB2C36] to-[#E60076] flex items-center justify-center gap-2 cursor-pointer ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven, boxShadow: "0px 4px 6px -4px #FB2C3640,0px 10px 15px -3px #FB2C3640" }}>
            <img src={alert} alt="Emergency" className="w-4 h-4" />
            Emergency Alerts
          </button>

          <button onClick={() => { navigate("/complaints") }}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl bg-linear-to-r from-[#FF6900] to-[#E65C00] flex items-center justify-center gap-2 cursor-pointer ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven, boxShadow: "0px 4px 6px -4px #FF690040,0px 10px 15px -3px #FF690040" }}>
            <img src={notes} alt="Complaints" className="w-4 h-4" />
            All Complaints
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
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
          subtitle="Available now"
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

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setView("Active")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer ${view === "Active"
              ? "bg-linear-to-r from-[#FF6900] to-[#E7000B] shadow-lg shadow-[#FF690040]"
              : "bg-[#FFFFFF0D]"
            }`}
        style={{fontWeight: WEIGHT.seven}}>
          <img src={tools} alt="" className="w-5 h-5" /> Active Tasks
        </button>

        <button
          onClick={() => setView("Workers")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl  cursor-pointer ${view === "Workers"
              ? "bg-linear-to-r from-[#2B7FFF] to-[#0092B8] shadow-lg shadow-[#2B7FFF40]"
              : "bg-[#FFFFFF0D]"
            }`}
        style={{fontWeight: WEIGHT.seven}}>
          <img src={person} alt="" className="w-5 h-5" /> Worker Status
        </button>
      </div>

      {view === "Active" && (
        <>
          <Section title="Critical Priority Tasks" icon={alert}>
            {criticalTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Section>

          <Section title="Other Active Tasks" icon={active}>
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

      {view === "Workers" && (
        <>
          <Section title="Workers on Task" icon={green}>
            <div className="overflow-x-auto scroll-smooth lg:overflow-visible">
              <div className="flex gap-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-2">
                {onTaskWorkers.map((worker) => {
                  const activeTask = tasks.find(
                    (t) =>
                      t.worker.trim() === worker.name.trim() &&
                      t.status === "In Progress",
                  );

                  return (
                    <div key={worker.id} className="min-w-[320px] lg:min-w-0">
                      <WorkerCard
                        worker={{
                          ...worker,
                          status: worker.status,
                          currentTask: activeTask
                            ? activeTask.title
                            : "No active task",
                          location: activeTask
                            ? `${activeTask.location}${activeTask.flat ? ` - ${activeTask.flat}` : ""}`
                            : worker.location || "Not Assigned",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>

          <Section title="Available Workers" icon={white}>
            <div className="overflow-x-auto scroll-smooth lg:overflow-visible">
              <div className=" flex gap-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-2 ">
                {availableWorkers.map((worker) => (
                  <div key={worker.id} className="min-w-[320px] lg:min-w-0">
                    <AvailableWorkerCard
                      worker={{
                        ...worker,
                        status: worker.status as "On Task" | "Available",
                        currentTask: (
                          <span className="text-gray-400">No active task</span>
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Section>

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
