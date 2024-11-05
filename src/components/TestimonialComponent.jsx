import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Star rating component
const StarRating = ({ rating }) => {
  const fullStar = "★";
  const emptyStar = "☆";
  
  return (
    <div className="flex justify-center mb-2">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-yellow-400 text-lg">
          {index < rating ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

const testimonials = [
  {
    name: "Aram Saffarian",
    title: "President of Treaty Health",
    feedback:
      "Code Dazzle has improved the client’s existing app. Code Dazzle utilizes their expertise to deliver comprehensive, user-friendly solutions. Their team manages projects well and has excellent documentation processes and communication.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
    rating: 5, // 5-star rating
  },
  {
    name: "Jeff Moye",
    title: "Founder of Moye",
    feedback:
      "The Code Dazzle team has finished 2/3 of the project and completed every milestone so far. Their workflow is good; their members communicate regularly through Zoom, and they collaborate well with the client via GitHub, Jira, and Slack. They solve problems fast and deliver information on time.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
    rating: 4, // 4-star rating
  },
  {
    name: "Bill Kilpatrick",
    title: "CEO of Drive",
    feedback:
      "This is a stellar team! I have assigned new contracts to them for several years. A joy to work with. Smart people. Good people. Honest. Hard working. Excellent results.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
    rating: 5, // 5-star rating
  },
  {
    name: "Clint Good",
    title: "CEO of Good Tech Solutions",
    feedback:
      "Working with Code Dazzle has been a fantastic experience. Their team exceeded my expectations with every project, and they consistently deliver on time. Highly recommend them for any tech needs.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
    rating: 4, // 4-star rating
  },
  // Add more testimonials as needed
];

const TestimonialComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-white">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Testimonials
      </h2>
      <Slider {...settings} className="px-4 md:px-0 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="max-w-sm p-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg text-center h-72">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed h-20 overflow-hidden">
                {testimonial.feedback}
              </p>
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialComponent;
