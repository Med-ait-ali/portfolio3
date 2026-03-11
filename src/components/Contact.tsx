import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0A192F] relative text-center">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="space-y-6 md:space-y-8"
        >
          <p className="text-[#00F5D4] font-mono text-base md:text-lg">04. Et maintenant ?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E6F1FF]">Me Contacter</h2>
          
          <p className="text-[#8892b0] text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou simplement envie de dire bonjour, je ferai de mon mieux pour vous répondre !
          </p>

          <div className="pt-4 md:pt-8 flex flex-col items-center gap-4 md:gap-6">
            <a 
              href="mailto:med.aitali@email.com" 
              className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#00F5D4] text-[#00F5D4] rounded-lg hover:bg-[#00F5D4]/10 transition-all font-medium text-sm md:text-base group"
            >
              <Mail size={18} /> 
              Envoyer un message
            </a>
          </div>

          <div className="flex justify-center gap-6 md:gap-8 mt-8 md:mt-12">
            <a 
              href="https://github.com/med-ait-ali" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8892b0] hover:text-[#00F5D4] transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/med-ait-ali" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8892b0] hover:text-[#00F5D4] transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;