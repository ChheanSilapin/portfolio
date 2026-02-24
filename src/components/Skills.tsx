export default function Skills() {
    return (
        <section className="bg-slate-50 py-20 lg:py-32" id="skills">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Technical Skills
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex size-12 items-center justify-center rounded-xl text-primary bg-slate-100">
                            <span className="material-symbols-outlined text-3xl">devices</span>
                        </div>
                        <h3 className="mb-6 text-xl font-bold text-slate-900">Frontend</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">React / Angular</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">TypeScript</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">Tailwind CSS</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">HTML5 &amp; CSS3</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex size-12 items-center justify-center rounded-xl text-primary bg-slate-100">
                            <span className="material-symbols-outlined text-3xl">construction</span>
                        </div>
                        <h3 className="mb-6 text-xl font-bold text-slate-900">Tools</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">Git &amp; GitHub</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">VS Code</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">Figma</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">Postman</span>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex size-12 items-center justify-center rounded-xl text-primary bg-slate-100">
                            <span className="material-symbols-outlined text-3xl">database</span>
                        </div>
                        <h3 className="mb-6 text-xl font-bold text-slate-900">Backend</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">Python</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">MySQL</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">Prisma ORM</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="font-medium">REST APIs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
