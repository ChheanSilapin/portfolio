export default function Hero() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32" id="home">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                    <div className="flex-1 space-y-8">
                        <div
                            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-slate-900 text-white"
                        >
                            <span className="relative flex h-2 w-2">
                                <span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-white"
                                ></span>
                                <span
                                    className="relative inline-flex h-2 w-2 rounded-full bg-white"
                                ></span>
                            </span>
                            Available for hire
                        </div>
                        <h1
                            className="text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-7xl"
                        >
                            Hi, I’m <span className="text-primary">Chhean Silapin</span>
                        </h1>
                        <p
                            className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
                        >
                            Frontend Developer specializing in React &amp; modern web apps. I
                            build highly performant, accessible, and beautiful digital
                            experiences.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects"> <button
                                className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-6 font-bold text-white transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
                            >
                                View Projects
                                <span className="material-symbols-outlined text-lg"
                                >arrow_downward</span>
                            </button></a>


                        </div>
                    </div>
                    <div className="relative flex-1">
                        <div
                            className="aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-slate-100 shadow-2xl lg:ml-auto"
                        >
                            <div
                                className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-100 p-8 flex items-center justify-center"
                            >
                                <div
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-full transform rotate-3"
                                >
                                    <div className="flex gap-2 mb-4">
                                        <div className="size-3 rounded-full bg-slate-300"></div>
                                        <div className="size-3 rounded-full bg-slate-200"></div>
                                        <div className="size-3 rounded-full bg-slate-100"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 w-3/4 rounded bg-slate-100"></div>
                                        <div className="h-4 w-1/2 rounded bg-slate-100"></div>
                                        <div
                                            className="h-20 w-full rounded bg-slate-50 border border-slate-200 flex items-center justify-center"
                                        >
                                            <span
                                                className="material-symbols-outlined text-slate-400 text-4xl"
                                            >code</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}