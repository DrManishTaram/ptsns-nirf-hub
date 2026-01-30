import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DisciplinesSection from "@/components/DisciplinesSection";
import DownloadsSection from "@/components/DownloadsSection";
import ArchivesSection from "@/components/ArchivesSection";
import FeedbackSection from "@/components/FeedbackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <section className="py-10 md:py-20 subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
              <DisciplinesSection />

              {/* Vertical Separator for Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

              <DownloadsSection />
            </div>
          </div>
        </section>
        <AboutSection />
        <FeedbackSection />
      </main>
    </div>
  );
};

export default Index;
