import styles from "./Header.module.css"


const Header = () => {
  return (
   <>
    <nav classNameName={styles.nav}>
        <a href="#" >E-gaming</a>
    
        <div className="btn-group ">
          <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                Mobile
              </button>
  <ul className="dropdown-menu ">
    <li><a className="dropdown-item" href="#">Mobile</a></li>
    <li><a className="dropdown-item" href="#">Desktop(PC)</a></li>
    <li><a className="dropdown-item" href="#">X-box</a></li>
    <li><a className="dropdown-item" href="#">Steam</a></li>
    <li><a className="dropdown-item" href="#">Playstation</a></li>
    <li><a className="dropdown-item" href="#">Switch</a></li>
  </ul>
</div>
   <select className="dropdown-menu">
    <option>mobile</option>
    <option>PC</option>
   </select>

        <a>Compete</a>
        <a>Marketplace</a>
        <a>News</a>
        <a>Tournaments</a>
        <a>Rewards</a>
          
        <select name="language" id="navLanguageSelector">
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>
        <a>Notification</a>
        <select name="ProfileMenu" id="navProfileMenuSelector">
      
          <option value="UserProfile">UserName</option>
          <option value="MyProfile">My Profile</option>
          <option value="AccountSettings">Account Settings</option>
          <option value="TransactionHistory">Transaction History</option>
          <option value="ReferFriend">Refer A Friend</option>
          <option value="ReedamCoupan">Reedam Coupon</option>
          <option value="Withdraw Funds">Withdraw Funds</option>
          <option value="Logout">Logout</option>
        </select>
        <a>Wallet</a>
    </nav>
  
   </>
  );
}

export default Header;

