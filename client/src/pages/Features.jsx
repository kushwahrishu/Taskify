// import React from "react";
// import LandingNav from "../components/LandingNav";
// const Features = () => {
//   return (
//     <div>
//       <LandingNav />

//       <div className="min-h-screen w-full bg-sky-50 text-gray-800 px-6 py-20 flex items-center justify-center">
//         <div className="max-w-6xl w-full">
//           <h1 className="text-4xl md:text-5xl font-bold mb-14 text-center text-sky-700">
//             Why Choose Taskify?
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {/* Feature 1 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//                 Smart Task Management
//               </h2>
//               <p className="text-gray-600">
//                 Create, edit, categorize, and prioritize your tasks
//                 effortlessly. Stay on top of your goals with real-time updates
//                 and organized views.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//                 Progress Visualization
//               </h2>
//               <p className="text-gray-600">
//                 Visualize your work through status boards. Instantly track tasks
//                 marked as To-Do, In Progress, or Completed.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//                 Team Collaboration
//               </h2>
//               <p className="text-gray-600">
//                 Assign tasks, add team members, and manage productivity as a
//                 team. Taskify supports real-time collaboration with access
//                 control.
//               </p>
//             </div>

//             {/* Feature 4 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//                 Role-Based Access
//               </h2>
//               <p className="text-gray-600">
//                 Admins can manage users, control permissions, and oversee the
//                 workspace securely with our role-based access model.
//               </p>
//             </div>

//             {/* Feature 5 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//                 Trash & Restore
//               </h2>
//               <p className="text-gray-600">
//                 Accidentally deleted something? No worries. All removed tasks
//                 are stored in the trash until permanently deleted.
//               </p>
//             </div>

//             {/* Feature 6 */}
//             <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
//               <h2 className="text-2xl font-semibold text-sky-600 mb-3">
//                 Mobile Friendly
//               </h2>
//               <p className="text-gray-600">
//                 Taskify works seamlessly on all devices. Whether desktop or
//                 mobile, your tasks stay in sync and accessible anywhere.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer className="py-6 text-center text-xl bg-blue-600 text-white">
//          &copy; {new Date().getFullYear()} Taskify. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Features;

import React from "react";
import LandingNav from "../components/LandingNav";
import { motion } from "framer-motion";

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const featureVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const Features = () => {
  const features = [
    {
      title: "Smart Task Management",
      description:
        "Create, edit, categorize, and prioritize your tasks effortlessly. Stay on top of your goals with real-time updates and organized views.",
      icon: "📝",
    },
    {
      title: "Progress Visualization",
      description:
        "Visualize your work through status boards. Instantly track tasks marked as To-Do, In Progress, or Completed.",
      icon: "📊",
    },
    {
      title: "Team Collaboration",
      description:
        "Assign tasks, add team members, and manage productivity as a team. Taskify supports real-time collaboration with access control.",
      icon: "👥",
    },
    {
      title: "Role-Based Access",
      description:
        "Admins can manage users, control permissions, and oversee the workspace securely with our role-based access model.",
      icon: "🔒",
    },
    {
      title: "Trash & Restore",
      description:
        "Accidentally deleted something? No worries. All removed tasks are stored in the trash until permanently deleted.",
      icon: "🗑️",
    },
    {
      title: "Mobile Friendly",
      description:
        "Taskify works seamlessly on all devices. Whether desktop or mobile, your tasks stay in sync and accessible anywhere.",
      icon: "📱",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen w-full overflow-x-hidden">
      <LandingNav />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full px-6 py-20 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full">
          {/* Animated Title */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500"
          >
            Why Choose Taskify?
          </motion.h1>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 overflow-hidden relative group"
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Animated icon */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-4xl mb-4"
                >
                  {feature.icon}
                </motion.div>

                <h2 className="text-2xl font-semibold text-sky-700 mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-sky-300 mt-4 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-6 text-center text-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white"
      >
        &copy; {new Date().getFullYear()} Taskify. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Features;
