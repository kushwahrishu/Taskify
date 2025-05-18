import React from "react";
import { motion } from "framer-motion";

const supportData = [
  {
    title: "Dashboard",
    description: "Get an overview of all your task statuses and team activity.",
  },
  {
    title: "Tasks",
    description: "View, assign, and manage all tasks.",
  },
  {
    title: "Completed",
    description: "See tasks you've finished.",
  },
  {
    title: "In Progress",
    description: "Track tasks you're currently working on.",
  },
  {
    title: "To Do",
    description: "Tasks you need to start working on.",
  },
  {
    title: "Team",
    description: "Collaborate with other members (Admins only).",
  },
  {
    title: "Trash",
    description: "Recover or delete removed tasks (Admins only).",
  },
];

const Support = () => {
  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-700 text-center">
        Help & Support
      </h2>

      <p className="mb-10 text-lg text-center text-gray-700 max-w-2xl mx-auto">
        Welcome to <strong>Taskify – Productivity Management Tool</strong>.
        Below is a quick guide to help you navigate and use all the features
        effectively.
      </p>

      <div className="space-y-6">
        {supportData.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition duration-300"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-12 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Still need help? Contact us at{" "}
        <a
          href="mailto:support@taskify.com"
          className="text-blue-600 underline"
        >
          support@taskify.com
        </a>
      </motion.p>
    </motion.div>
  );
};

export default Support;
