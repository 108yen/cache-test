import { wait } from "@/utils"
import { cacheTag } from "next/cache"

interface Props {
  params?: Promise<{ slug: string }>
}

export async function cached({ params }: Props) {
  "use cache"

  const { slug } = params ? await params : {}
  cacheTag(`cached-data-${slug}`, "data", "all")

  await wait(5)
  const date = new Date()

  console.log(`Cached data with slug: ${slug} at ${date.toISOString()}`)

  return {
    date: date.toLocaleString("ja-JP"),
    timestamp: date.getTime(),
    value: slug,
  }
}

export async function cachedRemote({ params }: Props) {
  "use cache: remote"

  const { slug } = params ? await params : {}
  cacheTag(`cached-remote-data-${slug}`, "data", "all")

  await wait(5)
  const date = new Date()

  console.log(`Cached remote data with slug: ${slug} at ${date.toISOString()}`)

  return {
    date: date.toLocaleString("ja-JP"),
    timestamp: date.getTime(),
    value: slug,
  }
}

export async function uncached({ params }: Props) {
  const { slug } = params ? await params : {}

  await wait(5)
  const date = new Date()

  console.log(`Uncached data with slug: ${slug} at ${date.toISOString()}`)

  return {
    date: date.toLocaleString("ja-JP"),
    timestamp: date.getTime(),
    value: slug,
  }
}
