import { wait } from "@/utils"
import { Card } from "./card"
import { cacheTag, updateTag } from "next/cache"
import { Duration } from "./duration"
import { Button } from "./button"
import { HStack } from "./stack"

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
      <HStack>
        <h2>Cached Dynamic Component</h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag("cached-component")
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

export async function CachedRemote({ value }: Props) {
  "use cache: remote"
  cacheTag("cached-remote-component", "component", "all")

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
            updateTag("cached-remote-component")
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
