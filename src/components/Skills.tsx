import { motion } from 'framer-motion';
import { Code, Palette, Video, BarChart, Shield, MonitorPlay } from 'lucide-react';

const skills = [
  { 
    icon: Code, 
    title: "Développement Web", 
    description: "Création d'applications web modernes, réactives et performantes.", 
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS"] 
  },
  { 
    icon: Palette, 
    title: "Design Graphique", 
    description: "Conception visuelle percutante et identités de marque mémorables.", 
    tech: ["Photoshop", "Illustrator", "Figma", "UI/UX"] 
  },
  { 
    icon: Video, 
    title: "Montage Vidéo", 
    description: "Post-production professionnelle et storytelling visuel.", 
    tech: ["Premiere Pro", "After Effects", "Color Grading", "Sound Design"] 
  },
  { 
    icon: BarChart, 
    title: "Analyse de Données", 
    description: "Extraction d'insights pertinents pour la prise de décision stratégique.", 
    tech: ["Python", "Pandas", "SQL", "Tableau"] 
  },
  { 
    icon: Shield, 
    title: "Cybersécurité", 
    description: "Compréhension des vulnérabilités et protection des systèmes.", 
    tech: ["Network Security", "Ethical Hacking (Basic)", "Linux", "Security audits"] 
  },
  { 
    icon: MonitorPlay, 
    title: "Multimédia", 
    description: "Intégration de divers médias pour des expériences immersives.", 
    tech: ["3D Rendering", "Animation", "Interactive Media", "Streaming"] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#0A192F] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3 md:gap-4 md:mb-4">
            <span className="text-[#00F5D4] font-mono text-lg md:text-xl">02.</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E6F1FF]">Compétences</h2>
            <div className="h-[1px] w-16 md:w-24 bg-[#233554]"></div>
          </div>
          <p className="text-[#8892b0] max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Une expertise technique diversifiée permettant de transformer des idées complexes en solutions concrètes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              whileHover={{ y: -5 }} 
              className="group relative p-5 md:p-6 lg:p-8 bg-[#112240] rounded-xl hover:bg-[#1a2f55] transition-all duration-300 border border-transparent hover:border-[#00F5D4]/30 shadow-lg hover:shadow-[#00F5D4]/10"
            >
              <div className="mb-4 md:mb-6 inline-block p-2 md:p-3 rounded-lg bg-[#0A192F] text-[#00F5D4] group-hover:text-[#E6F1FF] group-hover:bg-[#00F5D4] transition-colors duration-300">
                <skill.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#E6F1FF] mb-2 md:mb-3 group-hover:text-[#00F5D4] transition-colors">
                {skill.title}
              </h3>
              <p className="text-[#8892b0] mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                {skill.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] md:text-xs font-mono text-[#00F5D4]/80 bg-[#00F5D4]/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;