import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import plumb from "../../assets/guide/work.png";
import plus from "../../assets/guide/plus.png";
import book from "../../assets/guide/book.png";
import StatCard from "../../components/Complaints/statscard";

import electrical from "../../assets/guide/electrical.png";
import car from "../../assets/guide/car.png";
import paint from "../../assets/guide/paint.png";
import hvac from "../../assets/guide/hvac.png";
import general from "../../assets/guide/general.png";
import WorkOrdersTable from "../../components/Complaints/workordertable";
import { useState } from "react";
import AddWorkerModal from "../../components/Complaints/addworkermodal";
import CategoryGuide from "../../components/Complaints/categoryguide";
import UpdateComplaintModal from "../../components/Complaints/updatecomplaints";


export default function Complaints() {

  const [openModal, setOpenModal] = useState(false);
  const [openUnits, setOpenUnits] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
const [openUpdateModal, setOpenUpdateModal] = useState(false);



  return (
    <div>

     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">

  <div>
    <h1
      className={`flex items-center gap-2 text-white text-xl sm:text-2xl ${FONTSIZE[36]}`}
      style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
    >
      <img src={plumb} alt="Guide" className="w-8 h-8 sm:w-10 sm:h-10" />
      All complaints
    </h1>

    <p
      className={`text-xs sm:text-sm mt-1 ${FONTSIZE[16]}`}
      style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
    >
      Manage and Update complaint status
    </p>
  </div>

  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

    <button
     onClick={() => setOpenModal(true)}
      className={`
        flex items-center justify-center gap-2
        w-full sm:w-40.5 h-11 sm:h-12
        rounded-[14px]
        text-white font-medium
        bg-linear-to-r from-[#00C950] to-[#009966]
        hover:from-[#00b347] hover:to-[#008055]
        shadow-md hover:shadow-lg
        transition cursor-pointer
        ${FONTSIZE[16]}
      `}
      style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
    >
      <img src={plus} alt="add" className="w-4 h-4" />
      Add Worker
    </button>

    <button
    onClick={() => setOpenUnits(true)}
      className={`
        flex items-center justify-center gap-2
        w-full sm:w-40.5 h-11 sm:h-12
        rounded-[14px]
        text-white font-medium
        bg-linear-to-r from-[#FF6900] to-[#E7000B]
        hover:from-[#ff7a1a] hover:to-[#ff1a1a]
        shadow-md hover:shadow-lg
        transition cursor-pointer
        ${FONTSIZE[16]}
      `}
      style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
    >
      <img src={book} alt="guide" className="w-4 h-4" />
      Category Guide
    </button>

  </div>
</div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

        <StatCard
  title="Electrical"
  value={2}
  icon={electrical}
  bgColor="#F0B1001A"
  borderColor="#FDC7004D"
  textColor="#FDC700"
/>

<StatCard
  title="Plumbing"
  value={2}
  icon={plumb}
  bgColor="#2B7FFF1A"
  borderColor="#51A2FF4D"
  textColor="#51A2FF"
/>

<StatCard
  title="Carpentry"
  value={1}
  icon={car}
  bgColor="#FE9A001A"
  borderColor="#FFB9004D"
   textColor="#FFB900"
/>

<StatCard
  title="Painting"
  value={1}
  icon={paint}
  bgColor="#F6339A1A"
  borderColor="#FB64B64D"
   textColor="#FB64B6"
/>

<StatCard
  title="HVAC"
  value={1}
  icon={hvac}
  bgColor="#00B8DB1A"    
  borderColor="#00D3F24D"
   textColor="#00D3F2"
/>

<StatCard
  title="General"
  value={1}
  icon={general}
  bgColor="#6A72821A"
  borderColor="#99A1AF4D"
   textColor="#99A1AF"
/>


      </div>
      <div className="mt-6">
      <WorkOrdersTable
  onUpdateClick={(order: any) => {
    setSelectedOrder(order);
    setOpenUpdateModal(true);
  }}
/>
<UpdateComplaintModal
  open={openUpdateModal}
  onClose={() => setOpenUpdateModal(false)}
  workOrder={selectedOrder}
/>
    </div>
    <AddWorkerModal
  open={openModal}
  onClose={() => setOpenModal(false)}
/>
<CategoryGuide open={openUnits} onClose={() => setOpenUnits(false)} />

  
  



    </div>
  );
}
