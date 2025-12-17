"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to transform your business with AI automation? Let's discuss how we can
          help you achieve your goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black">Email</div>
                  <div className="text-gray-600">contact@automateflow.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black">Address</div>
                  <div className="text-gray-600">
                    123 Automation Street
                    <br />
                    San Francisco, CA 94105
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custom Solution CTA */}
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gray-700 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-white">
                Need a Custom AI Solution?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-6">
                Our products can be fully customized to match your specific business
                requirements. We also build completely bespoke AI agents for unique use
                cases.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                  Request Custom Solution
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

