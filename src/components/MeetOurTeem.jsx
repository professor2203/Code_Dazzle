import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const leadershipData = [
  {
    name: "Abdullah Shah",
    title: "FullStack Developer",
    image: "./Abdullah.jpeg", // Replace with actual image path
  },
  {
    name: "Muhammad Owais Shaikh",
    title: "Full-Stack Developer",
    image: "./Owais.jpg", // Replace with actual image path
  },
  {
    name: "Muhammad Maaz Tahir",
    title: "Frontend Developer",
    image: "./Mazz.jpg", // Replace with actual image path
  },
  {
    name: "Muhammad Arsalan Aftab",
    title: "Frontend Developer",
    image: "./Arsalan.jpeg", // Replace with actual image path
  }, {
    name: "Taha Sheikh",
    title: "Frontend Developer",
    image: "./Taha.jpg", // Replace with actual image path
  },
  {
    name: "Saad Ahmed",
    title: "Flutter Developer",
    image: "./Saad.jpg", // Replace with actual image path
  },
  {
    name: "Muzammil Shamim",
    title: "UI/UX Developer",
    image: "./MUzamil.jpg", // Replace with actual image path
  }, {
    name: "Hafiz Sharjeel",
    title: "Frontend Developer",
    image: "./Sharjel.jpeg", // Replace with actual image path
  },
  {
    name: "Ziyan Ahmed",
    title: "Social Media Marketer",
    image: "./Zayan.jpg", // Replace with actual image path
  },
  {
    name: "Muhammad Samee",
    title: "Frontend Developer",
    image: "./Samee.jpg", // Replace with actual image path
  },
  {
    name: "Naseer Ahmed",
    title: "Frontend Developer",
    image: "./Nasir.jpg", // Replace with actual image path
  },
  // Add more items as needed
];

function MeetOurTeam() { // Corrected component name
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
        Meet Code Dazzle Solutions Our Team
      </h2>
      <Slider {...settings}>
        {leadershipData.map((leader, index) => ( // Corrected array mapping
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 h-[500px] flex flex-col justify-between">
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

export default MeetOurTeam; // Corrected export name
