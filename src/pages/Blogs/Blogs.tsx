import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import { BLOGS } from "@/data/blogs";

export default function Blogs() {
  return (
    <>
      <Helmet><title>Blog | Story Of Walls</title></Helmet>
      <PageHero
        title="Our Blog"
        subtitle="Expert insights on construction, design and everything in between."
        image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1600&q=80"
        breadcrumb={[{ label: "Blogs" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl2 bg-cream overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-500 group"
            >
              <Link to={`/blogs/${blog.slug}`} className="block overflow-hidden h-52">
                <img src={blog.coverImage} alt={blog.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
      </section>
    </>
  );
}
