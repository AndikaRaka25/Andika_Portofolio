import { useScrollReveal } from '../hooks/useScrollReveal';

const tools = [
    {
        name: 'JIRA',
        category: 'Management',
        tooltip: 'Bug Tracking & Agile',
        icon: 'bug_report',
        colorClasses: {
            bg: 'bg-blue-100 dark:bg-blue-900/30',
            text: 'text-blue-600 dark:text-blue-400',
        },
    },
    {
        name: 'Postman',
        category: 'Automation',
        tooltip: 'API Testing Suite',
        icon: 'rocket_launch',
        colorClasses: {
            bg: 'bg-orange-100 dark:bg-orange-900/30',
            text: 'text-orange-600 dark:text-orange-400',
        },
    },
    {
        name: 'Excel',
        category: 'Reporting',
        tooltip: 'Complex Data Analysis',
        icon: 'table_chart',
        colorClasses: {
            bg: 'bg-green-100 dark:bg-green-900/30',
            text: 'text-green-600 dark:text-green-400',
        },
    },
    {
        name: 'MS Word',
        category: 'Documentation',
        tooltip: 'Technical Docs',
        icon: 'description',
        colorClasses: {
            bg: 'bg-blue-100 dark:bg-blue-900/30',
            text: 'text-blue-800 dark:text-blue-300',
        },
    },
];

export default function ToolsSection() {
    const headerRef = useScrollReveal();

    return (
        <section className="py-20" id="tools">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Tools &amp; Technologies</h2>
                        <p className="text-text-sub-light dark:text-text-sub-dark">
                            My technical toolkit for ensuring product quality encompasses bug tracking, API testing, and data analysis.
                        </p>
                    </div>
                    <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group" href="#">
                        View Full Stack{' '}
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </a>
                </div>

                {/* Tool cards grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                        <ToolCard key={tool.name} tool={tool} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ToolCard({ tool, delay }) {
    const ref = useScrollReveal();

    return (
        <div
            ref={ref}
            className="group relative bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-slate-800 p-6 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Tooltip */}
            <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap z-20">
                {tool.tooltip}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>

            {/* Icon */}
            <div
                className={`w-12 h-12 mb-4 ${tool.colorClasses.bg} rounded-lg flex items-center justify-center ${tool.colorClasses.text} group-hover:scale-110 transition-transform duration-300`}
            >
                <span className="material-symbols-outlined text-3xl">{tool.icon}</span>
            </div>

            <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
            <p className="text-xs text-text-sub-light dark:text-text-sub-dark">{tool.category}</p>

            {/* Hover border overlay */}
            <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl group-hover:border-primary/10 transition-colors pointer-events-none"></div>
        </div>
    );
}
