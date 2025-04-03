"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const blogPosts = [
  {
    title: "Microservices vs. Monoliths: Making the Right Architecture Choice",
    excerpt:
      "Exploring the trade-offs between microservices and monolithic architectures. When should you choose one over the other, and how to make a smooth transition?",
    date: "March 15, 2025",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    url: "#",
  },
  {
    title: "The Rise of WebAssembly: Beyond JavaScript Performance",
    excerpt:
      "WebAssembly is changing how we think about web performance. Discover how this technology enables near-native speed for complex applications in the browser.",
    date: "February 28, 2025",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    url: "#",
  },
  {
    title: "Implementing Effective Caching Strategies in Spring Boot",
    excerpt:
      "Learn how to leverage Spring Boot's caching capabilities to significantly improve application performance. From basic implementations to advanced patterns.",
    date: "January 20, 2025",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    url: "#",
  },
]

export default function BlogInsights() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const handlePlayVideo = (index: number) => {
    setPlayingVideo(index)
  }

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="Tech Insights & Blog" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 relative">
                {playingVideo === index ? (
                  <video
                    src={post.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <div className="relative w-full h-full bg-gradient-to-r from-blue-400 to-purple-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handlePlayVideo(index)}
                        className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                        aria-label="Play video"
                      >
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      1:05
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={post.url}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

