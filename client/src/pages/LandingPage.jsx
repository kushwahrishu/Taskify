// // import React from "react";
// // import { Link } from "react-router-dom";
// // import LandingNav from "../components/LandingNav";

// // const LandingPage = () => {
// //   return (
// //     <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col">
// //       {/* Navbar */}
// //       <LandingNav />

// //       {/* Hero Section */}
// //       <section className="flex flex-col justify-center items-center flex-grow text-center py-24 bg-sky-100 px-6">
// //         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sky-700 leading-tight">
// //           Boost Your Productivity <br className="hidden md:block" />
// //           with <span className="text-blue-600">Taskify</span>
// //         </h1>
// //         <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
// //           A powerful productivity management tool to organize, manage and track
// //           your personal and team tasks with ease.
// //         </p>
// //         <Link to="/log-in">
// //           <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all duration-200 shadow-md">
// //             Get Started
// //           </button>
// //         </Link>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-5 text-center text-xl bg-blue-700 text-white">
// //         &copy; {new Date().getFullYear()} Taskify. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // };

// // export default LandingPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import LandingNav from "../components/LandingNav";

// const LandingPage = () => {
//   return (
//     <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col">
//       {/* Navbar */}
//       <LandingNav />

//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center flex-grow text-center px-6 py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-100 relative overflow-hidden">
//         {/* Decorative Icon */}
//         <div className="absolute top-8 right-8 text-blue-200 text-9xl opacity-20 pointer-events-none select-none">
//           ✨
//         </div>
//         <div className="absolute bottom-10 left-10 text-sky-200 text-7xl opacity-20 pointer-events-none select-none">
//           ✅
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-5xl font-bold mb-8 text-sky-800 leading-tight">
//             Organize. Prioritize. <br className="hidden md:block" />
//             <span className="text-blue-600">Achieve with Taskify</span>
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
//             Your all-in-one productivity assistant to manage tasks, track
//             progress, and boost team collaboration — whether you're solo or
//             managing a squad.
//           </p>
//           <Link to="/log-in">
//             <button className="bg-blue-500 text-white px-8 py-3 mb-5 mt-5  rounded-full font-semibold text-lg hover:bg-blue-600 transition-all duration-200 shadow-lg">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-5 text-center text-xl bg-blue-600 text-white">
//         &copy; {new Date().getFullYear()} Taskify. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800 min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <LandingNav />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center flex-grow text-center px-6 py-24 bg-gradient-to-br  bg-sky-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-8 right-8 text-blue-200 text-9xl opacity-20 pointer-events-none select-none"
        >
          ✨
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 text-sky-200 text-7xl opacity-20 pointer-events-none select-none"
        >
          ✅
        </motion.div>

        {/* Floating Circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-200 opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-sky-300 opacity-30"
        />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-sky-900 leading-tight"
          >
            Organize. Prioritize. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Achieve with Taskify
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700"
          >
            Your all-in-one productivity assistant to manage tasks, track
            progress, and boost team collaboration — whether you're solo or
            managing a squad.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/log-in">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-5 text-center text-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white"
      >
        &copy; {new Date().getFullYear()} Taskify. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default LandingPage;
