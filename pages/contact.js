import Head from 'next/head'
import Layout from '../Components/Layout/Layout'

export default function Contact() {
  return <Layout>
    <Head>
      <title>Contact Us</title>
    </Head>
    <div style={{ margin: "2rem" }}>
      <h1>Contact Us</h1>
      <ul className="info">
        <li className="info--card">
          Email:&nbsp;
          <a href='mailto:goriltombul@gmail.com' className="link">
            goriltombul@gmail.com
          </a>
        </li>
        <li className="info--card">
          Phone:&nbsp;
          <a href='tel:+905436950980' className="link">
            +90 543 695 09 80
          </a>
        </li>
        <li className="info--card">
          Whatsapp:&nbsp;
          <a href='https://wa.link/asw2b8' className="link">
            +90 543 695 09 80
          </a>
        </li>
      </ul>

      <style jsx>{`
      h1 {
        font-size: 2.5rem;
      }
      .info {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
      }
      
      .info--card {
        height: 4rem;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .info--card:nth-of-type(even) {
        background: #dddddd;
      }
      
      .link {
        color: #1f88ff;
        text-decoration: underline;
      }
    `}</style>
    </div>

  </Layout>
}