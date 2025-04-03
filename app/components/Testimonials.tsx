"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const testimonials = [
  {
    quote:
      "Samsom is an exceptional developer who transformed our outdated systems into a modern, efficient platform. His deep knowledge of Java and Spring Boot helped us reduce load times by 40% while improving reliability.",
    name: "David Chen",
    title: "CTO, FinTech Solutions",
    image: "/placeholder.svg?height=100&width=100&text=DC",
  },
  {
    quote:
      "Working with Samsom on our microservices migration was a game-changer. He not only delivered high-quality code but also educated our team on best practices. His ability to simplify complex concepts made the transition smooth.",
    name: "Sarah Johnson",
    title: "Engineering Manager, RetailConnect",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    quote:
      "Samsom's technical expertise is matched only by his collaborative approach. He quickly integrated with our team and took ownership of critical components. His solutions are always well-architected and forward-thinking.",
    name: "Michael Rodriguez",
    title: "Lead Developer, HealthTech Innovations",
    image: "/placeholder.svg?height=100&width=100&text=MR",
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="What People Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-blue-100 dark:text-blue-900" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-400 to-purple-500">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

