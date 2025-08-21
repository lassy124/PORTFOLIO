import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  const sections = {
    about: `I am Thulasi, an aspiring Data Analyst skilled in Python, SQL, Pandas, NumPy, and visualization. 
I love working with messy datasets, building predictive models, and creating dashboards with Streamlit.`,

    skills: `Python • SQL • Pandas • NumPy • Matplotlib • Seaborn • Streamlit • scikit-learn`,

    projects: `📊 Student Performance Prediction App (Streamlit + scikit-learn)
📈 Data Cleaning & Visualization Dashboards
🤖 Lightweight ML Models`,

    resume: `📄 You can add your Resume.pdf inside the public folder and link it here:
👉 [Download Resume](Resume.pdf)`,

    contact: `📧 akkalathulasiz4@gmail.com
📞 9591946867
🔗 LinkedIn / GitHub`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center p-8">
      
      {/* Name */}
      <motion.h1 
        className="text-5xl font-bold text-blue-600 drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Thulasi • Data Analyst
      </motion.h1>

      {/* Navigation */}
      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2 rounded-2xl shadow-md text-lg transition 
              ${activeTab === key ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-400"}
              hover:scale-110 hover:shadow-lg`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Section Content with Slide Transition */}
      <div className="relative w-full max-w-2xl min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="absolute inset-0 bg-white p-6 rounded-2xl shadow-xl text-center text-lg text-gray-700 flex items-center justify-center"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <pre className="whitespace-pre-wrap">{sections[activeTab]}</pre>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
