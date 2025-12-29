import { Button } from "@/components/button"
import { Cached, CachedRemote } from "@/components/cached"
import { Card } from "@/components/card"
import { Duration } from "@/components/duration"
import { LoadingCard } from "@/components/loading-card"
import { PageLayout } from "@/components/page-layout"
import { updateTag } from "next/cache"
import { Suspense } from "react"

export default function Page() {
  return (
    <PageLayout>
      <h1>Dynamic Page</h1>
    </PageLayout>
  )
}

// export default async function Page({ params }: PageProps<"/dynamic/[slug]">) {
//   const { slug } = await params
//   const date = new Date()

//   return (
//     <PageLayout>
//       <h1>Dynamic Page</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <p>
//           This page created at: {date.toLocaleString("ja-JP")}
//           <br />
//           <Duration date={date} />
//         </p>
//       </Suspense>

//       <Card>
//         <h2>Cacheable Components</h2>

//         <Cached />

//         <CachedRemote />
//       </Card>

//       <Card>
//         <h2>Non-cacheable Components</h2>

//         <Suspense fallback={<LoadingCard />}>
//           <Cached value={slug} />
//         </Suspense>

//         <Suspense fallback={<LoadingCard />}>
//           <CachedRemote value={slug} />
//         </Suspense>
//       </Card>

//       <Button
//         onClick={async () => {
//           "use server"
//           updateTag("component")
//         }}
//       >
//         Purge Components Cache
//       </Button>
//     </PageLayout>
//   )
// }
