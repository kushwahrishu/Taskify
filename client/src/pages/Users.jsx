// import React, { useState } from "react";
// import Title from "../components/Title";
// import Button from "../components/Button";
// import { IoMdAdd } from "react-icons/io";
// //import { summary } from "../assets/data";
// import { getInitials } from "../utils";
// import clsx from "clsx";
// import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
// import AddUser from "../components/AddUser";
// import {
//   useDeleteUserMutation,
//   useGetTeamListQuery,
//   useUserActionMutation,
// } from "../redux/slices/api/userApiSlice";
// import { toast } from "sonner";

// const Users = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [openAction, setOpenAction] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const { data, isLoading, refetch } = useGetTeamListQuery();
//   const [deleteUser] = useDeleteUserMutation();
//   const [userAction] = useUserActionMutation();
//   const userActionHandler = async () => {
//     try {
//       const result = await userAction({
//         isActive: !selected?.isActive,
//         id: selected?._id,
//       });
//       refetch();
//       toast.success(result.data.message);
//       setSelected(null);
//       setTimeout(() => {
//         setOpenAction(false);
//       }, 500);
//     } catch (error) {
//       console.log(err);
//       toast.error(err?.data?.message || err.error);
//     }
//   };
//   const deleteHandler = async () => {
//     try {
//       const result = await deleteUser(selected);
//       refetch();
//       toast.success("Deleted successfully !!");
//       setSelected(null);
//       setTimeout(() => {
//         setOpenDialog(false);
//       }, 500);
//     } catch (error) {
//       console.log(err);
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   const deleteClick = (id) => {
//     setSelected(id);
//     setOpenDialog(true);
//   };

//   const editClick = (el) => {
//     setSelected(el);
//     setOpen(true);
//   };

//   const userStatusClick = (el) => {
//     setSelected(el);
//     setOpenAction(true);
//   };

//   const TableHeader = () => (
//     <thead className="border-b border-gray-300">
//       <tr className="text-black text-left">
//         <th className="py-2">Full Name</th>
//         <th className="py-2">Title</th>
//         <th className="py-2">Email</th>
//         <th className="py-2">Role</th>
//         <th className="py-2">Active</th>
//       </tr>
//     </thead>
//   );

//   const TableRow = ({ user }) => (
//     <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-400/10">
//       <td className="p-2">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-700">
//             <span className="text-xs md:text-sm text-center">
//               {getInitials(user.name)}
//             </span>
//           </div>
//           {user.name}
//         </div>
//       </td>

//       <td className="p-2">{user.title}</td>
//       <td className="p-2">{user.email || "user.emal.com"}</td>
//       <td className="p-2">{user.role}</td>

//       <td>
//         <button
//           onClick={() => userStatusClick(user)}
//           className={clsx(
//             "w-fit px-4 py-1 rounded-full",
//             user?.isActive ? "bg-blue-200" : "bg-yellow-100"
//           )}
//         >
//           {user?.isActive ? "Active" : "Disabled"}
//         </button>
//       </td>

//       <td className="p-2 flex gap-4 justify-end">
//         <Button
//           className="text-blue-600 hover:text-blue-500 font-semibold sm:px-0"
//           label="Edit"
//           type="button"
//           onClick={() => editClick(user)}
//         />

//         <Button
//           className="text-red-700 hover:text-red-500 font-semibold sm:px-0"
//           label="Delete"
//           type="button"
//           onClick={() => deleteClick(user?._id)}
//         />
//       </td>
//     </tr>
//   );

//   return (
//     <>
//       <div className="w-full md:px-1 px-0 mb-6">
//         <div className="flex items-center justify-between mb-8">
//           <Title title="  Team Members" />
//           <Button
//             label="Add New User"
//             icon={<IoMdAdd className="text-lg" />}
//             className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md 2xl:py-2.5"
//             onClick={() => setOpen(true)}
//           />
//         </div>

//         <div className="bg-white px-2 md:px-4 py-4 shadow-md rounded">
//           <div className="overflow-x-auto">
//             <table className="w-full mb-5">
//               <TableHeader />
//               <tbody>
//                 {data?.map((user, index) => (
//                   <TableRow key={index} user={user} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <AddUser
//         open={open}
//         setOpen={setOpen}
//         userData={selected}
//         key={new Date().getTime().toString()}
//       />

//       <ConfirmatioDialog
//         open={openDialog}
//         setOpen={setOpenDialog}
//         onClick={deleteHandler}
//       />

//       <UserAction
//         open={openAction}
//         setOpen={setOpenAction}
//         onClick={userActionHandler}
//       />
//     </>
//   );
// };

// export default Users;

import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import { getInitials } from "../utils";
import clsx from "clsx";
import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
import AddUser from "../components/AddUser";
import {
  useDeleteUserMutation,
  useGetTeamListQuery,
  useUserActionMutation,
} from "../redux/slices/api/userApiSlice";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Users = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, isLoading, refetch } = useGetTeamListQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [userAction] = useUserActionMutation();

  const userActionHandler = async () => {
    try {
      const result = await userAction({
        isActive: !selected?.isActive,
        id: selected?._id,
      });
      refetch();
      toast.success(result.data.message);
      setSelected(null);
      setTimeout(() => {
        setOpenAction(false);
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.error);
    }
  };

  const deleteHandler = async () => {
    try {
      const result = await deleteUser(selected);
      refetch();
      toast.success("Deleted successfully !!");
      setSelected(null);
      setTimeout(() => {
        setOpenDialog(false);
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.error);
    }
  };

  const deleteClick = (id) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const editClick = (el) => {
    setSelected(el);
    setOpen(true);
  };

  const userStatusClick = (el) => {
    setSelected(el);
    setOpenAction(true);
  };

  const TableHeader = () => (
    <thead className="border-b border-gray-200">
      <tr className="text-gray-700 text-left">
        <th className="py-3 pl-4">Full Name</th>
        <th className="py-3">Title</th>
        <th className="py-3">Email</th>
        <th className="py-3">Role</th>
        <th className="py-3">Status</th>
        <th className="py-3 pr-4 text-right">Actions</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user, index }) => (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-gray-200 text-gray-600 hover:bg-blue-50/50"
    >
      <td className="p-3 pl-4">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center text-sm bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
          >
            <span className="text-xs md:text-sm text-center">
              {getInitials(user.name)}
            </span>
          </motion.div>
          <span className="font-medium">{user.name}</span>
        </div>
      </td>

      <td className="p-3">
        <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
          {user.title}
        </span>
      </td>
      <td className="p-3">{user.email || "user@email.com"}</td>
      <td className="p-3">
        <span
          className={clsx(
            "text-xs px-2.5 py-1 rounded-full",
            user.role === "Admin"
              ? "bg-purple-100 text-purple-800"
              : "bg-green-100 text-green-800"
          )}
        >
          {user.role}
        </span>
      </td>

      <td className="p-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => userStatusClick(user)}
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm font-medium",
            user?.isActive
              ? "bg-blue-100 text-blue-800"
              : "bg-yellow-100 text-yellow-800"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </motion.button>
      </td>

      <td className="p-3 pr-4">
        <div className="flex gap-3 justify-end">
          <motion.button
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 font-medium text-sm"
            onClick={() => editClick(user)}
          >
            Edit
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, color: "#dc2626" }}
            whileTap={{ scale: 0.95 }}
            className="text-red-600 font-medium text-sm"
            onClick={() => deleteClick(user?._id)}
          >
            Delete
          </motion.button>
        </div>
      </td>
    </motion.tr>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full md:px-2 px-0 mb-6"
    >
      <div className="flex items-center justify-between mb-8">
        <Title title="Team Members" />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            label="Add New User"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-2 items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-4 py-2.5 shadow-md hover:shadow-lg transition-all"
            onClick={() => setOpen(true)}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white px-4 py-4 shadow-lg rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {data?.map((user, index) => (
                <TableRow key={user._id || index} user={user} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <AddUser
        open={open}
        setOpen={setOpen}
        userData={selected}
        key={new Date().getTime().toString()}
      />

      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      />

      <UserAction
        open={openAction}
        setOpen={setOpenAction}
        onClick={userActionHandler}
      />
    </motion.div>
  );
};

export default Users;
