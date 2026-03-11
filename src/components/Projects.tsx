import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: "Plateforme SaaS Analytics",
    description: "Une solution complète de tableau de bord pour visualiser les données en temps réel.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/med-ait-ali/saas-analytics",
    live: "https://med-ait-ali.github.io/saas-analytics"
  },
  {
    title: "E-Commerce Premium",
    description: "Architecture headless pour une marque de luxe. Performance optimisée.",
    tech: ["Next.js", "Shopify API", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    github: "https://github.com/med-ait-ali/ecommerce-premium",
    live: "https://med-ait-ali.github.io/ecommerce-premium"
  },
  {
    title: "App Sécurité Réseau",
    description: "Outil de monitoring réseau pour détecter les anomalies de trafic.",
    tech: ["Python", "Flask", "React", "Socket.io"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/med-ait-ali/network-security",
    live: "https://med-ait-ali.github.io/network-security"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#071326] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-3 md:gap-4 md:mb-4">
            <span className="text-[#00F5D4] font-mono text-lg md:text-xl">03.</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E6F1FF]">Projets Réalisés</h2>
            <div className="h-[1px] bg-[#233554] flex-grow ml-2 md:ml-4"></div>
          </div>
          <p className="text-[#8892b0] max-w-2xl text-sm sm:text-base md:text-lg">
            Une sélection de travaux récents démontrant mes capacités en développement et design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              whileHover={{ y: -5 }} 
              className="group bg-[#112240] rounded-xl overflow-hidden shadow-xl hover:shadow-[#00F5D4]/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-40 sm:h-44 md:h-48 w-full">
                <div className="absolute inset-0 bg-[#0A192F]/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <Folder className="text-[#00F5D4] w-8 h-8 md:w-10 md:h-10" />
                  <div className="flex gap-3 md:gap-4">
                    <a 
                      href={project.github} 
                      className="text-[#8892b0] hover:text-[#00F5D4] transition-colors" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.live} 
                      className="text-[#8892b0] hover:text-[#00F5D4] transition-colors" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#E6F1FF] mb-2 group-hover:text-[#00F5D4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8892b0] text-xs md:text-sm mb-4 md:mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1.5 md:gap-2 mt-auto font-mono text-[10px] md:text-xs text-[#8892b0]">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-[#0A192F] px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[#00F5D4]/80">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;