import { Download } from "lucide-react"
import Link from "next/link"
import LanguageSwitcher from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import SkillBar from "@/components/skill-bar"
import PriceCard from "@/components/price-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">
              <span className="text-primary">DevKkurs</span>Portfolio
            </Link>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <Link href="#home" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="hover:text-primary transition-colors">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link href="#skills" className="hover:text-primary transition-colors">
                      What I Can Do?
                    </Link>
                  </li>
                  <li>
                    <Link href="#prices" className="hover:text-primary transition-colors">
                      Prices
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <Button variant="outline" size="sm" className="md:hidden">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-primary">Freelance</span> Developer
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Creating modern, professional websites, applications, and games tailored to your needs.
                </p>
                <Button className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Portfolio
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1iima2k5m17er10ud170ntsg1fdml.jpeg"
                    alt="Developer workspace"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=M3wxNDIxMjd8MHwxfGFsbHx8fHx8fHx8fDE3MTk4NTY2OTh8&ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=500&fit=max" alt="Developer portrait" className="w-full h-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate freelance developer with extensive experience in creating websites, applications, and
                  games. My journey in programming began over 3 years ago, and since then, I've mastered various
                  technologies and frameworks.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I specialize in creating clean, efficient, and user-friendly solutions that not only look great but
                  also perform exceptionally well. My approach combines technical expertise with creative
                  problem-solving to deliver projects that exceed expectations.
                </p>
                <p className="text-lg text-gray-300">
                  Whether you need a simple website, a complex application, or an engaging game, I'm committed to
                  delivering high-quality work that aligns with your vision and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What I <span className="text-primary">Can Do?</span>
            </h2>
            <div className="grid gap-6 max-w-3xl mx-auto">
              <SkillBar name="HTML" percentage={100} />
              <SkillBar name="CSS" percentage={100} />
              <SkillBar name="JavaScript (JS)" percentage={100} />
              <SkillBar name="PHP" percentage={97} />
              <SkillBar name="TypeScript (TS)" percentage={100} />
              <SkillBar name="Python" percentage={95} />
              <SkillBar name="C++" percentage={90} />
              <SkillBar name="Java" percentage={60} />
              <SkillBar name="C#" percentage={85} />
              <SkillBar name="Roblox Studio" percentage={100} />
              <SkillBar name="Unity" percentage={90} />
            </div>
          </div>
        </section>

        {/* Prices Section */}
        <section id="prices" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My <span className="text-primary">Prices</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PriceCard
                title="Websites"
                price="$15+"
                description="Professional websites tailored to your needs"
                note="Price negotiable"
                features={["Responsive design", "SEO optimization", "Modern UI/UX", "Fast loading"]}
              />
              <PriceCard
                title="Applications"
                price="$20+"
                description="Custom applications for various platforms"
                note="Price negotiable"
                features={["Cross-platform", "User-friendly", "Scalable", "Maintenance"]}
              />
              <PriceCard
                title="Games"
                price="$25+"
                description="Engaging games for different platforms"
                note="Price negotiable"
                features={["Custom mechanics", "Engaging gameplay", "Optimized performance", "Quality assets"]}
              />
              <PriceCard
                title="Other"
                price="Negotiable"
                description="Custom solutions for unique requirements"
                note="Depends on the request"
                features={["Tailored approach", "Flexible scope", "Custom features", "Ongoing support"]}
              />
            </div>
            <div className="mt-10 text-center text-gray-400">
              <p>All prices are flexible and can change depending on project requirements.</p>
              <p>Contact me for a personalized quote based on your specific needs.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-white">
                <span className="text-primary">Dev</span>Portfolio
              </Link>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

