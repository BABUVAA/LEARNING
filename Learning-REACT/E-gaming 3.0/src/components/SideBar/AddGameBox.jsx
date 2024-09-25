import { IoMdAdd } from "react-icons/io";
const AddGameBox = () => {
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
        }}>
        <IoMdAdd size={16} />
      </div>
    </>
  );
};
export default AddGameBox;
