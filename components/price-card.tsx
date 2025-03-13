import { Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PriceCardProps {
  title: string
  price: string
  description: string
  note: string
  features: string[]
}

export default function PriceCard({ title, price, description, note, features }: PriceCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-center">{title}</CardTitle>
        <div className="text-3xl font-bold text-center text-primary mt-2">{price}</div>
        <p className="text-sm text-gray-400 text-center mt-1">{note}</p>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-300 text-center mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}

