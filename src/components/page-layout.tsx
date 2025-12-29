import { HTMLAttributes } from "react"
import styles from "./page-layout.module.css"
import { cx } from "@/utils"
import { updateTag } from "next/cache"
import { Button } from "./button"

type PageLayoutProps = HTMLAttributes<HTMLDivElement>

export function PageLayout({ className, children, ...props }: PageLayoutProps) {
  return (
    <div className={cx(styles.root, className)} {...props}>
      {children}

      <Button
        onClick={async () => {
          "use server"
          updateTag("all")
        }}
      >
        Purge All Cache
      </Button>
    </div>
  )
}
