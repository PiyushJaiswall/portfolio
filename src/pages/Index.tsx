
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Certificates } from '@/components/Certificates'
import { ContactMe } from '@/components/ContactMe'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <ContactMe />
    </div>
  )
}

export default Index
