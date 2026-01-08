import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-base-100 border border-base-300 shadow-sm rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center gap-6">

        {/* --- Animated Shape --- */}
        <div className="relative h-20 w-20 shrink-0">

          {/* Glow */}
          <motion.div
            className="absolute inset-[-8px] rounded-2xl bg-primary/10 blur-md"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-primary/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle ring */}
          <motion.div
            className="absolute inset-3 rounded-2xl bg-primary/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* Core block */}
          <motion.div
            className="absolute inset-6 rounded-xl bg-primary shadow-lg"
            animate={{
              scale: [1, 1.12, 1],
              y: [0, -2, 0]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* --- Text Content --- */}
        <div className="text-center sm:text-left w-full">

          <h3 className="text-lg flex justify-center font-semibold tracking-tight">
            Currently In Development
          </h3>

          <p className="text-sm text-base-content/70 leading-relaxed mt-1 max-w-3xl mx-auto text-center">
            I built this portfolio quickly so I could share my work sooner — but it’s still evolving.
            I’m actively refining the design, adding projects and building more interactive
            case-studies.{" "}

            <motion.span
                className="block text-base text-base-content font-medium mt-2"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
                Stay tuned — interesting things are taking shape.
            </motion.span>
            </p>

            <motion.div
            className="mt-3 flex justify-center gap-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            >
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            </motion.div>
        </div>
            
      </div>
    </div>
  );
};

export default UnderConstruction;
