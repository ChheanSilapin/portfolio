import { useState } from 'react';

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Chhean Silapin
                    </span>
                </div>
                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary" href="#home">
                        Home
                    </a>
                    <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary" href="#projects">
                        Projects
                    </a>
                    <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary" href="#skills">
                        Skills
                    </a>
                    <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary" href="#contact">
                        Contact
                    </a>
                    <a href="mailto:silapinchhean@gmail.com">
                        <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95">
                            Contact Me
                        </button>
                    </a>
                </div>
                {/* Mobile Menu Toggle */}
                <button
                    className="flex size-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
                    onClick={toggleMobileMenu}
                >
                    <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Links */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4 shadow-xl absolute w-full">
                    <a
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                        href="#home"
                        onClick={toggleMobileMenu}
                    >
                        Home
                    </a>
                    <a
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                        href="#projects"
                        onClick={toggleMobileMenu}
                    >
                        Projects
                    </a>
                    <a
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                        href="#skills"
                        onClick={toggleMobileMenu}
                    >
                        Skills
                    </a>
                    <a
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                        href="#contact"
                        onClick={toggleMobileMenu}
                    >
                        Contact
                    </a>
                    <a href="mailto:silapinchhean@gmail.com">
                        <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 w-full">
                            Contact Me
                        </button>
                    </a>
                </div>
            )}
        </nav>
    );
}