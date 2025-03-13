"use client"

import type React from "react"
import { useState } from "react"
import { Send, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          isUkrainian: true, // Add a flag to indicate this is from the Ukrainian form
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Не вдалося надіслати повідомлення")
      }

      console.log("Form submitted successfully:", result)
      setSubmitted(true)
      setFormData({ name: "", email: "", projectType: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setError(
        error instanceof Error ? error.message : "Не вдалося надіслати повідомлення. Будь ласка, спробуйте пізніше.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="pt-6">
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-800 text-red-300">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Помилка</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {submitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium text-gray-100 mb-2">Повідомлення надіслано!</h3>
            <p className="text-gray-400">Дякую за звернення. Я зв'яжуся з вами якнайшвидше.</p>
            <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
              Надіслати інше повідомлення
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ім'я</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ваше ім'я"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Електронна пошта</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ваша.пошта@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType">Тип проекту</Label>
              <Select value={formData.projectType} onValueChange={handleSelectChange} required>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Виберіть тип проекту" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Веб-сайт</SelectItem>
                  <SelectItem value="app">Додаток</SelectItem>
                  <SelectItem value="game">Гра</SelectItem>
                  <SelectItem value="other">Інше</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Повідомлення</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Опишіть ваш проект..."
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-700 border-gray-600"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Надсилання...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Надіслати повідомлення
                </span>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

