import Hero from "@/shared/components/hero"
import Header from "@/shared/components/header"

export default function Dashboard() {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <Header />
      <Hero />
    </div>
  )
}