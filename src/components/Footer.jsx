import { useScrollReveal } from '../hooks/useScrollReveal';

const contactCards = [
    {
        icon: 'mail',
        label: 'EMAIL',
        value: 'andikaraka25@gmail.com',
        href: 'mailto:andikaraka25@gmail.com',
    },
    {
        icon: 'call',
        label: 'PHONE',
        value: '+62 857-1348-4220',
        href: 'https://wa.me/+6285713484220',
    },
    {
        icon: 'location_on',
        label: 'LOCATION',
        value: 'Yogyakarta, Indonesia',
        href: null,
    },
    {
        icon: 'link',
        label: 'LINKEDIN',
        value: 'linkedin.com/in/andikaraka25',
        href: 'https://www.linkedin.com/in/andikaraka25/',
        customIcon: true,
    },
];

export default function Footer() {
    const titleRef = useScrollReveal();
    const cardsRef = useScrollReveal();
    const btnRef = useScrollReveal();

    return (
        <footer className="py-24 relative overflow-hidden" id="contact">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 dark:from-transparent dark:via-primary/5 dark:to-primary/15 -z-10"></div>
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6">
                {/* Section header */}
                <div ref={titleRef} className="text-center mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-text-sub-light dark:text-text-sub-dark max-w-xl mx-auto leading-relaxed">
                        Actively seeking my next challenge in QA! I’m open to discussing full-time roles, freelance projects, or simply connecting with fellow tech enthusiasts.
                    </p>
                </div>

                {/* Contact cards grid */}
                <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {contactCards.map((card) => (
                        <ContactCard key={card.label} card={card} />
                    ))}
                </div>

                {/* Email CTA button */}
                <div ref={btnRef} className="flex justify-center mb-20" style={{ transitionDelay: '200ms' }}>
                    <a
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-content font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] active:scale-95"
                        href="mailto:andikaraka25@gmail.com"
                    >
                        <span className="material-symbols-outlined text-xl relative z-10 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300">
                            send
                        </span>
                        <span className="relative z-10">Send me an Email</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-text-sub-light dark:text-text-sub-dark">
                    <p>© 2025 Andika Raka. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            className="hover:text-primary transition-colors flex items-center gap-1"
                            href="https://www.linkedin.com/in/andikaraka25/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined text-base">link</span>
                            LinkedIn
                        </a>
                        <a
                            className="hover:text-primary transition-colors flex items-center gap-1"
                            href="mailto:andikaraka25@gmail.com"
                        >
                            <span className="material-symbols-outlined text-base">mail</span>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function ContactCard({ card }) {
    const Wrapper = card.href ? 'a' : 'div';
    const linkProps = card.href
        ? {
            href: card.href,
            target: card.href.startsWith('http') ? '_blank' : undefined,
            rel: card.href.startsWith('http') ? 'noopener noreferrer' : undefined,
        }
        : {};

    return (
        <Wrapper
            {...linkProps}
            className="group glass-panel rounded-xl p-6 flex flex-col gap-4 border border-white/10 dark:border-white/5 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
        >
            {/* Icon circle */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300">
                {card.customIcon ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                ) : (
                    <span className="material-symbols-outlined text-xl">{card.icon}</span>
                )}
            </div>

            {/* Label */}
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub-light dark:text-text-sub-dark">
                {card.label}
            </p>

            {/* Value */}
            <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors break-all leading-relaxed">
                {card.value}
            </p>
        </Wrapper>
    );
}
