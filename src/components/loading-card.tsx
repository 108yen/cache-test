import { Card, CardProps } from "./card"
import styles from "./loading-card.module.css"
import { cx } from "@/utils"

export function LoadingCard({ className, ...props }: CardProps) {
  return (
    <Card className={cx(styles.root, className)} {...props}>
      Loading...
    </Card>
  )
}
