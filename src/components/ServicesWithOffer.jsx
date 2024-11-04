import React, { useState } from "react";
import PropTypes from "prop-types";

// Card component
const Card = ({ className, children }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

// Services data
const services = [
  {
    id: 1,
    name: "AI Decision-Making",
    title: "AI Decision-Making",
    description: "AI can assist us in making better decisions by analyzing vast amounts of data quickly, identifying patterns, and providing insights that help inform our choices. It can enhance decision-making processes across various fields, from business strategy to healthcare, ultimately leading to more informed and effective outcomes.",
    benefits: [
      {
        title: "Data-Driven Insights:",
        description: "AI analyzes massive datasets and uncovers patterns that are not immediately visible to humans, enabling businesses to make informed decisions faster."
      },
      {
        title: "Improved Efficiency:",
        description: "With the help of AI, decision-making becomes more efficient as it automates data processing and reduces the time it takes to derive actionable insights."
      },
      {
        title: "Predictive Analysis:",
        description: "AI's ability to predict outcomes based on historical data can help organizations make more accurate future projections."
      },
      {
        title: "Objective Analysis:",
        description: "AI removes bias in decision-making by focusing solely on data and patterns, improving fairness and objectivity."
      }
    ]
  },
  {
    id: 2,
    name: "Why Choose Code Dazzle Pvt. Ltd?",
    title: "Why Choose Code Dazzle Pvt. Ltd?",
    description: "Opt for Code Dazzle Pvt. Ltd for our experienced team dedicated to delivering tailored solutions that align with your business objectives. We offer comprehensive support, prioritize quality at every stage, embrace innovation, and maintain a client-centric approach, ensuring a proven track record of successful outcomes for our clients.",
    benefits: [
      {
        title: "Tailored Solutions:",
        description: "We create customized solutions that fit the unique needs of your business and industry."
      },
      {
        title: "Experienced Team:",
        description: "Our team has extensive expertise across a range of technologies and industries, ensuring that we deliver quality at every stage."
      },
      {
        title: "Innovation-Driven:",
        description: "We embrace the latest technologies and practices to provide innovative and cutting-edge solutions."
      },
      {
        title: "Client-Centric Approach:",
        description: "Our clients are at the heart of what we do, and we maintain close collaboration to ensure successful project outcomes."
      }
    ]
  },
  {
    id: 3,
    name: "Industries We Cater To",
    title: "Industries We Cater To",
    description: "Code Dazzle Pvt. Ltd serves a diverse range of industries, including e-commerce, healthcare, finance, education, and technology. Our expertise allows us to create tailored solutions that address the unique challenges and requirements of each sector, helping businesses thrive in their respective markets.",
    benefits: [
      {
        title: "E-commerce:",
        description: "We build custom solutions to help online retailers enhance their platforms, streamline operations, and improve customer engagement."
      },
      {
        title: "Healthcare:",
        description: "We create healthcare applications and solutions focused on improving patient care, streamlining workflows, and ensuring compliance with regulations."
      },
      {
        title: "Finance:",
        description: "Our finance solutions help organizations manage complex data, ensure security, and optimize financial operations."
      },
      {
        title: "Education & Technology:",
        description: "We develop innovative platforms and tools that support the evolving needs of both educators and learners in the education and technology sectors."
      }
    ]
  }
];

function ServicesWithOffer() {
  const [activeService, setActiveService] = useState(services[0]); // Default to the first service

  return (
    <div className="max-w-5xl container mx-auto p-4 mt-12">
      <h2 className="font-semibold mb-6 text-[32px] text-[#000037]">Services We Offer</h2>
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
