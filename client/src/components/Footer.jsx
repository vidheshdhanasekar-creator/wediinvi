import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = ({ coupleData }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <footer
      ref={ref}
      className="relative py-20 px-4 text-center"
      style={{ background: "linear-gradient(180deg, #0d0000 0%, #000000 100%)" }}
    >
      <div className="section-divider mb-12" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-5xl mb-6"
        >
          💍
        </motion.div>

        <h3 className="font-serif text-3xl md:text-4xl gold-text mb-4">
          {coupleData.person1} & {coupleData.person2}
        </h3>

        <p className="font-serif italic text-beige/60 text-lg mb-6">
          "Two souls, one heart, forever together."
        </p>

        <div className="section-divider my-6" />

        <p className="font-body text-beige/40 text-sm tracking-widest uppercase mb-2">
          {coupleData.engagementDate}
        </p>
        <p className="font-body text-beige/30 text-xs tracking-widest uppercase">
          {coupleData.venue}
        </p>

        <div className="section-divider my-8" />

        <p className="font-serif italic text-gold/50 text-sm">
          Thank you for being a part of our love story.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          {["💌", "🌹", "✨", "🌹", "💌"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>

        <p className="font-body text-beige/20 text-xs mt-10">Made with ❤️ for a special day</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
