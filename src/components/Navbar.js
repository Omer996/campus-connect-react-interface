
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarAlt, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-indigo-900 p-4 flex justify-between items-center text-white">
      <div className="flex items-center ml-10">
        <FontAwesomeIcon icon={faBars} className="text-xl mr-4" />
        <div className="text-2xl font-bold flex items-center ">
          <img src="https://pics.craiyon.com/2023-07-02/88b537b3ef2e4b459244d046a439370d.webp" alt="Campus Connect" className="h-14 w-14 mr-2 rounded-full" />
          Campus Connect
        </div>
      </div>
      <div className="flex items-center mr-14">
        <div className="flex items-center mr-10">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-xl mr-4" />
          <span>Today, 4th April, 2024</span>
        </div>
        <FontAwesomeIcon icon={faBell} className="text-xl mr-12" />
        <div className="flex items-center">
          <img src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myca-1553783.jpg&fm=jpg" alt="Profile" className="h-12 w-12 rounded-full mr-2" />
          <div className="text-right">
            <p>Ali Haider</p>
            <p className="text-sm opacity-75">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
