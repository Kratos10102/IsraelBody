import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Item({ item, index, activeIndex }) {
  const [ref, inView] = useInView();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (activeIndex === index) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeIndex, index]);

  return (
    <div
      ref={ref}
      id="aboutUsSectionFont"
      style={{
        opacity: isActive && inView ? 1 : 0,
        transition: "opacity 1s",
        paddingTop: "10px",
        textAlign: "right",
        color: "#FA6E07"
        
      }}
    >
      {item.text}
    </div>
  );
}

function NewFeatureMotion() {
  const items = [
    { text: "רשת ישראלבודי קיימת מאז שנת 2001" },
    { text: "צוות מומחים שיביא אתכם לתוצאות" },
    { text: "מותאם באופן אישי לכל אחד והמטרות שלו" },
    { text: "ליווי בתוכנית תזונה ובתוכנית אימונים" },
  ];
  const [activeIndex, setActiveIndex] = useState(0); // Start with an initial index of 0

  useEffect(() => {
    let timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3500);
  
      return () => {
        clearInterval(interval);
      };
    }, 3000);  // This sets the delay from the first item in array.
  
    return () => {
      clearTimeout(timeout);
    };
  }, [items.length]);
  

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} index={index} activeIndex={activeIndex} />
      ))}
    </div>
  );
}

export default NewFeatureMotion;
