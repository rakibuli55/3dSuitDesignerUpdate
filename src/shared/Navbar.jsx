import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import defaultAvatar from "../assets/images/default-avatar.png";
import useLogout from "../hooks/useLogout";
import { AuthContext } from "../context/index";



function Navbar() {
  const headerRef = useRef();
  const {user, setUser} = useContext(AuthContext)
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const {logout} = useLogout() 

  const userAvatar = user?.avatar ? `${import.meta.env.VITE_SERVER_URL}/${user?.avatar}` : defaultAvatar;

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 30, filter: "blur(10px)" },
      { y: 0, filter: "blur(0px)", duration: 1 }
    );
    // handleOutSideClick
    const handleOutSideClick = (event) => {
      if (
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  const handleLogout = () => {
    setIsProfileOpen(false);
    logout()
  }
  

  return (
    <header className="fixed w-full left-0 top-8 custom-2xl:top-6 custom-xl:top-6 custom-lg:top-5 max-md:top-0 flex items-end z-20">
      <div className="container" ref={headerRef}>
        <div className="flex items-center justify-between">
          <div className="py-4 px-8 custom-2xl:py-3 custom-xl:py-[10px] custom-2xl:px-4 custom-xl:px-3 custom-lg:py-3 custom-lg:px-4 max-md:py-3 max-md:px-4 custom-xs:!py-2 custom-xs:!px-3 bg-white rounded-[50px] inline-block border border-[rgba(79,77,73,0.07)]">
            <Link to={"/"}>
              <img
                className="custom-2xl:w-[180px] custom-xl:w-[180px] custom-lg:w-[170px] max-md:w-[150px] custom-xs:!w-[135px]"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          <div>
            {user ? (
              <div className="relative">
                <p
                  className="flex items-center gap-2 border border-theme-color py-1 px-2 rounded-[30px] cursor-pointer"
                  ref={profileButtonRef}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <img
                    className="h-[40px] w-[40px] rounded-full object-cover"
                    src={userAvatar}
                    alt="user-avatar"
                  />
                  <span className="text-sm">
                    <TfiAngleDown />
                  </span>
                </p>
                <ul
                  className={`absolute z-[50] bg-white rounded-[6px] w-[120px] py-2 right-0 duration-200 ease-in-out ${
                    isProfileOpen
                      ? "opacity-100 visible top-14"
                      : "opacity-0 invisible top-16"
                  }`}
                  ref={profileDropdownRef}
                >
                  <li onClick={() => setIsProfileOpen(!isProfileOpen)}>
                    <Link
                      className="block px-4 py-[2px] text-left duration-200 ease-in-out hover:bg-theme-color hover:text-white"
                      to={"/profile"}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="px-4 py-[2px] text-left duration-200 ease-in-out hover:bg-red-400 hover:text-white cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to={"/login"}
                  className="inline-block py-2 bg-white px-6 text-[18px] rounded-[30px] duration-200 ease-in-out hover:bg-theme-color hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="inline-block py-2 bg-white px-6 text-[18px] rounded-[30px] duration-200 ease-in-out hover:bg-theme-color hover:text-white"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
