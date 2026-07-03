import React from "react";
import { assets } from "../assets/assest.js";
import {
  Mail,
  Phone,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Brain,
  MapPin,
} from "lucide-react";

function About() {
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
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Full Stack Developer, AI Enthusiast, SEO Specialist, and Data
            Science Learner passionate about building scalable applications and
            solving real-world problems through technology.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={assets.logo}
                alt="Sachin"
                className="w-72 sm:w-80 md:w-[420px] rounded-3xl shadow-2xl border-4 border-slate-700 object-cover"
              />

              <div className="absolute -bottom-4 -right-4 bg-blue-600 px-4 py-2 rounded-xl shadow-lg">
                <p className="font-semibold">Full Stack Developer with AI/ML and Data Science</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, I'm Sachin 👋
            </h2>

            <p className="text-slate-300 leading-8 mb-4">
              I am a passionate Full Stack Developer specializing in the MERN
              Stack (MongoDB, Express.js, React.js, Node.js). I hold a B.Tech
              Engineering degree from Dr. A. P. J. Abdul Kalam Technical University, Lucknow and enjoy creating modern,
              responsive, and scalable web applications.
            </p>

            <p className="text-slate-300 leading-8 mb-6">
              Currently, I am working at Buildnex Web Technologies, where I
              contribute to web development, SEO optimization, and digital
              marketing solutions. Alongside my professional work, I am actively
              learning Artificial Intelligence, Machine Learning, Large Language
              Models (LLMs), and Retrieval-Augmented Generation (RAG)
              applications to build intelligent AI-powered products.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <GraduationCap className="text-blue-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Education</p>
                  <p className="font-medium">B.Tech Engineering (Dr. A. P. J. Abdul Kalam Technical University, Lucknow)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Briefcase className="text-green-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Current Company</p>
                  <p className="font-medium">Buildnex Web Technologies </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Brain className="text-purple-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Learning</p>
                  <p className="font-medium">LLM & RAG Applications</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <MapPin className="text-red-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">
                    Azamgarh, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Phone className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a
                    href="tel:+916389409135"
                    className="font-medium hover:text-blue-400"
                  >
                    +91 6389409135
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <MessageCircle className="text-green-500" size={24} />
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <a
                    href="https://wa.me/916389409135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-green-400"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Mail className="text-yellow-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:sachingond058@gmail.com"
                    className="font-medium hover:text-blue-400 break-all"
                  >
                    sachingond058@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Skills & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-blue-600/90 hover:bg-blue-700 transition-all duration-300 text-sm font-medium shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Let's Build Something Amazing Together 🚀
          </h3>

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Whether it's Full Stack Development, SEO, AI/ML Solutions, Data
            Science Projects, or LLM & RAG Applications, I'm always excited to
            work on innovative projects and collaborate with great people.
          </p>

          <a
            href="mailto:sachingond058@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;