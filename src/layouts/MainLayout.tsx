import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-[920px] mx-auto max-w-full md:pt-10 pt-4 px-4 pb-10">
        {children}
      </div>
      <Footer />
    </>
  )
}