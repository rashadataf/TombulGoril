import Link from 'next/link'
import Layout from '../../Components/Layout/Layout'
import classes from './index.module.css'

export default function Products() {
  return <Layout>
    <div style={{ margin: "2rem" }}>
      <h1>Products</h1>
      <div className={classes.cards}>
        <Link href="/products/aviators">
          <div className={classes.card}>
            <img src="/products/Aviator/Aviators.png" />
            <a>Aviators</a>
          </div>
        </Link>
        <Link href="/products/unicorns">
          <div className={classes.card}>
            <img src="/products/Unicorn/Unicorns.png" />
            <a>Unicorns</a>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
}