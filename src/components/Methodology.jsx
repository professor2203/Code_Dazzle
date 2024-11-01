// Methodology.js
import React from "react";
import { FaProjectDiagram, FaRegClipboard, FaDrawPolygon, FaLaptopCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaProjectDiagram size={40} />,
    title: "Understand pattern identification",
    description:
      "Xeenu Methodology revolves around understanding pattern identification. It involves analyzing data to identify and extract significant patterns.",
    step: "Step 1",
  },
  {
    icon: <FaRegClipboard size={40} />,
    title: "Pattern mapping user stories",
    description:
      "Pattern mapping user stories is the second step in Xeenu Methodology. It involves categorizing user stories according to recognized patterns.",
    step: "Step 2",
  },
  {
    icon: <FaDrawPolygon size={40} />,
    title: "Wireframe and front end",
    description:
      "After pattern mapping, our dedicated team creates wireframes and front-end designs. They align with the identified patterns and user stories.",
    step: "Step 3",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Model development and training",
    description:
      "Model development and training involves the development of machine learning models and training using the identified patterns and data.",
    step: "Step 4",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Development and deployment",
    description:
      "Development and deployment is the final step in Xeenu Methodology. The developed models are integrated into the software and deployed for use.",
    step: "Step 5",
  },
];

const Methodology = () => {
  return (
    <div className="px-8 py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Proven Approach to Achieve Your Objectives
        </h2>
        <p className="text-gray-600">
          Achieve your business goals with our successful Code Dazzle Methodology, renowned for its structured planning and consistent results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
            <div className="text-blue-600 mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.step}
            </h3>
            <h4 className="text-md font-semibold text-gray-700 mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
