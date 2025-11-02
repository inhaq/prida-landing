import {
  FileText,
  Sparkles,
  Shield,
  User,
  Wand2,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Auto-Fill',
    description:
      'Recognizes input labels and page context, then suggests accurate answers based on your selected profile.',
    color: 'from-emerald-400 to-cyan-400',
  },
  {
    icon: Wand2,
    title: 'Text Rewriting',
    description:
      'Improves your writing clarity and tone using the Gemini Nano Rewriter API—all processed locally.',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    icon: CheckCircle,
    title: 'Smart Proofreading',
    description:
      'Fixes grammar, punctuation, and spelling mistakes instantly—completely offline and private.',
    color: 'from-blue-400 to-violet-400',
  },
  {
    icon: User,
    title: 'Profile Management',
    description:
      'Create separate profiles (Job, Health, Social) to stay organized and keep context-specific information.',
    color: 'from-violet-400 to-purple-400',
  },
  {
    icon: Shield,
    title: 'Privacy-First Architecture',
    description:
      "All processing happens locally via Chrome's on-device AI. No cloud storage. No data leaks. Ever.",
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: FileText,
    title: 'Universal Compatibility',
    description:
      'Works with every input field including modern rich text editors on LinkedIn, Gmail, and more.',
    color: 'from-pink-400 to-rose-400',
  },
];

export default function Features() {
  return (
    <section id="learn-more" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to save time while protecting your
            privacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
