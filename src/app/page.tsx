import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <h2>Static Pages</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/static/cached">Cached</Link>
            </li>
            <li>
              <Link href="/static/uncached">Uncached</Link>
            </li>
          </ul>
        </li>

        <li>
          <h2>Dynamic Pages</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/dynamic/component/1">Component Cache</Link>
            </li>

            <li>
              <Link href="/dynamic/data/1">Data Cache</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
