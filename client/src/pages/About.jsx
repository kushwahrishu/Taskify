// import React from "react";
// import LandingNav from "../components/LandingNav";

// const About = () => {
//   return (
//     <div className="bg-white text-gray-800 min-h-screen w-full">
//       {/* Navbar */}
//       <LandingNav />

//       {/* About Section */}
//       <section className="w-full min-h-[80vh] bg-sky-50 px-6 py-20 flex items-center justify-center">
//         <div className="max-w-5xl text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-8 text-sky-700">
//             About Taskify
//           </h1>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             <strong>Taskify</strong> is a powerful productivity and task
//             management platform built to help individuals and teams stay
//             focused, organized, and efficient. Whether you're planning your
//             daily to-dos, managing long-term projects, or collaborating with
//             your team, Taskify offers the right tools to keep everything on
//             track.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             Our platform provides a seamless experience with features like smart
//             categorization, real-time updates, collaborative task boards, and
//             admin-level controls. Built with scalability in mind, Taskify suits
//             both small teams and large organizations.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             We believe that productivity tools should be simple, intuitive, and
//             empowering. Taskify was created with that belief at its core — to
//             provide a clean, fast, and functional way to manage tasks and boost
//             your productivity every day.
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 text-center text-xl bg-blue-600 text-white">
//         &copy; {new Date().getFullYear()} Taskify. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default About;

import React from "react";
import LandingNav from "../components/LandingNav";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <LandingNav />

      {/* About Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full min-h-[80vh] px-6 py-20 flex items-center justify-center relative"
      >
        {/* Decorative floating elements */}
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-6xl text-blue-100 opacity-60 pointer-events-none"
        >
          •
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 text-5xl text-sky-100 opacity-60 pointer-events-none"
        >
          •
        </motion.div>

        <div className="max-w-5xl text-center relative z-10">
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500"
          >
            About Taskify
          </motion.h1>

          <motion.div variants={containerVariants}>
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            >
              <strong className="text-sky-600">Taskify</strong> is a powerful
              productivity and task management platform built to help
              individuals and teams stay focused, organized, and efficient.
              Whether you're planning your daily to-dos, managing long-term
              projects, or collaborating with your team, Taskify offers the
              right tools to keep everything on track.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            >
              Our platform provides a seamless experience with features like
              smart categorization, real-time updates, collaborative task
              boards, and admin-level controls. Built with scalability in mind,
              Taskify suits both small teams and large organizations.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              We believe that productivity tools should be simple, intuitive,
              and empowering. Taskify was created with that belief at its core —
              to provide a clean, fast, and functional way to manage tasks and
              boost your productivity every day.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

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

export default About;
