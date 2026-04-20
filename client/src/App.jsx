import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InvitationCard from "./components/InvitationCard";
import EventDetails from "./components/EventDetails";
import CountdownTimer from "./components/CountdownTimer";
import Footer from "./components/Footer";

const COUPLE_DATA = {
  person1: "Vignesh",
  person2: "Haritha",
  engagementDate: "Wednesday, 13th May 2026",
  engagementDateISO: "2026-05-13T10:00:00",
  invitationMessage:
    "Together with our families, we joyfully invite you to share in the celebration of our engagement. Your presence will make this moment truly unforgettable.",
  eventTime: "10:00 AM onwards",
  venue: "Thamizh Grand Hotel",
  venueAddress: "Hotel Tamizh Grand, No.302/8-B, Vallalar St, Venkata Nagar, Puducherry, 605011",
  families: "The Vignesh Family & The Haritha Family",
};

const EVENT_DATA = {
  date: "Wednesday, 13th May 2026",
  time: "10:00 AM – 12:00 PM",
  venue: "Thamizh Grand Hotel",
  venueAddress: "Hotel Tamizh Grand, No.302/8-B, Vallalar St, Venkata Nagar, Puducherry, 605011",
};

const LoadingScreen = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#0d0000" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="text-center"
      >
        <motion.div
          className="text-7xl mb-6"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💍
        </motion.div>
        <motion.h1
          className="font-serif text-4xl gold-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {COUPLE_DATA.person1} & {COUPLE_DATA.person2}
        </motion.h1>
        <motion.p
          className="font-body text-beige/40 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading your invitation...
        </motion.p>
        <motion.div className="mt-8 h-px bg-gold/20 w-48 mx-auto overflow-hidden rounded">
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-gold-light"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <HeroSection coupleData={COUPLE_DATA} />
            <InvitationCard coupleData={COUPLE_DATA} />
            <div id="details">
              <EventDetails eventData={EVENT_DATA} />
            </div>
            <CountdownTimer targetDate={COUPLE_DATA.engagementDateISO} />
          </main>
          <Footer coupleData={{ ...COUPLE_DATA, venue: EVENT_DATA.venue }} />
        </motion.div>
      )}
    </div>
  );
}
