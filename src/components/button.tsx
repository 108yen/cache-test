import { ButtonHTMLAttributes } from "react"
import styles from "./button.module.css"
import { cx } from "@/utils"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cx(styles.button, className)} {...props} />
}
