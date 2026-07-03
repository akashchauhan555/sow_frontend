import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft, FaRegClock, FaRegCalendar } from "react-icons/fa6";
import PageHero from "@components/Common/PageHero";
import { BLOGS } from "@/data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) return <Navigate to="/blogs" replace />;

  return (
    <>
      <Helmet><title>{blog.title} | Story Of Walls Blog</title></Helmet>
      <PageHero
        title={blog.title}
        image={blog.coverImage}
        breadcrumb={[{ label: "Blogs", path: "/blogs" }, { label: blog.title }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-8">
            <FaArrowLeft /> Back to Blog
          </Link>
          <div className="flex items-center gap-6 text-sm text-charcoal/50 mb-8">
            <span className="flex items-center gap-2">
              <img src={blog.authorAvatar} alt={blog.author} className="h-8 w-8 rounded-full object-cover" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1.5"><FaRegCalendar /> {new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><FaRegClock /> {blog.readTime}</span>
          </div>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-neutral max-w-none text-charcoal/70 leading-relaxed"
          >
            <p>{blog.content}</p>
          </motion.article>
          <div className="flex flex-wrap gap-2 mt-10">
            {blog.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-cream border border-beige px-3 py-1 text-xs text-charcoal/60">#{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
