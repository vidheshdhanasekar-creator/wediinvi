import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InvitationCard = ({ coupleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="invitation"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a0a0a 0%, #2d0a0a 50%, #1a0a0a 100%)" }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-gold text-9xl font-serif">❧</div>
        <div className="absolute bottom-10 right-10 text-gold text-9xl font-serif rotate-180">❧</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <span className="ornament">✦ ✦ ✦</span>
        <h2 className="font-serif text-4xl md:text-5xl gold-text mt-4 mb-2">The Invitation</h2>
        <p className="font-sans text-beige/60 tracking-widest text-sm uppercase">Click to reveal</p>
      </motion.div>

      <div className="flex justify-center" style={{ perspective: "1200px" }}>
        <motion.div
          className="relative cursor-pointer"
          style={{ width: "min(90vw, 500px)", height: "650px", transformStyle: "preserve-3d" }}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
        >
          {/* Front */}
          <motion.div
            className="absolute inset-0 glass-card rounded-lg flex items-center justify-center p-8"
            style={{ backfaceVisibility: "hidden" }}
            animate={{ rotateY: isOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="text-center">
              <div className="text-gold text-6xl mb-6">💍</div>
              <div className="section-divider mb-6" />
              <p className="font-sans text-gold/70 tracking-[0.3em] uppercase text-xs mb-4">Engagement Invitation</p>
              <h3 className="font-serif text-4xl gold-text mb-2">{coupleData.person1}</h3>
              <p className="text-gold text-2xl my-2">&</p>
              <h3 className="font-serif text-4xl gold-text mb-6">{coupleData.person2}</h3>
              <div className="section-divider mb-6" />
              <p className="font-body text-beige/60 text-sm">{coupleData.engagementDate}</p>
              <p className="font-body text-beige/40 text-xs mt-4 tracking-widest">TAP TO OPEN</p>
              {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} text-gold/30 text-2xl`}>✦</div>
              ))}
            </div>
          </motion.div>

          {/* Back */}
          <motion.div
            className="absolute inset-0 glass-card rounded-lg flex items-center justify-center p-8 overflow-y-auto"
            style={{ backfaceVisibility: "hidden" }}
            animate={{ rotateY: isOpen ? 0 : 180 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="text-center w-full">
              <span className="ornament text-sm">✦ ✦ ✦</span>
              <p className="font-sans text-gold/70 tracking-[0.3em] uppercase text-xs mt-4 mb-6">With Blessings of God</p>
              <p className="font-serif italic text-beige/80 text-lg leading-relaxed mb-6">{coupleData.invitationMessage}</p>
              <div className="section-divider my-4" />
              <p className="font-body text-beige/60 text-sm mb-1">🕐 {coupleData.eventTime}</p>
              <p className="font-body text-beige/60 text-sm mb-1">📍 {coupleData.venue}</p>
              <p className="font-body text-gold text-sm font-semibold mt-4">{coupleData.engagementDate}</p>
              <div className="section-divider my-4" />
              <p className="font-serif italic text-beige/50 text-sm">— {coupleData.families} —</p>
              <p className="font-body text-beige/40 text-xs mt-4 tracking-widest">TAP TO CLOSE</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationCard;
