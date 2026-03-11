import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import profileImage from '../assets/profile-dev.jpeg';
import { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0A192F] relative overflow-hidden pt-20 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-5rem)]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-5 md:space-y-6 text-center md:text-left order-1"
          >
            <p className="text-[#00F5D4] font-mono tracking-wider text-sm sm:text-base">Salut, je m'appelle</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E6F1FF] tracking-tight leading-[1.1]">Med Ait Ali.</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#8892b0] leading-tight">
              Développeur Full-Stack & <br className="hidden sm:block" /> Créateur Multimédia.
            </h2>
            <p className="text-[#8892b0] max-w-lg text-base sm:text-lg leading-relaxed mx-auto md:mx-0">
              Je conçois des expériences numériques exceptionnelles, alliant code performant et design immersif. Spécialisé dans la création d'interfaces modernes et l'optimisation des performances web.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#00F5D4] text-[#00F5D4] rounded-lg hover:bg-[#00F5D4]/10 transition-all font-medium flex items-center justify-center gap-2 group text-sm sm:text-base">
                Voir mes projets <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00F5D4] text-[#0A192F] rounded-lg hover:bg-[#00F5D4]/90 transition-all font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00F5D4]/20 text-sm sm:text-base">
                Me contacter <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="relative group hidden md:block order-2"
          >
            <div className="absolute inset-0 bg-[#00F5D4] rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 border-2 border-[#00F5D4]/50 bg-[#112240] shadow-2xl aspect-[3/4] max-w-[400px] lg:max-w-[450px] mx-auto">
              {!imageError ? (
                <img 
                  src={profileImage} 
                  alt="Med Ait Ali" 
                  className="w-full h-full object-cover object-center"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0A192F]">
                  <span className="text-6xl text-[#00F5D4] font-bold">MA</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="block md:hidden mt-10"
        >
          <div className="relative max-w-[280px] mx-auto">
            <div className="absolute inset-0 bg-[#00F5D4] rounded-2xl translate-x-3 translate-y-3"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#00F5D4]/30 bg-[#112240] shadow-xl aspect-square">
              {!imageError ? (
                <img 
                  src={profileImage} 
                  alt="Med Ait Ali" 
                  className="w-full h-full object-cover object-center"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0A192F]">
                  <span className="text-4xl text-[#00F5D4] font-bold">MA</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;