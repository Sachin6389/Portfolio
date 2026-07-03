import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  
  Code2,
} from "lucide-react";
import { assets } from "../../src/assets/assest";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Sachin<span className="text-blue-500">.dev</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7 text-sm">
              Full Stack Developer specializing in MERN Stack, SEO,
              Data Science, Machine Learning, Generative AI, LLMs,
              and RAG Applications. Passionate about building scalable
              and innovative digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Sachin6389"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <img src={assets.Github} alt="github-profile" />
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-buildnex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <img src={assets.Linkedin} alt="Linkedin-profile" />
              </a>

              <a
                href="https://wa.me/916389409135"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>

              <Link to="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>

              <Link to="/Experience" className="hover:text-blue-400 transition">
                Experience
              </Link>

              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Expertise
            </h3>

            <div className="flex flex-col gap-3">
              <span>Full Stack Development</span>
              <span>MERN Stack</span>
              <span>SEO & Google Ads</span>
              <span>Machine Learning</span>
              <span>Data Science</span>
              <span>LLM & RAG Applications</span>
              <span>Generative AI</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Information
            </h3>

            <div className="space-y-5">
              <a
                href="tel:+916389409135"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <Phone size={18} />
                +91 6389409135
              </a>

              <a
                href="mailto:sachingond058@gmail.com"
                className="flex items-center gap-3 hover:text-blue-400 transition break-all"
              >
                <Mail size={18} />
                sachingond058@gmail.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p>
                  Lalganj, Azamgarh,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Code2 size={18} />
                <span>Buildnex Web Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Sachin Portfolio. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-blue-400 transition"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}