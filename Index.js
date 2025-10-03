export default function Home({ feed }) {
  return (
    <main style={{ padding: '2rem' }}>
      <img src="/logo.png" alt="CorsoCorner" style={{ height: 60, marginBottom: 20 }} />
      <h1>CorsoCommand Dashboard</h1>
      <p>Live AI Actions, Affiliate Links, Campaign Status</p>

      <section>
        <h2>AI Actions</h2>
        <ul>
          {feed.actions.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </section>

      <section>
        <h2>Campaign Status</h2>
        <ul>
          {feed.campaigns.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>

      <section>
        <h2>KPI Tile</h2>
        <p>ROI: {feed.kpi.roi}</p>
        <p>Earnings: {feed.kpi.earnings}</p>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  // Replace with your real API or feed endpoint
  const feed = {
    actions: ["Created affiliate link", "Launched campaign", "Triggered surge"],
    campaigns: ["Format A: Live", "Format B: Scheduled"],
    kpi: { roi: "142%", earnings: "$3,420" }
  }
  return { props: { feed } }
}
