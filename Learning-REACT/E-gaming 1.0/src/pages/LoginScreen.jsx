import "./Login.css"
const LoginPage = () => {
  return (
    <>
      <div class='container'>
        <form action='#'>
          <h1>Login</h1>
          <div class='input-box'>
            <input type='email' placeholder='Email' />
            <i class='bx bx-envelope'></i>
          </div>

          <div class='input-box'>
            <input type='password' placeholder='Password' />
            <i class='bx bx-lock-alt'></i>
          </div>
          <div class='remember'>
            <label for='#'>
              <input type='checkbox' /> Remember me
            </label>
            <a href='#'>Forgot password?</a>
          </div>
          <button class='btn'>Login</button>
          <div class='register'>
            <p>
              Don't have an account? <br /> <a href='#'>Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
