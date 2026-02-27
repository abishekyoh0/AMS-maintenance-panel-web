import { useState } from "react";
import { X } from "lucide-react";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type Props = {
  open: boolean;
  onClose: () => void;
  workOrder: any;
};

export default function UpdateComplaintModal({
  open,
  onClose,
  workOrder,
}: Props) {
  const [progress] = useState(workOrder?.progress || 0);
  const [note, setNote] = useState("");

  if (!open || !workOrder) return null;

  return (
   <div className="fixed inset-0 bg-[#000000CC] z-50 flex items-center justify-center p-4 overflow-auto">
      <div
        className="relative bg-[#101828F2] border border-[#FFFFFF33]  rounded-3xl w-full max-w-2xl  p-6 sm:p-8
                   max-h-[90vh] overflow-y-auto"
      >
       
        <button
          type="button"
          onClick={onClose}
          className="
    absolute top-4 right-4
    sm:top-6 sm:right-6
    w-8 h-8 sm:w-10 sm:h-10
    flex items-center justify-center
    rounded-full
    hover:opacity-70
   
    text-white font-bold
    cursor-pointer
    transition
    shadow-md
  "
          aria-label="Close"
        >
          <X />
        </button>
        <h2
          className={`text-lg sm:text-xl font-semibold mb-5 ${FONTSIZE[30]}`}
          style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
        >
          Update Complaint Status
        </h2>
        <div className="bg-[#FFFFFF0D] rounded-xl p-4 sm:p-5 mb-6">
          <h3
            className={`font-semibold mb-4 ${FONTSIZE[20]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
          >
            {workOrder.title}
          </h3>

          <div className="grid grid-cols-2 gap-y-5 gap-x-8">

  <div>
    <p className={`text-xs text-gray-400 mb-1 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Resident</p>
    <p className={`text-sm font-semibold text-white ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
      {workOrder.resident}
    </p>
  </div>

  <div>
    <p className={`text-xs text-gray-400 mb-1 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Unit</p>
    <p className={`text-sm font-semibold text-[#00D3F2] ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven }}>
      {workOrder.unit}
    </p>
  </div>

  <div>
    <p className={`text-xs text-gray-400 mb-1 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Category</p>
    <p className={`text-sm font-medium text-white ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
      {workOrder.category}
    </p>
  </div>

  <div>
    <p className={`text-xs text-gray-400 mb-1 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Priority</p>
    <span className={`inline-block px-3 py-1 text-xs rounded-full bg-[#FF690033] text-[#FF8904]  ${FONTSIZE[12]}`}
    style={{ fontWeight: WEIGHT.seven}}>
      {workOrder.priority}
    </span>
  </div>

  <div>
    <p className={`text-xs text-gray-400 mb-1 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Assigned Worker</p>
    <p className={`text-sm font-medium text-white ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
      {workOrder.worker}
    </p>
  </div>

  <div>
    <p className={`text-xs text-gray-400 mb-1 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Progress</p>
    <p className={`text-sm font-semibold text-white ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
      {workOrder.progress}%
    </p>
  </div>

</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={`text-sm text-gray-400 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.smalltext }}>Assign Worker</label>
            <textarea className="mt-2 w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3  focus:outline-none focus:border-cyan-400"></textarea>
          </div>

          <div>
            <label className={`text-sm text-gray-400 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.smalltext }}>Update Status *</label>
            <textarea className="mt-2 w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3  focus:outline-none focus:border-cyan-400"></textarea>
          </div>

          <div className="sm:col-span-2">
            <label className={`text-sm text-gray-400 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.smalltext }}>

              Progress ({progress}%)
                                <textarea className="mt-2 w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3  focus:outline-none focus:border-cyan-400"></textarea>

            </label>
          </div>

          <div className="sm:col-span-2">
            <label className={`text-sm text-gray-400 ${FONTSIZE[14]}`}
    style={{ fontWeight: WEIGHT.four, color: COLORS.smalltext }}>Add Work Note</label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-2 w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3 py-3 resize-none focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className={`flex-1 py-3 text-white  border cursor-pointer border-[#FFFFFF33] rounded-full bg-[#FFFFFF1A] ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven, color: COLORS.smalltext }}
          >
            Cancel
          </button>

          <button className={`flex-1 py-3 text-white  cursor-pointer rounded-full bg-linear-to-r from-[#FF6900] to-[#E7000B] font-semibold ${FONTSIZE[16]}`}
    style={{ fontWeight: WEIGHT.seven, color: COLORS.smalltext }}>
            Update Building
          </button>
        </div>
      </div>
    </div>
  );
}


