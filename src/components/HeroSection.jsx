import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profile.jpg';

export default function HeroSection() {
    const revealRef1 = useScrollReveal();
    const revealRef2 = useScrollReveal();

    return (
        <section className="relative pt-20 pb-32 overflow-hidden min-h-[90vh] flex items-center">
            {/* Animated blob backgrounds */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
                <div
                    className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-blob"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-blob"
                    style={{ animationDelay: '4s' }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div ref={revealRef1} className="order-2 lg:order-1 flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                        Hello, I'm Andika Raka. <br />
                        <div className="text-primary mt-2 inline-block typewriter-text">QA Specialist</div>
                    </h1>

                    <p className="text-lg text-text-sub-light dark:text-text-sub-dark max-w-lg leading-relaxed">
                        A QA Engineer & Software Tester with real-world experience in manual testing, exploratory testing, and bug reporting. I'm passionate about delivering high-quality products by ensuring every feature works flawlessly from both user and technical perspectives.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a
                            className="px-6 py-3 bg-primary text-primary-content font-bold rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-0.5"
                            href="#work"
                        >
                            View Experience
                        </a>
                        <a
                            className="px-6 py-3 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-slate-700 font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
                            href="#contact"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Profile image */}
                <div
                    ref={revealRef2}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                    style={{ transitionDelay: '200ms' }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/30 shadow-2xl bg-surface-light dark:bg-surface-dark rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={profileImg}
                                alt="Professional headshot of Andika, a QA specialist"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Stats badge */}
                        <div
                            className="absolute -bottom-6 -left-6 glass-panel px-5 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce border border-white/20 dark:border-white/10"
                            style={{ animationDuration: '4s' }}
                        >
                            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined text-2xl">bug_report</span>
                            </div>
                            <div>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark font-medium uppercase tracking-wide">
                                    Bugs Squashed
                                </p>
                                <p className="text-xl font-bold font-mono">1,240+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
