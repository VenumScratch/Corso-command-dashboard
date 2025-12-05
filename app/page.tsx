import Image from 'next/image'

export default function Home() {
  const feed = {
    actions: ["Created affiliate link", "Launched campaign", "Triggered surge"],
    campaigns: ["Format A: Live", "Format B: Scheduled"],
    kpi: { roi: "142%", earnings: "$3,420" }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <Image src="/logo.png" alt="CorsoCorner" width={60} height={60} style={{ marginBottom: 20 }} />
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
