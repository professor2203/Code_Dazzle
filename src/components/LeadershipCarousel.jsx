// File: LeadershipCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const leadershipData = [
  {
    name: "Miss Tuba",
    title: "Founder",
    image: "./api.png", // Replace with actual image path
  },
  {
    name: "Mr Umair",
    title: "Director",
    image: "./umair.jpeg", // Replace with actual image path
  },
  {
    name: "Mr Nayaz",
    title: "Co Founder",
    image: "./Nayaz.jpg", // Replace with actual image path
  },
  // Add more items as needed
];

function LeadershipCarousel() {
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
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Meet Code Dazzle Solutions Leadership
      </h2>
      <Slider {...settings}>
        {leadershipData.map((leader, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 h-[300px] flex flex-col justify-between">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[380px] object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-500">{leader.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LeadershipCarousel;