import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assest.js";

function Home() {
  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "Python",
    "SQL",
    "Machine Learning",
    "Data Science",
    "Generative AI",
    "LLM",
    "RAG",
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "Hugging Face",
    "Prompt Engineering",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "PyTorch",
    "XGBoost",
    "LightGBM",
    "CatBoost",
    "CNN",
    "RNN",
    "ANN",
    "GPT",
    "BERT",
    "Transformers",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "React Redux",
    "REST API",
    "JWT",
    "Tailwind CSS",
    "Flask",
    "MySQL",
    "PostgreSQL",
    "Cloudinary",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "AWS",
    "Vercel",
    "Render",
    "Railway",
    "SEO",
    "Technical SEO",
    "Google Search Console",
    "Google Analytics",
    "Google Ads",
    "Meta Ads",
    "Website Optimization",
    "Responsive Design",
    "System Design",
    "DBMS",
    "Operating Systems",
    "OOP",
    "DSA",
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* Left Side */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <p className="text-blue-400 font-semibold mb-3 text-sm sm:text-base">
              Full Stack Developer • Data Science Enthusiast
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-500">Sachin</span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl mt-4 text-slate-300">
              MERN Stack Developer | Data Science & AI Learner
            </h2>

            <p className="mt-6 text-slate-300 leading-7 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Passionate developer with expertise in React.js, Node.js,
              Express.js, MongoDB, JavaScript, Python, SQL, Machine
              Learning, and Data Analysis. I enjoy building scalable web
              applications and leveraging data to solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              >
                View Projects
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
              >
                About Me
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-green-500 rounded-lg hover:bg-green-600 transition duration-300 text-center"
              >
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-slate-800 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-500">15+</h3>
                <p className="text-slate-400">Projects</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-green-500">2+</h3>
                <p className="text-slate-400">Years Learning</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h3 className="text-3xl font-bold text-purple-500">50+</h3>
                <p className="text-slate-400">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">

              <img
                src={assets.logo}
                alt="Sachin"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
              />

              <div className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 bg-blue-600 px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm sm:text-base font-semibold">
                  Available for Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800 border border-blue-500 rounded-full text-xs sm:text-sm hover:bg-blue-600 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        
        {/* Expertise Section */}
<div className="mt-24">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    My Expertise
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    {/* Full Stack */}
    <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
        Full Stack Development
      </h3>

      <p className="text-slate-300 leading-7">
        Building responsive and scalable web applications using React.js,
        Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, and modern
        development practices.
      </p>
    </div>

    {/* SEO */}
    <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4">
        SEO Optimization
      </h3>

      <p className="text-slate-300 leading-7">
        Technical SEO, On-Page SEO, Keyword Research, Google Search Console,
        website audits, content optimization, and performance improvements
        to increase organic traffic.
      </p>
    </div>

    {/* Google Ads */}
    <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
        Google Ads & Marketing
      </h3>

      <p className="text-slate-300 leading-7">
        Managing Google Ads campaigns, conversion tracking, audience
        targeting, lead generation, ROI optimization, and digital
        marketing strategies.
      </p>
    </div>

    {/* Data Science */}
    <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">
        Data Science
      </h3>

      <p className="text-slate-300 leading-7">
        Data analysis, visualization, statistical modeling, business
        intelligence, and insights generation using Python, Pandas,
        NumPy, and Matplotlib.
      </p>
    </div>

    {/* Machine Learning */}
    <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">
        Machine Learning
      </h3>

      <p className="text-slate-300 leading-7">
        Building predictive models using Scikit-learn, TensorFlow,
        PyTorch, XGBoost, and Deep Learning techniques for intelligent
        automation and forecasting.
      </p>
    </div>

    {/* Generative AI */}
    <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4">
        Generative AI
      </h3>

      <p className="text-slate-300 leading-7">
        Developing AI-powered applications using GPT, OpenAI APIs,
        Transformers, Prompt Engineering, and workflow automation
        systems.
      </p>
    </div>

    {/* LLM & RAG */}
    <div className="bg-slate-800 p-6 rounded-xl md:col-span-2 xl:col-span-3 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
        LLM & RAG Applications
      </h3>

      <p className="text-slate-300 leading-7">
        Building AI assistants, chatbots, and enterprise knowledge systems
        using Large Language Models (LLMs), Retrieval-Augmented Generation
        (RAG), LangChain, LangGraph, Vector Databases, Embeddings, and AI
        Agents for accurate and context-aware responses.
      </p>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}

export default Home;