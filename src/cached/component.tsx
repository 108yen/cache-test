import { wait } from "@/utils"
import { Card } from "../components/card"
import { cacheTag, updateTag } from "next/cache"
import { Duration } from "../components/duration"
import { Button } from "../components/button"
import { HStack } from "../components/stack"
import { cached, cachedRemote, uncached } from "./data"

interface Props {
  params?: Promise<{ slug: string }>
}

export async function Cached({ params }: Props) {
  "use cache"

  const { slug } = params ? await params : {}
  cacheTag(`cached-component-${slug}`, "component", "all")

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <HStack>
        <h2>Cached Dynamic Component</h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag(`cached-component-${slug}`)
          }}
        >
          Purge Cache
        </Button>
      </HStack>

      {slug && <p>Value: {slug}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function CachedRemote({ params }: Props) {
  "use cache: remote"

  const { slug } = params ? await params : {}
  cacheTag(`cached-remote-component-${slug}`, "component", "all")

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <HStack>
        <h2>
          Cached <code>remote</code> Dynamic Component
        </h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag(`cached-remote-component-${slug}`)
          }}
        >
          Purge Cache
        </Button>
      </HStack>

      {slug && <p>Value: {slug}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function Uncached({ params }: Props) {
  const { slug } = params ? await params : {}

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <h2>Uncached Dynamic Component</h2>

      {slug && <p>Value: {slug}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function DataCached({ params }: Props) {
  const { date, timestamp, value } = await cached({ params })

  return (
    <Card>
      <HStack>
        <h2>Cached Dynamic Data</h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag(`cached-data-${value}`)
          }}
        >
          Purge Cache
        </Button>
      </HStack>

      {value && <p>Value: {value}</p>}

      <p>
        This data created at: {date}
        <br />
        <Duration date={new Date(timestamp)} />
      </p>
    </Card>
  )
}

export async function DataCachedRemote({ params }: Props) {
  const { date, timestamp, value } = await cachedRemote({ params })

  return (
    <Card>
      <HStack>
        <h2>
          Cached <code>remote</code> Dynamic Data
        </h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag(`cached-remote-data-${value}`)
          }}
        >
          Purge Cache
        </Button>
      </HStack>

      {value && <p>Value: {value}</p>}

      <p>
        This data created at: {date}
        <br />
        <Duration date={new Date(timestamp)} />
      </p>
    </Card>
  )
}

export async function DataUncached({ params }: Props) {
  const { date, timestamp, value } = await uncached({ params })

  return (
    <Card>
      <h2>Uncached Dynamic Data</h2>

      {value && <p>Value: {value}</p>}

      <p>
        This data created at: {date}
        <br />
        <Duration date={new Date(timestamp)} />
      </p>
    </Card>
  )
}
