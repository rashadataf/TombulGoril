import Head from 'next/head'
import Layout from '../Components/Layout/Layout'

export default function About() {
  return <Layout>
    <Head>
      <title>About Us</title>
    </Head>
    <div style={{ margin: "2rem" }}>
      <h1>About Us</h1>
      <p>
        We are Tombul Goril, a Turkish company founded in 2020, and we are the
        exclusive distributors of Chubby Gorilla products in Turkey.
      </p>
      <p>
        Our company was founded with the goal of delivering what we think the
        Turkish market needs the most: high-quality, durable plastic bottles,
        and with our partners at Chubby Gorilla we are working day and night
        to provide customers with the highest quality products they need.
      </p>
      <h1 style={{ fontSize: "2.5rem" }}>Chubby Gorilla</h1>
      <p>
        Chubby Gorilla has revolutionized the industry, in several interesting
        and exciting ways. With their design &amp; engineering team in
        California and the materials used in the manufacturing process, they
        assure their customers that they get the highest quality possible.
      </p>
      <p>
        The Unicorn v3 series are the best-selling bottles, because of their
        high durability, quality, and because they preserve the liquid inside
        for a long time, due to the caps being air-tight and plastic materials
        used in manufacturing. They also come with removable drip-nozzles for
        the times you need a fine amount of liquid only, and because they are
        removable, you can buy your own nozzles that suit your needs.
      </p>
      <p>
        The Aviator series comes in many types, and sizes different to the
        Unicorn series, they suit liquids that get damaged quickly. Because of
        the cap design of the bottles, the bottle contents are completely
        sealed from both air and water, so they guarantee a longer shelf-life.
      </p>
      <style jsx>{`
      h1 {
        font-size: 2.5rem;
      }
    `}</style>
    </div>
    {/* <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem 0",
            }}
        >
            <img
                src='/logo.jpeg'
                alt='Tombul Goril logo'
                className={styles.logo}
            />
        </div> */}

  </Layout>
}