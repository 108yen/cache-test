import "server-only"
import { Duration } from "./duration"

interface CreatedAtProps {
  target?: string
}

export function CreatedAt({ target }: CreatedAtProps) {
  const date = new Date()

  return (
    <p>
      {`This ${target ?? "page"} created at: ${date.toLocaleString("ja-JP")}`}
      <br />
      <Duration date={date} />
    </p>
  )
}
