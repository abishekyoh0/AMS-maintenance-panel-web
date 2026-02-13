import guide from "../../assets/sidebar/guide.png";
import StatCard from "../../components/Guide/statcard";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import work from "../../assets/guide/work.png";
import persons from "../../assets/guide/persons.png";
import tick from "../../assets/guide/tick.png";
import star from "../../assets/guide/star.png";
import SearchFilter from "../../components/Guide/searchfilter";
import ProviderCard from "../../components/Guide/providercard";
import { useState } from "react";
import plumbing from "../../assets/guide/plumb.png";
import electrical from "../../assets/guide/electrical.png";
import person from "../../assets/guide/boy.png";
import paint from "../../assets/guide/paint.png";
import painting from "../../assets/guide/paintboy.png";
import hvac from "../../assets/guide/hvac.png";
import clean from "../../assets/guide/clean.png";
import car from "../../assets/guide/car.png";
import lock from "../../assets/guide/lock.png";

const providers = [
  {
    name: "Robert Martinez",
    service: "Plumbing",
    serviceId: "PLB-001",
    profileImage: person,
    serviceImage: plumbing,
    phone: "+1 (555) 123-4501",
    email: "robert@skyline.com",
    experience: "8 Years",
    joinDate: "Jan 2016",
    specialization: "Water Systems ",
    rating: 4.8,
    completed: 342,
    status: "available",
  },
  {
    name: "James Wilson",
    service: "Electrical",
    serviceId: "ELC-001",
    profileImage: person,
    serviceImage: electrical,
    phone: "+1 (555) 123-4503",
    email: "james.wilson@skyline.com",
    experience: "10 Years",
    joinDate: "Sep 2014",
    specialization: "High Voltage Systems",
    rating: 4.9,
    completed: 456,
    status: "on-job",
  },
  {
    name: "Daniel Smith",
    service: "Electrical",
    serviceId: "ELC-002",
    profileImage: person,
    serviceImage: electrical,
    phone: "+1 (555) 555-4503",
    email: "daniel@skyline.com",
    experience: "6 Years",
    joinDate: "Feb 2019",
    specialization: "Home Wiring",
    rating: 4.6,
    completed: 210,
    status: "off-job",
  },
  {
    name: "Daniel Smith",
    service: "Painting",
    serviceId: "ELC-003",
    profileImage: painting,
    serviceImage: paint,
    phone: "+1 (555) 555-4503",
    email: "daniel@skyline.com",
    experience: "6 Years",
    joinDate: "Feb 2019",
    specialization: "Home Wiring",
    rating: 4.6,
    completed: 210,
    status: "off-job",
  },
  {
    name: "Daniel Smith",
    service: "HVAC",
    serviceId: "ELC-002",
    profileImage: person,
    serviceImage: hvac,
    phone: "+1 (555) 555-4503",
    email: "daniel@skyline.com",
    experience: "6 Years",
    joinDate: "Feb 2019",
    specialization: "Home Wiring",
    rating: 4.6,
    completed: 210,
    status: "off-job",
  },
  {
    name: "James Wilson",
    service: "Cleaning",
    serviceId: "ELC-001",
    profileImage: person,
    serviceImage: clean,
    phone: "+1 (555) 123-4503",
    email: "james.wilson@skyline.com",
    experience: "10 Years",
    joinDate: "Sep 2014",
    specialization: "High Voltage Systems",
    rating: 4.9,
    completed: 456,
    status: "on-job",
  },
  {
    name: "James Wilson",
    service: "Carpentry",
    serviceId: "ELC-001",
    profileImage: person,
    serviceImage: car,
    phone: "+1 (555) 123-4503",
    email: "james.wilson@skyline.com",
    experience: "10 Years",
    joinDate: "Sep 2014",
    specialization: "High Voltage Systems",
    rating: 4.9,
    completed: 456,
    status: "on-job",
  },
  {
    name: "James Wilson",
    service: "Locksmith",
    serviceId: "ELC-001",
    profileImage: person,
    serviceImage: lock,
    phone: "+1 (555) 123-4503",
    email: "james.wilson@skyline.com",
    experience: "10 Years",
    joinDate: "Sep 2014",
    specialization: "High Voltage Systems",
    rating: 4.9,
    completed: 456,
    status: "on-job",
  },
] as const;

export default function Guide() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Services");

  const handleFilterChange = (search: string, selectedCategory: string) => {
    setSearchTerm(search);
    setCategory(selectedCategory);
  };

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.serviceId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All Services" || provider.service === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1
        className={`flex items-center gap-2 text-white text-2xl font-bold mb-4 ${FONTSIZE[36]}`}
        style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
      >
        <img src={guide} alt="Guide" className="w-10 h-10" />
        Service and Provider Directory
      </h1>

      <p
        className={`text-xs sm:text-sm mb-5 ${FONTSIZE[16]}`}
        style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
      >
        Complete entry and exit tracking for residents in the apartment
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Residents"
          value={142}
          icon={persons}
          gradientColors={["#2B7FFF33", "#00B8DB33"]}
          borderColor="#51A2FF4D"
        />

        <StatCard
          title="Visitors"
          value={23}
          icon={tick}
          gradientColors={["#00C95033", "#00BC7D33"]}
          borderColor="#05DF724D"
        />

        <StatCard
          title="Staff"
          value={18}
          icon={work}
          gradientColors={["#FF690033", "#FB2C3633"]}
          borderColor="#FF89044D"
        />

        <StatCard
          title="Rating"
          value={4.9}
          icon={star}
          gradientColors={["#AD46FF33", "#F6339A33"]}
          borderColor="#C27AFF4D"
        />
      </div>

      <div className="mb-6">
        <SearchFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredProviders.length > 0 ? (
          filteredProviders.map((provider, index) => (
            <ProviderCard key={index} {...provider} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No providers found.
          </p>
        )}
      </div>
    </div>
  );
}
