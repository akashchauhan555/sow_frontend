import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import SectionHeading from "@components/Common/SectionHeading";
import Button from "@components/Common/Buttons/Button";
import { BLOGS } from "@/data/blogs";

// Blog preview cards shown on the Home page.
export default function BlogPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="From The Blog"
          title="Insights For A Stress-Free Build"
          description="Expert advice on planning, budgeting and designing your next project."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl2 bg-white overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-500 group"
            >
              <Link to={`/blogs/${blog.slug}`} className="block overflow-hidden h-52">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">{blog.category}</span>
                <Link to={`/blogs/${blog.slug}`}>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-3 line-clamp-2">{blog.title}</h3>
                </Link>
                <p className="text-sm text-charcoal/60 line-clamp-2 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-charcoal/40">
                  <span className="flex items-center gap-1.5"><FaRegClock /> {blog.readTime}</span>
                  <Link to={`/blogs/${blog.slug}`} className="text-primary font-medium">Read More</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/blogs">
            <Button variant="outline" icon={<FaArrowRight />}>View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
