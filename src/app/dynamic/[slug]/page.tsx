import { Button } from "@/components/button"
import { Cached, CachedRemote } from "@/components/cached"
import { Card } from "@/components/card"
import { CreatedAt } from "@/components/duration"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { updateTag } from "next/cache"
import { Suspense } from "react"

export default async function Page({ params }: PageProps<"/dynamic/[slug]">) {
  return (
    <PageLayout>
      <h1>Dynamic Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CreatedAt />
      </Suspense>

      <Card>
        <h2>Without Parameters</h2>

        <Cached />

        <CachedRemote />
      </Card>

      <Card>
        <h2>With Parameters</h2>

        <Suspense fallback={<LoadingCard />}>
          {params.then(({ slug }) => (
            <Cached value={slug} />
          ))}
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          {params.then(({ slug }) => (
            <CachedRemote value={slug} />
          ))}
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
