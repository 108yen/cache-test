import { wait } from "@/utils"
import { Card } from "./card"
import { Duration } from "./duration"
import { cacheTag } from "next/cache"

export async function Cached() {
  "use cache"
  cacheTag("cached-component", "component", "all")

  await wait(5)

  const date = new Date()

  return (
    <Card>
      <h2>Cached Dynamic Component</h2>

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function CachedRemote() {
  "use cache: remote"
  cacheTag("cached-remote-component", "component", "all")

  await wait(5)

  const date = new Date()

  return (
    <Card>
      <h2>
        Cached <code>remote</code> Dynamic Component
      </h2>

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function Uncached() {
  await wait(5)

  const date = new Date()

  return (
    <Card>
      <h2>Uncached Dynamic Component</h2>

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}
