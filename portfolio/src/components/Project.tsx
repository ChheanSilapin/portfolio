export default function Project() {
    return (
        <section className="py-20 lg:py-32" id="projects">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Featured Projects
                        </h2>
                        <p className="mt-2 text-slate-600">
                            A collection of things I've built recently.
                        </p>
                    </div>
                    <a className="group flex items-center gap-2 font-semibold text-primary" href="#">
                        View Archive
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Project Card 1 */}
                    {/* <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:border-primary/20 hover:shadow-xl">
                        <div className="aspect-video w-full overflow-hidden bg-slate-100">
                            <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-50 transition-transform group-hover:scale-105"></div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Next.js</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Stripe</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Nova Commerce</h3>
                            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                                A high-performance e-commerce engine with real-time inventory and global payments.
                            </p>
                            <div className="flex gap-3">
                                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live
                                </button>
                                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-sm">code</span>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* Project Card 2 */}
                    {/* <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:border-primary/20 hover:shadow-xl">
                        <div className="aspect-video w-full overflow-hidden bg-slate-100">
                            <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-50 transition-transform group-hover:scale-105"></div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">React</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Supabase</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">TaskFlow AI</h3>
                            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                                Task management app with smart AI prioritization and collaborative team workspaces.
                            </p>
                            <div className="flex gap-3">
                                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live
                                </button>
                                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-sm">code</span>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* Project Card 3 */}
                    {/* <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:border-primary/20 hover:shadow-xl">
                        <div className="aspect-video w-full overflow-hidden bg-slate-100">
                            <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-50 transition-transform group-hover:scale-105"></div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">TypeScript</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Framer</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Vibe Studio</h3>
                            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                                Portfolio builder for creatives with drag-and-drop components and custom animations.
                            </p>
                            <div className="flex gap-3">
                                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live
                                </button>
                                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-sm">code</span>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}