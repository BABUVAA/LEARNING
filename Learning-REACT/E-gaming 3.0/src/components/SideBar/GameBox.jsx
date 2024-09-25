const GameBox = ({ character }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "48px",
          minWidth: "48px",
          backgroundColor: "#f0f0f0",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2px",
          margin: "8px 0px",
        }}>
        <img src={character} width='48px' height='48px' alt='game' />
      </div>
    </>
  );
};
export default GameBox;
