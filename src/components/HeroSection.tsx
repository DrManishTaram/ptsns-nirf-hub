import { Award, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative subtle-gradient py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-accent/15 blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="w-full mx-auto text-center">
          {/* University Name Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-red-600 mb-6 animate-fade-up leading-normal">
            Pandit Shambhunath Shukla University, Shahdol, M.P.
          </h1>

          {/* NIRF Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-gradient mb-6 animate-fade-up shadow-sm">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-gradient font-semibold text-sm">National Institutional Ranking Framework</span>
          </div>

          {/* Main Title */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 animate-fade-up stagger-1">
            NIRF Rankings
            <span className="block text-gradient mt-2">& Participation Status</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-2">
            Pandit Shambhunath Shukla University's commitment to excellence, transparency, and academic integrity through NIRF participation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <a
              href="#disciplines"
              className="px-8 py-4 bg-white text-foreground font-semibold rounded-xl border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
            >
              Explore Our Rankings
            </a>
            <a
              href="#downloads"
              className="px-8 py-4 btn-gradient text-white font-semibold rounded-xl transition-all transform hover:scale-105 animate-pulse"
            >
              Download Data
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up stagger-4">
            {[
              { number: "23", label: "Disciplines" },
              { number: "8+", label: "Years Participating" },
              { number: "7", label: "Data Categories" },
              { number: "2025-2026", label: "Latest Report" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white shadow-sm">
                <div className={`text-3xl md:text-4xl font-display font-bold mb-1 ${index % 2 === 0 ? 'text-gradient-blue-purple' : 'text-gradient-purple-pink'
                  }`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
