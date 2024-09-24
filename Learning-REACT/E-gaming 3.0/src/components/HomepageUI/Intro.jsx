import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import { CiTrophy } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { loginActions } from "../../Store/LoginState";

const Intro = () => {
  const dispatch = useDispatch();
  const handleAccount = () => {
    dispatch(loginActions.toggleLogin());
  };
  return (
    <>
      <section style={{ minHeight: "95vh" }}>
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            level='h1'
            variant='plain'
            style={{
              color: "#FFFFFF",
              fontSize: "80px",
              margin: "20px 0px 10px",
            }}>
            Compete on
            <Typography
              color='primary'
              level='h1'
              noWrap
              variant='solid'
              style={{ color: "#FFFFFF", fontSize: "80px" }}>
              E-GAMING
            </Typography>
          </Typography>
          <Typography
            style={{
              maxWidth: "50vw",
              color: "#FFFFFF",
              fontSize: "24px",
              marginTop: "24px",
            }}>
            Play the games you love. Compete in free tournaments. Win real money
            & prizes.
          </Typography>
          <div style={{ padding: "32px 0px" }}>
            <Button
              onClick={handleAccount}
              style={{ padding: "16px 40px" }}
              variant='solid'
              sx={{
                "--Button-gap": "15px",
              }}
              startDecorator={<CiTrophy size={75} />}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <Typography level='h4'>Start playing Now!</Typography>
                <Typography level='h2' style={{ color: "white" }}>
                  Create Account
                </Typography>
              </div>
            </Button>
          </div>
        </div>

        <video
          src='/video.mp4'
          autoPlay
          loop
          muted
          style={{
            zIndex: "-1",
            position: "absolute",
            width: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </section>
    </>
  );
};
export default Intro;
