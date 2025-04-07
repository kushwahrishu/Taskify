import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";
import { setCredentials } from "../redux/slices/authSlice";
import Loading from "../components/Loader";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerUser, { isLoading }] = useRegisterMutation();

  const submitHandler = async (data) => {
    try {
      const result = await registerUser(data).unwrap();
      dispatch(setCredentials(result));
      navigate("/dashboard");
      toast.success("Registration successful!");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* Left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
              Manage all your tasks in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Productivity Management Tool</span>
              <span className="text-purple-700 tracking-wide italic">
                Taskify
              </span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-4 bg-white px-10 pt-8 pb-5"
          >
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Register Now!
              </p>
              <p className="text-center text-base text-gray-700 ">
                Create your account to get started.
              </p>
            </div>

            <div className="flex flex-col gap-y-3">
              <Textbox
                placeholder="Enter your name.."
                type="text"
                name="name"
                label="Name"
                className="w-full rounded-full"
                register={register("name", { required: "Name is required!" })}
                error={errors.name ? errors.name.message : ""}
              />

              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", { required: "Email is required!" })}
                error={errors.email ? errors.email.message : ""}
              />

              <Textbox
                placeholder="true or false"
                type="text"
                name="isAdmin"
                label="Is Admin"
                className="w-full rounded-full"
                register={register("isAdmin", {
                  required: "Is Admin is required!",
                })}
                error={errors.isAdmin ? errors.isAdmin.message : ""}
              />

              <Textbox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <Textbox
                placeholder="Enter your role"
                type="text"
                name="role"
                label="Role"
                className="w-full rounded-full"
                register={register("role", { required: "Role is required!" })}
                error={errors.role ? errors.role.message : ""}
              />

              <Textbox
                placeholder="Enter your title"
                type="text"
                name="title"
                label="Title"
                className="w-full rounded-full"
                register={register("title", { required: "Title is required!" })}
                error={errors.title ? errors.title.message : ""}
              />

              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  type="submit"
                  label="Register"
                  className="w-full h-10 bg-blue-700 text-white rounded-full"
                />
              )}

              {/* Link to login Page */}
              <div className="flex justify-center mt-4">
                <p className="text-sm text-gray-800">
                  Already have an account?{" "}
                  <Link to="/log-in" className="text-blue-800 hover:underline">
                    Login Here..
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
