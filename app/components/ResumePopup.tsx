"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X, FileText, Download, Briefcase, GraduationCap, Code, MapPin, Phone, Mail } from "lucide-react"

export default function ResumePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const openResume = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeResume = () => {
    setIsOpen(false)
    document.body.style.overflow = "" // Re-enable scrolling
  }

  const ResumeModal = () => (
    <div
      className="fixed inset-0 flex items-center justify-center z-[999999]"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90"
        onClick={closeResume}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Modal */}
      <div
        className="w-[95vw] h-[95vh] max-w-7xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col relative z-[1000000]"
        style={{ position: "relative" }}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-600 to-teal-600 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <FileText className="w-6 h-6 mr-2" /> Samsom Michael - Resume
          </h2>
          <div className="flex gap-2">
            <button
              className="bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => window.open("/resume.pdf", "_blank")}
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              className="bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={closeResume}
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Samsom Michael</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">Software Engineer, Full Stack</p>
              <div className="flex flex-wrap justify-center gap-4 mt-3 text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Seattle, WA 98118
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" /> +1 (206) 489-9859
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" /> c.sammichael1@gmail.com
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Professional Summary
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Experienced Software Developer with expertise in designing, developing, and implementing scalable and
                high-performance software solutions. Proficient in Java, Spring, MySQL, and JavaScript, with a strong
                foundation in C++. Skilled in full-stack development, system architecture, and optimizing application
                performance. Adept at collaborating with cross-functional teams to deliver innovative and efficient
                solutions.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" /> Professional Experience
              </h2>

              <div className="mb-8 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                  Software Engineer, Full Stack
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                  📍 Banno (Jack Henry & Associates) – Remote | 🗓️ Feb 2024 – Present
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Developed and maintained front-end applications using Angular, HTML5, CSS3, and Bootstrap.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Built scalable back-end services with Spring Boot, Hibernate, and RESTful APIs.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Integrated Kafka for real-time messaging, reducing system latency by 30%.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Managed CI/CD pipelines with Jenkins and Git, ensuring smooth deployments.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Containerized applications using Docker and deployed them on AWS using Kubernetes, reducing
                    deployment time by 40%.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Secured applications with Spring Security and OAuth, lowering security risks by 30%.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full">
                    Monitored system performance using Splunk for proactive issue detection.
                  </li>
                </ul>
                <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Tech Stack:</span> Java, Spring Boot, Spring MVC, Hibernate, RESTful
                    APIs, Kafka, Microservices, Angular, React, Bootstrap, JavaScript, Git, Jenkins, Maven, Kubernetes,
                    AWS, JUnit, Spring Security, OAuth, Docker, PostgreSQL, Redis, Elasticsearch.
                  </p>
                </div>
              </div>

              <div className="mb-8 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Java Developer</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                  📍 Ministry of Tourism – Asmara, Eritrea | 🗓️ Mar 2020 – June 2022
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-green-500 before:rounded-full">
                    Developed and maintained RESTful applications using Spring Boot and Spring MVC.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-green-500 before:rounded-full">
                    Optimized database queries in MySQL, reducing query execution time by 35%.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-green-500 before:rounded-full">
                    Implemented Kafka for real-time data streaming, improving system reliability.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-green-500 before:rounded-full">
                    Built front-end components with React, HTML, CSS, and Bootstrap.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-green-500 before:rounded-full">
                    Deployed applications on AWS using EC2 and S3, improving performance.
                  </li>
                </ul>
                <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Tech Stack:</span> Java, Spring Boot, Spring MVC, RESTful APIs,
                    Kafka, React, Bootstrap, MySQL, AWS (EC2, S3), Docker, Git, JUnit.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Software Developer</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                  📍 Commercial Bank of Eritrea – Asmara, Eritrea | 🗓️ Nov 2017 – Nov 2019
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full">
                    Built and maintained Java-based applications with Spring Boot and Hibernate/JPA.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full">
                    Developed RESTful APIs, improving API response time by 30%.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full">
                    Implemented a system audit using AOP for logging and security monitoring.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full">
                    Integrated Kafka for reliable message processing.
                  </li>
                  <li className="pl-5 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full">
                    Deployed applications on Azure using Azure App Services.
                  </li>
                </ul>
                <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Tech Stack:</span> Java, Spring Boot, Hibernate, RESTful APIs, AOP,
                    Kafka, React, Bootstrap, Azure, MySQL, Docker, Git.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" /> Education
              </h2>

              <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                    Master of Science in Computer Science
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Aug 2023 - December 2024</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Maharishi International University - Fairfield, Iowa
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white">Bachelor of Science</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Sept 2011 - June 2017</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Eritrean Institute of Technology - Mai Nefhi, Eritrea
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" /> Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2 text-lg">Programming Languages</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">Java, C++, SQL, JavaScript ES6</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2 text-lg">Backend Development</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">Spring Framework, J2EE, Microservices</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2 text-lg">Databases</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">Oracle, MySQL, PostgreSQL, MongoDB</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2 text-lg">Frontend Development</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">React, Angular, HTML5, CSS3</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2 text-lg">Cloud & DevOps</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">AWS, Docker, Kubernetes, Jenkins</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2 text-lg">
                    Version Control & Methodology
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">Git, Agile, Scrum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Resume Button */}
      <button
        onClick={openResume}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Resume
        <FileText className="w-4 h-4" />
      </button>

      {/* Portal for Resume Modal */}
      {mounted && isOpen && createPortal(<ResumeModal />, document.body)}
    </>
  )
}

