import { Download, Settings, Sparkles, Lock } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Install Extension',
    description: 'Add PrIDA to Chrome in one click. No account required.',
    color: 'bg-emerald-500',
  },
  {
    icon: Settings,
    title: 'Create Your Profiles',
    description:
      'Set up profiles for different contexts—work, health, social, etc.',
    color: 'bg-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Let AI Fill Forms',
    description:
      'Click the AI icon next to any field and watch it fill intelligently.',
    color: 'bg-violet-500',
  },
  {
    icon: Lock,
    title: 'Stay Private',
    description:
      'Everything runs locally on your device. Your data never leaves your computer.',
    color: 'bg-rose-500',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-slate-900">
            Get Started in Seconds
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            No complex setup, no learning curve—just install and start saving
            time
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-slate-300 to-transparent -ml-4"></div>
                )}

                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full -top-2 -right-2 bg-slate-900">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
