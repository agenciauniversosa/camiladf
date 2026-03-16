import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 12, suffix: "+", label: "anos de atuação" },
  { value: 500, suffix: "+", label: "clientes atendidos" },
  { value: 98, suffix: "%", label: "de satisfação" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = duration / (target / step);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="relative -mt-6 z-20 pb-8">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 border border-border/40 px-8 md:px-14 py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border/50">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="font-display text-4xl md:text-5xl font-medium text-primary">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-body text-[13px] text-muted-foreground mt-2 tracking-wide">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsBar;
