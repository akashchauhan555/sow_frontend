import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Button from "@components/Common/Buttons/Button";

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page Not Found | Story Of Walls</title></Helmet>
      <section className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <p className="font-heading text-8xl font-bold text-gradient-gold mb-4">404</p>
          <h1 className="heading-md mb-4">This Space Hasn't Been Built Yet</h1>
          <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/"><Button>Back To Home</Button></Link>
        </motion.div>
      </section>
    </>
  );
}
