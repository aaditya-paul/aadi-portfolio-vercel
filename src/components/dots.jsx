import {useEffect, useState} from "react";

function Dots() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  useEffect(() => {
    // Update window size
    const updateWindowSize = () => {
      setWindowSize({width: window.innerWidth, height: window.innerHeight});
    };
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  useEffect(() => {
    // Track mouse position
    const updateMousePosition = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const generateDots = () => {
    const dots = [];
    const dotSpacing = 20; // Spacing between dots
    const radius = 250; // Radius around the mouse for red effect
    const minOpacity = 0.3; // Minimum opacity threshold

    for (let y = 0; y < windowSize.height; y += dotSpacing) {
      for (let x = 0; x < windowSize.width; x += dotSpacing) {
        // Calculate distance from mouse
        const dx = x - mousePosition.x;
        const dy = y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Set color based on distance
        let color = "rgba(246, 246, 246, 0.2)"; // Default gray
        if (distance <= radius) {
          const opacity = Math.max(1 - distance / radius, minOpacity); // Ensure opacity doesn't go below minOpacity
          color = `rgba(255, 164, 0, ${opacity})`; // Red color near the mouse
        }

        dots.push(
          <div
            key={`${x}-${y}`}
            className="absolute transition-all ease-linear"
            style={{
              width: "2px", // Adjust size to make the dots more visible
              height: "2px",
              backgroundColor: color,
              borderRadius: "50%",
              left: `${x}px`,
              top: `${y}px`,
            }}
          ></div>
        );
      }
    }
    return dots;
  };

  return <div>{generateDots()}</div>;
}

export default Dots;
