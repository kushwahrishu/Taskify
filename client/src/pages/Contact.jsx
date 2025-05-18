// // import React from "react";
// // import LandingNav from "../components/LandingNav";

// // const Contact = () => {
// //   return (
// //     <div className="bg-sky-50 min-h-screen text-gray-800 flex flex-col">
// //       {/* Navbar */}
// //       <LandingNav />

// //       {/* Contact Section */}
// //       <div className="flex-grow flex items-center justify-center px-6 py-20">
// //         <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10">
// //           <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-700 mb-10">
// //             Get in Touch
// //           </h1>

// //           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Name */}
// //             <div className="col-span-1">
// //               <label className="block mb-2 text-sm font-medium text-sky-800">
// //                 Name
// //               </label>
// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
// //               />
// //             </div>

// //             {/* Email */}
// //             <div className="col-span-1">
// //               <label className="block mb-2 text-sm font-medium text-sky-800">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 placeholder="Your Email"
// //                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
// //               />
// //             </div>

// //             {/* Subject */}
// //             <div className="col-span-1 md:col-span-2">
// //               <label className="block mb-2 text-sm font-medium text-sky-800">
// //                 Subject
// //               </label>
// //               <input
// //                 type="text"
// //                 placeholder="Subject"
// //                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
// //               />
// //             </div>

// //             {/* Message */}
// //             <div className="col-span-1 md:col-span-2">
// //               <label className="block mb-2 text-sm font-medium text-sky-800">
// //                 Message
// //               </label>
// //               <textarea
// //                 rows="5"
// //                 placeholder="Your message..."
// //                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
// //               ></textarea>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="col-span-1 md:col-span-2 text-center">
// //               <button
// //                 type="submit"
// //                 className="bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
// //               >
// //                 Send Message
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <footer className="py-6 text-center text-xl bg-blue-600 text-white">
// //         &copy; {new Date().getFullYear()} Taskify. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Contact;

// import React from "react";
// import LandingNav from "../components/LandingNav";

// const Contact = () => {
//   return (
//     <div className="bg-sky-50 min-h-screen text-gray-800 flex flex-col">
//       {/* Navbar */}
//       <LandingNav />

//       {/* Contact Info Section */}
//       <div className="flex-grow flex items-center justify-center px-6 py-20">
//         <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10">
//           {/* Left Side - Illustration */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="https://www.shutterstock.com/image-illustration/website-internet-contact-us-page-260nw-148294223.jpg"
//               alt="Contact Us"
//               className="w-full h-auto rounded-xl"
//             />
//           </div>

//           {/* Right Side - Contact Info */}
//           <div className="w-full md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-6">
//               Let's Connect
//             </h1>
//             <p className="text-lg mb-6 text-gray-700">
//               Feel free to reach out to us with any questions, suggestions, or
//               feedback. We're here to help!
//             </p>

//             <div className="space-y-4 text-base md:text-lg">
//               <div>
//                 <strong className="text-sky-800">📞 Phone:</strong>{" "}
//                 <span className="text-gray-700">+91 12345 34523</span>
//               </div>
//               <div>
//                 <strong className="text-sky-800">📧 Email:</strong>{" "}
//                 <span className="text-gray-700">query@gmail.com</span>
//               </div>
//               <div>
//                 <strong className="text-sky-800">📍 Address:</strong>{" "}
//                 <span className="text-gray-700">
//                   Indore, Madhya Pradesh, India
//                 </span>
//               </div>
//               <div>
//                 <strong className="text-sky-800">⏰ Working Hours:</strong>{" "}
//                 <span className="text-gray-700">Mon - Fri: 9 AM - 6 PM</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-6 text-center text-xl bg-blue-600 text-white">
//         &copy; {new Date().getFullYear()} Taskify. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import LandingNav from "../components/LandingNav";
import { motion } from "framer-motion";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen text-gray-800 flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <LandingNav />

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex-grow flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl w-full bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 p-10 bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="https://www.shutterstock.com/image-illustration/website-internet-contact-us-page-260nw-148294223.jpg"
              alt="Contact Us"
              className="w-full h-auto rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 p-10 bg-white flex flex-col justify-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-sky-700 mb-6"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg mb-8 text-gray-700"
            >
              Feel free to reach out to us with any questions, suggestions, or
              feedback. We're here to help!
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-5">
              {[
                {
                  icon: "📞",
                  title: "Phone",
                  content: "+91 12345 34523",
                  color: "text-blue-500",
                },
                {
                  icon: "📧",
                  title: "Email",
                  content: "query@gmail.com",
                  color: "text-sky-500",
                },
                {
                  icon: "📍",
                  title: "Address",
                  content: "Indore, Madhya Pradesh, India",
                  color: "text-indigo-500",
                },
                {
                  icon: "⏰",
                  title: "Working Hours",
                  content: "Mon - Fri: 9 AM - 6 PM",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sky-700">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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

export default Contact;
