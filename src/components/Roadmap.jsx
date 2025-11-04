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
    <section id="roadmap" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Learning Roadmap</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Follow this path to progress from fundamentals to production-ready DevOps. Each phase includes hands-on labs and mini-projects.
        </p>

        <ol className="mt-8 space-y-6">
          {phases.map((phase) => (
            <li key={phase.title} className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{phase.blurb}</p>
                  </div>
                  <a href="#topics" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-indigo-700 hover:text-indigo-800">
                    Explore topics <ArrowRight size={16} />
                  </a>
                </div>
                <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
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
