import { Download, FileText, GraduationCap, Cpu, Beaker, Briefcase, Scale, Lightbulb, Leaf } from "lucide-react";

const DownloadsSection = () => {
  const downloads = [
    { icon: GraduationCap, title: "PTSNS Overall", description: "Complete institutional data", gradient: "from-blue-500 to-purple-500" },
    { icon: Cpu, title: "Engineering Discipline", description: "Technical programs data", gradient: "from-cyan-500 to-blue-500" },
    { icon: Beaker, title: "Pharmacy Discipline", description: "Pharmaceutical sciences data", gradient: "from-emerald-500 to-teal-500" },
    { icon: Briefcase, title: "Management Discipline", description: "Business studies data", gradient: "from-amber-500 to-orange-500" },
    { icon: Scale, title: "Law Discipline", description: "Legal education data", gradient: "from-purple-500 to-pink-500" },
    { icon: Lightbulb, title: "Innovation", description: "Research & innovation metrics", gradient: "from-yellow-500 to-amber-500" },
    { icon: Leaf, title: "SDG", description: "Sustainable Development Goals", gradient: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="h-full">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-4">
          <FileText className="w-4 h-4 text-blue-600" />
          <span className="text-blue-600 font-semibold text-sm">Data Access</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="text-gradient-blue-purple">View & Download NIRF Data</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Access detailed data on all NIRF parameters for each discipline. Transparent and open for all stakeholders.
        </p>
      </div>

      {/* Downloads Grid */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md">
          {downloads.filter(d => d.title === "PTSNS Overall").map((item, index) => (
            <button
              key={item.title}
              className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover text-left w-full"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground text-sm mb-0.5 truncate">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs truncate">
                  {item.description}
                </p>
              </div>
              <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground text-lg mb-1">
              Comprehensive Data Available
            </h4>
            <p className="text-muted-foreground">
              All data files contain detailed information as per NIRF parameters and are available in PDF format for download and verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsSection;
