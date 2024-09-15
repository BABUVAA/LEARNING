import { FaHome, FaPlus, FaUser } from "react-icons/fa"; // Import necessary icons
import { BsCameraReelsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const SideBar = () => {
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
          <FaHome size={32} />
          {/* {selectedTab === "Home" && <FaHome size={32} />}
          {selectedTab === "Create Post" && <BsCameraReelsFill size={32} />}
          {selectedTab === "Notifications" && <FaPlus size={32} />}
          {selectedTab === "Reels" && <IoIosNotifications size={32} />}
          {selectedTab === "Profile" && <FaUser size={32} />} */}

          <span className='visually-hidden'>Icon-only</span>
        </a>
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li className='nav-item'>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0`}
              aria-current='page'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Home'
              data-bs-original-title='Home'>
              <FaHome size={24} />
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 `}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Dashboard'
              data-bs-original-title='Dashboard'>
              <BsCameraReelsFill size={24} />
            </a>
          </li>
          <li>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 `}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Orders'
              data-bs-original-title='Orders'>
              <FaPlus size={24} />
            </a>
          </li>
          <li>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0 `}
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              aria-label='Products'
              data-bs-original-title='Products'>
              <IoIosNotifications size={24} />
            </a>
          </li>
          <li>
            <a
              href='#'
              className={`nav-link py-3 border-bottom rounded-0`}
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
