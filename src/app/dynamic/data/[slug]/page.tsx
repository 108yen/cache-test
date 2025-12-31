import { Button } from "@/components/button"
import {
  DataCached,
  DataCachedRemote,
} from "@/cached/component"
import { Card } from "@/components/card"
import { CreatedAt } from "@/components/duration"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { VStack } from "@/components/stack"
import { updateTag } from "next/cache"
import { Suspense } from "react"

export default async function Page({
  params,
}: PageProps<"/dynamic/component/[slug]">) {
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

        <DataCached />

        <DataCachedRemote />
      </Card>

      <Card>
        <h2>With Parameters</h2>

        <Suspense fallback={<LoadingCard />}>
          <DataCached params={params} />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <DataCachedRemote params={params} />
        </Suspense>
      </Card>

      <Button
        onClick={async () => {
          "use server"
          updateTag("data")
        }}
      >
        Purge Data Cache
      </Button>
    </PageLayout>
  )
}
