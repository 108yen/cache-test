import { Button } from "@/components/button"
import { Card } from "@/components/card"
import { CreatedAt, Duration } from "@/components/duration"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { HStack, VStack } from "@/components/stack"
import { cacheTag, updateTag } from "next/cache"
import { Suspense } from "react"
import { wait } from "@/utils"

export default async function Page({
  params,
}: PageProps<"/dynamic/component/awaited/[slug]">) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspendedComponent params={params} />
    </Suspense>
  )
}

async function SuspendedComponent({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <PageLayout>
      <VStack>
        <h1>Dynamic Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CreatedAt />
        </Suspense>
      </VStack>

      <Card>
        <h2>Without Parameters</h2>

        <Cached />

        <CachedRemote />
      </Card>

      <Card>
        <h2>With Parameters</h2>

        <Suspense fallback={<LoadingCard />}>
          <Cached slug={slug} />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <CachedRemote slug={slug} />
        </Suspense>
      </Card>

      <Button
        onClick={async () => {
          "use server"
          updateTag("component")
        }}
      >
        Purge Components Cache
      </Button>
    </PageLayout>
  )
}

interface Props {
  slug?: string
}

async function Cached({ slug }: Props) {
  "use cache"
  cacheTag(`cached-awaited-component-${slug}`, "component", "all")

  await wait(5)
  const date = new Date()

  return (
    <Card>
      <HStack>
        <h2>Cached Dynamic Component</h2>

        <Button
          onClick={async () => {
            "use server"
            updateTag(`cached-awaited-component-${slug}`)
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

export async function CachedRemote({ slug }: Props) {
  "use cache: remote"
  cacheTag(`cached-awaited-remote-component-${slug}`, "component", "all")

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
            updateTag(`cached-awaited-remote-component-${slug}`)
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
