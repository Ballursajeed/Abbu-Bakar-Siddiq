import React from 'react';

function Experience() {
  const experiences = [
    {
      role: "SOC Analyst Intern",
      company: "Worldsec Technologies LLP",
      duration: "May 2024 - February 2025",
      description: [
        "Completed a 10-month remote internship focusing on Cyber Security.",
        "Specialized in Security Information and Event Management (SIEM) using Splunk and Endpoint Detection and Response (EDR).",
        "Demonstrated strong ability to learn and apply complex concepts.",
        "Received excellent feedback from supervisor Sulabh Mishra."
      ]
    }
    // Add more experiences here as needed
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
              <p className="text-gray-600 mb-1">{experience.company}</p>
              <p className="text-gray-600 mb-4">{experience.duration}</p>
              <ul className="list-disc list-inside text-gray-800">
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;