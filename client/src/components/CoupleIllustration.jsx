import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoupleIllustration = ({ coupleData }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 overflow-hidden flex flex-col items-center"
      style={{ background: "linear-gradient(180deg, #1a0a0a 0%, #2d0a0a 50%, #1a0a0a 100%)" }}
    >
      {/* Soft ambient glow behind image */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating sparkles */}
      {[
        { top: "10%", left: "8%", delay: 0 },
        { top: "20%", right: "10%", delay: 0.5 },
        { bottom: "15%", left: "12%", delay: 1 },
        { bottom: "20%", right: "8%", delay: 1.5 },
        { top: "50%", left: "3%", delay: 0.8 },
        { top: "45%", right: "3%", delay: 1.2 },
      ].map((pos, i) => (
        <motion.span
          key={i}
          className="absolute text-gold/50 text-lg select-none pointer-events-none"
          style={pos}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity, delay: pos.delay }}
        >
          ✦
        </motion.span>
      ))}

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 relative z-10"
      >
        <span className="ornament">✦ ✦ ✦</span>
        <p className="font-sans text-gold/70 tracking-[0.4em] uppercase text-xs mt-4">
          A moment to remember
        </p>
      </motion.div>

      {/* Image with ornate frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10"
        style={{ maxWidth: "360px", width: "90vw" }}
      >
        {/* Outer gold glow ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{ boxShadow: ["0 0 20px rgba(212,175,55,0.3)", "0 0 60px rgba(212,175,55,0.6)", "0 0 20px rgba(212,175,55,0.3)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Corner ornaments */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} text-gold text-2xl z-20 leading-none`}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            ✦
          </motion.div>
        ))}

        {/* Gold border frame */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "2px solid", borderImage: "linear-gradient(135deg, #D4AF37, #F5D76E, #B8860B, #D4AF37) 1", padding: "3px", background: "linear-gradient(135deg, #D4AF37, #F5D76E, #B8860B)" }}
        >
          <div className="rounded-xl overflow-hidden">
            <motion.img
              src="/couple.png"
              alt="Vignesh & Haritha"
              className="w-full block"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Names below image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center mt-10 relative z-10"
      >
        <div className="section-divider mb-6" style={{ maxWidth: "300px", margin: "0 auto 1.5rem" }} />
        <h3 className="font-serif text-3xl md:text-4xl gold-text mb-1">
          {coupleData.person1}
        </h3>
        <motion.div
          className="flex items-center justify-center gap-3 my-2"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xl">💍</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>
        <h3 className="font-serif text-3xl md:text-4xl gold-text mb-4">
          {coupleData.person2}
        </h3>
        <p className="font-serif italic text-beige/50 text-sm tracking-wide">
          Forever begins on {coupleData.engagementDate}
        </p>
        <div className="section-divider mt-6" style={{ maxWidth: "300px", margin: "1.5rem auto 0" }} />
      </motion.div>
    </section>
  );
};

export default CoupleIllustration;
