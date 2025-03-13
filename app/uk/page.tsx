import { Download } from "lucide-react"
import Link from "next/link"
import LanguageSwitcher from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import SkillBar from "@/components/skill-bar"
import PriceCard from "@/components/price-card"
import ContactForm from "@/components/contact-form-uk"

export default function HomeUkrainian() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/uk" className="text-xl font-bold text-white">
              <span className="text-primary">DevKkurs</span>Portfolio
            </Link>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <Link href="#home" className="hover:text-primary transition-colors">
                      Головна
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="hover:text-primary transition-colors">
                      Про мене
                    </Link>
                  </li>
                  <li>
                    <Link href="#skills" className="hover:text-primary transition-colors">
                      Що я вмію?
                    </Link>
                  </li>
                  <li>
                    <Link href="#prices" className="hover:text-primary transition-colors">
                      Ціни
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-primary transition-colors">
                      Контакти
                    </Link>
                  </li>
                </ul>
              </nav>
              <Button variant="outline" size="sm" className="md:hidden">
                Меню
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
                  <span className="text-primary">Фріланс</span> Розробник
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Створюю сучасні, професійні веб-сайти, додатки та ігри, адаптовані під ваші потреби.
                </p>
                <Button className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Завантажити Портфоліо
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1iima2k5m17er10ud170ntsg1fdml.jpeg"
                    alt="Робоче місце розробника"
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
              Про <span className="text-primary">Мене</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=M3wxNDIxMjd8MHwxfGFsbHx8fHx8fHx8fDE3MTk4NTY2OTh8&ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=500&fit=max" alt="Портрет розробника" className="w-full h-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  Я пристрасний фріланс-розробник з великим досвідом створення веб-сайтів, додатків та ігор. Мій шлях у
                  програмуванні почався понад 3 років тому, і з того часу я опанував різні технології та фреймворки.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Я спеціалізуюся на створенні чистих, ефективних та зручних рішень, які не тільки чудово виглядають,
                  але й відмінно працюють. Мій підхід поєднує технічну експертизу з творчим вирішенням проблем для
                  реалізації проектів, що перевершують очікування.
                </p>
                <p className="text-lg text-gray-300">
                  Незалежно від того, чи вам потрібен простий веб-сайт, складний додаток чи захоплююча гра, я
                  зобов'язуюсь надавати високоякісну роботу, яка відповідає вашому баченню та вимогам.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Що я <span className="text-primary">Вмію?</span>
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
              Мої <span className="text-primary">Ціни</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PriceCard
                title="Веб-сайти"
                price="$15+"
                description="Професійні веб-сайти, адаптовані під ваші потреби"
                note="Ціна обговорюється"
                features={["Адаптивний дизайн", "SEO оптимізація", "Сучасний UI/UX", "Швидке завантаження"]}
              />
              <PriceCard
                title="Додатки"
                price="$20+"
                description="Індивідуальні додатки для різних платформ"
                note="Ціна обговорюється"
                features={["Кросплатформеність", "Зручність використання", "Масштабованість", "Підтримка"]}
              />
              <PriceCard
                title="Ігри"
                price="$25+"
                description="Захоплюючі ігри для різних платформ"
                note="Ціна обговорюється"
                features={[
                  "Індивідуальна механіка",
                  "Захоплюючий геймплей",
                  "Оптимізована продуктивність",
                  "Якісні ресурси",
                ]}
              />
              <PriceCard
                title="Інше"
                price="Обговорюється"
                description="Індивідуальні рішення для унікальних вимог"
                note="Залежить від запиту"
                features={["Індивідуальний підхід", "Гнучкий обсяг", "Індивідуальні функції", "Постійна підтримка"]}
              />
            </div>
            <div className="mt-10 text-center text-gray-400">
              <p>Усі ціни гнучкі та можуть змінюватися залежно від вимог проекту.</p>
              <p>Зв'яжіться зі мною для отримання персоналізованої пропозиції на основі ваших конкретних потреб.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Зв'язатися <span className="text-primary">Зі Мною</span>
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
              <Link href="/uk" className="text-xl font-bold text-white">
                <span className="text-primary">DevKkurs</span>Portfolio
              </Link>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Усі права захищені.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

