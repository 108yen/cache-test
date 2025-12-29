"use cache"

import { Button } from "@/components/button"
import { Cached, CachedRemote, Uncached } from "@/components/cached"
import { Duration } from "@/components/duration"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { VStack } from "@/components/stack"
import { cacheTag, updateTag } from "next/cache"
import { Suspense } from "react"

export default async function Page() {
  cacheTag("cached-page", "page", "all")
  const date = new Date()

  return (
    <PageLayout>
      <VStack>
        <h1>Cached Page</h1>
        <p>
          This page created at: {date.toLocaleString("ja-JP")}
          <br />
          <Duration date={date} />
        </p>
      </VStack>

      <Cached />

      <CachedRemote />

      <Suspense fallback={<LoadingCard />}>
        <Uncached />
      </Suspense>

      <Button
        onClick={async () => {
          "use server"
          updateTag("cached-page")
        }}
      >
        Purge Page Cache
      </Button>

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
