import { BookOpen, Globe, GitBranch, Workflow, Wrench, Terminal, Package, Boxes, Anchor, Settings, Layers, Cloud, Activity, Search, Shield, Rocket, BarChart3, Server } from 'lucide-react';

const topics = [
  { title: 'Linux — Core foundation', desc: 'Filesystem, permissions, processes, services, networking basics.', Icon: BookOpen },
  { title: 'Networking — Communication fundamentals', desc: 'OSI, TCP/UDP, DNS, HTTP, load balancing, firewalls.', Icon: Globe },
  { title: 'Git & GitHub — Version control', desc: 'Branching, PRs, workflows, code reviews, release tags.', Icon: GitBranch },
  { title: 'GitHub Actions — CI/CD setup', desc: 'Build, test, and deploy pipelines using workflows.', Icon: Workflow },
  { title: 'GitLab — CI/CD setup', desc: 'Runners, pipelines, environments, artifacts.', Icon: GitBranch },
  { title: 'Jenkins — CI/CD setup', desc: 'Declarative pipelines, agents, webhooks, shared libs.', Icon: Wrench },
  { title: 'Bash — Automation scripting', desc: 'Scripting, cron, environment management, tooling.', Icon: Terminal },
  { title: 'Docker — Containerization', desc: 'Dockerfiles, images, registries, Compose, best practices.', Icon: Package },
  { title: 'Kubernetes — Orchestration', desc: 'Pods, Services, Deployments, Ingress, RBAC, operators.', Icon: Boxes },
  { title: 'Helm — Simplify K8s deployments', desc: 'Charts, values, templating, releases.', Icon: Anchor },
  { title: 'Ansible — Configuration management', desc: 'Playbooks, inventory, roles, idempotency.', Icon: Settings },
  { title: 'Terraform — Infrastructure automation', desc: 'Providers, modules, state, workspaces.', Icon: Layers },
  { title: 'Cloud (AWS / Azure / GCP) — Hosting & scalability', desc: 'Compute, networking, IAM, storage, managed services.', Icon: Cloud },
  { title: 'Prometheus & Grafana — Monitoring', desc: 'Metrics, alerts, dashboards, SLOs.', Icon: Activity },
  { title: 'ELK Stack — Logging', desc: 'Ingest, index, visualize logs for insights.', Icon: Search },
  { title: 'Vault / SonarQube / Snyk — Security & quality', desc: 'Secrets, scanning, code quality gates.', Icon: Shield },
  { title: 'Argo CD (GitOps) — Advanced CD', desc: 'Declarative deployments synced from Git.', Icon: Rocket },
  { title: 'SRE Concepts — Reliability & performance ops', desc: 'SLIs, SLOs, error budgets, incident response.', Icon: BarChart3 },
  { title: 'Nginx — Managing scalable applications', desc: 'Reverse proxy, caching, TLS, load balancing.', Icon: Server },
];

export default function TopicsGrid() {
  return (
    <section id="topics" className="py-16 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Curriculum Topics</h2>
            <p className="mt-2 text-orange-100/80">19 carefully curated modules to take you from zero to production-ready DevOps.</p>
          </div>
          <a href="#roadmap" className="hidden md:inline-flex text-sm font-semibold text-orange-300 hover:text-white">See Roadmap →</a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ title, desc, Icon }) => (
            <article key={title} className="group relative rounded-2xl border-2 border-dashed border-orange-400/30 bg-[#0f1424] p-5 shadow-[0_0_0_6px_rgba(251,146,60,0.05)] hover:shadow-[0_0_0_8px_rgba(251,146,60,0.08)] transition">
              <div className="flex items-start gap-3">
                <div className="shrink-0 p-2 rounded-xl bg-orange-500/10 border border-orange-400/30 text-orange-300">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white leading-snug">{title}</h3>
                  <p className="mt-1 text-sm text-orange-100/80">{desc}</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
