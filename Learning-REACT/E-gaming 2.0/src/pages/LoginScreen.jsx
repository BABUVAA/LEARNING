import styles from "./LoginScreen.module.css";
const LoginScreen = () => {
  return (
    <>
      <div className={styles.container}>
        <form action='#'>
          <h1>Login</h1>
          <div className={styles.inputBox}>
            <input type='email' placeholder='Email' />
            <i className='bx bx-envelope'></i>
          </div>

          <div className={styles.inputBox}>
            <input type='password' placeholder='Password' />
            <i className='bx bx-lock-alt'></i>
          </div>
          <div className={styles.remember}>
            <label for='#'>
              <input type='checkbox' /> Remember me
            </label>
            <a href='#'>Forgot password?</a>
          </div>
          <button className='btn'>Login</button>
          <div className={styles.register}>
            <p>
              Don't have an account? <br /> <a href='#'>Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginScreen;
