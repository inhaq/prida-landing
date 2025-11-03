import { Download, Shield, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="download"
      className="py-24 bg-linear-to-br from-emerald-500 to-cyan-500"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to Stop Retyping?
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-xl sm:text-2xl text-emerald-50">
            Join thousands who've reclaimed their time with private, intelligent
            form filling
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <a
              href="/prida.zip"
              download="prida.zip"
              className="px-10 py-5 text-lg font-bold transition-all duration-200 bg-white rounded-lg shadow-2xl group hover:bg-slate-50 text-emerald-600 hover:shadow-3xl hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Add to Chrome - Free Forever
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 text-white sm:flex-row">
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
