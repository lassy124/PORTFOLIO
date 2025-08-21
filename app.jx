import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [active, setActive] = useState("home");

  const sections = {
    home: (
      <div className="text-center space-y-4">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto shadow-lg border-4 border-blue-400"
        />
        <h1 className="text-3xl font-bold text-blue-600">🔥 Welcome to My Portfolio</h1>
        <h2 className="text-xl">👋 Hello! I'm <span className="font-semibold">Thulasi</span></h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          A Passionate Full Stack Web Developer specializing in building exceptional digital experiences. Proficient in both frontend and backend development.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="Resume.pdf" className="px-6 py-2 bg-blue-600 text-white rounded-lg">Download Resume</a>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg">Hire Me</button>
        </div>
      </div>
    ),
    about: (
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />
        <p className="text-gray-700 max-w-2xl mx-auto">
          I am a passionate Full Stack Developer with expertise in modern web technologies, with a strong foundation in front-end and back-end development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Web Development</h3>
            <p>Creating responsive and dynamic web applications</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Backend Development</h3>
            <p>Building robust server-side applications</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Responsive Design</h3>
            <p>Crafting mobile-first user experiences</p>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {["HTML5", "CSS3", "JavaScript", "MySQL", "Python", "React", "Node.js", "Tailwind CSS"].map(skill => (
            <div key={skill} className="p-4 bg-white rounded-xl shadow-md">{skill}</div>
          ))}
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Education</h2>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Bachelor of Computer Science – KCIT</h3>
          <p>2021–2024 | 65.5%</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Intermediate – Sri Sadha Junior College</h3>
          <p>2019–2021 | 765 marks</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Secondary – Z.P. High School</h3>
          <p>2019 | GPA 9.3</p>
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Project 1", desc: "HTML/CSS/JavaScript", },
            { title: "Project 2", desc: "React / Redux / MUI", },
            { title: "Project 3", desc: "Node.js / Express / REST API", }
          ].map((p, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">{p.title}</h3>
              <p>{p.desc}</p>
              <div className="flex justify-center gap-3 mt-2">
                <button className="px-4 py-1 bg-blue-600 text-white rounded">Live Demo</button>
                <button className="px-4 py-1 bg-gray-700 text-white rounded">GitHub</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Contact Me</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl"/>
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl"/>
          <input type="text" placeholder="WhatsApp Number" className="w-full p-3 border rounded-xl"/>
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-xl"></textarea>
          <button type="submit" className="w-full p-3 bg-green-600 text-white rounded-xl">
            Send via WhatsApp
          </button>
        </form>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8">
      {/* Navbar */}
      <nav className="flex justify-center gap-6 mb-10 flex-wrap">
        {Object.keys(sections).map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-2xl font-semibold shadow-md ${active === tab ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-400'} hover:scale-110`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      >
        {sections[active]}
      </motion.div>
    </div>
  );
}
