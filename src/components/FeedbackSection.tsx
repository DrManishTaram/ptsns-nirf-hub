import { Mail, MessageSquare, Send, ExternalLink } from "lucide-react";

const FeedbackSection = () => {
  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 mb-4">
              <MessageSquare className="w-4 h-4 text-pink-600" />
              <span className="text-pink-600 font-semibold text-sm">Your Voice Matters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Share Your Feedback</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We value your opinion on our NIRF data. Help us improve transparency and data quality.
            </p>
          </div>

          {/* Feedback Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 md:p-12 text-center shadow-xl">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/10 blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              {/* Email Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Send Us Your Feedback
              </h3>
              <p className="text-white/90 mb-8 max-w-lg mx-auto">
                You can give your opinion/feedback on our NIRF data through email. We appreciate your valuable input in helping us maintain data accuracy.
              </p>

              {/* Email Button */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mt-8">
                {/* Email Button */}
                <a
                  href="mailto:ptsnsuniversity@gmail.com?subject=PTSNS NIRF Feedback"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  ptsnsuniversity@gmail.com
                </a>

                {/* Subject Note */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-center">
                  <span className="text-white/90 text-sm">
                    Please mention subject as: <strong className="text-white">"PTSNS NIRF Feedback"</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.nirfindia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-5 bg-white rounded-xl border border-border hover:border-primary/30 transition-all group card-shadow hover:card-shadow-hover gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-center">
                <h4 className="font-semibold text-foreground">Official NIRF Portal</h4>
                <p className="text-muted-foreground text-sm">www.nirfindia.org</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            <a
              href="#home"
              className="flex items-center p-5 bg-white rounded-xl border border-border hover:border-primary/30 transition-all group card-shadow hover:card-shadow-hover gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-center">
                <h4 className="font-semibold text-foreground">Contact University</h4>
                <p className="text-muted-foreground text-sm">Get in touch with us</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
