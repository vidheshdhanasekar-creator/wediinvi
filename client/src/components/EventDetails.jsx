import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DetailCard = ({ icon, title, content, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-lg p-8 text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="font-serif text-lg gold-text mb-2 tracking-wide">{title}</h4>
      <p className="font-body text-beige/70 text-sm leading-relaxed">{content}</p>
    </motion.div>
  );
};

const EventDetails = ({ eventData }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const details = [
    { icon: "📅", title: "Date", content: eventData.date, delay: 0 },
    { icon: "🕐", title: "Time", content: eventData.time, delay: 0.1 },
    { icon: "📍", title: "Venue", content: eventData.venue, delay: 0.2 },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0000 0%, #1a0a0a 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <span className="ornament">✦ ✦ ✦</span>
        <h2 className="font-serif text-4xl md:text-5xl gold-text mt-4 mb-2">Event Details</h2>
        <p className="font-sans text-beige/50 tracking-widest text-sm uppercase">Join us for the celebration</p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {details.map((d, i) => <DetailCard key={i} {...d} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="glass-card rounded-lg overflow-hidden"
          style={{ border: "1px solid rgba(212,175,55,0.3)" }}
        >
          <div className="p-4 text-center border-b border-gold/20">
            <p className="font-serif text-gold tracking-widest text-sm uppercase">📍 {eventData.venue}</p>
          </div>
          <div className="relative" style={{ paddingBottom: "40%", minHeight: "250px" }}>
            <iframe
              title="Venue Location"
              src="https://maps.google.com/maps?q=11.9416924,79.8218345&z=16&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "grayscale(30%) sepia(20%)", border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
