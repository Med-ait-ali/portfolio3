import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 bg-[#071326] text-center text-[#8892b0] text-xs md:text-sm font-mono">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-4"
      >
        <p className="mb-1 md:mb-2">Conçu & Développé par Med Ait Ali</p>
        <p className="text-[#00F5D4] text-xs md:text-sm">© 2024 - Tous droits réservés.</p>
        <div className="flex justify-center gap-2 md:gap-4 mt-3 md:mt-4 text-xs">
          <a href="#" className="hover:text-[#00F5D4] transition-colors">Politique de confidentialité</a>
          <span>|</span>
          <a href="#" className="hover:text-[#00F5D4] transition-colors">Mentions légales</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;