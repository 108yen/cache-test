"use client"

import { useEffect, useState } from "react"

export function Duration({ date }: { date: Date }) {
  const [seconds, setSeconds] = useState<number>()

  useEffect(() => {
    function updateSeconds() {
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      setSeconds(Math.floor(diff / 1000))
    }

    updateSeconds()
    const interval = setInterval(updateSeconds, 1000)

    return () => clearInterval(interval)
  }, [date])

  return <span>{seconds} seconds ago.</span>
}

export function CreatedAt() {
  const date = new Date()

  return (
    <p>
      This page created at: {date.toLocaleString("ja-JP")}
      <br />
      <Duration date={date} />
    </p>
  )
}
