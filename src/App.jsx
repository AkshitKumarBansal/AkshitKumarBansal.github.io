import React from 'react';
import { Mail, ExternalLink, Terminal, Code2, Server, Database, Cloud, Award, Briefcase } from 'lucide-react';
import LeetCodeStats from './Components/LeetCodeStats';

// Custom Inline Brand Icons
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 font-sans selection:bg-blue-500/30 selection:text-white pb-20">
      
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium mb-6">
          <Terminal className="w-4 h-4" />
          <span>B.E. Computer Science Engineering (2023–2027)</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Akshit Kumar Bansal
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
          Full-Stack Developer. Building scalable web applications and solving complex algorithmic challenges.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/AkshitKumarBansal" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
            <GithubIcon className="w-5 h-5" />
            GitHub
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 border border-slate-700 transition-colors">
            <Mail className="w-5 h-5" />
            Contact
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Skills Matrix */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-blue-500" />
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <Code2 className="w-6 h-6 text-emerald-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Languages & Core</h3>
            <p className="text-sm">Java, C++, JavaScript, TypeScript, Python, Data Structures & Algorithms</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <Terminal className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Frontend</h3>
            <p className="text-sm">React.js, Tailwind CSS, HTML5, CSS3, DOM Manipulation</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <Server className="w-6 h-6 text-purple-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Backend & APIs</h3>
            <p className="text-sm">Node.js, Express.js, FastAPI, Spring Boot, RESTful APIs</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
            <Cloud className="w-6 h-6 text-orange-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Cloud & DBs</h3>
            <p className="text-sm">AWS (EC2, S3, Amplify), Docker, MongoDB, MySQL, Redis</p>
          </div>
        </div>
      </section>

      {/* Coding Profile / LeetCode Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="w-8 h-8 text-yellow-500" />
              Algorithmic Problem Solving
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              Consistent practice in competitive programming platforms drives my ability to write optimized, highly performant code. I specialize in identifying edge cases and applying advanced data structures.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Dynamic Programming & Recursion</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Graph Algorithms (BFS/DFS, Shortest Path)</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Monotonic Stacks & Sliding Window</li>
            </ul>
          </div>
          
          <div className="w-full md:w-auto flex justify-center">
            <LeetCodeStats username="AkshitKumarBansal" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-purple-500" />
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {/* Project 1 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">CarCraze (Car Rental Platform)</h3>
              <div className="flex gap-3">
                <a href="#" className="text-slate-400 hover:text-white"><GithubIcon className="w-6 h-6" /></a>
                <a href="#" className="text-slate-400 hover:text-white"><ExternalLink className="w-6 h-6" /></a>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A comprehensive full-stack web application for car dealing and rentals. Engineered secure user authentication, integrated Cloudinary for robust image management, and containerized the backend services utilizing Docker for scalable deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Docker', 'Cloudinary'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{tech}</span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">Adobe India Grand Finale (Hackathon)</h3>
              <div className="flex gap-3">
                <a href="#" className="text-slate-400 hover:text-white"><GithubIcon className="w-6 h-6" /></a>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Collaborative web project repository built under strict time constraints. Led code component configuration, managed Git branching strategies to prevent merge conflicts, and resolved complex local setup dependencies for the team.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Git/GitHub', 'Frontend Architecture', 'Team Collaboration'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{tech}</span>
              ))}
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">Interactive Utilities Suite</h3>
              <div className="flex gap-3">
                <a href="#" className="text-slate-400 hover:text-white"><GithubIcon className="w-6 h-6" /></a>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A collection of focused frontend web applications including a Split Bill tool, Snake Game, Quiz App, Notes App, Age Calculator, and QR Code Generator. Built to demonstrate proficiency in browser DOM logic and state management.
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'HTML/CSS', 'DOM API', 'State Management'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Milestones */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Award className="w-8 h-8 text-emerald-500" />
          Milestones & Cloud Infrastructure
        </h2>
        <div className="pl-6 border-l-2 border-slate-800 space-y-8">
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-950"></div>
            <h4 className="text-xl font-bold text-white">AWS Cloud Architecture Focus</h4>
            <p className="text-slate-400 mt-2">Deep-dive studies into cloud infrastructure, specifically Amazon EC2 scaling, S3 bucket policies, AWS Amplify deployments, and AWS IoT Core configurations.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950"></div>
            <h4 className="text-xl font-bold text-white">Containerization Mastery</h4>
            <p className="text-slate-400 mt-2">Successfully integrated Docker environments for seamless local development and caching layers using Redis for full-stack architectures.</p>
          </div>
        </div>
      </section>

    </div>
  );
}