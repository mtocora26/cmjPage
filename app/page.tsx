import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProposalsSection } from "@/components/proposals-section"
import { WhyCMJSection } from "@/components/why-cmj-section"
import { Footer } from "@/components/footer"
import { BallotSection } from "@/components/ballot-section"
import { CountdownSection } from "@/components/countdown-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BallotSection />
      <ProposalsSection />
      <WhyCMJSection />
      <CountdownSection />
      <Footer />
    </main>
  )
}
