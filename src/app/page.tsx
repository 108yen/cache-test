import Link from "next/link"

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <h2>Static Pages</h2>
          <ul>
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
          <ul>
            <li>
              <Link href="/dynamic/1">Component Cache</Link>
            </li>

            <li>Data Cache</li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
