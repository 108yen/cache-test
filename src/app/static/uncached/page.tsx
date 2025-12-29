import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { Cached, CachedRemote, Uncached } from "@/components/cached"
import { Suspense } from "react"
import { Duration } from "@/components/duration"
import { connection } from "next/server"

export default async function Page() {
  return (
    <PageLayout>
      <h1>Uncached Page has Cached Dynamic Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CreatedAt />
      </Suspense>

      <Cached />

      <CachedRemote />

      <Suspense fallback={<LoadingCard />}>
        <Uncached />
      </Suspense>
    </PageLayout>
  )
}

async function CreatedAt() {
  await connection()
  const date = new Date()

  return (
    <p>
      This page created at: {date.toLocaleString("ja-JP")}
      <br />
      <Duration date={date} />
    </p>
  )
}
