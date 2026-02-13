import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import mail from "../../assets/guide/mail.png";
import calendar from "../../assets/guide/calender.png";
import calendar2 from "../../assets/guide/calender2.png";
import special from "../../assets/guide/red.png";
import star from "../../assets/guide/star.png";
import check from "../../assets/guide/tick.png";
import { Phone } from "lucide-react";
import { toast } from "react-toastify";

type ProviderStatus = "available" | "on-job" | "off-job";

type Props = {
  name: string;
  service: string;
  serviceId: string;
  phone: string;
  email: string;
  experience: string;
  joinDate: string;
  specialization: string;
  rating: number;
  completed: number;
  status: ProviderStatus;
  serviceImage: string;
  profileImage: string;
};

const ProviderCard = ({
  name,
  service,
  serviceId,
  phone,
  email,
  experience,
  joinDate,
  specialization,
  rating,
  completed,
  serviceImage,
  profileImage,
  status,
}: Props) => {
  return (
    <div className="bg-[#FFFFFF0D] rounded-lg border border-[#FFFFFF33] text-white p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="mb-4 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6">
        <div className="bg-linear-to-r from-[#00B8DB33] to-[#2B7FFF33] px-4 sm:px-6 py-4 sm:py-5 rounded-t-lg">
          <div className="flex items-start gap-3 sm:gap-4 relative">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3
                className={`text-lg font-semibold ${FONTSIZE[20]}`}
                style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
              >
                {name}
              </h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <img src={serviceImage} alt={service} className="w-4 h-4" />
                <span
                  className={`text-cyan-400 ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.seven, color: COLORS.para }}
                >
                  {service}
                </span>
              </div>

              <p
                className={`text-slate-300 text-xs mt-1 ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
              >
                ID: {serviceId}
              </p>

              <div
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs mt-3 ml-auto
                ${
                  status === "available"
                    ? "bg-[#00C95033] text-[#05DF72] border border-[#05DF724D]"
                    : status === "on-job"
                    ? "bg-[#FF690033] text-[#FF8904] border border-[#FF89044D]"
                    : "bg-[#6A728233] text-[#99A1AF] border border-[#99A1AF4D]"
                } ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    status === "available"
                      ? "bg-[#05DF72]"
                      : status === "on-job"
                      ? "bg-[#FF8904]"
                      : "bg-[#99A1AF]"
                  }`}
                ></span>

                {status === "available"
                  ? "Available"
                  : status === "on-job"
                  ? "On Job"
                  : "Off Job"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4 pt-4">
        <p
          className={`flex items-center gap-2 text-xs ${FONTSIZE[12]}`}
          style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
        >
          <Phone size={14} />
          Phone Number
        </p>
        <p
          className={`font-medium ${FONTSIZE[16]}`}
          style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
        >
          {phone}
        </p>

        <p
          className={`flex items-center gap-2 text-xs mt-3 ${FONTSIZE[12]}`}
          style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
        >
          <img src={mail} alt="email" className="w-4 h-4" />
          Email Address
        </p>
        <p
          className={`font-medium break-all ${FONTSIZE[14]}`}
          style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
        >
          {email}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-700 pt-4">
        <div>
          <p
            className={`text-slate-400 text-xs ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Experience
          </p>
          <p
            className={`flex items-center gap-2 ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
          >
            <img src={calendar} alt="experience" className="w-4 h-4" />
            {experience}
          </p>
        </div>
        <div>
          <p
            className={`text-slate-400 text-xs ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Join Date
          </p>
          <p
            className={`flex items-center gap-2 ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
          >
            <img src={calendar2} alt="join date" className="w-4 h-4" />
            {joinDate}
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 pt-4 mt-4">
        <p
          className={`text-slate-400 text-xs ${FONTSIZE[12]}`}
          style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
        >
          Specialization
        </p>
        <p
          className={`flex items-center gap-2 text-sm mt-1 ${FONTSIZE[14]}`}
          style={{ fontWeight: WEIGHT.seven, color: COLORS.para }}
        >
          <img src={special} alt="specialization" className="w-4 h-4" />
          {specialization}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#FFFFFF22]">
        <div className="bg-slate-700/50 rounded-lg px-4 py-3 text-center">
          <p
            className={`text-xs ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Rating
          </p>
          <p
            className={`flex items-center justify-center gap-2 font-bold text-lg ${FONTSIZE[18]}`}
            style={{ fontWeight: WEIGHT.seven, color: "#FDC700" }}
          >
            <img src={star} alt="rating" className="w-5 h-5" />
            {rating}
          </p>
        </div>

        <div className="bg-slate-700/50 rounded-lg px-4 py-3 text-center">
          <p
            className={`text-xs ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Completed
          </p>
          <p
            className={`flex items-center justify-center gap-2 font-bold text-lg ${FONTSIZE[18]}`}
            style={{ fontWeight: WEIGHT.seven, color: "#05DF72" }}
          >
            <img src={check} alt="completed" className="w-5 h-5" />
            {completed}
          </p>
        </div>
      </div>

      <button
        onClick={() => toast.success("Email Sent successfully!")}
        className={`w-full mt-4 bg-[#00B8DB] hover:bg-[#00B8DB] cursor-pointer transition py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${FONTSIZE[16]}`}
        style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
      >
        <img src={mail} alt="email" className="w-5 h-5" />
        Email
      </button>
    </div>
  );
};

export default ProviderCard;
