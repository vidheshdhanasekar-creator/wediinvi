import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimeUnit = ({ value, label, inView, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.8 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
    className="flex flex-col items-center"
  >
    <motion.div
      className="glass-card rounded-lg w-16 h-16 md:w-28 md:h-28 flex items-center justify-center relative overflow-hidden"
      animate={{ boxShadow: ["0 0 10px rgba(212,175,55,0.2)", "0 0 30px rgba(212,175,55,0.4)", "0 0 10px rgba(212,175,55,0.2)"] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      <span className="font-serif text-2xl md:text-5xl gold-text font-bold">
        {String(value).padStart(2, "0")}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
      />
    </motion.div>
    <p className="font-body text-gold/60 text-[10px] md:text-xs tracking-widest uppercase mt-2">{label}</p>
  </motion.div>
);

const Colon = () => (
  <motion.span
    className="text-gold text-xl md:text-5xl font-serif mb-5"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    :
  </motion.span>
);

const CountdownTimer = ({ targetDate }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) { setIsPast(true); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2d0a0a 0%, #1a0a0a 100%)" }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gold/10"
          style={{ width: `${400 + i * 200}px`, height: `${400 + i * 200}px`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="ornament">✦ ✦ ✦</span>
        <h2 className="font-serif text-4xl md:text-5xl gold-text mt-4 mb-2">Counting Down</h2>
        <p className="font-sans text-beige/50 tracking-widest text-sm uppercase">
          {isPast ? "The celebration has begun!" : "Until the big day"}
        </p>
      </motion.div>

      <div className="relative z-10 flex justify-center">
        {isPast ? (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <p className="font-serif text-3xl gold-text">The Day Has Arrived!</p>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center gap-2 md:gap-8 w-full px-2">
            <TimeUnit value={timeLeft.days} label="Days" inView={inView} delay={0} />
            <Colon />
            <TimeUnit value={timeLeft.hours} label="Hours" inView={inView} delay={0.1} />
            <Colon />
            <TimeUnit value={timeLeft.minutes} label="Minutes" inView={inView} delay={0.2} />
            <Colon />
            <TimeUnit value={timeLeft.seconds} label="Seconds" inView={inView} delay={0.3} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;
