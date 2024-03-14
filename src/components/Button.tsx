import clsx from "clsx"

interface ButtonProps {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary" | "tertiary" | "danger"
}

export default function Button({ label, onClick, variant }: ButtonProps) {
  return (
    <div
      className={clsx(
        "md:p-4 p-2 flex justify-center items-center bg-green-200 rounded-md hover:shadow-black/10 shadow-xl shadow-transparent hover:cursor-pointer transition-shadow duration-300",
        variant === "primary" && "bg-green-200",
        variant === "secondary" && "bg-white ",
        variant === "tertiary" && "bg-gray-100",
        variant === "danger" && "bg-red-200"
      )}
      onClick={onClick}
    >
      {label}
    </div>
  )
}
