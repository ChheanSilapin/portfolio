export default function Footer() {
    return (
        <footer className="border-t border-slate-100 py-12">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-sm text-slate-500">
                        © 2026 Chhean Silapin. Built with passion and React.
                    </p>
                    <div className="flex gap-8">
                        <a className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-primary" href="https://github.com/ChheanSilapin/portfolio">Source
                            Code</a>
                        <a className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-primary" href="#">RSS
                            Feed</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}