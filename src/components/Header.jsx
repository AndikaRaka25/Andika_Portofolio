import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 z-50 w-full glass-panel border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-content font-bold text-lg">
                        A
                    </div>
                    <span className="font-bold text-xl tracking-tight">Andika Raka</span>
                </div>

                {/* Actions — nav + toggle + CTA all grouped on the right */}
                <div className="flex items-center gap-6">
                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#work">Work</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#tools">Tools</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#certificates">Certificates</a>
                    </nav>

                    {/* Theme toggle switch */}
                    <button
                        aria-label="Toggle Theme"
                        className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        onClick={toggleTheme}
                        style={{
                            background: isDark
                                ? 'linear-gradient(135deg, #1e293b, #334155)'
                                : 'linear-gradient(135deg, #bae6fd, #7dd3fc)',
                        }}
                    >
                        {/* Track icons */}
                        <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-yellow-400 text-xs pointer-events-none">
                            ☀️
                        </span>
                        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs pointer-events-none">
                            🌙
                        </span>
                        {/* Thumb */}
                        <span
                            className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${isDark ? 'left-[calc(100%-1.625rem)]' : 'left-0.5'
                                }`}
                        >
                        </span>
                    </button>

                    <a
                        className="hidden sm:flex px-4 py-2 bg-primary text-primary-content text-sm font-bold rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                        href="#contact"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </header>
    );
}
