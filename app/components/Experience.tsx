"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Banno (Jack Henry & Associates)",
      location: "Remote",
      period: "Feb 2024 - Present",
      role: "Software Engineer, Full Stack",
      responsibilities: [
        "Developed and maintained front-end applications using Angular, HTML5, CSS3, and Bootstrap.",
        "Built scalable back-end services with Spring Boot, Hibernate, and RESTful APIs.",
        "Integrated Kafka for real-time messaging, reducing system latency by 30%.",
        "Managed CI/CD pipelines with Jenkins and Git, ensuring smooth deployments.",
        "Containerized applications using Docker and deployed them on AWS using Kubernetes, reducing deployment time by 40%.",
        "Secured applications with Spring Security and OAuth, lowering security risks by 30%.",
        "Monitored system performance using Splunk for proactive issue detection.",
      ],
      techStack:
        "Java, Spring Boot, Spring MVC, Hibernate, RESTful APIs, Kafka, Microservices, Angular, React, Bootstrap, JavaScript, Git, Jenkins, Maven, Kubernetes, AWS, JUnit, Spring Security, OAuth, Docker, PostgreSQL, Redis, Elasticsearch.",
    },
    {
      company: "Ministry of Tourism",
      location: "Asmara, Eritrea",
      period: "Mar 2020 - June 2022",
      role: "Java Developer",
      responsibilities: [
        "Developed and maintained RESTful applications using Spring Boot and Spring MVC.",
        "Optimized database queries in MySQL, reducing query execution time by 35%.",
        "Implemented Kafka for real-time data streaming, improving system reliability.",
        "Built front-end components with React, HTML, CSS, and Bootstrap.",
        "Deployed applications on AWS using EC2 and S3, improving performance.",
      ],
      techStack:
        "Java, Spring Boot, Spring MVC, RESTful APIs, Kafka, React, Bootstrap, MySQL, AWS (EC2, S3), Docker, Git, JUnit.",
    },
    {
      company: "Commercial bank of Eritrea",
      location: "Asmara, Eritrea",
      period: "Nov 2017 - Nov 2019",
      role: "Software Developer",
      responsibilities: [
        "Built and maintained Java-based applications with Spring Boot and Hibernate/JPA.",
        "Developed RESTful APIs, improving API response time by 30%.",
        "Implemented a system audit using AOP for logging and security monitoring.",
        "Integrated Kafka for reliable message processing.",
        "Deployed applications on Azure using Azure App Services.",
      ],
      techStack: "Java, Spring Boot, Hibernate, RESTful APIs, AOP, Kafka, React, Bootstrap, Azure, MySQL, Docker, Git.",
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="space-y-3 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className={`pl-5 relative text-gray-700 dark:text-gray-300 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full ${
                        index === 0
                          ? "before:bg-blue-500"
                          : index === 1
                            ? "before:bg-green-500"
                            : "before:bg-purple-500"
                      }`}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-4 p-3 rounded-lg text-sm ${
                    index === 0
                      ? "bg-blue-50 dark:bg-blue-900/20"
                      : index === 1
                        ? "bg-green-50 dark:bg-green-900/20"
                        : "bg-purple-50 dark:bg-purple-900/20"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Tech Stack:</span> {exp.techStack}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

