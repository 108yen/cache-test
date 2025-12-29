import { Button } from "@/components/button"
import { Cached, CachedRemote } from "@/components/cached"
import { Card } from "@/components/card"
import { CreatedAt } from "@/components/created-at"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { updateTag } from "next/cache"
import { Suspense } from "react"

export default async function Page({ params }: PageProps<"/dynamic/[slug]">) {
  const { slug } = await params

  return (
    <PageLayout>
      <h1>Dynamic Page</h1>
      <Suspense>
        <CreatedAt target="page" />
      </Suspense>

      <Card>
        <h2>Cacheable Components</h2>

        <Cached />

        <CachedRemote />
      </Card>

      <Card>
        <h2>Non-cacheable Components</h2>

        <Suspense fallback={<LoadingCard />}>
          <Cached value={slug} />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <CachedRemote value={slug} />
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
