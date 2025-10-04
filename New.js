import Head from 'next/head'

export default function Home({ feed }) {
  return (
    <>
      <Head>
        <title>CorsoCommand Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main style={{
        fontFamily: 'sans-serif',
        background: '#111',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <img src="/logo.png" alt="CorsoCorner" style={{ height: 60, marginBottom: 20 }} />
        <h1>CorsoCommand Dashboard</h1>
        <p style={{ opacity: 0.8 }}>Live AI Actions, Campaign Status, KPI Tile</p>

        <section style={sectionStyle}>
          <h2>🧠 AI Actions</h2>
          <ul>
            {feed.actions.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2>🎬 Campaign Status</h2>
          <ul>
            {feed.campaigns.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2>📊 KPI Tile</h2>
          <p>ROI: {feed.kpi.roi}</p>
          <p>Earnings: {feed.kpi.earnings}</p>
          <p>Growth: {feed.kpi.growth}</p>
        </section>

        <section style={sectionStyle}>
          <h2>🔗 Affiliate Links</h2>
          <ul>
            {feed.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7' }}>
                  {link.product}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2>🗞️ Weekly Digest</h2>
          <p><strong>{feed.digest.week}</strong></p>
          <p>{feed.digest.summary}</p>
        </section>
      </main>
    </>
  )
}

const sectionStyle = {
  marginTop: '2rem',
  padding: '1rem',
  background: '#1a1a1a',
  borderRadius: '8px'
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://command.corsocorner.online/api/feed')
    if (!res.ok) throw new Error('Feed fetch failed')
    const feed = await res.json()

    return { props: { feed } }
  } catch (error) {
    console.error('Error fetching feed:', error)
    return {
      props: {
        feed: {
          actions: ["Assistant offline", "No data received"],
          campaigns: ["Unavailable"],
          kpi: { roi: "N/A", earnings: "N/A", growth: "N/A" },
          links: [],
          digest: { week: "N/A", summary: "Feed unreachable or not yet live." }
        }
      }
    }
  }
                            }
