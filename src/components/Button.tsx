import clsx from "clsx"
import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger"
}

export default function Button({ children,  variant = "primary", ...props }: Props) {
  return (
    <button
      className={clsx(
        "md:p-4 p-3 flex justify-center items-center border-2 hover:cursor-pointer duration-300 disabled:bg-neutral-300 disabled:border-neutral-400",
        variant === "primary" && "bg-green-200 hover:bg-green-300 border-green-400",
        variant === "danger" && "bg-red-200"
      )}
      {...props}
    >
      {children}
    </button>
  )
}
