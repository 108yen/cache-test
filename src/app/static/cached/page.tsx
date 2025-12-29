"use cache"

import { Button } from "@/components/button"
import { Cached, CachedRemote, Uncached } from "@/components/cached"
import { CreatedAt } from "@/components/created-at"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { cacheTag, updateTag } from "next/cache"
import { Suspense } from "react"

export default async function Page() {
  cacheTag("cached-page", "page", "all")

  return (
    <PageLayout>
      <h1>Cached Page</h1>
      <CreatedAt target="page" />

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
