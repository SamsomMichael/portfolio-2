"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Workflow, Cloud } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Code,
    name: "Programming Languages",
    tech: "Java, C++, SQL, JavaScript ES6",
    description: "Proficient in core Java (8/11/17), C++, SQL, and modern JavaScript.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Backend Development",
    tech: "Spring Framework, J2EE, Microservices",
    description: "Expertise in Spring (MVC, Boot, Security, Data), J2EE technologies, and Microservices architecture.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Databases",
    tech: "Oracle, MySQL, PostgreSQL, MongoDB",
    description: "Skilled in various relational and NoSQL databases, including Oracle, MySQL, PostgreSQL, and MongoDB.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "Frontend Development",
    tech: "React, Angular, HTML5, CSS3",
    description:
      "Experience with modern frontend frameworks and technologies like React, Angular, and responsive design.",
    color: "text-pink-500",
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    tech: "AWS, Docker, Kubernetes, Jenkins",
    description:
      "Proficient in cloud services (AWS), containerization (Docker), orchestration (Kubernetes), and CI/CD (Jenkins).",
    color: "text-orange-500",
  },
  {
    icon: GitBranch,
    name: "Version Control & Methodology",
    tech: "Git, Agile, Scrum",
    description: "Experienced with Git for version control and Agile methodologies for project management.",
    color: "text-yellow-500",
  },
  {
    icon: Terminal,
    name: "Testing & Quality Assurance",
    tech: "JUnit, MSTest, NUnit",
    description: "Skilled in implementing unit testing frameworks to ensure code reliability and quality.",
    color: "text-indigo-500",
  },
  {
    icon: Layers,
    name: "Web Services & APIs",
    tech: "REST, SOAP, Microservices",
    description: "Proficient in designing and implementing RESTful APIs and microservices architecture.",
    color: "text-red-500",
  },
  {
    icon: Cpu,
    name: "Development Tools",
    tech: "IntelliJ, Eclipse, Visual Studio",
    description: "Experienced with various IDEs and development tools for efficient coding and debugging.",
    color: "text-teal-500",
  },
  {
    icon: Workflow,
    name: "Other Technologies",
    tech: "Node.js, Express.js, GraphQL",
    description:
      "Familiar with additional technologies like Node.js, Express.js, and GraphQL for diverse project requirements.",
    color: "text-cyan-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

