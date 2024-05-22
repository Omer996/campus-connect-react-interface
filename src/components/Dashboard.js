import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUsers, faUserTie, faTasks, faChalkboardTeacher, faFileAlt, faVideo, faClipboardList, faFileUpload, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const cards = [
    { title: "Students Onboard", description: "1,200", icon: faUserGraduate, iconColor: "text-yellow-500" },
    { title: "Total Peers", description: "250", icon: faUsers, iconColor: "text-green-500" },
    { title: "Total Advisors", description: "23", icon: faUserTie, iconColor: "text-red-500" },
    { title: "Total Activities", description: "36", icon: faTasks, iconColor: "text-purple-500" },
    { title: "Total Sessions", description: "27", icon: faChalkboardTeacher, iconColor: "text-blue-500" },
    { title: "Document Reads", description: "4,625", icon: faFileAlt, iconColor: "text-indigo-500" },
    { title: "Video Views", description: "5,521", icon: faVideo, iconColor: "text-pink-500" },
    { title: "Total Assignments", description: "10", icon: faClipboardList, iconColor: "text-teal-500" },
    { title: "Total Submissions", description: "889", icon: faFileUpload, iconColor: "text-orange-500" },
    { title: "Active Students", description: "990", icon: faUserCheck, iconColor: "text-lime-500" },
  ];

  return (
    <div className="h-30 bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-white text-gray-800 shadow-lg rounded-3xl overflow-hidden p-3 flex flex-col items-center">
            <FontAwesomeIcon icon={card.icon} className={`${card.iconColor} text-3xl`} />
            <h2 className="text-lg font-semibold mb-1 text-center">{card.title}</h2>
            <p className="text-2xl font-bold text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
