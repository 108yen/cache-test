import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { Cached, CachedRemote, Uncached } from "@/components/cached"
import { Suspense } from "react"
import { CreatedAt } from "@/components/created-at"

export default async function Page() {
  return (
    <PageLayout>
      <h1>Uncached Page has Cached Dynamic Component</h1>
      <CreatedAt target="page" />

      <Cached />

      <CachedRemote />

      <Suspense fallback={<LoadingCard />}>
        <Uncached />
      </Suspense>
    </PageLayout>
  )
}
