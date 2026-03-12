import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Speaking",
    title: "10 Common Speaking Mistakes That Lower Your Band Score",
    excerpt: "Avoid these frequent errors that IELTS examiners notice immediately and learn how to fix them.",
    date: "Mar 8, 2026",
  },
  {
    tag: "Writing",
    title: "How to Write a Band 8 Task 2 Essay in 40 Minutes",
    excerpt: "A step-by-step framework for structuring, writing, and proofreading your essay under time pressure.",
    date: "Mar 5, 2026",
  },
  {
    tag: "Strategy",
    title: "From Band 5.5 to 7.5: A 60-Day Study Plan",
    excerpt: "A realistic, day-by-day study plan that helped thousands of students improve by 2+ band scores.",
    date: "Mar 1, 2026",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-foreground">
              Latest from the Blog
            </h2>
            <p className="mt-2 text-muted-foreground">
              Tips, strategies, and success stories from our community
            </p>
          </motion.div>
          <a
            href="#blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#blog"
              className="group p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                {post.tag}
              </span>
              <h3 className="font-satoshi font-bold text-lg text-foreground mt-3 mb-3 group-hover:underline underline-offset-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
