import { Duration } from "@/components/duration"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { Cached, CachedRemote, Uncached } from "@/components/cached"
import { Suspense } from "react"

export default async function Page() {
  const date = new Date()

  return (
    <PageLayout>
      <h1>Uncached Page has Cached Dynamic Component</h1>
      <p>
        This page created at: {date.toLocaleString("ja-JP")}
        <br />
        <Duration date={date} />
      </p>

      <Cached />

      <CachedRemote />

      <Suspense fallback={<LoadingCard />}>
        <Uncached />
      </Suspense>
    </PageLayout>
  )
}
