import React, { useState, useEffect } from 'react';

const StatsOverview = () => {
  // State variables to track the stats
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [offices, setOffices] = useState(0);

  // Auto increment function
  useEffect(() => {
    const experienceInterval = setInterval(() => {
      setExperience((prev) => (prev < 1 ? prev + 1 : 1)); // Increase until 1
    }, 50); // Speed of increment (50ms)

    const clientsInterval = setInterval(() => {
      setClients((prev) => (prev < 10 ? prev + 1 : 10)); // Increase until 10
    }, 100); // Speed of increment (100ms)

    const employeesInterval = setInterval(() => {
      setEmployees((prev) => (prev < 20 ? prev + 1 : 20)); // Increase until 20
    }, 75); // Speed of increment (75ms)

    const officesInterval = setInterval(() => {
      setOffices((prev) => (prev < 1 ? prev + 1 : 1)); // Increase until 1
    }, 150); // Speed of increment (150ms)

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(experienceInterval);
      clearInterval(clientsInterval);
      clearInterval(employeesInterval);
      clearInterval(officesInterval);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 md:flex-row py-10 justify-between px-10 items-center">
        {/* Left aligned heading section */}
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold tracking-tight">
            Translating technology into a positive impact
          </h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let's rise to new heights with the
            power of digital transformation.
          </p>
        </div>

        {/* Stats grid with auto-increment effects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <div className="text-4xl font-bold">{experience}+</div>
            <div className="text-sm text-gray-600">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{clients}+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{employees}+</div>
            <div className="text-sm text-gray-600">Employees</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{offices}</div>
            <div className="text-sm text-gray-600">Offices Around the World</div>
          </div>
        </div>
      </div>

      {/* Bottom centered text */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-800 text-xl">
          We rethink business growth for you through our collective
          experience with strategic partner ecosystem.
        </p>
      </div>
    </div>
  );
};

export default StatsOverview;
