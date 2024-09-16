import { FaHome, FaPlus, FaUser } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { useContext } from "react";
import { StateContext } from "../store/StateContext";

const SideBar = () => {
  const { state, setState } = useContext(StateContext);
  let icon;
  if (state === "Home") icon = <FaHome size={32} />;
  if (state === "Create Post") icon = <FaPlus size={32} />;
  if (state === "Notifications") icon = <IoIosNotifications size={32} />;
  if (state === "Reels") icon = <BsCameraReelsFill size={32} />;
  if (state === "Profile") icon = <FaUser size={32} />;
  return (
    <>
      <div
        className='d-flex flex-column flex-shrink-0 bg-body-tertiary'
        style={{
          width: "4.5rem",
          marginTop: "72px",
          position: "fixed",
        }}>
        <a
          href='/'
          className='d-block p-3 link-body-emphasis text-decoration-none'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
          data-bs-original-title='Icon-only'>
          {icon}
          <span className='visually-hidden'>Icon-only</span>
        </a>
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li className='nav-item' onClick={() => setState("Home")}>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 ${
                state === "Home" ? "active" : ""
              }`}
              aria-current='page'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Home'
              data-bs-original-title='Home'>
              <FaHome size={24} />
            </a>
          </li>
          <li className='nav-item' onClick={() => setState("Reels")}>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 ${
                state === "Reels" ? "active" : ""
              }`}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Dashboard'
              data-bs-original-title='Dashboard'>
              <BsCameraReelsFill size={24} />
            </a>
          </li>
          <li onClick={() => setState("Create Post")}>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 ${
                state === "Create Post" ? "active" : ""
              }`}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Orders'
              data-bs-original-title='Orders'>
              <FaPlus size={24} />
            </a>
          </li>
          <li onClick={() => setState("Notifications")}>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 ${
                state === "Notifications" ? "active" : ""
              }`}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Products'
              data-bs-original-title='Products'>
              <IoIosNotifications size={24} />
            </a>
          </li>
          <li onClick={() => setState("Profile")}>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 ${
                state === "Profile" ? "active" : ""
              }`}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Customers'
              data-bs-original-title='Customers'>
              <FaUser size={24} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
