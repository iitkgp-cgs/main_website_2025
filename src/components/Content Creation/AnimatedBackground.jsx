import { motion } from "framer-motion"

export const AnimatedBackground = () => {
  const elements = [
    { type: "star", top: "5%", left: "5%", size: "15px" },
    { type: "star", top: "15%", right: "10%", size: "12px" },
    { type: "moon", bottom: "20%", left: "8%", size: "60px" },
    { type: "planet", top: "40%", right: "5%", size: "40px", color: "rgba(255, 105, 180, 0.3)" },
    { type: "shape", bottom: "10%", right: "15%", size: "30px", color: "rgba(66, 153, 225, 0.3)" },
    { type: "star", top: "70%", left: "20%", size: "18px" },
    { type: "star", top: "30%", left: "50%", size: "10px" },
    { type: "planet", bottom: "40%", right: "30%", size: "50px", color: "rgba(159, 122, 234, 0.3)" },
    { type: "shape", top: "60%", left: "40%", size: "25px", color: "rgba(72, 187, 120, 0.3)" },
    { type: "star", bottom: "15%", right: "40%", size: "14px" },
    { type: "moon", top: "80%", right: "20%", size: "45px" },
    { type: "star", top: "25%", left: "80%", size: "16px" },
    { type: "planet", top: "75%", left: "60%", size: "35px", color: "rgba(237, 137, 54, 0.3)" },
    { type: "shape", bottom: "30%", left: "70%", size: "28px", color: "rgba(236, 201, 75, 0.3)" },
    { type: "star", top: "45%", right: "75%", size: "15px" },
  ]

  return (
    <div className="animated-background">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`background-element ${element.type}`}
          style={{
            position: "absolute",
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            width: element.size,
            height: element.size,
            background: element.color,
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}
