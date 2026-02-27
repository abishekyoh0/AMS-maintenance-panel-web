import { useState } from "react";
import plus from "../../assets/guide/plus.png";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import cancel from "../../assets/guide/close.png";
import { Check } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Certification = {
  name?: string;
  file?: File;
};

type SkillItem = string | { name: string; confirmed: boolean };

export default function AddWorkerModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    fullName: "",
    specialization: "",
    experience: "",
    availability: "",
    mobile: "",
    email: "",
    rating: "",
    currentTasks: "",
    completedTasks: "",
  });

  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [skills, setSkills] = useState<SkillItem[]>([]);

  if (!open) return null;

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const updateList = <T,>(
    index: number,
    value: T,
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    const updated = [...list];
    updated[index] = value;
    setList(updated);
  };

  const removeItem = <T,>(
    index: number,
    setList: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  const submitHandler = () => {
    const payload = { ...form, certifications, skills };
    console.log("Worker Data:", payload);
    onClose();
  };

  return (
   <div className="fixed inset-0 bg-[#000000CC] z-50 flex items-center justify-center p-4 sm:p-6 overflow-auto">
  <div className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl bg-[#111827] text-white rounded-2xl shadow-xl max-h-[95vh] overflow-y-auto p-4 sm:p-6 md:p-8">

    <h2
      className={`flex items-center gap-2 mb-6 ${FONTSIZE[30]}`}
      style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
    >
      <img src={plus} alt="Add Worker" className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      Add New Worker
    </h2>

    <div className="bg-[#FFFFFF0D] border-[#FFFFFF33] rounded-xl p-3 sm:p-4 mb-4">
      <p className={`text-sm mb-3 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
        Basic Information
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label="Full Name *" value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} />
        <Input label="Specialization *" value={form.specialization} onChange={(e) => handleChange("specialization", e.target.value)} />
        <Input label="Experience *" value={form.experience} onChange={(e) => handleChange("experience", e.target.value)} />
        <Input label="Availability Status" value={form.availability} onChange={(e) => handleChange("availability", e.target.value)} />
      </div>
    </div>

    <div className="bg-[#FFFFFF0D] border-[#FFFFFF33] rounded-xl p-3 sm:p-4 mb-4">
      <p className={`text-sm text-gray-300 mb-3 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
        Contact Information
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label="Mobile Number *" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} />
        <Input label="Email Address *" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
      </div>
    </div>

    <div className="bg-[#FFFFFF0D] border-[#FFFFFF33] rounded-xl p-3 sm:p-4 mb-4">
      <p className={`text-sm text-gray-300 mb-3 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
        Performance Metrics
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Input label="Rating (1–5)" value={form.rating} onChange={(e) => handleChange("rating", e.target.value)} />
        <Input label="Current Tasks" value={form.currentTasks} onChange={(e) => handleChange("currentTasks", e.target.value)} />
        <Input label="Completed Tasks" value={form.completedTasks} onChange={(e) => handleChange("completedTasks", e.target.value)} />
      </div>
    </div>

    <div className="bg-[#FFFFFF0D] border-[#FFFFFF33] rounded-xl p-3 sm:p-4 mb-4">
      <p className={`text-sm text-gray-300 mb-3 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
        Certifications
      </p>
      <div className="flex flex-col gap-3">
        {certifications.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              value={item.name || ""}
              placeholder="Enter Certification Name"
              onChange={(e) => updateList(i, { ...item, name: e.target.value }, certifications, setCertifications)}
              className="flex-1 px-3 py-2 rounded-lg bg-[#FFFFFF0D] border border-[#FFFFFF33] text-white outline-none"
            />

            <label className="flex items-center gap-2 px-3 py-2 bg-[#00C95033] hover:bg-[#00C95055] rounded-[14px] border-[1.17px] border-[#05DF724D] cursor-pointer text-[#05DF72] text-xs sm:text-sm">
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) updateList(i, { ...item, file }, certifications, setCertifications);
                }}
              />
              {item.file ? item.file.name : "Upload File"}
            </label>

            <button
              onClick={() => removeItem(i, setCertifications)}
              className={`cursor-pointer bg-[#FB2C3633] hover:bg-[#FB2C3633] text-[#FF6467] rounded-[14px] border-[1.17px] border-[#FF64674D] w-full sm:w-28 h-11 flex items-center justify-center ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.seven }}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={() => setCertifications([...certifications, { name: "", file: undefined }])}
          className={`mt-2 text-[#05DF72] cursor-pointer bg-[#00C95033] hover:bg-[#00C95055] rounded-[14px] border-[1.17px] border-[#05DF724D] w-full sm:w-44 h-11 flex items-center justify-center ${FONTSIZE[16]}`}
          style={{ fontWeight: WEIGHT.seven }}
        >
          Add Certification
        </button>
      </div>
    </div>

    <div className="bg-[#FFFFFF0D] border-[#FFFFFF33] rounded-xl p-3 sm:p-4 mb-4">
      <p className={`text-sm text-gray-300 mb-3 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
        Skills
      </p>
      <div className="flex flex-col gap-3">
        {skills.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-2">
            {typeof item === "string" ? (
              <input
                type="text"
                value={item}
                onChange={(e) => updateList(i, e.target.value, skills, setSkills)}
                className="flex-1 px-3 py-2 rounded-lg border border-[#FFFFFF33] bg-[#FFFFFF1A] outline-none text-white"
              />
            ) : (
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg text-white">
                <span>{item.name}</span>
                <Check className="w-5 h-5" />
              </div>
            )}

            {typeof item === "string" && (
              <button
                onClick={() => updateList(i, { name: item, confirmed: true }, skills, setSkills)}
                className={`cursor-pointer bg-[#00C95033] hover:bg-[#00C95033] text-[#05DF72] rounded-[14px] border-[1.17px] border-green-600 px-3 py-2 flex items-center justify-center ${FONTSIZE[16]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                Confirm
              </button>
            )}

            <button
              onClick={() => removeItem(i, setSkills)}
              className={`cursor-pointer bg-[#FB2C3633] hover:bg-[#FB2C3633] text-[#FF6467] rounded-[14px] border-[1.17px] border-[#FF64674D] px-3 py-2 flex items-center justify-center ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.seven }}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={() => setSkills([...skills, ""])}
          className={`mt-2 bg-[#00C95033] cursor-pointer hover:bg-[#00C95033] text-[#05DF72] rounded-[14px] border-[1.17px] border-[#05DF724D] w-full sm:w-32 h-11 flex items-center justify-center ${FONTSIZE[16]}`}
          style={{ fontWeight: WEIGHT.seven }}
        >
          Add Skill
        </button>
      </div>
    </div>

   <div className="flex flex-col sm:flex-row gap-[15.98px] mt-6">
  <button
    onClick={onClose}
    className={`flex items-center cursor-pointer justify-center gap-[15.98px] w-full sm:w-77 h-[50.31px] bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A] font-semibold ${FONTSIZE[16]}`}
    style={{
      fontWeight: WEIGHT.seven,
      borderRadius: "39.36px",
      border: "1.17px solid transparent",
      opacity: 1,
    }}
  >
    <img src={cancel} alt="Cancel" className="w-5 h-5" />
    Cancel
  </button>

  <button
    onClick={submitHandler}
    className={`flex items-center cursor-pointer justify-center w-full sm:w-77 h-[50.31px] font-semibold hover:opacity-90 ${FONTSIZE[16]}`}
    style={{
      borderRadius: "39.36px",
      background: "linear-gradient(to right, #00C950, #009966)",
      fontWeight: WEIGHT.seven,
      border: "1.17px solid transparent",
      opacity: 1,
    }}
  >
    Add Worker
  </button>
</div>



  </div>
</div>

  );
}

type InputProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, value, onChange }: InputProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm text-gray-300">{label}</label>}
    <input
      value={value}
      onChange={onChange}
      className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3 py-2 text-sm text-white outline-none"
    />
  </div>
);
