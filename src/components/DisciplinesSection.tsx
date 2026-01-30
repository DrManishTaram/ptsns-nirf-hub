import { GraduationCap, Cpu, Beaker, Briefcase, Scale, Sparkles } from "lucide-react";

const DisciplinesSection = () => {
  const disciplines = [
    {
      icon: GraduationCap,
      title: "PTSNS Overall",
      description: "Comprehensive institutional ranking covering all academic parameters",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      icon: Cpu,
      title: "Engineering",
      description: "Technical excellence in engineering and technology programs",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: Beaker,
      title: "Pharmacy",
      description: "Pharmaceutical sciences and healthcare education standards",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: Briefcase,
      title: "Management",
      description: "Business administration and management studies quality",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: Scale,
      title: "Law",
      description: "Legal education and jurisprudence programs excellence",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <div className="h-full">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-4">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-gradient-purple-pink font-semibold text-sm">Our Disciplines</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="text-gradient">NIRF Participating Disciplines</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Pandit Shambhunath Shukla University participates in NIRF across five key disciplines along with overall ranking
        </p>
      </div>

      {/* Disciplines Grid */}
      <div className="flex justify-center mb-8">
        {disciplines.filter(d => d.title === "PTSNS Overall").map((discipline, index) => (
          <div
            key={discipline.title}
            className={`group relative overflow-hidden bg-gradient-to-br ${discipline.bgGradient} rounded-2xl p-8 border border-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 w-full max-w-md mx-auto`}
          >
            {/* Gradient Top Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${discipline.gradient}`} />

            {/* Icon */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${discipline.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <discipline.icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              {discipline.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {discipline.description}
            </p>

            {/* Decorative Element */}
            <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${discipline.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
          </div>
        ))}
      </div>

      {/* University Participation Note */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-border shadow-sm">
          <GraduationCap className="w-6 h-6 text-primary" />
          <span className="text-foreground">
            All discipline data is available for <strong className="text-gradient">open view</strong> of all stakeholders
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisciplinesSection;
