import { Download, Shield, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="download"
      className="py-24 bg-linear-to-br from-emerald-500 to-cyan-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Stop Retyping?
          </h2>
          <p className="text-xl sm:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto">
            Join thousands who've reclaimed their time with private, intelligent
            form filling
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#"
              className="group px-10 py-5 bg-white hover:bg-slate-50 text-emerald-600 font-bold rounded-lg transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
            >
              <span className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Add to Chrome - Free Forever
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">No data collection</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Works offline</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span className="text-sm font-medium">Free forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
