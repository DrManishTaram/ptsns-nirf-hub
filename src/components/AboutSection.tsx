import { Target, Users, TrendingUp, Globe, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  const parameters = [
    { icon: BookOpen, title: "Teaching, Learning & Resources", description: "Faculty quality, learning resources, and infrastructure", gradient: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, title: "Research & Professional Practice", description: "Publications, patents, and research funding", gradient: "from-purple-500 to-pink-500" },
    { icon: Award, title: "Graduation Outcomes", description: "Placement, higher studies, and entrepreneurship", gradient: "from-pink-500 to-rose-500" },
    { icon: Users, title: "Outreach & Inclusivity", description: "Regional and gender diversity initiatives", gradient: "from-orange-500 to-amber-500" },
    { icon: Globe, title: "Perception", description: "Reputation among academic peers and employers", gradient: "from-teal-500 to-emerald-500" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">About NIRF</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">National Institutional Ranking Framework</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              The NIRF was approved by MHRD and launched by the Honourable Minister of Human Resource Development on <strong className="text-foreground">29th September 2015</strong>.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12 border border-border shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                This framework outlines a methodology to rank institutions across the country. The methodology draws from the overall recommendations and broad understanding arrived at by a Core Committee set up by MHRD, to identify the broad parameters for ranking various universities and institutions.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/80 rounded-lg border-l-4 border-primary">
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Source:</strong>{" "}
                  <a 
                    href="https://www.nirfindia.org/About" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.nirfindia.org/About
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Parameters Grid */}
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            <span className="text-gradient-purple-pink">Ranking Parameters</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parameters.map((param, index) => (
              <div
                key={param.title}
                className="group bg-white rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${param.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <param.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {param.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {param.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
