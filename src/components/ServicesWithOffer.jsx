import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ className, children }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const services = [
  {
    id: 1,
    name: "App Development",
    title: "App Development",
    description:
      "25 years of experience in app development with a focus on specific niche cutting-edge technologies to craft custom solutions that seamlessly integrate with your unique requirements, revolutionizing how you operate.",
    benefits: [
      {
        title: "Cutting-Edge Expertise:",
        description:
          "Our talented experts are proficient in utilizing the latest technologies to develop custom solutions tailored to your needs.",
      },
      {
        title: "User-Centric Design:",
        description: "We prioritize user experience to create intuitive and engaging applications.",
      },
      {
        title: "Seamless Integration:",
        description: "Our apps integrate smoothly with your existing systems, enhancing functionality.",
      },
    ],
  },
  {
    id: 2,
    name: "Web Development",
    title: "Web Development",
    description:
      "Crafting responsive and visually appealing websites that not only attract visitors but also convert them into customers.",
    benefits: [
      {
        title: "Custom Solutions:",
        description: "Tailored web solutions that cater to your specific business needs.",
      },
      {
        title: "Responsive Design:",
        description: "Ensuring your website looks great on any device, from desktop to mobile.",
      },
      {
        title: "SEO Optimized:",
        description: "Improving your website's visibility and ranking on search engines.",
      },
    ],
  },
  {
    id: 3,
    name: "Machine Learning",
    title: "Machine Learning Solutions",
    description:
      "Leveraging advanced algorithms to provide insights from your data, predict trends, and enhance decision-making processes.",
    benefits: [
      {
        title: "Data-Driven Insights:",
        description: "Transform your data into actionable insights for strategic decisions.",
      },
      {
        title: "Predictive Analytics:",
        description: "Anticipate market trends and customer behavior with predictive modeling.",
      },
      {
        title: "Automation of Processes:",
        description: "Automate repetitive tasks to improve efficiency and accuracy.",
      },
    ],
  },
  // Add more services as needed
];

function ServicesWithOffer() {
  const [activeService, setActiveService] = useState(services[0]); // Default to the first service

  return (
    <div className="max-w-5xl container mx-auto p-4 mt-12">
      <h2 className="font-semibold mb-6 text-3xl text-[#000037]">Services We Offer</h2>
      <Card className="flex flex-col md:flex-row overflow-hidden shadow-lg">
        {/* Services Sidebar */}
        <div className="bg-[#1a1f3d] p-6 md:w-72 text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="space-y-4">
            <div className="space-y-3 pl-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`text-sm w-full text-left py-2 px-3 rounded-full transition-colors ${
                    activeService.id === service.id
                      ? "bg-[#B372B0] text-white"
                      : "bg-transparent text-gray-400 hover:bg-[#B372B0] hover:text-white"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 flex-1 bg-white">
          <h3 className="font-semibold text-lg mb-3">{activeService.title}</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {activeService.description}
          </p>

          <h4 className="font-semibold text-sm mb-4">Business Benefits of Choosing Us</h4>
          <div className="space-y-4">
            {activeService.benefits.map((benefit, index) => (
              <div key={index} className="text-sm text-gray-600">
                <span className="font-medium">{benefit.title}</span>{" "}
                {benefit.description}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

ServicesWithOffer.propTypes = {
  // Add any props if needed in the future
};

export default ServicesWithOffer;
