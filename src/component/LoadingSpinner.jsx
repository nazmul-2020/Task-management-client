import loading from "../assets/loading.gif";

const LoadingSpinner = () => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="flex items-center justify-center"
      >
        <div
          style={{ height: "300px" }}
          className="flex items-center justify-center"
        >
          <img src={loading} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
