// import React from "react";
// import { MdOutlineSearch } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { setOpenSidebar } from "../redux/slices/authSlice";
// import UserAvatar from "./UserAvatar";
// import NotificationPanel from "./NotificationPanel";

// const Navbar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   return (
//     <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0 shadow">
//       <div className="flex gap-4">
//         <button
//           onClick={() => dispatch(setOpenSidebar(true))}
//           className="text-2xl text-gray-500 block md:hidden"
//         >
//           ☰
//         </button>

//         <div className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]">
//           <MdOutlineSearch className="text-gray-500 text-xl " />

//           <input
//             type="text"
//             placeholder="Search...."
//             className="flex-1 outline-none bg-transparent placeholder:text-gray-500  text-gray-800"
//           />
//         </div>
//       </div>

//       <div className="flex gap-2 items-center">
//         <NotificationPanel />

//         <UserAvatar />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { MdOutlineSearch } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { setOpenSidebar } from "../redux/slices/authSlice";
// import UserAvatar from "./UserAvatar";
// import NotificationPanel from "./NotificationPanel";
// import { FiSun, FiMoon } from "react-icons/fi";

// const Navbar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", !darkMode ? "dark" : "light");
//   };

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good morning";
//     if (hour < 18) return "Good afternoon";
//     return "Good evening";
//   };

//   const today = new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//     month: "short",
//     day: "numeric",
//   });

//   return (
//     <div className="flex justify-between items-center bg-white dark:bg-gray-900 px-4 py-3 2xl:py-4 sticky z-10 top-0 shadow dark:text-white">
//       {/* Left Side */}
//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => dispatch(setOpenSidebar(true))}
//           className="text-2xl text-gray-500 dark:text-white block md:hidden"
//         >
//           ☰
//         </button>

//         <div>
//           <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
//             {getGreeting()}, {user?.name || "User"} 👋
//           </p>
//           <p className="text-xs text-gray-700 dark:text-gray-100">{today}</p>
//         </div>

//         {/* Search Bar */}
//         <div className="ml-4 w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6] dark:bg-gray-800">
//           <MdOutlineSearch className="text-gray-500 text-xl " />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800 dark:text-white"
//           />
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex gap-3 items-center">
//         {/* Dark mode toggle */}
//         <button
//           onClick={toggleTheme}
//           className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
//         >
//           {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
//         </button>

//         {/* Notification Bell */}
//         <NotificationPanel />

//         {/* User Avatar & Dropdown (already in your UserAvatar component) */}
//         <UserAvatar />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import UserAvatar from "./UserAvatar";
import NotificationPanel from "./NotificationPanel";
import { MdOutlineWbSunny, MdAccessTime } from "react-icons/md";

const quotes = [
  "Believe you can and you're halfway there.🙌",
  "Push yourself, because no one else is going to do it for you.🕺",
  "Success doesn’t just find you. You have to go out and get it.🧐",
  "Great things never come from comfort zones.😇",
  "Dream it. Wish it. Do it.🎉",
  "Stay focused and never give up.💪",
  "Your only limit is your mind.🎗",
  "Make today so awesome yesterday gets jealous.👅",
];

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 7 seconds

    return () => {
      clearInterval(clockInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const today = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0 shadow text-gray-800">
      {/* Left (Greeting) */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className="text-2xl text-gray-500 block md:hidden"
        >
          ☰
        </button>
        <div>
          <p className="text-md font-medium">
            {getGreeting()}, {user?.name || "User"} 👋
          </p>
          <p className="text-sm text-gray-600">{today}</p>
        </div>
      </div>

      {/* Center (Animated Quote) */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="flex items-center gap-2 text-md text-gray-600 animate-fade-in transition-opacity duration-1000 ease-in-out">
          <MdOutlineWbSunny className="text-yellow-500 text-lg" />
          <span className="italic font-bold">“{quotes[quoteIndex]}”</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <div className="flex items-center text-sm text-gray-600 gap-1">
          <MdAccessTime className="text-blue-600 text-lg" />
          <span>{timeString}</span>
        </div>
        <NotificationPanel />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
