export const services = [
  {
    slug: "operational-dashboard-setup",
    title: "Operational Dashboard Setup",
    outcome: "Visibility for weekly management",
    summary:
      "Design and build dashboards that help leaders see throughput, bottlenecks, service performance, and KPI movement without relying on spreadsheet-heavy manual reviews.",
    idealClient:
      "Service businesses, SMEs, recruitment teams, or internal operations functions that have data but weak visibility.",
    deliverables: [
      "KPI definition workshop and metric shortlist",
      "Dashboard structure with priority views for leadership and team leads",
      "Cleaned reporting logic for source data, calculations, and filters",
      "Handover notes covering refresh routines and interpretation guidance",
    ],
    outcomes: [
      "A reporting view leaders can use in recurring meetings",
      "Fewer manual reconciliations and less screenshot-driven reporting",
      "Clearer accountability around performance and process breakdowns",
    ],
  },
  {
    slug: "monthly-reporting-kpi-packs",
    title: "Monthly Reporting & KPI Packs",
    outcome: "Consistent reporting without internal drag",
    summary:
      "A retained reporting service that turns scattered exports and ad hoc spreadsheets into a reliable monthly decision pack with concise commentary.",
    idealClient:
      "Founders, school leaders, operations managers, and product teams that need reporting rhythm but lack in-house analytics capacity.",
    deliverables: [
      "Monthly KPI pack with narrative commentary and trend interpretation",
      "Metric definitions and data-quality checks",
      "Executive summary page for management meetings",
      "Optional follow-up review call on key shifts and intervention areas",
    ],
    outcomes: [
      "Steadier reporting cadence",
      "Less ambiguity in recurring performance updates",
      "Management insight that is ready to use rather than decode",
    ],
  },
  {
    slug: "operational-intelligence-reviews",
    title: "Operational Intelligence Reviews",
    outcome: "A clear diagnosis of reporting maturity",
    summary:
      "A structured review of current reports, metrics, workflows, and visibility gaps to identify where reporting breaks down and what needs to be redesigned first.",
    idealClient:
      "Organisations that know reporting is weak but need a sharp outside diagnosis before investing in dashboards or systems.",
    deliverables: [
      "Current-state assessment of reports, KPIs, and workflows",
      "Visibility gap map showing what management cannot currently see",
      "Prioritised recommendations across data, reporting, and decision routines",
      "Practical roadmap for the next 30 to 90 days",
    ],
    outcomes: [
      "Faster understanding of what is actually broken",
      "A staged path forward instead of buying another generic tool",
      "Clearer alignment between reporting assets and management needs",
    ],
  },
  {
    slug: "product-workflow-analytics",
    title: "Product / Workflow Analytics",
    outcome: "Understand how work or usage really moves",
    summary:
      "Map workflows, user journeys, and state transitions into metrics that reveal friction, drop-offs, delays, and operational opportunities.",
    idealClient:
      "Digital products, service teams, or internal business units dealing with process complexity and poor event visibility.",
    deliverables: [
      "Event or workflow mapping tied to real business questions",
      "Funnel, state-transition, or workflow-performance analysis",
      "Recommended KPI set for product, service, or team performance",
      "Reporting views for management and operational follow-through",
    ],
    outcomes: [
      "More credible insight into where performance is breaking",
      "Shared language for discussing process and product issues",
      "Better intervention decisions across workflows or user journeys",
    ],
  },
  {
    slug: "learning-intelligence",
    title: "Learning Intelligence for Schools & Academies",
    outcome: "Premium reporting without a bloated platform rebuild",
    summary:
      "A bespoke reporting layer for education and training environments focused on learner progress, attendance, completion, intervention visibility, and operational oversight.",
    idealClient:
      "Private schools, academies, training providers, LMS businesses, and education organisations needing sharper learner and operational visibility.",
    deliverables: [
      "Academic and operational dashboard design for leadership or programme teams",
      "Cohort, attendance, completion, and progress reporting models",
      "Intervention views for students, facilitators, or training managers",
      "Practical reporting architecture that complements existing tools",
    ],
    outcomes: [
      "Faster visibility into learner performance and cohort risk",
      "Reduced manual reporting effort across academic teams",
      "A premium intelligence layer without pitching a full LMS platform",
    ],
  },
  {
    slug: "bespoke-internal-tools",
    title: "Bespoke Internal Analytics Tools",
    outcome: "Lightweight internal products for specific reporting needs",
    summary:
      "Where dashboards alone are insufficient, build small internal analytics tools that support workflow tracking, KPI monitoring, and audit-ready reporting.",
    idealClient:
      "Organisations with recurring reporting friction that requires more structured tooling than spreadsheets can support.",
    deliverables: [
      "Scoped internal reporting tool specification",
      "Workflow-aware interface or tracking logic",
      "Data model and reporting views aligned to management use",
      "Implementation guidance using a modern web stack when needed",
    ],
    outcomes: [
      "More reliable operational reporting than ad hoc spreadsheets",
      "Tighter control over internal workflows and status visibility",
      "A sensible midpoint between manual reporting and a heavy software rollout",
    ],
  },
] as const;

export const featuredSectors = [
  {
    title: "Private schools",
    summary:
      "Academic, attendance, and operational reporting for leaders who need more than admin exports.",
  },
  {
    title: "Training providers",
    summary:
      "Learning intelligence for cohorts, completion, facilitator visibility, and intervention management.",
  },
  {
    title: "Service businesses",
    summary:
      "Workflow visibility, service performance, and KPI trust for teams managing delivery pressure.",
  },
  {
    title: "SMEs and digital products",
    summary:
      "Reporting systems for organisations moving beyond Excel and fragmented platform analytics.",
  },
] as const;

export const reasons = [
  {
    title: "Consulting that respects operational reality",
    text: "The work is designed for imperfect systems, mixed data quality, and growing organisations that cannot pause operations for a large transformation programme.",
  },
  {
    title: "Clear frameworks without bloated process",
    text: "The founder's body of work already reflects structured thinking and concise communication. That makes stakeholder conversations, scope definition, and delivery sharper.",
  },
  {
    title: "Technical depth where it matters",
    text: "SQL, Power BI, Python, reporting logic, and full-stack product experience help close the gap between analysis strategy and what can actually be shipped.",
  },
] as const;

export const industries = [
  {
    slug: "education-training",
    label: "Education and Training",
    title: "Schools, academies, and learning businesses",
    summary:
      "Academic and training environments often collect plenty of administrative data but still struggle to see learner progress, cohort risk, and intervention needs clearly.",
    painPoints: [
      "Attendance, completion, and performance data sitting in separate systems",
      "Manual reporting cycles that absorb academic staff time",
      "Weak visibility into cohort health, progression, and intervention triggers",
    ],
    analyticsHelps: [
      "Creates learner and cohort dashboards for leadership and academic teams",
      "Defines the KPIs that matter beyond raw admin counts",
      "Supports intervention planning with cleaner visibility on risk and progress",
    ],
  },
  {
    slug: "service-operations",
    label: "Service Operations",
    title: "Service teams and operational delivery functions",
    summary:
      "Service businesses need reporting that reflects how work moves: queues, states, delays, volume, turnaround times, and quality markers.",
    painPoints: [
      "No shared view of workflow movement or stuck cases",
      "Metrics that exist but are not trusted by managers",
      "Operations reviews that rely on anecdotes rather than consistent reporting",
    ],
    analyticsHelps: [
      "Maps workflows into measurable states and management dashboards",
      "Clarifies throughput, backlog, bottlenecks, and turnaround KPIs",
      "Improves executive visibility without heavy enterprise tooling",
    ],
  },
  {
    slug: "smes",
    label: "SMEs",
    title: "Growing SMEs still running on manual reporting",
    summary:
      "Many SMEs operate with spreadsheet-heavy reporting that becomes fragile as volume grows and decision pressure increases.",
    painPoints: [
      "Important numbers scattered across Excel files and operational systems",
      "Founders spending time assembling reports instead of using them",
      "Low confidence in recurring KPI packs and trend analysis",
    ],
    analyticsHelps: [
      "Creates a reporting layer that reduces manual effort",
      "Introduces metric consistency and routine decision support",
      "Builds dashboards and reporting packs sized for SME budgets and pace",
    ],
  },
  {
    slug: "digital-products",
    label: "Digital Products",
    title: "Digital platforms needing product and customer visibility",
    summary:
      "Digital products often have event data, support data, and financial signals spread across tools without a coherent business-facing analytics layer.",
    painPoints: [
      "Usage metrics disconnected from operational or customer outcomes",
      "No clear KPI narrative for product, retention, or support performance",
      "Leadership teams pulling fragmented screenshots from multiple tools",
    ],
    analyticsHelps: [
      "Structures product and workflow analytics around business decisions",
      "Connects event visibility to customer, service, or operational outcomes",
      "Produces reporting that management can scan quickly and trust",
    ],
  },
  {
    slug: "recruitment-workforce",
    label: "Recruitment and Workforce Operations",
    title: "Recruitment, placement, and workforce reporting",
    summary:
      "Recruitment and workforce operations require visibility into pipeline movement, placement outcomes, bottlenecks, and team activity.",
    painPoints: [
      "Pipeline stages are tracked, but conversion logic is weak",
      "Operational reporting is reactive rather than structured",
      "Managers struggle to see where activity is slowing or leaking",
    ],
    analyticsHelps: [
      "Clarifies funnel stages and pipeline performance metrics",
      "Improves reporting around workload, throughput, and conversion",
      "Provides leadership visibility on where action is required first",
    ],
  },
] as const;

export const caseStudies = [
  {
    title: "Bontle Operational Intelligence Case Study",
    summary:
      "Bontle was designed and shipped as a practical product example showing how service operations can move from loosely tracked activity to measurable workflow states, trusted KPI logic, and executive-ready visibility.",
    tags: [
      "Workflow visibility",
      "KPI design",
      "Reporting architecture",
      "Executive dashboards",
      "Service intelligence",
    ],
    results: [
      "Translated service workflows into measurable state transitions",
      "Designed KPI logic that could support audit-ready reporting",
      "Created a reporting architecture for operations and leadership visibility",
      "Demonstrated how service-team data can become decision support rather than raw activity logs",
    ],
    highlights: [
      {
        title: "Workflow measurement",
        text: "The case study centres on making operational states explicit so service teams and leaders can see flow, backlog, and intervention points.",
      },
      {
        title: "KPI trust",
        text: "Metrics were framed to be interpretable, defensible, and usable in management discussions instead of becoming decorative dashboard numbers.",
      },
      {
        title: "Executive reporting",
        text: "The reporting architecture was designed to support concise leadership visibility on performance, bottlenecks, and service outcomes.",
      },
    ],
  },
  {
    title: "School performance reporting framework",
    status: "Future case study template",
    summary:
      "A future proof-point structure for showing how learner performance, attendance, and intervention visibility can be redesigned into a cleaner reporting layer for school leadership.",
    framework: [
      "Context and reporting pain points",
      "KPI definitions and cohort logic",
      "Dashboard and reporting outputs",
      "Operational decisions improved by the reporting layer",
    ],
  },
  {
    title: "SME operations dashboard redesign",
    status: "Future case study template",
    summary:
      "A placeholder structure for a client story focused on taking a manual SME reporting setup and converting it into a tighter monthly KPI and dashboard routine.",
    framework: [
      "Starting state and management visibility problem",
      "Reporting redesign decisions",
      "New cadence, dashboard, and KPI pack structure",
      "Operational and leadership outcomes",
    ],
  },
] as const;

export const processSteps = [
  {
    label: "Step 1",
    title: "Diagnose",
    text: "Start by understanding the operating model, reporting rhythm, management questions, data sources, and where visibility is currently weakest.",
    outputs: [
      "Current-state reporting diagnosis",
      "Priority decisions and reporting questions",
    ],
  },
  {
    label: "Step 2",
    title: "Define metrics",
    text: "Clarify the KPIs, thresholds, cohort logic, and performance definitions that the organisation should use consistently.",
    outputs: ["Metric definitions", "KPI hierarchy and interpretation notes"],
  },
  {
    label: "Step 3",
    title: "Structure data",
    text: "Bring source data into a shape that supports consistent calculations, practical filtering, and dependable reporting outputs.",
    outputs: ["Reporting logic", "Data structure for dashboards or KPI packs"],
  },
  {
    label: "Step 4",
    title: "Build visibility",
    text: "Create dashboards, reviews, or reporting packs designed around how leaders and teams actually consume information.",
    outputs: ["Dashboard views", "Executive and operational reporting assets"],
  },
  {
    label: "Step 5",
    title: "Recommend action",
    text: "Translate reporting into specific operational interpretation so the work does not stop at visualisation.",
    outputs: ["Management commentary", "Intervention or action recommendations"],
  },
  {
    label: "Step 6",
    title: "Support adoption",
    text: "Help the client embed the reporting into meetings, reviews, and operating routines so the reporting layer becomes useful over time.",
    outputs: ["Usage guidance", "Review cadence and follow-through structure"],
  },
] as const;

export const insights = [
  {
    category: "Reporting maturity",
    title: "What small organisations get wrong about reporting",
    summary:
      "A practical view on why reporting problems usually start with unclear management questions, fragmented sources, and overly manual workflows rather than a missing dashboard tool.",
  },
  {
    category: "KPI design",
    title: "Why dashboards fail without KPI definitions",
    summary:
      "A structured argument for defining metrics, thresholds, ownership, and business meaning before visual layers are built.",
  },
  {
    category: "Learning analytics",
    title: "Learning analytics beyond admin reporting",
    summary:
      "A perspective piece on how schools and training providers can build clearer visibility into learner progress, cohorts, interventions, and delivery performance.",
  },
] as const;

export const testimonials = [
  {
    name: "Placeholder Client Signal",
    role: "School operations leader",
    quote:
      "The reporting style is calm, structured, and useful for leadership decisions. It does not bury the important signal under noise.",
  },
  {
    name: "Placeholder Peer Signal",
    role: "Product and operations collaborator",
    quote:
      "There is a strong ability to translate workflow complexity into metrics people can actually discuss and manage against.",
  },
  {
    name: "Placeholder Advisory Signal",
    role: "SME founder perspective",
    quote:
      "The work feels practical and commercially aware. It is analytics with business judgment rather than analytics for its own sake.",
  },
] as const;
