import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-400" />
            <span className="text-2xl font-bold text-white">PrIDA</span>
          </div>

          <p className="text-center text-slate-400 max-w-md">
            Your Private Data Agent. Intelligent form filling powered by
            on-device AI.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 w-full text-center">
            <p className="text-sm text-slate-500">
              © 2025 PrIDA. Built with privacy in mind. All data stays on your
              device.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
