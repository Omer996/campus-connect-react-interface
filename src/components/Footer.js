import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'; // Added faUser icon
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const members = [
  { name: "Fahad Akbar", school: "SDSB", assigned: "12 Students", active: "90%", status: "Pending" },
  { name: "Shayan Aamir", school: "MGHSS", assigned: "30 Students", active: "86%", status: "Pending" },
  { name: "Ali Haider", school: "SOE", assigned: "30 Students", active: "86%", status: "Pending" },
  { name: "Saad Yousaf", school: "SHASOL", assigned: "30 Students", active: "86%", status: "Pending" },
];

const Members = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faUser} className="text-blue-600 mr-2" />
        Members
      </h2>
      <div className="flex mb-4">
        <button className="text-blue-500 border-b-2 border-blue-500 px-3 py-2">PALs</button>
        <button className="text-gray-500 border-b-2 border-transparent px-3 py-2">Students</button>
        <button className="text-gray-500 border-b-2 border-transparent px-3 py-2">Advisors</button>
        <div className="ml-auto flex items-center">
          <input type="text" placeholder="Search" className="border rounded-lg px-3 py-2 text-sm" />
          <button className="ml-2 text-gray-500"><FontAwesomeIcon icon={faEllipsisV} /></button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className='relative right-11'>
            <th className='py-2'></th>
            <th className='py-2 max-w-30 '>Name</th>
            <th className='py-2'>Student Assigned</th>
            <th className='py-2'>Status</th>
            <th className='py-2'></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="hover:bg-gray-200">
            <td className="py-2 relative">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 border-2 border-blue-600 checked:bg-blue-600 checked:border-transparent" />

            </td>

              <td className="py-2"><FontAwesomeIcon icon={faUser} className="text-blue-700 mr-2" size="lg" />{member.name}<div className="text-sm text-gray-800 ml-6">{member.school}</div></td>
              <td className="py-2">{member.assigned}<div className="text-sm text-gray-500">{member.active} active</div></td>
              <td className="py-2"><span className="bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-md mr-7">{member.status}</span></td>
              <td className="py-2"><FontAwesomeIcon icon={faEllipsisV} className='relative right:15' /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const CustomCalendar = () => {
    const [date, setDate] = useState(new Date());
  
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCalendar} className="text-blue-500 mr-2" />
          Calendar
        </h2>
        <div className="w-full border-none">
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar-custom"
          />
        </div>
        <div className="w-full text-center text-gray-700 mt-4">
          No events for this date
        </div>
        <div className="flex justify-around mt-4">
          <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs">Selected</span>
          <span className="bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-xs">Current Date</span>
          <span className="bg-purple-100 text-purple-800 rounded-full px-2 py-1 text-xs">Scheduled Event</span>
        </div>
        

        <style jsx>{`
          .react-calendar-custom {
            border: none;
            width: 100%;
          }
          .react-calendar-custom .react-calendar__tile {
            border-radius: 12px;
          }
  
          /* Hover effect for calendar tiles */
          .react-calendar-custom .react-calendar__tile:hover {
            border-radius: 12px; 
          }
  
          .react-calendar-custom .react-calendar__tile--active {
            background-color: #3182ce; 
            color: white;
            border-radius: 12px; 
          }
        `}</style>
      </div>
    );
  };
  
  

  



const MembersAndCalendar = () => {
  return (
    <div className="min-h-screen bg-blue-100 h-90 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Members />
          <CustomCalendar />
        </div>
      </div>
    </div>
  );
};

export default MembersAndCalendar;
