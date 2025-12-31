import { wait } from "@/utils"
import { Card } from "../components/card"
import { cacheTag, updateTag } from "next/cache"
import { Duration } from "../components/duration"
import { Button } from "../components/button"
import { HStack } from "../components/stack"

interface Props {
  params?: Promise<{ slug: string }>
}

export async function Cached({ params }: Props) {
  "use cache"

  const { slug: value } = params ? await params : {}
  cacheTag(`cached-component-${value}`, "component", "all")

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <HStack>
        <h2>Cached Dynamic Component</h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag(`cached-component-${value}`)
          }}
        >
          Purge Cache
        </Button>
      </HStack>

      {value && <p>Passed value: {value}</p>}

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

  const { slug: value } = params ? await params : {}
  cacheTag(`cached-remote-component-${value}`, "component", "all")

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
            updateTag(`cached-remote-component-${value}`)
          }}
        >
          Purge Cache
        </Button>
      </HStack>

      {value && <p>Passed value: {value}</p>}

      <p>
        This component created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>
    </Card>
  )
}

export async function Uncached({ params }: Props) {
  const { slug: value } = params ? await params : {}

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
