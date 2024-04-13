import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-600 text-white flex flex-col p-3 py-5 gap-4">
      <span className="uppercase font-bold">&copy; pasaportes méxicanos</span>
      <Link
        to="/tyc"
        className="text-white text-sm hover:underline"
      >
        Terminos y condiciones
      </Link>
    </footer>
  )
}