import { HTMLAttributes } from "react"
import styles from "./stack.module.css"
import { cx } from "@/utils"

type StackProps = HTMLAttributes<HTMLDivElement>

export function VStack({ className, ...props }: StackProps) {
  return (
    <div className={cx(styles.root, styles.vertical, className)} {...props} />
  )
}

export function HStack({ className, ...props }: StackProps) {
  return (
    <div className={cx(styles.root, styles.horizontal, className)} {...props} />
  )
}
