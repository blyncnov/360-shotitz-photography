import React from "react";

// Icons
import { IoSettingsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

const AdminHeader = () => {
  return (
    <div>
      <div className="min-h-[80px] max-h-[80px h-[80px] px-6 w-full border-b bg-sidebar border-gy text-white flex justify-between items-center">
        <div></div>
        <div>
          <h2>Input</h2>
        </div>
        <div className="w-auto flex items-center gap-4">
          <div className="w-auto bg-dashboardGray p-2 rounded cursor-pointer text-xl">
            <IoSettingsSharp />
          </div>
          <div className="w-auto bg-dashboardGray p-2 rounded cursor-pointer text-xl">
            <IoNotifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
