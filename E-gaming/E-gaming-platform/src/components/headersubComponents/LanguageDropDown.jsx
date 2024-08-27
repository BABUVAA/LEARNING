import styles from "./LanguageDropDown.module.css"
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import logo from "../../assets/flag.png"
import logo1 from "../../assets/india.png"



const LanguageDropDown = () =>{
  const items = [
    {
      label: <a className={styles.language}> <img className={styles.languageLogo} src={logo}  height="20px" width="20px"/> ENG</a>,
      key: "0",
    },
    {
      label: <a className={styles.language}> <img className={styles.languageLogo} src={logo1}  height="20px" width="20px"/> HINDI</a>,
      key: "1",
    },
    {
      type: "divider",
    },
  
  ];


  return <>
  <div className={styles.headerLanguageDropdownContainer}>
  <Dropdown className={styles.headerLanguageDropdown} menu={{ items }} trigger={["click"]}>
          <a className={styles.headerLanguageDropdownContent} onClick={(e) => e.preventDefault()}>
            <Space>
              LANGUAGE 
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        </div> 
  </>
}

export default LanguageDropDown