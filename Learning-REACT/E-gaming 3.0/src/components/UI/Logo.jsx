import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className='logo-container' onClick={() => navigate("/")}>
      <img src='/logo.png' alt='LOGO' width='32px' height='32px' />
      <span style={{ marginLeft: "4px" }}>E-GAMING</span>
    </div>
  );
};

export default Logo;
