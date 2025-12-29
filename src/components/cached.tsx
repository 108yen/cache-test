import { wait } from "@/utils"
import { Card } from "./card"
import { cacheTag } from "next/cache"
import { CreatedAt } from "./created-at"

interface Props {
  value?: string
}

export async function Cached({ value }: Props) {
  "use cache"
  cacheTag("cached-component", "component", "all")

  await wait(5)

  return (
    <Card>
      <h2>Cached Dynamic Component</h2>

      {value && <p>Passed value: {value}</p>}

      <CreatedAt target="component" />
    </Card>
  )
}

export async function CachedRemote({ value }: Props) {
  "use cache: remote"
  cacheTag("cached-remote-component", "component", "all")

  await wait(5)

  return (
    <Card>
      <h2>
        Cached <code>remote</code> Dynamic Component
      </h2>

      {value && <p>Passed value: {value}</p>}

      <CreatedAt target="component" />
    </Card>
  )
}

export async function Uncached({ value }: Props) {
  await wait(5)

  return (
    <Card>
      <h2>Uncached Dynamic Component</h2>

      {value && <p>Passed value: {value}</p>}

      <CreatedAt target="component" />
    </Card>
  )
}
