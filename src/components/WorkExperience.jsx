import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WorkExperience() {
    const titleRef = useScrollReveal();
    const job1Ref = useScrollReveal();
    const job2Ref = useScrollReveal();
    const job3Ref = useScrollReveal();

    return (
        <section className="py-20 bg-surface-light/50 dark:bg-surface-dark/50 relative" id="work">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section heading */}
                <div ref={titleRef} className="flex flex-col gap-2 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h2>
                    <p className="text-text-sub-light dark:text-text-sub-dark">My professional journey in Quality Assurance</p>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary to-primary/10 -translate-x-1/2 origin-top animate-draw-line"></div>

                    {/* Job 1 - SQA at ZettaByte */}
                    <div ref={job1Ref} className="relative flex flex-col md:flex-row gap-8 mb-16 group">
                        <div className="md:w-1/2 md:text-right md:pr-12">
                            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Software Quality Assurance</h3>
                            <p className="text-primary font-medium">ZettaByte</p>
                            <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs text-text-sub-light dark:text-text-sub-dark mt-2">
                                Aug 2025 - Jan 2026
                            </span>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 -translate-x-[7px] md:-translate-x-1/2 mt-1.5 shadow-[0_0_0_4px_rgba(56,189,248,0.2)] z-10"></div>

                        <div className="md:w-1/2 md:pl-12">
                            <div className="glass-panel p-6 rounded-xl shadow-lg border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300">
                                {/* Company & Location */}
                                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-text-sub-light dark:text-text-sub-dark">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-base">business</span>
                                        <span className="font-medium">ZettaByte</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-base">location_on</span>
                                        <span className="font-medium">Yogyakarta</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-base">schedule</span>
                                        <span className="font-medium">6 months</span>
                                    </div>
                                </div>
                                <ul className="text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed space-y-3">
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Drove product reliability by successfully validating 10+ key features through structured and exploratory testing.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Collaborated closely with developers and product teams to design manual test cases, perform rigorous regression testing, and track defects.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Created high-quality, data-driven QA documentation and execution summaries to streamline the testing lifecycle.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Job 2 - SQA Bootcamp */}
                    <div ref={job2Ref} className="relative flex flex-col md:flex-row-reverse gap-8 mb-16 group">
                        <div className="md:w-1/2 md:text-left md:pl-12">
                            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Bootcamp Software Quality Assurance</h3>
                            <p className="text-primary font-medium">ZettaByte</p>
                            <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs text-text-sub-light dark:text-text-sub-dark mt-2">
                                May 2025 - Aug 2025
                            </span>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-gray-300 dark:border-slate-600 -translate-x-[7px] md:-translate-x-1/2 mt-1.5 group-hover:border-primary transition-colors z-10"></div>

                        <div className="md:w-1/2 md:pr-12">
                            <div className="glass-panel p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-x-2 duration-300 border-r-4 border-r-primary">
                                {/* Company & Location */}
                                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-text-sub-light dark:text-text-sub-dark">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-base">business</span>
                                        <span className="font-medium">ZettaByte</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-base">location_on</span>
                                        <span className="font-medium">Yogyakarta</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-base">schedule</span>
                                        <span className="font-medium">4 months</span>
                                    </div>
                                </div>
                                <ul className="text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed space-y-3">
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Completed an intensive 4-month SQA bootcamp focused on hands-on, real-world project experience.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Mastered end-to-end manual testing, bug logging, and crafting clear QA documentation.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Collaborated with a team to design structured test cases, perform regression and functional testing, and apply industry-standard QA methodologies.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Job 3 - Final Year Project: Nestify */}
                    <div ref={job3Ref} className="relative flex flex-col md:flex-row gap-8 group">
                        <div className="md:w-1/2 md:text-right md:pr-12">
                            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Final Year Project: Nestify Web App</h3>
                            <p className="text-primary font-medium">Developer & QA</p>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-gray-300 dark:border-slate-600 -translate-x-[7px] md:-translate-x-1/2 mt-1.5 group-hover:border-primary transition-colors z-10"></div>

                        <div className="md:w-1/2 md:pl-12">
                            <div className="glass-panel p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-x-2 duration-300 border-l-4 border-l-primary">
                                <ul className="text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed space-y-3">
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Conducted comprehensive end-to-end testing for "Nestify," a boarding house management web application.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Utilized Black-box testing and Boundary Value Analysis (BVA) to execute 65 test cases across 8 key owner and tenant modules.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                                        <span>Achieved a 90.7% success rate, successfully identifying critical edge-case bugs in input validation to ensure a smooth and highly reliable user experience.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
