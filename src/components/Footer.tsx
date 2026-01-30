import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 py-12 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* University Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">PS</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold">
                    Pandit Shambhunath Shukla
                  </h4>
                  <p className="text-purple-400 text-sm">University</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Committed to academic excellence and transparency through NIRF participation since 2017.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-purple-400 font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {["About NIRF", "Disciplines", "Downloads", "Archives", "Feedback"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-purple-400 font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:ptsnsuniversity@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  ptsnsuniversity@gmail.com
                </a>
                <a
                  href="https://www.nirfindia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  www.nirfindia.org <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Pandit Shambhunath Shukla University. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> for academic excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
