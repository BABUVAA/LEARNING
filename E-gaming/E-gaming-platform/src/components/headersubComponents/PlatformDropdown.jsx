import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./PlatformDropdown.module.css"
import logo from "../../assets/PLogo.png"
import logo1 from "../../assets/DLogo.png"
import logo2 from "../../assets/MLogo.png"
import logo3 from "../../assets/SLogo.png"
import logo4 from "../../assets/XLogo.png"



const PlatformDropdown = () =>{
  const items = [
    {
      label: <a className={styles.platform}> <img className={styles.platformLogo} src={logo}  height="20px" width="20px"/> Playstation</a>,
      key: "0",
    },
    {
      label: <a className={styles.platform}> <img className={styles.platformLogo} src={logo1}  height="20px" width="20px"/> Desktop(PC)</a>,
      key: "1",
    },
    {
      label: <a className={styles.platform}> <img className={styles.platformLogo} src={logo2}  height="20px" width="20px"/> Mobile</a>,
      key: "2",
    },
    {
      label:<a className={styles.platform}> <img className={styles.platformLogo} src={logo3}  height="20px" width="20px"/> X-box</a>,
      key: "3",
    },
    {
      label:<a className={styles.platform}> <img className={styles.platformLogo} src={logo4}  height="20px" width="20px"/> Steam</a>,
      key: "3",
    },
    {
      type: "divider",
    },
    
  ];


  return <>
  <div className={styles.headerPlatformDropdownContainer}>
  <Dropdown className={styles.headerPlatformDropdown} menu={{ items }} trigger={["click"]}>
          <a className={styles.headerPlatformDropdownContent} onClick={(e) => e.preventDefault()}>
            <Space>
              Playstation
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        </div> 
  </>
}
export default PlatformDropdown