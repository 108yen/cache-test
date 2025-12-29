import { wait } from "@/utils"
import { Card } from "./card"
import { cacheTag } from "next/cache"
import { Duration } from "./duration"

interface Props {
  value?: string
}

export async function Cached({ value }: Props) {
  "use cache"
  cacheTag("cached-component", "component", "all")

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <h2>Cached Dynamic Component</h2>

      {value && <p>Passed value: {value}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function CachedRemote({ value }: Props) {
  "use cache: remote"
  cacheTag("cached-remote-component", "component", "all")

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <h2>
        Cached <code>remote</code> Dynamic Component
      </h2>

      {value && <p>Passed value: {value}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function Uncached({ value }: Props) {
  await wait(5)
  const date = new Date()

  return (
    <Card>
      <h2>Uncached Dynamic Component</h2>

      {value && <p>Passed value: {value}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}
