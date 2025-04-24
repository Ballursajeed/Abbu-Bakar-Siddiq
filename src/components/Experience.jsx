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
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">Experience</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-full max-w-3xl">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 w-full text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{experience.role}</h3>
                <p className="text-lg text-gray-600 mb-2">{experience.company}</p>
                <p className="text-lg text-gray-600 mb-6">{experience.duration}</p>
                <ul className="list-disc list-inside text-lg text-gray-800 text-left space-y-2">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;