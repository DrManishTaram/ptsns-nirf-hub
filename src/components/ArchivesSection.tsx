import { Calendar, ExternalLink, FileText, Award } from "lucide-react";

const ArchivesSection = () => {
  const archives = [
    { year: "2024", highlight: true },
    { year: "2023", highlight: false },
    { year: "2022", highlight: false },
    { year: "2021", highlight: false },
    { year: "2020", highlight: false },
    { year: "2019", highlight: false },
    { year: "2018", highlight: false },
    { year: "2017", highlight: false },
  ];

  return (
    <section id="archives" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 mb-4">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 font-semibold text-sm">Historical Data</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient-purple-pink">NIRF Archives</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Access our complete NIRF submission history from 2017 to present
            </p>
          </div>

          {/* Archives Timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {archives.map((archive, index) => (
              <a
                key={archive.year}
                href="#"
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  archive.highlight
                    ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl"
                    : "bg-white border border-border hover:border-primary/30 card-shadow hover:card-shadow-hover"
                }`}
              >
                {/* Latest Badge */}
                {archive.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      <Award className="w-3 h-3" />
                      Latest
                    </span>
                  </div>
                )}

                {/* Year */}
                <div className="mb-4">
                  <span className={`text-4xl font-display font-bold ${
                    archive.highlight ? "text-white" : "text-gradient"
                  }`}>
                    {archive.year}
                  </span>
                </div>

                {/* NIRF Label */}
                <div className="flex items-center gap-2 mb-4">
                  <FileText className={`w-5 h-5 ${archive.highlight ? "text-white/80" : "text-muted-foreground"}`} />
                  <span className={archive.highlight ? "text-white/90" : "text-muted-foreground"}>
                    NIRF Report
                  </span>
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 font-semibold text-sm ${
                  archive.highlight ? "text-white" : "text-primary group-hover:text-purple-600"
                } transition-colors`}>
                  Click Here
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Ring */}
                <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full border-4 ${
                  archive.highlight ? "border-white/20" : "border-primary/10 group-hover:border-purple-200"
                } transition-colors`} />
              </a>
            ))}
          </div>

          {/* Timeline Decoration */}
          <div className="hidden lg:flex items-center justify-center mt-12 gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm px-4 py-2 bg-white rounded-full border border-border shadow-sm">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>8 Years of NIRF Participation</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchivesSection;
