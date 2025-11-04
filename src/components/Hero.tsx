import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <img
        src="/bg-prida.webp"
        alt="Misty landscape background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 backdrop-blur-[1px]">
        <div
          className="flex items-center justify-center gap-1 mt-16 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <img
            src="/prida-icon.webp"
            alt="Prida Icon"
            className="inline-block w-8 h-8 align-middle"
          />
          <span
            className="text-4xl italic font-bold tracking-normal text-transparent bg-clip-text drop-shadow-lg"
            style={{
              fontFamily: 'Instrument Serif, sans-serif',
              backgroundImage: 'linear-gradient(to bottom, #ff7472, #ffa025)',
              backgroundSize: '100% 100%',
              filter: 'brightness(1.2) contrast(1)',
            }}
          >
            Prida
          </span>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/30 to-black/0 "></div>

      <div className="relative px-4 mt-6 max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center ">
          <div
            className="inline-flex items-center px-4 py-2 mb-10 text-sm font-medium border rounded-full text-white/70 bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Free. Secure. No Sign-Up. Always Ready.
          </div>
          <h1
            className="mb-4 text-5xl font-light tracking-normal text-white/80 sm:text-6xl animate-fade-in-up"
            style={{
              fontFamily: 'Cal Sans, sans-serif',
              textShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 6px',
            }}
          >
            Fill Any Form with
            <div className="tracking-normal">Single Click</div>
          </h1>

          <p
            className="max-w-2xl mx-auto mt-8 mb-12 text-xl font-normal leading-relaxed text-white/80 sm:text-base lg:text-xl animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Prida reads the form, understands what’s being asked, and combines
            it with your saved profile data using Chrome’s built-in AI to
            generate secure, context-aware answers — right inside your forms.
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <a
              href="/prida.zip"
              download="prida.zip"
              style={{ textShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 6px' }}
              className="px-6 py-3 font-semibold text-white transition-all duration-200 border rounded shadow-lg group backdrop-blur-sm border-white/30  bg-[rgba(255,160,37,0.66)] hover:bg-[rgba(255,160,37,0.33)]"
            >
              <span className="flex items-center gap-2">
                Add to Chrome - It's Free
                <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </span>
            </a>
            <a
              href="https://youtu.be/FTIIbaBSGyk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold text-white transition-all duration-200 border rounded bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute transform -translate-x-1/2 bottom-4 left-1/2 animate-fade-in"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        <a
          href="https://peerlist.io/inhaq/project/prida"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://peerlist.io/api/v1/projects/embed/PRJH6A77B7GEG6ALOIGAPD7LR8KALL?showUpvote=false&theme=dark"
            alt="Prida"
            style={{ width: 'auto', height: '72px' }}
          />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
