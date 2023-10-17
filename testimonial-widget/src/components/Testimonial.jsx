import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const requestOptions = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch("/testimonials", requestOptions); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("data", data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <>
      {testimonials.map((data) => (
        <figure className="snip1533">
          <figcaption>
            <blockquote>
              <p>{data.text}</p>
            </blockquote>
            <h3>{data.name}</h3>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default Testimonial;
