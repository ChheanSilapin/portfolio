export default function About() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 max-w-3xl">
                    <h2
                        className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
                    >
                        About Me
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-600">
                        Passionate frontend developer focused on building clean, performant,
                        and accessible web applications. I specialize in turning complex
                        problems into simple, beautiful interface designs with clean code. I
                        believe that every pixel matters and performance is a feature.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-1"
                    >
                        <img
                            alt="React"
                            className="w-5 h-5"
                            data-alt="React brand logo icon blue"
                            src="https://images.icon-icons.com/2415/PNG/512/react_original_logo_icon_146374.png"
                        />
                        <span className="text-sm font-semibold text-slate-700">React</span>
                    </div>
                    <div
                        className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-1"
                    >
                        <img
                            alt="Next.js"
                            className="w-5 h-5"
                            data-alt="Next.js brand logo icon black"
                            src="https://images.icon-icons.com/2107/PNG/512/file_type_angular_icon_130754.png"
                        />
                        <span className="text-sm font-semibold text-slate-700">Angular</span>
                    </div>
                    <div
                        className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-1"
                    >
                        <img
                            alt="TypeScript"
                            className="w-5 h-5"
                            data-alt="TypeScript brand logo icon blue"
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                        />
                        <span className="text-sm font-semibold text-slate-700">TypeScript</span>
                    </div>
                    <div
                        className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-1"
                    >
                        <img
                            alt="Tailwind CSS"
                            className="w-5 h-5"
                            data-alt="Tailwind CSS brand logo icon cyan"
                            src="https://images.icon-icons.com/2699/PNG/512/tailwindcss_logo_icon_167923.png"
                        />
                        <span className="text-sm font-semibold text-slate-700"
                        >Tailwind CSS</span>
                    </div>
                    <div
                        className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-1"
                    >
                        <img
                            alt="Git"
                            className="w-5 h-5"
                            data-alt="Git brand logo icon orange"
                            src="https://images.icon-icons.com/2406/PNG/512/github_git_icon_145985.png"
                        />
                        <span className="text-sm font-semibold text-slate-700">Git Hub</span>
                    </div>
                </div>
            </div>
        </section>
    )
}