import { useEffect, useRef } from 'react';

export function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Add initial hidden classes
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return ref;
}
