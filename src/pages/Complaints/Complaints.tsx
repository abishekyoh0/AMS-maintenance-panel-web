import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import plumb from "../../assets/guide/work.png"

export default function Complaints() {
  return (
    <div>
       <h1
        className={`flex items-center gap-2 text-white text-2xl font-bold mb-4 ${FONTSIZE[36]}`}
        style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
      >
        <img src={plumb} alt="Guide" className="w-10 h-10" />
        All complaints
      </h1>

      <p
        className={`text-xs sm:text-sm mb-5 ${FONTSIZE[16]}`}
        style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
      >
       Manage and Update complaint status
      </p>
    </div>
  )
}
