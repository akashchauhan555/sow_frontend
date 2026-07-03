import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@components/Common/Buttons/Button";
import ConsultationForm from "./ConsultationForm";
import { STATS } from "@/data/stats";
import CountUp from "react-countup";

// Fullscreen luxury hero section — video background, left content, right consultation form.
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 pt-28 pb-16 items-center">
        <div className="text-white">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-widest uppercase mb-6"
          >
            Premium Construction & Interiors
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl"
          >
            Dream Home <span className="text-gradient-gold">Starts Here</span>
            <br />
            with Story Of Walls
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-white/70 italic max-w-lg"
          >
            "Every Space Has A Story"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link to="/book-consultation">
              <Button size="lg" icon={<FaArrowRight />}>Book Consultation</Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="ghost" className="text-white border border-white/30" icon={<FaPlay />}>
                Explore Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg"
          >
            {STATS.map((stat) => (
              <div key={stat.id}>
                <p className="font-heading text-2xl md:text-3xl font-semibold text-primary-200">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ConsultationForm />
        </motion.div>
      </div>
    </section>
  );
}
