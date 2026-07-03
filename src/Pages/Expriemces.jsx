import React from "react";
import {
  Briefcase,
  Brain,
  Code2,
  Calendar,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      icon: <Briefcase size={28} />,
      role: "Web Developer & SEO Executive",
      company: "Buildnex Web Technology",
      duration: "2025 - Present",
      color: "text-blue-400",
      description:
        "Developing responsive web applications, optimizing website performance, implementing SEO strategies, managing Google Ads campaigns, and improving online visibility for businesses.",
    },
    {
      icon: <Code2 size={28} />,
      role: "MERN Stack Developer",
      company: "Personal & Freelance Projects",
      duration: "2024 - Present",
      color: "text-green-400",
      description:
        "Built full-stack applications using React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Payment Gateway Integration, and responsive UI design.",
    },
    {
      icon: <Brain size={28} />,
      role: "AI, Machine Learning & Data Science",
      company: "Self Learning & Projects",
      duration: "2024 - Present",
      color: "text-purple-400",
      description:
        "Working on Machine Learning, Deep Learning, Data Science, Generative AI, LLMs, RAG Applications, LangChain, LangGraph, and AI-powered solutions using Python.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium">
            My Professional Journey
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Experience
          </h1>

          <p className="text-slate-400 max-w-3xl mx-auto">
            My journey in Full Stack Development, SEO, Digital Marketing,
            Artificial Intelligence, Machine Learning, and modern web
            technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 relative">
              
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-2 w-8 h-8 rounded-full bg-slate-800 border-4 border-blue-500 flex items-center justify-center">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-slate-800/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
                
                <h2 className={`text-2xl font-bold ${exp.color}`}>
                  {exp.role}
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3 text-slate-300">
                  <span className="font-medium">
                    {exp.company}
                  </span>

                  <span className="hidden sm:block">•</span>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-slate-400 leading-7 mt-5">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          
          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">15+</h3>
            <p className="text-slate-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-green-400">50+</h3>
            <p className="text-slate-400 mt-2">
              Technologies Learned
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-purple-400">5+</h3>
            <p className="text-slate-400 mt-2">
              Domains Expertise
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;