import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profile.jpg';

export default function AboutSection() {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();
    const eduRef = useScrollReveal();

    return (
        <section className="py-24 relative overflow-hidden bg-surface-light/50 dark:bg-surface-dark/50" id="about">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="flex flex-col gap-2 mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mx-auto border border-primary/20">
                        <span className="material-symbols-outlined text-sm">person</span>
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">Get to Know Me</h2>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left – Text content */}
                    <div ref={leftRef} className="flex flex-col gap-6">
                        <h3 className="text-xl md:text-2xl font-bold leading-snug gradient-text">
                            Fresh Graduate Computer Science from Universitas Islam Indonesia | Fresher Software Quality Assurance
                        </h3>

                        <div className="space-y-4 text-text-sub-light dark:text-text-sub-dark leading-relaxed text-[15px]">
                            <p>
                                Hello, I'm <span className="text-text-main-light dark:text-text-main-dark font-semibold">Andika</span>, a Fresher Software Quality Assurance with a strong foundation in manual testing, exploratory testing, bug reporting, and product development. I work on validating system logic, analysing user flows, and ensuring that every feature meets both functional and user expectations. I have experience creating specification documents, test cases, and structured checklists to support development teams.
                            </p>
                            <p>
                                My background in Informatics at <span className="text-primary font-medium">Universitas Islam Indonesia</span> helped me build skills in web technologies such as HTML, CSS, JavaScript, PHP, and Laravel. This technical knowledge supports my work as QA, because I understand how systems are built and how to test them from both user and technical perspectives.
                            </p>
                            <p>
                                Outside of academics, I was active in campus organisations, taking leadership roles in several music communities. These experiences strengthened my communication, teamwork, and coordination skills, which I bring into every project I work on.
                            </p>
                            <p className="text-text-main-light dark:text-text-main-dark font-medium italic border-l-4 border-primary/40 pl-4">
                                I enjoy learning, improving processes, and helping teams deliver reliable and high quality products.
                            </p>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Manual Testing', 'Exploratory Testing', 'Bug Reporting', 'Test Cases', 'HTML/CSS/JS', 'PHP', 'Laravel'].map(
                                (skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right – Photo + Education card */}
                    <div className="flex flex-col gap-8 items-center lg:items-end">
                        {/* Photo */}
                        <div
                            ref={rightRef}
                            className="relative"
                            style={{ transitionDelay: '200ms' }}
                        >
                            <div className="relative w-72 h-72 md:w-80 md:h-80">
                                {/* Glow */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-25 animate-pulse-slow"></div>
                                {/* Image */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/30 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src={profileImg}
                                        alt="Andika – QA Specialist"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* GPA badge */}
                                <div
                                    className="absolute -bottom-5 -left-5 glass-panel px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-white/20 dark:border-white/10"
                                >
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                                        <span className="material-symbols-outlined text-2xl">school</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark font-medium uppercase tracking-wide">
                                            GPA
                                        </p>
                                        <p className="text-xl font-bold font-mono">3.54</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education card */}
                        <div
                            ref={eduRef}
                            className="w-full max-w-sm glass-panel p-6 rounded-xl shadow-lg border-l-4 border-l-primary hover:translate-x-1 transition-transform duration-300"
                            style={{ transitionDelay: '400ms' }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="material-symbols-outlined text-primary">apartment</span>
                                <h4 className="font-bold text-text-main-light dark:text-text-main-dark">
                                    Universitas Islam Indonesia
                                </h4>
                            </div>
                            <p className="text-sm text-text-sub-light dark:text-text-sub-dark">
                                Bachelor of Computer Science, Computer Engineering
                            </p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs text-text-sub-light dark:text-text-sub-dark">
                                    Sep 2021 – Oct 2025
                                </span>
                                <span className="text-xs font-bold text-primary">IPK: 3.54</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
