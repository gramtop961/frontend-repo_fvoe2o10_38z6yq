import { CheckCircle2, ArrowRight } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1 — Foundations',
    blurb: 'Build strong fundamentals in Linux, networking, version control, and automation.',
    items: [
      'Linux basics and shell navigation',
      'Networking: TCP/IP, DNS, HTTP, routing',
      'Git workflows with GitHub',
      'Bash scripting and automation'
    ],
  },
  {
    title: 'Phase 2 — CI/CD Essentials',
    blurb: 'Learn modern CI/CD with popular platforms and pipelines.',
    items: [
      'GitHub Actions workflows',
      'GitLab CI pipelines',
      'Jenkins declarative pipelines',
    ],
  },
  {
    title: 'Phase 3 — Containers & Orchestration',
    blurb: 'Package apps with Docker and run them at scale with Kubernetes & Helm.',
    items: [
      'Docker images, registries, Compose',
      'Kubernetes core objects & RBAC',
      'Helm charts & templating',
    ],
  },
  {
    title: 'Phase 4 — Infra & Configuration',
    blurb: 'Automate infrastructure and configuration with industry-standard tools.',
    items: [
      'Terraform providers, modules, state',
      'Ansible playbooks, roles & idempotency',
      'Cloud fundamentals (AWS/Azure/GCP)'
    ],
  },
  {
    title: 'Phase 5 — Observability & Security',
    blurb: 'Monitor, log, and secure your platforms end-to-end.',
    items: [
      'Prometheus metrics & Grafana dashboards',
      'ELK stack for centralized logging',
      'Vault, SonarQube, Snyk for security & quality'
    ],
  },
  {
    title: 'Phase 6 — Advanced Delivery & SRE',
    blurb: 'Adopt GitOps and reliability engineering for production excellence.',
    items: [
      'Argo CD for GitOps',
      'SRE practices: SLIs, SLOs, error budgets',
      'Nginx for scalable reverse proxying'
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Learning Roadmap</h2>
        <p className="mt-2 text-orange-100/80 max-w-2xl">
          Follow this path to progress from fundamentals to production-ready DevOps. Each phase includes hands-on labs and mini-projects.
        </p>

        <ol className="mt-8 space-y-6 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/40 via-orange-400/20 to-transparent" />
          {phases.map((phase, idx) => (
            <li key={phase.title} className="relative pl-10">
              <div className="absolute left-0 mt-1 h-8 w-8 rounded-full bg-[#0f1424] border-2 border-dashed border-orange-400/50 grid place-items-center text-orange-300">
                {idx + 1}
              </div>
              <div className="rounded-2xl border-2 border-dashed border-orange-400/30 bg-[#0f1424] p-5 shadow-[0_0_0_6px_rgba(251,146,60,0.05)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                    <p className="mt-1 text-sm text-orange-100/80">{phase.blurb}</p>
                  </div>
                  <a href="#topics" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-white">
                    Explore topics <ArrowRight size={16} />
                  </a>
                </div>
                <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-orange-100">
                      <CheckCircle2 className="text-orange-400 shrink-0 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
