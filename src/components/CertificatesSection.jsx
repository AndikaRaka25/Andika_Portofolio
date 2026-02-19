import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
    {
        badge: 'Award',
        badgeColor: 'bg-amber-500/10 text-amber-500',
        title: 'ZettaThon 2025 – 1st Place',
        subtitle: 'ZettaByte • 2025',
        description: 'Led the QA team in manual and automated testing processes. Implemented CI/CD pipelines for automated testing, reducing bug escape rate by 40%.',
        icon: 'emoji_events',
        images: ['/certificates/Zettathon winner certificate.jpeg', '/certificates/Winner team Maverick.jpg'],
        keyContribution: {
            title: 'Key Contribution: Zetta-Lens',
            description: 'Developed "Zetta-Lens," a smart internal tool for standardized error collection and reporting, cutting triage time by 25%.',
        },
        gradientFrom: 'from-amber-500',
        gradientTo: 'to-yellow-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-primary/10 text-primary',
        title: 'Bootcamp Software Quality Assurance',
        subtitle: 'ZettaByte • 2025',
        description: 'Completed an intensive SQA bootcamp covering end-to-end manual testing, bug logging, regression testing, and industry-standard QA methodologies.',
        icon: 'school',
        images: ['/certificates/Sertifikat ZettaCamp_upscayl_4x_upscayl-standard-4x.png', '/certificates/Screenshot_20260218_134203_Instagram_upscayl_4x_upscayl-standard-4x.png'],
        gradientFrom: 'from-primary',
        gradientTo: 'to-cyan-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-emerald-500/10 text-emerald-500',
        title: 'English Proficiency Test',
        subtitle: 'CILACS UII • 2025',
        description: 'Achieved a score of 546 with CEFR B1 level, demonstrating intermediate English proficiency for professional and academic communication.',
        icon: 'translate',
        image: ['/certificates/Sertif cept.jpg'],
        gradientFrom: 'from-emerald-500',
        gradientTo: 'to-teal-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-violet-500/10 text-violet-500',
        title: 'AI for IoT Seminar',
        subtitle: 'NUNI • 2023',
        description: 'Participated in a seminar on Artificial Intelligence applications for Internet of Things, exploring cutting-edge integration of AI and IoT technologies.',
        icon: 'smart_toy',
        image: ['/certificates/Screenshot 2026-02-19 200006.png'],
        gradientFrom: 'from-violet-500',
        gradientTo: 'to-purple-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-sky-500/10 text-sky-500',
        title: 'INPUT Informatics Orientation Committee Staff',
        subtitle: 'Informatics Department • 2023',
        description: 'Served as a committee staff member for the 2023 informatics department orientation event (INPUT), organizing and coordinating activities for new students.',
        icon: 'groups',
        image: ['/certificates/Screenshot 2026-02-19 200047.png'],
        gradientFrom: 'from-sky-500',
        gradientTo: 'to-blue-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-rose-500/10 text-rose-500',
        title: 'PORSEMATIK Informatics Sports Committee Staff',
        subtitle: 'Informatics Department • 2022',
        description: 'Served as committee staff for PORSEMATIK, the annual informatics department sports event, helping coordinate competitions and team activities.',
        icon: 'sports_soccer',
        image: ['/certificates/Screenshot 2026-02-19 200037.png'],
        gradientFrom: 'from-rose-500',
        gradientTo: 'to-pink-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-sky-500/10 text-sky-500',
        title: 'INPUT Informatics Orientation Committee Staff',
        subtitle: 'Informatics Department • 2022',
        description: 'Served as a committee staff member for the 2022 informatics department orientation event (INPUT), supporting event logistics and student engagement.',
        icon: 'groups',
        image: ['/certificates/Screenshot 2026-02-19 200027.png'],
        gradientFrom: 'from-sky-500',
        gradientTo: 'to-indigo-400',
    },
    {
        badge: 'Certification',
        badgeColor: 'bg-orange-500/10 text-orange-500',
        title: 'How to Become a Good Developer in the Pandemic Era',
        subtitle: 'Webinar & Workshop • 2021',
        description: 'Participated in a webinar and workshop on best practices for software developers adapting to remote work and the challenges of the pandemic era.',
        icon: 'code',
        image: ['/certificates/Screenshot 2026-02-19 195954.png'],
        gradientFrom: 'from-orange-500',
        gradientTo: 'to-amber-400',
    },
];

export default function CertificatesSection() {
    const titleRef = useScrollReveal();
    const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

    const openLightbox = useCallback((images, startIndex = 0) => {
        const validImages = images.filter(Boolean);
        if (validImages.length === 0) return;
        setLightbox({ open: true, images: validImages, index: startIndex });
    }, []);

    const closeLightbox = useCallback(() => {
        setLightbox(prev => ({ ...prev, open: false }));
    }, []);

    return (
        <section className="py-20 bg-surface-light dark:bg-surface-dark relative" id="certificates">
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                }}
            ></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div ref={titleRef} className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Certifications &amp; Awards</h2>
                    <p className="text-text-sub-light dark:text-text-sub-dark">Recognition of my skills and leadership.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <CertCard key={`${cert.title}-${cert.subtitle}`} cert={cert} delay={index * 100} onImageClick={openLightbox} />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightbox.open && (
                <Lightbox
                    images={lightbox.images}
                    currentIndex={lightbox.index}
                    onClose={closeLightbox}
                    onChangeIndex={(i) => setLightbox(prev => ({ ...prev, index: i }))}
                />
            )}
        </section>
    );
}

function CertCard({ cert, delay, onImageClick }) {
    const ref = useScrollReveal();

    const handleImageClick = (allImages, clickedIndex) => {
        onImageClick(allImages, clickedIndex);
    };

    return (
        <div
            ref={ref}
            className="glass-panel rounded-2xl flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Photo Frame */}
            <div className="relative w-full bg-slate-100 dark:bg-slate-800/60 overflow-hidden">
                {cert.images ? (
                    /* Multi-photo grid */
                    <div className="grid grid-cols-2 gap-1 p-1">
                        {cert.images.map((img, i) => (
                            <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg">
                                {img ? (
                                    <img
                                        src={img}
                                        alt={`${cert.title} - Photo ${i + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                        onClick={() => handleImageClick(cert.images, i)}
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg gap-1 bg-slate-50 dark:bg-slate-800/80">
                                        <span className="material-symbols-outlined text-2xl text-gray-300 dark:text-slate-600">photo_camera</span>
                                        <span className="text-[10px] text-gray-400 dark:text-slate-500 font-medium">Photo {i + 1}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : cert.image ? (
                    /* Single photo */
                    <div className="aspect-[16/10] cursor-pointer" onClick={() => handleImageClick([cert.image], 0)}>
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ) : (
                    /* Single placeholder */
                    <div className="aspect-[16/10] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-t-2xl gap-2">
                        <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-slate-600">photo_camera</span>
                        <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Add certificate photo</span>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow">
                {/* Background icon */}
                <div className="absolute bottom-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-8xl">{cert.icon}</span>
                </div>

                {/* Badge */}
                <span className={`inline-block w-fit px-3 py-1 ${cert.badgeColor} rounded-full text-xs font-bold tracking-wider uppercase`}>
                    {cert.badge}
                </span>

                {/* Header */}
                <div className="relative z-10">
                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                    <p className="text-text-sub-light dark:text-text-sub-dark mt-1 font-mono text-xs">{cert.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed relative z-10">
                    {cert.description}
                </p>

                {/* Key Contribution (optional — ZettaThon only) */}
                {cert.keyContribution && (
                    <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-lg border border-primary/20 relative z-10">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                            {cert.keyContribution.title}
                        </h4>
                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">
                            {cert.keyContribution.description}
                        </p>
                    </div>
                )}
            </div>

            {/* Hover glow */}
            <div
                className={`absolute -inset-1 bg-gradient-to-r ${cert.gradientFrom} ${cert.gradientTo} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10`}
            ></div>
        </div>
    );
}

function Lightbox({ images, currentIndex, onClose, onChangeIndex }) {
    const hasMultiple = images.length > 1;

    const goNext = useCallback(() => {
        onChangeIndex((currentIndex + 1) % images.length);
    }, [currentIndex, images.length, onChangeIndex]);

    const goPrev = useCallback(() => {
        onChangeIndex((currentIndex - 1 + images.length) % images.length);
    }, [currentIndex, images.length, onChangeIndex]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (hasMultiple && e.key === 'ArrowRight') goNext();
            if (hasMultiple && e.key === 'ArrowLeft') goPrev();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, goNext, goPrev, hasMultiple]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close lightbox"
            >
                <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Image counter */}
            {hasMultiple && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono z-50">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            {/* Previous button */}
            {hasMultiple && (
                <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Previous photo"
                >
                    <span className="material-symbols-outlined text-3xl">chevron_left</span>
                </button>
            )}

            {/* Image */}
            <img
                src={images[currentIndex]}
                alt={`Certificate photo ${currentIndex + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            {hasMultiple && (
                <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Next photo"
                >
                    <span className="material-symbols-outlined text-3xl">chevron_right</span>
                </button>
            )}
        </div>
    );
}
