export default function Contact() {
    return (
        <section className="py-20 lg:py-32" id="contact">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
                    Let’s work together.
                </h2>
                <p className="mb-10 text-lg text-slate-600">
                    I'm currently looking for new opportunities. Whether you have a
                    question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="flex flex-col items-center justify-center gap-8">
                    <a href="mailto:silapinchhean@gmail.com">
                        <button className="flex h-16 w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-primary px-8 text-xl font-bold text-white transition-all hover:bg-primary/90 hover:shadow-2xl active:scale-95 hover:shadow-black/10">
                            <span className="material-symbols-outlined">mail</span>
                            silapinchhean@gmail.com
                        </button>
                    </a>
                    <div className="flex gap-6">
                        <a className="flex size-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                            href="https://www.linkedin.com/in/chhean-silapin-13a676191/" target="_blank" rel="noopener noreferrer">
                            <img alt="LinkedIn" className="w-6 h-6 grayscale hover:grayscale-0" data-alt="LinkedIn company logo icon"
                                src="https://images.icon-icons.com/805/PNG/512/linkedin_icon-icons.com_65929.png" />
                        </a>
                        <a className="flex size-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                            href="https://github.com/ChheanSilapin" target="_blank" rel="noopener noreferrer">
                            <img alt="GitHub" className="w-6 h-6 grayscale hover:grayscale-0" data-alt="GitHub brand logo icon"
                                src="https://images.icon-icons.com/2406/PNG/512/github_git_icon_145985.png" />
                        </a>
                        <a className="flex size-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                            href="https://www.facebook.com/sila.pin.279652" target="_blank" rel="noopener noreferrer">
                            <img alt="Face" className="w-6 h-6 grayscale hover:grayscale-0" data-alt="Facebook brand logo icon"
                                src="https://images.icon-icons.com/2429/PNG/512/facebook_logo_icon_147291.png" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}