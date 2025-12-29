import { HTMLAttributes } from "react"
import styles from "./card.module.css"
import { cx } from "@/utils"

export type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return <div className={cx(styles.root, className)} {...props} />
}
