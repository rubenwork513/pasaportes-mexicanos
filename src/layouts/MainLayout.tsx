import { cn } from "@/lib/utils"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function MainLayout({ children, className }: Props) {
  return (
    <>
      <Navbar />
      <div className={cn(
        "w-[940px] mx-auto max-w-full md:pt-10 pt-4 px-4 pb-10 min-h-[calc(75vh)]", className
      )}>
        {children}
      </div>
      <Footer />
    </>
  )
}