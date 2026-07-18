
import React from "react";
import { assets } from "../assets/assest.js";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "TriScan – Automated Medical Imaging Classification System",
      description:
        "TriScaner is an AI-powered medical imaging platform that detects bone fractures, brain tumors, kidney stones, chest diseases and more with high accuracy.",
      image: assets.Triscaner,
      technologies: ["React.js", "JavaScript", "Python", "Flask" ,"TensorFlow", "Keras", "CNN", "NumPy", "Transfer Learning",  "Git", "GitHub", "Google Colab", "Google Drive","Vercel", "Railway", "VS Code","SEO" ,"Google Search Console"],
      github: "https://github.com/Sachin6389/FULL-STACK/tree/main/HimanshuComputerServices",
      live: "https://triscaner-ai.vercel.app/",
    },
    {
      id: 2,
      title: "AI Customer Support Assistant",
      description:
        "An AI-powered customer support assistant that provides instant responses to user queries and helps resolve issues efficiently.",
      image: assets.AiCustomerSupport,
      technologies: ["React.js","JavaScript",  "Tailwind CSS", "Python","Flask","Flask-CORS","Python-Dotenv","LLM", "React Markdown " ,"Remark GFM" ,"Axios" ,"LangChain" ,"LangChain-Groq"," Groq API"," Gunicorn","Prompt Engineering", "Vercel", "Render"],
      github: "https://github.com/Sachin6389/AI-Customer-Support-Assistant",
      live: "https://ai-customer-support-assistant-zeta.vercel.app/",
    },
    
    {
      id: 3,
      title: "Buildnex Web Application",
      description:
        "Buildnex Web Technologies is a professional web development company and website development company providing modern web development services, custom website design services, and scalable digital solutions for startups, businesses, and ecommerce brands.",
      image: assets.Buildnex,
      technologies: ["React.js", "MongoDB", "JavaScript", "SEO" , "Google Search Console", "Tailwind CSS", "Vercel"],
      github: "https://github.com/teambuildnex-star/Buildnex.Web",
      live: "https://www.buildnexwebtechnologies.in/",
    },
    {
      id: 4,
      title: " Abhi Photography & Digital Studio",
      description:
        "A full-stack MERN photography and digital studio website that allows users to view portfolios, book sessions, and make payments online.",
      image: assets.AbhiPhotography,
      technologies: ["React.js", "MongoDB", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "JWT", "Cloudinary", "Redux", "Stripe", "Razorpay", "Vercel", "Render","SEO" ,"Google Search Console"],
      github: "https://github.com/Sachin6389/Abhi_Photography_and_Digital_Studio",
      live: "https://abhi-photography-and-digital-studio.vercel.app/",
    },
    {
      id: 5,
      title: "Task Manager",
      description:
        "A full-stack MERN task management application that allows users to create, update, and delete tasks, set priorities, and track progress in real-time.",
      image: assets.Task,
      technologies: ["React.js", "MongoDB", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "JWT",  "Redux", "Vercel", "Render",],
      github: "https://github.com/Sachin6389/task_manger",
      live: "https://task-manger-navy.vercel.app/",
    },
     {
      id: 6,
      title: "AI Chat Assistant",
      description:
        " A full-stack MERN AI chat assistant that allows users to interact with an AI-powered chatbot for various tasks and information retrieval.",
      image: assets.AiChatAssistant,
      technologies: ["React.js","JavaScript",  "Tailwind CSS", "Python","Flask","Flask-CORS","Python-Dotenv","LLM","Prompt Engineering","Groq", "Vercel", "Render"],
      github: "https://github.com/Sachin6389/ai-chat-assistant ",
      live: "https://ai-chat-assistant-dusky.vercel.app/",
    },
    {
      id: 7,
      title: "E-Commerce Website For Laptop Store",
      description:
        "A full-stack MERN e-commerce platform with authentication, cart, orders, order-status and payment integration.",
      image: assets.LaptopStore,
      technologies: ["React.js", "MongoDB", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "JWT", "Cloudinary", "Redux", "Stripe", "Razorpay", "Vercel", "Render","SEO" ,"Google Search Console"],
      github: "https://github.com/Sachin6389/FULL-STACK/tree/main/HimanshuComputerServices",
      live: "https://himanshucomputerservicescom.vercel.app/",
    },
    {
      id: 8,
      title: "Admin Panel for Laptop-Store",
      description:
        "Built a user-friendly admin system that helps businesses easily manage products, track inventory, monitor orders, and oversee deliveries from a single dashboard..",
      image: assets.AdminPanelLaptop,
      technologies: ["React.js", "MongoDB", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "JWT" , "Redux","Cloudinary",  "Vercel", "Render"],
      github: "https://github.com/Sachin6389/FULL-STACK/tree/main/HimanshuPannel",
      live: "https://himanshupannelcom.vercel.app/products",
    },
    
     {
      id: 9,
      title: "credit Score prediction based on financial data",
      description:
        "A machine learning model that predicts credit scores based on financial data, helping lenders assess the creditworthiness of applicants and make informed lending decisions.",
      image: assets.CreditScore,
      technologies: ["React.js",  "JavaScript", "python", "flask", "Tailwind CSS", "flask-cors",  "pandas","numpy","Scikit-learn", "joblib","machine learning","gunicorn", "matplotlib", "Vercel", "Render",],
      github: "https://github.com/Sachin6389/credit_score_predict",
      live: "https://creditscorepredict.vercel.app/",
    },
     
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            My Projects
          </h1>

          <p className="text-slate-200 mt-4 text-lg">
           Here are some projects I have built across Web Development, SEO Optimization, Google Ads Campaign Management, Data Science, Machine Learning, and AI-powered applications using MERN Stack, JavaScript, Python, and modern technologies to solve real-world business problems and drive measurable results.
          </p>

          <div className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-full">
            Total Projects: {projects.length}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h2>

                <p className="text-slate-300 text-sm leading-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-blue-500 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              {projects.length}+
            </h3>
            <p className="text-slate-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-green-500">
              5+
            </h3>
            <p className="text-slate-400 mt-2">
              Live Projects
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-500">
              10+
            </h3>
            <p className="text-slate-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-purple-500">
              100%
            </h3>
            <p className="text-slate-400 mt-2">
              Responsive Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

