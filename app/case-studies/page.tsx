const caseStudies = [
  {
    product: 'ERP Management System',
    category: 'Service operations',
    title: 'Centralized ERP for a multi-department service business',
    challenge:
      'Teams were managing customers, approvals, invoices, and task status across spreadsheets and disconnected messaging channels.',
    solution:
      'Built a role-based ERP workspace with customer records, approval flows, billing checkpoints, task ownership, and management dashboards.',
    result: 'Managers gained one shared operating view for approvals, billing, and reporting.',
    metrics: ['42% faster approval cycle', '18 hrs saved weekly in reporting', '6 core workflows unified'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Role-based access'],
    phases: ['Discovery', 'Workflow map', 'MVP', 'Launch support'],
  },
  {
    product: 'Retail POS Platform',
    category: 'Retail',
    title: 'Modern POS and customer follow-up platform for retail operations',
    challenge:
      'Store staff needed faster billing, product lookup, customer history, and follow-up reminders without switching between tools.',
    solution:
      'Delivered a POS experience with quick billing, inventory visibility, customer profiles, purchase history, and automated follow-up cues.',
    result: 'Store teams completed checkout and follow-up workflows with fewer manual steps.',
    metrics: ['31% quicker checkout flow', '24% increase in repeat follow-ups', '3 store workflows connected'],
    techStack: ['Next.js', 'Firebase', 'Cloud Functions', 'Mobile-first UI'],
    phases: ['Audit', 'Prototype', 'Pilot', 'Rollout'],
  },
  {
    product: 'Inventory & Warehouse Automation',
    category: 'Distribution and warehouse',
    title: 'Inventory visibility layer for stock movement and warehouse teams',
    challenge:
      'Warehouse updates were delayed, stock variance was difficult to trace, and teams lacked one shared operational view.',
    solution:
      'Created inventory dashboards, scan-based stock movement, exception alerts, low-stock views, and daily warehouse summaries.',
    result: 'Warehouse teams improved stock lookup speed and reduced repeated manual checks.',
    metrics: ['37% fewer manual stock checks', '2.5x faster stock lookup', '12 movement statuses tracked'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Barcode workflows'],
    phases: ['Process study', 'Data model', 'Mobile build', 'Optimization'],
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-28">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/70 to-background" />
        <div className="absolute right-1/4 top-20 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">Case Studies</span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Enterprise builds shown through <span className="gradient-text">outcomes, not hype.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Realistic project scenarios that show how Gurukrupa Enterprise approaches workflow problems, software architecture, launch readiness, and measurable operational improvement.
            </p>
          </div>

          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {caseStudies.map((study) => (
              <article key={study.title} className="glass-card card-hover rounded-lg p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {study.product}
                  </span>
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {study.category}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">{study.title}</h2>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-lg border border-border/80 bg-card/70 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Challenge</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="rounded-lg border border-border/80 bg-card/70 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Solution</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="rounded-lg border border-border/80 bg-card/70 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Result</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.result}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="rounded-lg border border-accent/20 bg-accent/10 p-4 text-center">
                      <div className="text-sm font-bold text-foreground">{metric}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Tech stack</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.techStack.map((tag) => (
                        <span key={tag} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm font-semibold text-muted-foreground">
                    {study.phases.join(' -> ')}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-5xl text-center text-sm leading-6 text-muted-foreground">
            Metrics are presented as realistic outcome examples for project scenarios. Actual results depend on scope, team adoption, workflow complexity, and post-launch optimization.
          </p>
        </div>
      </section>
    </main>
  )
}
