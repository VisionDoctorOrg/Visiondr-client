import React, { useEffect, useState } from "react";
import "./Layout.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import Routing from "./Routing";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import WelcomeHeader from "./WelcomeHeader";
import SearchBar from "./SearchBar";
import IconButton from "./IconButton";

const Layout = () => {
  const caseFiles = [
    {
      icon: "M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z",
      label: "Add new",
      path: "/app/add-new",
    },
    {
      icon: "M17 2V4H20C20.552 4 21 4.448 21 5V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V5C3 4.448 3.448 4 4 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM13 11V13H15V15H12.999L13 17H11L10.999 15H9V13H11V11H13ZM15 4H9V6H15V4Z",
      label: "Recommendation",
      path: "/app/recommendation",
    },
  ];
  const systemChecker = [
    {
      icon: "M11.9997 3C17.3917 3 21.8777 6.88 22.8187 12C21.8787 17.12 17.3917 21 11.9997 21C6.60766 21 2.12166 17.12 1.18066 12C2.12066 6.88 6.60766 3 11.9997 3ZM11.9997 19C14.0391 18.9996 16.0181 18.3068 17.6125 17.0352C19.207 15.7635 20.3226 13.9883 20.7767 12C20.3209 10.0133 19.2046 8.24 17.6103 6.97003C16.016 5.70005 14.038 5.00853 11.9997 5.00853C9.96136 5.00853 7.98335 5.70005 6.38904 6.97003C4.79473 8.24 3.67843 10.0133 3.22266 12C3.67676 13.9883 4.79234 15.7635 6.38681 17.0352C7.98128 18.3068 9.9602 18.9996 11.9997 19ZM11.9997 16.5C10.8062 16.5 9.6616 16.0259 8.81768 15.182C7.97377 14.3381 7.49966 13.1935 7.49966 12C7.49966 10.8065 7.97377 9.66193 8.81768 8.81802C9.6616 7.97411 10.8062 7.5 11.9997 7.5C13.1931 7.5 14.3377 7.97411 15.1816 8.81802C16.0256 9.66193 16.4997 10.8065 16.4997 12C16.4997 13.1935 16.0256 14.3381 15.1816 15.182C14.3377 16.0259 13.1931 16.5 11.9997 16.5ZM11.9997 14.5C12.6627 14.5 13.2986 14.2366 13.7674 13.7678C14.2363 13.2989 14.4997 12.663 14.4997 12C14.4997 11.337 14.2363 10.7011 13.7674 10.2322C13.2986 9.76339 12.6627 9.5 11.9997 9.5C11.3366 9.5 10.7007 9.76339 10.2319 10.2322C9.76306 10.7011 9.49966 11.337 9.49966 12C9.49966 12.663 9.76306 13.2989 10.2319 13.7678C10.7007 14.2366 11.3366 14.5 11.9997 14.5Z",
      label: "Refractive error",
      active: true,
      path: "/app/refractive-error",
    },
    {
      icon: "M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 7C13.0526 7.0004 14.0782 7.33297 14.9307 7.95034C15.7832 8.56771 16.4192 9.43837 16.748 10.4383C17.0767 11.4382 17.0815 12.5164 16.7617 13.5192C16.4419 14.522 15.8137 15.3984 14.9668 16.0233C14.1198 16.6483 13.0972 16.99 12.0446 16.9998C10.9921 17.0096 9.96332 16.687 9.10486 16.0779C8.24639 15.4688 7.60204 14.6043 7.26361 13.6076C6.92517 12.611 6.90991 11.5329 7.22 10.527C7.45392 11.0497 7.86027 11.4762 8.37106 11.7352C8.88184 11.9941 9.46606 12.0698 10.0259 11.9495C10.5858 11.8292 11.0874 11.5202 11.4468 11.0743C11.8061 10.6284 12.0014 10.0727 12 9.5C12.0001 9.01847 11.8612 8.54714 11.5999 8.14268C11.3386 7.73821 10.966 7.41781 10.527 7.22C10.993 7.077 11.487 7 12 7Z",
      label: "Glaucoma",
      path: "/app/glaucoma",
    },
  ];
  const resources = [
    {
      icon: "M2 5L9 2L15 5L21.303 2.299C21.3791 2.26638 21.4621 2.25317 21.5445 2.26054C21.627 2.26792 21.7063 2.29565 21.7754 2.34124C21.8445 2.38684 21.9012 2.44888 21.9404 2.5218C21.9796 2.59471 22.0001 2.67622 22 2.759V19L15 22L9 19L2.697 21.701C2.62091 21.7336 2.53792 21.7468 2.45547 21.7395C2.37301 21.7321 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5511 2.05961 21.4782C2.02041 21.4053 1.99993 21.3238 2 21.241V5ZM16 19.395L20 17.681V5.033L16 6.747V19.395ZM14 19.264V6.736L10 4.736V17.264L14 19.264ZM8 17.253V4.605L4 6.319V18.967L8 17.253Z",
      label: "Infographics",
      path: "/app/infographics",
    },
    {
      icon: "M5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V22.143C20.0001 22.2324 19.9763 22.3202 19.9309 22.3973C19.8855 22.4743 19.8204 22.5378 19.7421 22.5811C19.6639 22.6244 19.5755 22.6459 19.4861 22.6434C19.3968 22.641 19.3097 22.6146 19.234 22.567L12 18.03L4.766 22.566C4.69037 22.6135 4.60339 22.6399 4.5141 22.6424C4.42482 22.6449 4.33649 22.6235 4.2583 22.5803C4.1801 22.5371 4.11491 22.4738 4.06948 22.3969C4.02406 22.32 4.00007 22.2323 4 22.143V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2ZM18 4H6V19.432L12 15.671L18 19.432V4Z",
      label: "Articles",
      path: "/app/articles",
    },
    {
      icon: "M3 3.993C3 3.445 3.445 3 3.993 3H20.007C20.555 3 21 3.445 21 3.993V20.007C20.9997 20.2703 20.895 20.5227 20.7089 20.7089C20.5227 20.895 20.2703 20.9997 20.007 21H3.993C3.72972 20.9997 3.4773 20.895 3.29114 20.7089C3.10497 20.5227 3.00026 20.2703 3 20.007V3.993ZM5 5V19H19V5H5ZM10.622 8.415L15.501 11.667C15.5559 11.7035 15.6009 11.753 15.632 11.8111C15.6631 11.8692 15.6794 11.9341 15.6794 12C15.6794 12.0659 15.6631 12.1308 15.632 12.1889C15.6009 12.247 15.5559 12.2965 15.501 12.333L10.621 15.585C10.5608 15.6249 10.491 15.6477 10.4189 15.6512C10.3468 15.6546 10.2751 15.6384 10.2114 15.6043C10.1477 15.5703 10.0945 15.5197 10.0573 15.4578C10.02 15.396 10.0003 15.3252 10 15.253V8.747C10.0001 8.67465 10.0199 8.60369 10.0572 8.54168C10.0944 8.47967 10.1478 8.42893 10.2116 8.39486C10.2755 8.36079 10.3473 8.34467 10.4196 8.34822C10.4919 8.35177 10.5618 8.37485 10.622 8.415Z",
      label: "Videos",
      path: "/app/videos",
    },
    {
      icon: "M11.9997 3C11.204 3 10.441 3.31607 9.87837 3.87868C9.31576 4.44129 8.99969 5.20435 8.99969 6V10C8.99969 10.7956 9.31576 11.5587 9.87837 12.1213C10.441 12.6839 11.204 13 11.9997 13C12.7953 13 13.5584 12.6839 14.121 12.1213C14.6836 11.5587 14.9997 10.7956 14.9997 10V6C14.9997 5.20435 14.6836 4.44129 14.121 3.87868C13.5584 3.31607 12.7953 3 11.9997 3ZM11.9997 1C12.6563 1 13.3065 1.12933 13.9131 1.3806C14.5197 1.63188 15.0709 2.00017 15.5352 2.46447C15.9995 2.92876 16.3678 3.47995 16.6191 4.08658C16.8704 4.69321 16.9997 5.34339 16.9997 6V10C16.9997 11.3261 16.4729 12.5979 15.5352 13.5355C14.5975 14.4732 13.3258 15 11.9997 15C10.6736 15 9.40184 14.4732 8.46415 13.5355C7.52647 12.5979 6.99969 11.3261 6.99969 10V6C6.99969 4.67392 7.52647 3.40215 8.46415 2.46447C9.40184 1.52678 10.6736 1 11.9997 1ZM3.05469 11H5.06969C5.31198 12.6648 6.14556 14.1867 7.41792 15.2873C8.69028 16.3879 10.3164 16.9936 11.9987 16.9936C13.681 16.9936 15.3071 16.3879 16.5795 15.2873C17.8518 14.1867 18.6854 12.6648 18.9277 11H20.9437C20.7163 13.0287 19.8063 14.9199 18.3629 16.3635C16.9195 17.8071 15.0284 18.7174 12.9997 18.945V23H10.9997V18.945C8.97082 18.7176 7.07947 17.8074 5.63586 16.3638C4.19226 14.9202 3.2821 13.0289 3.05469 11Z",
      label: "Podcast",
      path: "/app/podcast",
    },
    {
      icon: "M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.58101 18.711L8.23401 19.061C9.39256 19.6801 10.6864 20.0027 12 20C13.5823 20 15.129 19.5308 16.4446 18.6518C17.7602 17.7727 18.7855 16.5233 19.391 15.0615C19.9965 13.5997 20.155 11.9911 19.8463 10.4393C19.5376 8.88743 18.7757 7.46197 17.6569 6.34315C16.538 5.22433 15.1126 4.4624 13.5607 4.15372C12.0089 3.84504 10.4004 4.00346 8.93854 4.60896C7.47674 5.21447 6.22731 6.23984 5.34825 7.55544C4.4692 8.87103 4.00001 10.4177 4.00001 12C4.00001 13.334 4.32501 14.618 4.94001 15.766L5.28901 16.419L4.63401 19.366L7.58101 18.711Z",
      label: "Community",
      path: "/app/community",
    },
  ];
  const bottomItems = [
    {
      icon: "M19.938 8.00002H21C21.5304 8.00002 22.0391 8.21074 22.4142 8.58581C22.7893 8.96088 23 9.46959 23 10V14C23 14.5305 22.7893 15.0392 22.4142 15.4142C22.0391 15.7893 21.5304 16 21 16H19.938C19.6942 17.9333 18.7533 19.7112 17.2917 21C15.8302 22.2888 13.9486 23 12 23V21C13.5913 21 15.1174 20.3679 16.2426 19.2427C17.3679 18.1174 18 16.5913 18 15V9.00002C18 7.40872 17.3679 5.8826 16.2426 4.75738C15.1174 3.63216 13.5913 3.00002 12 3.00002C10.4087 3.00002 8.88258 3.63216 7.75736 4.75738C6.63214 5.8826 6 7.40872 6 9.00002V16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0392 1 14.5305 1 14V10C1 9.46959 1.21071 8.96088 1.58579 8.58581C1.96086 8.21074 2.46957 8.00002 3 8.00002H4.062C4.30603 6.06692 5.24708 4.2893 6.70857 3.0007C8.17007 1.7121 10.0516 1.0011 12 1.0011C13.9484 1.0011 15.8299 1.7121 17.2914 3.0007C18.7529 4.2893 19.694 6.06692 19.938 8.00002ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.76 15.785L8.82 14.089C9.77308 14.6861 10.8754 15.0018 12 15C13.1246 15.0018 14.2269 14.6861 15.18 14.089L16.24 15.785C14.9693 16.5812 13.4995 17.0023 12 17C10.5005 17.0023 9.03074 16.5812 7.76 15.785Z",
      label: "Help",
      path: "/app/help",
    },
    {
      icon: "M11 2L18.298 4.28C18.5015 4.34354 18.6794 4.47048 18.8057 4.64229C18.932 4.81409 19.0001 5.02177 19 5.235V7H21C21.2652 7 21.5196 7.10536 21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17L17.78 17.001C17.393 17.511 16.923 17.961 16.38 18.331L11 22L5.62 18.332C4.81252 17.7815 4.15175 17.042 3.69514 16.1779C3.23853 15.3138 2.9999 14.3513 3 13.374V5.235C3.00012 5.02194 3.06829 4.81449 3.19456 4.64289C3.32084 4.47128 3.49862 4.34449 3.702 4.281L11 2ZM11 4.094L5 5.97V13.374C4.99986 13.9862 5.14025 14.5903 5.41036 15.1397C5.68048 15.6892 6.07311 16.1692 6.558 16.543L6.747 16.679L11 19.58L14.782 17H10C9.73478 17 9.48043 16.8946 9.29289 16.7071C9.10536 16.5196 9 16.2652 9 16V8C9 7.73478 9.10536 7.48043 9.29289 7.29289C9.48043 7.10536 9.73478 7 10 7H17V5.97L11 4.094ZM11 12V15H20V12H11ZM11 10H20V9H11V10Z",
      label: "Subscriptions",
      path: "/app/subscriptions",
    },
    {
      icon: "M5 22C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V6H18V4H6V20H18V18H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z",
      label: "Log out",
      path: "/app/logout",
    },
  ];

  const pathList = {
    "dashboard" : "Dashboard",
    "add-new": "Add new",
    "recommendation": "Recommendation",
    "refractive-error": "Refractive error",
    "glaucoma": "Glaucoma",
    "infographics": "Infographics",
    "articles": "Articles",
    "videos": "Videos",
    "podcast": "Podcast",
    "community": "Community",
    "help": "Help",
    "subscriptions": "Subscriptions",
    "logout": "Log out",

  }

  const location = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    // Split the pathname into parts by '/'
    const parts = location.pathname.split('/');
    // The part after the second '/' will be at index 2
    const secondPart = parts[2] || ''; // Default to empty string if not present
    setPath(pathList[secondPart]);
  }, [location]);

  const [userIcon, setUserIcon] = useState(false);
  console.log(userIcon)

  const handleOnMouseEnter = () => {
    setUserIcon(true);
  }

  return (
    <div>
      <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white text-sm py-2.5 sm:py-4 lg:ps-60">
        <nav
          class="flex basis-full items-center w-full mx-auto pr-4 sm:pr-6 sm:pt-5"
          aria-label="Global"
        >
          <div class="me-5 lg:me-0 lg:hidden ml-4">
            <div class="h-10 p-1 justify-center items-center gap-2 inline-flex">
              <svg
                width="31"
                height="36"
                viewBox="0 0 31 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M24.9298 0.833374L20.2931 5.05504C22.4516 5.70702 24.4383 6.83016 26.1098 8.34337C31.9631 13.6767 31.9631 22.3234 26.1098 27.6567C21.7898 31.59 15.1131 34.0934 6.08314 35.1667L10.7198 30.945C8.56138 30.2931 6.57468 29.1699 4.90313 27.6567C-0.950198 22.3234 -0.985198 13.7084 4.90313 8.34337C9.22313 4.41004 15.9015 1.90671 24.9315 0.833374H24.9298ZM15.5065 8.00004C9.06313 8.00004 3.8398 12.4767 3.8398 18C3.8398 23.5234 9.06313 28 15.5065 28C21.9498 28 27.1731 23.5234 27.1731 18C27.1731 12.4767 21.9498 8.00004 15.5065 8.00004ZM15.5065 11.8334C19.1898 11.8334 22.1731 14.595 22.1731 18C22.1731 21.405 19.1898 24.1667 15.5065 24.1667C11.8231 24.1667 8.8398 21.405 8.8398 18C8.8398 14.595 11.8231 11.8334 15.5065 11.8334ZM15.5065 15.1667C13.6098 15.1667 12.1731 16.495 12.1731 18C12.1731 19.505 13.6098 20.8334 15.5065 20.8334C17.4031 20.8334 18.8398 19.505 18.8398 18C18.8398 16.495 17.4031 15.1667 15.5065 15.1667Z"
                  fill="black"
                />
              </svg>
              <div class="text-center text-gray-950 text-base font-semibold  leading-tight ">
                {" "}
                VisionDR
              </div>
            </div>
          </div>

          <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <main className="flex flex-wrap xl:gap-10 lg:justify-between justify-end items-center w-full pl-1">
              <WelcomeHeader name="Henry" />
              <section className="flex justify-end gap-6 items-center self-stretch py-2 pr-3 pl-3 my-auto text-sm leading-tight text-center whitespace-nowrap bg-[#D2DBFE33] bg-opacity-20 md:min-w-[240px] md:max-w-full rounded-[32px] text-neutral-400  max-md:max-w-full ">
                <SearchBar />
                <IconButton
                  src="/icons/notification_icon.svg"
                  alt="Notification"
                  size="6"
                  className="border-white border-2 rounded-full p-[6px] bg-[#8C8F981A] relative"
                >
                  <div className="absolute top-2 right-2 p-1 rounded-full bg-red-500 blink-button"></div>
                </IconButton>
                <div className="flex gap-2" onMouseLeave={() => setUserIcon(false)}>
                <IconButton
                  src="/icons/profile_pic.png"
                  alt="Profile"
                  className="w-10"
                  size="10"
                  onMouseEnter={handleOnMouseEnter}
                />
                <div className={`${userIcon? "xl:w-[120px] w-0": "w-0"} transition-all duration-500 overflow-hidden text-neutral-950 text-left`}>
                  <p className="text-base font-medium tracking-tight">Chibundu Israel</p>
                  <p className="text-xs">NCR - Champan</p>
                </div>

                </div>
              </section>
            </main>
          </div>
        </nav>
      </header>

      <div class="fixed top-20 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div class="flex justify-between items-center py-2">
          <ol class="ms-1 flex items-center whitespace-nowrap">
            <li class="flex items-center text-sm text-gray-800">
              <svg
                class="flex-shrink-0 mr-3 overflow-visible size-2.5 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li
              class="text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              {path}
            </li>
          </ol>

          <button
            type="button"
            class="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Sidebar"
          >
            <svg
              class="flex-shrink-0 size-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
            </svg>
            <span class="sr-only">Sidebar</span>
          </button>
        </div>
      </div>

      <div
        id="application-sidebar"
        class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed overflow-y-auto inset-y-0 start-0 z-[50] pt-10 pl-3 leading-tight bg-white border-r border-neutral-400 border-opacity-20 w-[230px] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
      >
        <div className="flex flex-col px-3 pb-10 w-full">
          <header className="flex flex-col w-full text-center">
            <div class="flex gap-2 justify-center items-center self-start px-1 py-1 text-base font-semibold min-h-[40px] text-gray-950">
              <svg
                width="31"
                height="36"
                viewBox="0 0 31 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M24.9298 0.833374L20.2931 5.05504C22.4516 5.70702 24.4383 6.83016 26.1098 8.34337C31.9631 13.6767 31.9631 22.3234 26.1098 27.6567C21.7898 31.59 15.1131 34.0934 6.08314 35.1667L10.7198 30.945C8.56138 30.2931 6.57468 29.1699 4.90313 27.6567C-0.950198 22.3234 -0.985198 13.7084 4.90313 8.34337C9.22313 4.41004 15.9015 1.90671 24.9315 0.833374H24.9298ZM15.5065 8.00004C9.06313 8.00004 3.8398 12.4767 3.8398 18C3.8398 23.5234 9.06313 28 15.5065 28C21.9498 28 27.1731 23.5234 27.1731 18C27.1731 12.4767 21.9498 8.00004 15.5065 8.00004ZM15.5065 11.8334C19.1898 11.8334 22.1731 14.595 22.1731 18C22.1731 21.405 19.1898 24.1667 15.5065 24.1667C11.8231 24.1667 8.8398 21.405 8.8398 18C8.8398 14.595 11.8231 11.8334 15.5065 11.8334ZM15.5065 15.1667C13.6098 15.1667 12.1731 16.495 12.1731 18C12.1731 19.505 13.6098 20.8334 15.5065 20.8334C17.4031 20.8334 18.8398 19.505 18.8398 18C18.8398 16.495 17.4031 15.1667 15.5065 15.1667Z"
                  fill="black"
                />
              </svg>
              <div class="text-center text-gray-950 text-base font-semibold  leading-tight ">
                {" "}
                VisionDR
              </div>
            </div>
            <SidebarItem
              icon="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z"
              label="Dashboard"
              className="mt-14"
              path="/app/dashboard"
            />
          </header>
          <SidebarSection title="Case files" items={caseFiles} />
          <SidebarSection title="System checker" items={systemChecker} />
          <SidebarSection title="Resources" items={resources} />
        </div>
        <div className="flex flex-col items-start mt-14 w-full text-sm text-center text-gray-700 mb-4">
          {bottomItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
              className="mt-3"
            />
          ))}
        </div>
      </div>

      <div class="w-full lg:ps-60 mt-10 md:mt-0">
        <Routing />
      </div>
    </div>
  );
};

export default Layout;
