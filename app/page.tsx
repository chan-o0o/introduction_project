import Image from "next/image";

export default function Home() {
  const profile = {
    name: "정찬우",
    likes: ["클래식", "커비", "뚱이", "마인크래프트"],
    message: "마인크래프트 재밌더라고요.. 엔더드래곤 잡으실분?"
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 w-full" />
        
        <div className="px-8 pb-12 -mt-16">
          <div className="flex flex-col items-center sm:items-start">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                <span className="text-4xl">👋</span>
              </div>
            </div>

            <div className="mt-6 text-center sm:text-left">
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
                {profile.name}
              </h1>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400 font-medium">
                안녕하세요! 제 소개 페이지에 오신 것을 환영합니다.
              </p>
            </div>

            <div className="w-full mt-10 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm">❤️</span>
                  좋아하는 것
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.likes.map((item) => (
                    <span 
                      key={item}
                      className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/50">
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-sm">💬</span>
                  한마디
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                  &quot;{profile.message}&quot;
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 w-full flex justify-center sm:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Image
                  className="dark:invert opacity-50"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={60}
                  height={12}
                />
                <span>Built with Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
