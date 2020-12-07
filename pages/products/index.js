import Link from 'next/link'
import Layout from '../../Components/Layout/Layout'
import classes from './index.module.css'

export default function Products() {
  return <Layout>
    <div style={{ margin: "2rem" }}>
      <h1>Products</h1>
      <div className="cards">
        <Link href="/products/aviators">
          <div className="card">
            <img src="/products/Aviator/Aviators.png" />
            <a>Aviators</a>
          </div>
        </Link>
        <Link href="/products/unicorns">
          <div className="card">
            <img src="/products/Unicorn/Unicorns.png" />
            <a>Unicorns</a>
          </div>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .card {
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
      }

      .card:hover a {
        background-color: black;
        color: var(--logo-color);
      }

      .card a {
        margin-top: -90px;
      }

      .card img {
        width: 100%;
        height: 100%
      }

      .cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    `}</style>
  </Layout>
}