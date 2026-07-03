import React from "react";
import ContactForm from "./ContactFrom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle,
  
} from "lucide-react";
import { assets } from "../assets/assest";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-14">
        

          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Contact Me
          </h1>

          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base">
            Have a project idea, freelance opportunity, or collaboration in
            Full Stack Development, SEO, Data Science, Machine Learning, AI,
            LLM, or RAG applications? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side */}
          <div className="space-y-6">
            
            <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                
                <a
                  href="mailto:sachingond058@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="group-hover:text-blue-400 transition">
                      sachingond058@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916389409135"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-green-600 p-3 rounded-xl">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="group-hover:text-green-400 transition">
                      +91 6389409135
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/916389409135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-emerald-600 p-3 rounded-xl">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">WhatsApp</p>
                    <p className="group-hover:text-emerald-400 transition">
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-3 rounded-xl">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p>Azamgarh, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-3">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="text-slate-400 leading-7">
                I help startups, businesses, and individuals create modern web
                applications, improve SEO performance, run digital marketing
                campaigns, and develop AI-powered solutions using Machine
                Learning, LLMs, and RAG systems.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/sachin-buildnex/"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-xl transition"
                >
                  <img src={assets.Linkedin} alt="Linkedin-profile" />
                </a>

                <a
                  href="https://github.com/Sachin6389"
                  className="bg-slate-700 hover:bg-gray-600 p-3 rounded-xl transition"
                >
                  <img src={assets.Github} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-800/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <ContactForm/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;