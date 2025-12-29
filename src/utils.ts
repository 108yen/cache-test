export function wait(seconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

export function cx(...classNames: (null | string | undefined)[]) {
  return classNames
    .filter((className) => !!className)
    .map((className) => className!.trim())
    .join(" ")
}
