import { useForm } from "react-hook-form";
import { MdModeEdit } from "react-icons/md";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/index";
import defaultAvatar from "../assets/images/default-avatar.png"
import useAxiosSecure from "../hooks/useAxiosSecure";


function UserProfilePage() {
    const {user, setUser} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
        name:user.name,
        email:user.email,
    }
  });

  const [uploadedAvatar, setUploadedAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure()


  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedAvatar(file);
    }
  };

  const onSumbit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);

    if (uploadedAvatar) {
      formData.append("avatar", uploadedAvatar);
    }

    try {
      const loadingToast = toast.loading("Updating data...");
      setIsLoading(true);
      const response = await axiosSecure.post("/users/data/update", formData);

      if (response?.status === 200) {
        toast.success(`${response?.data?.message}`, { id: loadingToast });
        const updatedUserData = response.data.data;
        setUser((prev) => ({
          ...prev,
          name: updatedUserData.name,
          email: updatedUserData.email,
          avatar: updatedUserData.avatar,
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const userAvatar = uploadedAvatar ? URL.createObjectURL(uploadedAvatar) : user?.avatar ? `${import.meta.env.VITE_SERVER_URL}/${user?.avatar}` : defaultAvatar;

  return (
    <section className="pt-[180px] pb-[100px]">
      <div>
        <div>
          {/* user profile  */}
          <form
            className="bg-white shadow-2xl p-10 rounded-[20px] w-[60%] mx-auto"
            onSubmit={handleSubmit(onSumbit)}
          >
            {/* uploader  */}
            <div>
              <div className="w-[220px] h-[200px] mx-auto text-center relative">
                <input
                  type="file"
                  id="avatarUpload"
                  className="hidden"
                  onChange={onFileChange}
                />
                <img
                  className="w-[200px] h-[200px] rounded-full object-cover"
                  src={userAvatar}
                  alt=""
                />
                <label
                  htmlFor="avatarUpload"
                  className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center bg-primaryBlue border border-white text-white rounded-full absolute bottom-7 right-7 bg-theme-color"
                >
                  <MdModeEdit />
                </label>
              </div>
              <p className="text-[22px] font-semibold mt-6 capitalize w-[400px] mx-auto text-center">
                {user?.name}
              </p>
            </div>

            {/* basic information  */}
            <div className="user-basic-information w-[600px] mt-10 mx-auto">
              <div>
                <input
                  type="text"
                  defaultValue={user?.name}
                  {...register("name", { required: "Name is required" })}
                  className="w-full py-3 px-5 border rounded-[8px] focus:outline-none"
                />
                {errors.name && (
                  <span className="mt-3">{errors.name.message}</span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("email", { required: "Name is required" })}
                  className="hidden"
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="py-3 px-8 bg-theme-color text-base font-medium text-white rounded-full duration-200 ease-in-out hover:bg-[#75baee]"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserProfilePage;
