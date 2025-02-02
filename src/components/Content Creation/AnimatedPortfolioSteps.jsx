import { motion } from "framer-motion"

const steps = [
  { icon: "💡", title: "Ideation", description: "Brainstorming and conceptualizing unique visual stories" },
  { icon: "🎨", title: "Design", description: "Crafting stunning visuals and storyboards" },
  { icon: "🎬", title: "Production", description: "Bringing ideas to life with cutting-edge technology" },
  { icon: "✨", title: "Polish", description: "Refining and perfecting every detail" },
]

export const AnimatedPortfolioSteps = () => {
  return (
    <div className="portfolio-info">
      <h2>Our Creative Process</h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div className="step-icon" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              {step.icon}
            </motion.div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

