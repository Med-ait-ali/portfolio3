import { motion } from 'framer-motion';
import designImage from '../assets/profile-design.jpeg';
import { useState } from 'react';

const About = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#071326] relative">
      <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="relative group hidden md:block"
        >
          <div className="absolute inset-0 bg-[#00F5D4] rounded-xl -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <div className="relative z-10 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 border-2 border-[#00F5D4]/50 bg-[#112240] shadow-2xl aspect-[4/5] max-w-[450px] mx-auto">
            {!imageError ? (
              <img 
                src={designImage} 
                alt="Med Ait Ali - Designer" 
                className="w-full h-full object-cover object-center"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0A192F]">
                <span className="text-5xl text-[#00F5D4] font-bold">MA</span>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="space-y-4 md:space-y-6"
        >
          <div className="flex items-center gap-3 mb-3 md:gap-4 md:mb-4">
            <span className="text-[#00F5D4] font-mono text-lg md:text-xl">01.</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#E6F1FF]">À propos de moi</h2>
            <div className="h-[1px] bg-[#233554] flex-grow ml-2 md:ml-4"></div>
          </div>
          
          <div className="text-[#8892b0] space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed">
            <p>Bonjour ! Je suis <span className="text-[#00F5D4] font-medium">Med Ait Ali</span>, un passionné de technologie avec une approche multidisciplinaire. Mon parcours a commencé par la curiosité de comprendre comment les choses fonctionnent, ce qui m'a conduit vers le développement web et le design graphique.</p>
            <p>Aujourd'hui, je combine mes compétences techniques en <span className="text-[#00F5D4] font-medium">développement Full-Stack</span> avec une sensibilité artistique pour créer des produits numériques complets. Que ce soit pour concevoir une architecture backend robuste ou pour peaufiner une interface utilisateur, je vise toujours l'excellence.</p>
            <p>En plus du code, je suis vidéaste et analyste de données, ce qui me permet d'apporter une vision globale à chaque projet. Je m'intéresse également à la cybersécurité pour garantir la fiabilité de mes solutions.</p>
          </div>

          <ul className="grid grid-cols-2 gap-2 mt-3 md:mt-4 text-[#8892b0] font-mono text-xs md:text-sm">
            <li className="flex items-center gap-2"><span className="text-[#00F5D4] text-base">▹</span> React & TypeScript</li>
            <li className="flex items-center gap-2"><span className="text-[#00F5D4] text-base">▹</span> Node.js & Python</li>
            <li className="flex items-center gap-2"><span className="text-[#00F5D4] text-base">▹</span> UI/UX Design</li>
            <li className="flex items-center gap-2"><span className="text-[#00F5D4] text-base">▹</span> Adobe Creative Suite</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;