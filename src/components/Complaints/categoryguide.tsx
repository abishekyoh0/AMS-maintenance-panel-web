import { X } from "lucide-react";
import book from "../../assets/guide/book.png";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import StatCard from "../Complaints/guidecard";
import electrical from "../../assets/guide/electrical.png";
import car from "../../assets/guide/car.png";
import paint from "../../assets/guide/paint.png";
import hvac from "../../assets/guide/hvac.png";
import general from "../../assets/guide/general.png";
import plumb from "../../assets/guide/general.png";


type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CategoryGuide({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000CC]  z-50 p-4">
      <div className="relative w-full max-w-2xl h-[80vh] overflow-y-auto bg-[#101828F2] border border-[#FFFFFF33] rounded-2xl p-6 text-white shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className=" absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:opacity-70 text-white font-bold cursor-pointer transition shadow-md "
          aria-label="Close"
        >
          <X />
        </button>

        <h2
          className={`text-xl font-semibold mb-6 flex items-center gap-2 ${FONTSIZE[30]}`}
          style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
        >
          <img src={book} alt="building" className="w-7 h-7" />
         Maintance Category Guide 
        </h2>
       <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
  <StatCard
    title="Electrical"
    value={2}
    icon={electrical}
    bgGradient="#F0B1001A"
    borderColor="#FDC7004D"
    textColor="#FDC700"
    subcategories={["Wiring","Lighting","Appliances","Circuit Breaker","Power Outlet","AC/Heating"]}
    tools={["Multimeter","Wire Stripper","Screwdriver Set","Voltage Tester"]}
    resolution="2-4 hours"
  />

  <StatCard
    title="Plumbing"
    value={2}
    icon={plumb}
    bgGradient="#2B7FFF1A"
    borderColor="#51A2FF4D"
    textColor="#51A2FF"
    subcategories={["Leakage","Drainage","Water Supply","Toilet","Kitchen Sink","Bathroom Fittings"]}
    tools={["Wrench Set","Pipe Cutter","Plunger","Pipe Sealant"]}
    resolution="1-3 hours"
  />
  <StatCard
    title="Carpentry"
    value={1}
    icon={car}
    bgGradient="#FE9A001A"
    borderColor="#FFB9004D"
    textColor="#FFB900"
    subcategories={["Door Repair","Window Repair","Furniture","Shelving","Cabinet","Flooring"]}
    tools={["Hammer","Saw","Drill","Wood Glue","Sandpaper"]}
    resolution="3-6 hours"
  />

  <StatCard
    title="Painting"
    value={1}
    icon={paint}
    bgGradient="#F6339A1A"
    borderColor="#FB64B64D"
    textColor="#FB64B6"
    subcategories={["Wall Painting","Door Painting","Ceiling","Touch-up","Exterior","Waterproofing"]}
    tools={["Brushes","Rollers","Paint Tray","Sandpaper","Masking Tape"]}
    resolution="4-8 hours"
  />
  <StatCard
    title="HVAC"
    value={1}
    icon={hvac}
    bgGradient="#00B8DB1A"
    borderColor="#00D3F24D"
    textColor="#00D3F2"
    subcategories={["AC Service","Heating","Ventilation","Filter Change","Gas Refill","Compressor"]}
    tools={["Vacuum Pump","Refrigerant","Pressure Gauge","Leak Detector"]}
    resolution="2-5 hours"
  />

  <StatCard
    title="General"
    value={1}
    icon={general}
    bgGradient="#6A72821A"
    borderColor="#99A1AF4D"
    textColor="#99A1AF4D"
    subcategories={["Miscellaneous","Cleaning","Pest Control","Locksmith","Glass Work","Other"]}
    tools={["Basic Tool Kit","Cleaning Supplies","Ladder","Safety Gear"]}
    resolution="1-2 hours"
  />
</div>
      <button
          onClick={onClose}
          className="mt-6 w-full py-3 text-white  cursor-pointer rounded-full border border-[#FFFFFF33] bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A] transition"
        >
          Close
        </button>

       

        
      </div>
    </div>
  );
}
