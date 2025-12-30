import { cacheTag } from "next/cache"

interface Props {
  value?: string
}

export async function cached({ value }: Props) {
  "use cache"
  cacheTag(`cached-data-${value}`, "data", "all")

  const date = new Date()

  return {
    date: date.toLocaleString("ja-JP"),
    timestamp: date.getTime(),
    value,
  }
}

export async function cachedRemote({ value }: Props) {
  "use cache: remote"
  cacheTag(`cached-remote-data-${value}`, "data", "all")

  const date = new Date()

  return {
    date: date.toLocaleString("ja-JP"),
    timestamp: date.getTime(),
    value,
  }
}

export async function uncached({ value }: Props) {
  const date = new Date()

  return {
    date: date.toLocaleString("ja-JP"),
    timestamp: date.getTime(),
    value,
  }
}
