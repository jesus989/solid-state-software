import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    Cpu, Globe, Smartphone, LayoutDashboard, Binary, MonitorSmartphone,
    Mail, Phone, ArrowUpRight, MessageSquare, BrainCircuit, X
} from 'lucide-react';

const HERO_BG = 'https://images.hostinger.com/1e224822-370a-4365-86d4-cbd383cdcc6e.png';

const services = [
    {
        icon: Smartphone,
        label: 'Apps',
        tagline: 'Native-grade product apps',
        body: 'End-to-end application builds — from architecture and secure auth to polished UX. We ship maintainable codebases for startups and enterprise teams alike.',
        points: ['Product & MVP builds', 'Secure user auth & roles', 'Scalable cloud backends'],
    },
    {
        icon: Globe,
        label: 'Web',
        tagline: 'Fast, modern web platforms',
        body: 'High-performance web applications and marketing sites engineered for speed, SEO, and conversion. React front-ends backed by resilient APIs.',
        points: ['SEO-optimized front-ends', 'Headless & full-stack', 'Accessibility built in'],
    },
    {
        icon: MonitorSmartphone,
        label: 'Mobile',
        tagline: 'iOS & Android experiences',
        body: 'Cross-platform and native mobile apps with offline support, push notifications, and app-store-ready polish for consumer and field-service use cases.',
        points: ['Cross-platform delivery', 'Offline-first data sync', 'Store submission support'],
    },
    {
        icon: LayoutDashboard,
        label: 'Dashboards',
        tagline: 'Data you can act on',
        body: 'Operational dashboards and admin consoles that turn raw data into clear decisions — real-time metrics, reporting, and role-based access for public and private sector teams.',
        points: ['Real-time analytics', 'Custom reporting & exports', 'Role-based access control'],
    },
    {
        icon: Binary,
        label: 'Algorithms',
        tagline: 'Precision problem solving',
        body: 'Custom algorithms and optimization engines — scheduling, routing, simulation, and computation-heavy workloads engineered for correctness and speed.',
        points: ['Optimization & routing', 'Simulation modeling', 'Performance tuning'],
    },
    {
        icon: Cpu,
        label: 'Desktop',
        tagline: 'Cross-platform desktop tools',
        body: 'Robust desktop software for Windows, macOS, and Linux — from internal tooling to specialized government and industrial workstation applications.',
        points: ['Windows / macOS / Linux', 'Hardware integrations', 'Secure offline operation'],
    },
    {
        icon: BrainCircuit,
        label: 'AI',
        tagline: 'Applied artificial intelligence',
        body: 'Practical AI integrations — LLM-powered assistants, document intelligence, computer vision, and predictive models embedded directly into your products and workflows.',
        points: ['LLM assistants & chat', 'Document & data intelligence', 'Predictive & vision models'],
    },
];

const links = [
    {
        icon: Mail,
        title: 'Email us',
        sub: 'jesusperez@solidstatesoftware.tech',
        href: 'mailto:jesusperez@solidstatesoftware.tech',
        primary: true,
    },
    {
        icon: Phone,
        title: 'Call us',
        sub: '(970) 381-8368',
        href: 'tel:+19703818368',
    },
];

const HomePage = () => {
    const [active, setActive] = useState(null);

    return (
        <main className="relative min-h-[100dvh] w-full overflow-hidden text-slate-100">
            <Helmet>
                <title>Solid State Software — Custom Software & AI Development</title>
                <meta name="description" content="Solid State Software builds custom apps, web, mobile, dashboards, algorithms, desktop and AI solutions for government, public sector, and private sector clients." />
                <meta name="keywords" content="software development, custom software, app development, web development, mobile apps, artificial intelligence, AI development, machine learning, government software, public sector software, private sector software, dashboards, algorithms, desktop applications, software engineering, LLM integration, data analytics" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Solid State Software" />
                <meta property="og:title" content="Solid State Software — Custom Software & AI Development" />
                <meta property="og:description" content="Custom apps, web, mobile, dashboards, algorithms, desktop and AI for government, public, and private sector clients." />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <img src={HERO_BG} alt="" className="h-full w-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#070a16]/70 via-[#070a16]/85 to-[#070a16]" />
                <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[110px]" />
            </div>

            <div className="mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col px-5 py-12 sm:py-16">

                {/* Brand header */}
                <header className="flex flex-col items-center text-center">
                    <div className="animate-float-slow relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/25 to-blue-600/10 shadow-[0_0_40px_-8px_rgba(34,211,238,0.5)]">
                        <Cpu className="h-9 w-9 text-cyan-300" strokeWidth={1.75} />
                    </div>

                    <h1 className="font-display animate-fade-up text-3xl font-700 font-bold tracking-tight sm:text-4xl">
                        Solid State Software
                    </h1>

                    <p className="animate-fade-up mt-3 max-w-md text-balance text-sm leading-relaxed text-slate-300/90 sm:text-base" style={{ animationDelay: '80ms' }}>
                        We design and engineer custom software — from ambitious apps to precision
                        algorithms. Tell us what you need. We build the thing that works.
                    </p>

                    <div className="animate-fade-up mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300" style={{ animationDelay: '140ms' }}>
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Available for new projects
                    </div>
                </header>

                {/* Service pills */}
                <section className="animate-fade-up mt-9" style={{ animationDelay: '200ms' }} aria-label="Services">
                    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                        {services.map(({ icon: Icon, label }, idx) => (
                            <button
                                key={label}
                                type="button"
                                onClick={() => setActive(idx)}
                                aria-label={`Learn more about ${label}`}
                                className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3.5 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:scale-[0.97]"
                            >
                                <Icon className="h-5 w-5 text-cyan-300/90 transition-transform group-hover:scale-110" strokeWidth={1.75} />
                                <span className="text-xs font-medium text-slate-300">{label}</span>
                            </button>
                        ))}
                    </div>
                    <p className="mt-2 text-center text-[0.7rem] text-slate-500">Tap a service to see what we build</p>
                </section>

                {/* Links */}
                <section className="mt-8 flex flex-col gap-3" aria-label="Contact links">
                    {links.map(({ icon: Icon, title, sub, href, primary }, i) => (
                        <a
                            key={title}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noreferrer' : undefined}
                            className={[
                                'animate-fade-up group flex items-center gap-4 rounded-2xl border px-4 py-4 transition-all duration-200 active:scale-[0.98]',
                                primary
                                    ? 'border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 hover:border-cyan-300/70 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]'
                                    : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]',
                            ].join(' ')}
                            style={{ animationDelay: `${260 + i * 60}ms` }}
                        >
                            <span className={[
                                'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                                primary ? 'bg-cyan-400/20 text-cyan-200' : 'bg-white/[0.06] text-slate-300',
                            ].join(' ')}>
                                <Icon className="h-5 w-5" strokeWidth={1.75} />
                            </span>
                            <span className="flex min-w-0 flex-col text-left">
                                <span className="font-display text-[0.95rem] font-semibold text-white">{title}</span>
                                <span className="truncate text-xs text-slate-400">{sub}</span>
                            </span>
                            <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" strokeWidth={1.75} />
                        </a>
                    ))}
                </section>

                {/* CTA note */}
                <div className="animate-fade-up mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300" style={{ animationDelay: '620ms' }}>
                    <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" strokeWidth={1.75} />
                    <p className="leading-relaxed">
                        Have an idea or a problem worth solving? Send a message and we&apos;ll reply
                        within one business day with next steps.
                    </p>
                </div>

                {/* Footer */}
                <footer className="mt-auto pt-10 text-center text-xs text-slate-500">
                    <p className="font-display tracking-wide text-slate-400">Solid State Software</p>
                    <p className="mt-1">Custom software, engineered with care. © {new Date().getFullYear()}</p>
                </footer>
            </div>

            {/* Service pop-up */}
            {active !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-end justify-center bg-[#04060f]/80 px-4 pb-6 pt-10 backdrop-blur-sm sm:items-center sm:pb-10"
                    onClick={() => setActive(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${services[active].label} details`}
                >
                    <div
                        className="animate-fade-up w-full max-w-md overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0b1020] shadow-[0_0_60px_-12px_rgba(34,211,238,0.35)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative border-b border-white/10 bg-gradient-to-br from-cyan-500/15 to-blue-600/5 p-6">
                            <button
                                type="button"
                                onClick={() => setActive(null)}
                                aria-label="Close"
                                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:bg-white/[0.1] hover:text-white"
                            >
                                <X className="h-4 w-4" strokeWidth={2} />
                            </button>
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                                {React.createElement(services[active].icon, { className: 'h-7 w-7', strokeWidth: 1.75 })}
                            </div>
                            <h2 className="font-display text-2xl font-bold text-white">{services[active].label}</h2>
                            <p className="mt-1 text-sm font-medium text-cyan-300/90">{services[active].tagline}</p>
                        </div>
                        <div className="p-6">
                            <p className="text-sm leading-relaxed text-slate-300">{services[active].body}</p>
                            <ul className="mt-5 flex flex-col gap-2.5">
                                {services[active].points.map((pt) => (
                                    <li key={pt} className="flex items-center gap-3 text-sm text-slate-200">
                                        <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="mailto:jesusperez@solidstatesoftware.tech"
                                className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-300/70 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)] active:scale-[0.98]"
                            >
                                <Mail className="h-4 w-4" strokeWidth={1.75} />
                                Discuss a {services[active].label} project
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default HomePage;
