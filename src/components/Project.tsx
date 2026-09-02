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
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:border-primary/20 hover:shadow-xl">
                        <div className="aspect-video w-full overflow-hidden bg-slate-900">
                            <iframe
                                src="https://crm-react-fastapi.vercel.app"
                                className="h-[900px] w-[1440px] origin-top-left pointer-events-none"
                                style={{ transform: "scale(0.22)" }}
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">React</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">ShadcnUI</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">FastAPI</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">CRM Project</h3>
                            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                                A high-performance CRM frontend with management customers, banks, roles, permissions and more.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://crm-react-fastapi.vercel.app" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live
                                </a>
                                <a href="https://crm-react-fastapi-77ab9221.fastapicloud.dev/docs#" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-sm">api</span>
                                    API Docs
                                </a>
                                <a href="https://github.com/ChheanSilapin/crm-react-fastapi" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-sm">code</span>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:border-primary/20 hover:shadow-xl">
                        <div className="aspect-video w-full overflow-hidden bg-slate-900">
                            <iframe
                                src="https://youtube-assistant.pixelx.tech/"
                                className="h-[900px] w-[1440px] origin-top-left pointer-events-none"
                                style={{ transform: "scale(0.22)" }}
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">React</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">FastAPI</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">AI Assistant</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">YouTube Assistant</h3>
                            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                                Creator platform that connects Google accounts, manages YouTube workflows, and streamlines content creation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://youtube-assistant.pixelx.tech/" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:border-primary/20 hover:shadow-xl">
                        <div className="aspect-video w-full overflow-hidden bg-slate-900">
                            <iframe
                                src="https://everycarmen.site/"
                                className="h-[900px] w-[1440px] origin-top-left pointer-events-none"
                                style={{ transform: "scale(0.22)" }}
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">WordPress</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">Namecheap</span>
                                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">SEO & Blog</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">EveryCarmen</h3>
                            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                                An automotive content & car repair blog delivering maintenance guides, vehicle tips, and auto news, built on WordPress and hosted on Namecheap.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://everycarmen.site/" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}