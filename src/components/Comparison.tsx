import { X, Check } from 'lucide-react';

const features = [
  { name: 'Basic autofill (name, email)', traditional: true, prida: true },
  { name: 'Complex question answering', traditional: false, prida: true },
  { name: 'Context-aware responses', traditional: false, prida: true },
  { name: 'Text rewriting & proofreading', traditional: false, prida: true },
  { name: 'Multiple profile management', traditional: false, prida: true },
  { name: 'Works offline', traditional: true, prida: true },
  { name: 'AI-powered intelligence', traditional: false, prida: true },
  { name: '100% private (no cloud)', traditional: true, prida: true },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why PrIDA Stands Apart
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Traditional autofill tools can't handle subjective questions. PrIDA
            can.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-900">
              <div className="col-span-1"></div>
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">
                  Traditional Tools
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-1">
                  PrIDA
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-100 transition-colors"
                >
                  <div className="col-span-1 flex items-center">
                    <span className="text-slate-900 font-medium">
                      {feature.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    {feature.traditional ? (
                      <Check className="w-6 h-6 text-slate-400" />
                    ) : (
                      <X className="w-6 h-6 text-slate-300" />
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
