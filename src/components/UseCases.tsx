import { Briefcase, Heart, MessageSquare, FileText } from 'lucide-react';

const useCases = [
  {
    icon: Briefcase,
    title: 'Job Applications',
    description:
      'Answer complex questions like "Describe a time you overcame a challenge" with intelligent, personalized responses.',
    example: '"Tell us about your leadership experience"',
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Medical Forms',
    description:
      'Fill out detailed health histories accurately with your saved medical profile—without retyping every visit.',
    example: '"List your current medications and allergies"',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MessageSquare,
    title: 'Social Media',
    description:
      'Craft engaging posts and responses with the right tone for each platform using your social profile.',
    example: '"Share your thoughts on this topic"',
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    icon: FileText,
    title: 'Online Forms',
    description:
      'Complete registration forms, surveys, and questionnaires in seconds with context-aware suggestions.',
    example: '"Why are you interested in this opportunity?"',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-linear-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Perfect for Every Scenario
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Whether you're applying for jobs, filling medical forms, or posting
            on social media
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-br ${useCase.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-slate-400 italic">
                    {useCase.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
