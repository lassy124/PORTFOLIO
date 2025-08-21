import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home, User, BookOpen, Download, Mail } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = {
    about: `I am Thulasi, an aspiring Data Analyst skilled in Python, SQL, Pandas, NumPy, and visualization. 
I love working with messy datasets, building predictive models, and creating dashboards with Streamlit.`,

    skills: `⚡ Python • SQL • Pandas • NumPy • Matplotlib • Seaborn • Streamlit • scikit-learn`,

    projects: `📊 Student Performance Prediction App (Streamlit + scikit-learn)
📈 Data Cleaning & Visualization Dashboards
🤖 Lightweight ML Models`,

    resume: `📄 Add your Resume.pdf inside the public folder:
👉 [Download Resume](Resume.pdf)`,

    contact: `📧 akkalathulasiz4@gmail.com
📞 9591946867
🔗 LinkedIn / GitHub`
  };

  // helper to map key -> icon for bottom nav
  const iconFor = (key) => {
    switch (key) {
      case "about": return <User className="w-5 h-5" />;
      case "skills": return <ZapIconFallback />;
      case "projects": return <BookOpen className="w-5 h-5" />;
      case "resume": return <Download className="w-5 h-5" />;
      case "contact": return <Mail className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-indigo-200 flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full flex items-start justify-between gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            AKKALA THULASI
          </h1>
          <div className="text-sm sm:text-lg font-medium text-gray-700 mt-1">🚀 Data Analyst</div>
        </motion.div>

        {/* Hamburger (mobile only) */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="p-2 bg-white rounded-lg shadow"
          >
            <Menu className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden sm:flex gap-4 mb-8 justify-center bg-white/70 p-3 rounded-2xl shadow-lg backdrop-blur w-full max-w-3xl">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            aria-pressed={activeTab === key}
            className={`px-5 py-2 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === key
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                : "bg-white text-blue-700 border border-blue-300 hover:scale-105 hover:shadow"}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Side Drawer (mobile) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.aside
              className="w-64 bg-white p-6 flex flex-col shadow-2xl"
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-semibold">Menu</div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {Object.keys(sections).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveTab(key);
                      setMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg text-left text-md transition
                      ${activeTab === key ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page / Content container */}
      <div className="relative w-full max-w-3xl flex-1 min-h-[240px] mb-28">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeTab}
            className="absolute inset-0 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl text-gray-800 flex items-center"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full">
              <pre className="whitespace-pre-wrap text-left leading-relaxed text-base">
                {sections[activeTab]}
              </pre>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Floating bottom nav (mobile) */}
      <div className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur px-3 py-2 rounded-full shadow-2xl flex items-center gap-2">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              aria-label={key}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-full transition-all duration-200
                ${activeTab === key ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-110" : "text-blue-700 hover:bg-gray-100"}`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {iconFor(key)}
              </div>
              <div className="text-[10px] mt-1">{key.slice(0,3).toUpperCase()}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- small helper icon component (fallback for "skills" icon) ---------- */
function ZapIconFallback() {
  // small inline SVG similar to a lightning/zap icon
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z"></path>
    </svg>
  );
}
