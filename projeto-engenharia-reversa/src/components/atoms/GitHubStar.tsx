import { Star, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function GitHubStar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden md:flex items-center space-x-3 p-3 rounded-2xl text-white text-xs font-bold shadow-xl transition-all hover:scale-105"
      style={{ backgroundColor: '#5d5a56' }}
    >
      <div className="flex items-center space-x-2">
        <Github size={18} className="text-white" />
        <div className="flex items-center space-x-1">
          <Star size={16} fill="#f7d917" stroke="#f7d917" className="text-[#f7d917]" />
          <span className="text-sm">6079</span>
        </div>
      </div>
    </motion.div>
  );
}
