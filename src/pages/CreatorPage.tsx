import { motion } from "framer-motion";
import { ArrowRight, Users, DollarSign, BarChart3, BookOpen, Video, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Users, title: "Reach 50K+ Students", description: "Tap into our growing community of motivated learners actively seeking quality IELTS and SAT content." },
  { icon: DollarSign, title: "Earn Revenue", description: "Set your own pricing, earn from every enrollment, and get paid monthly. Top creators earn $5,000+/month." },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Track student engagement, completion rates, and earnings in real-time with our creator dashboard." },
  { icon: BookOpen, title: "Easy Course Builder", description: "Our drag-and-drop course builder makes it simple to create lessons, quizzes, and practice tests." },
  { icon: Video, title: "Video & Audio Hosting", description: "Upload unlimited video and audio content. We handle hosting, streaming, and adaptive quality." },
  { icon: Award, title: "Creator Certification", description: "Get certified as an IELTS AI Verified Creator and gain credibility with a badge on your profile." },
];

const CreatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">For Creators</span>
            <h1 className="font-satoshi font-bold text-5xl md:text-7xl text-foreground mt-4 leading-tight">
              Teach. Inspire.
              <br />
              Earn.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Join our creator program and share your IELTS expertise with thousands of students worldwide. Build your brand, create courses, and earn revenue — all on one platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#apply" className="inline-flex items-center gap-3 h-14 px-10 bg-foreground text-primary-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
                Apply as Creator <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#benefits" className="inline-flex items-center gap-2 h-14 px-10 border border-border text-foreground rounded-full text-base font-medium hover:bg-secondary transition-colors">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "500+", l: "Active Creators" },
            { v: "$2M+", l: "Creator Earnings" },
            { v: "1,200+", l: "Courses Published" },
            { v: "4.8★", l: "Average Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-satoshi font-bold text-4xl text-primary-foreground">{s.v}</div>
              <p className="mt-1 text-sm text-primary-foreground/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 md:py-28 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-foreground mb-12">
            Why Create on IELTS AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <b.icon className="w-6 h-6 text-foreground mb-4" />
                <h3 className="font-satoshi font-bold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-foreground">
            Ready to start teaching?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Apply today and join 500+ creators who are building the future of IELTS education.
          </p>
          <a href="#apply" className="mt-8 inline-flex items-center gap-3 h-14 px-10 bg-foreground text-primary-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreatorPage;
