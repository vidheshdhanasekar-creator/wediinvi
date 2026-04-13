import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";

const MAPS_URL =
  "https://www.google.com/maps/dir//Hotel+Tamizh+Grand,+No.302%2F8-B,+Vallalar+St,+Venkata+Nagar,+Puducherry,+605011/@11.9434998,79.8184677,15z";

const item = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } },
};

const HeroSection = ({ coupleData }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0000 0%, #3d0000 40%, #1a0a0a 100%)" }}
    >
      <ParticlesBackground />

      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(ellipse at center, rgba(139,0,0,0.4) 0%, transparent 70%)" }}
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gold/20"
          style={{ width: `${300 + i * 150}px`, height: `${300 + i * 150}px`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360, opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } } }}
      >
        <motion.div variants={item} className="mb-6">
          <span className="ornament">✦ ✦ ✦</span>
        </motion.div>

        <motion.p variants={item} className="font-sans text-gold/80 tracking-[0.4em] uppercase text-sm mb-4">
          With Joy & Love, We Invite You To
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] } } }}
          className="mb-4"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span className="gold-text">{coupleData.person1}</span>
          </h1>
          <motion.div
            className="flex items-center justify-center gap-4 my-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-3xl">💍</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span className="gold-text">{coupleData.person2}</span>
          </h1>
        </motion.div>

        <motion.div variants={item} className="section-divider my-6" />

        <motion.p variants={item} className="font-serif italic text-beige/80 text-xl md:text-2xl mb-2">
          Engagement Ceremony
        </motion.p>

        <motion.p variants={item} className="font-body text-gold tracking-widest text-lg md:text-xl font-light">
          {coupleData.engagementDate}
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block rounded-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📍 Get Location
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gold/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
